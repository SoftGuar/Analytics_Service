import { SystemService } from "../services/system.service";
import { PrismaClient as AnalyticsClient } from "../prisma/analytics/generated";

// Mock the entire Prisma client
jest.mock('../prisma/analytics/generated', () => {
  return {
    PrismaClient: jest.fn().mockImplementation(() => ({
      executiveReport: {
        aggregate: jest.fn(),
        findMany: jest.fn(),
      },
    })),
  };
});

describe('SystemService', () => {
    let analyticsPrisma: jest.Mocked<AnalyticsClient>;
  beforeEach(() => {
    jest.clearAllMocks();
     analyticsPrisma = new AnalyticsClient() as jest.Mocked<AnalyticsClient>;
  });

  describe('getUptimeStats', () => {
    it('should return formatted uptime stats', async () => {
      const mockStats = {
        _avg: { system_uptime: 23.5 },
        _max: { system_uptime: 48.25 },
      };

      (analyticsPrisma.executiveReport.aggregate as jest.Mock).mockResolvedValue(mockStats);

      const result = await SystemService.getUptimeStats(
        analyticsPrisma
      );

      expect(result).toEqual({
        averageUptimeRaw: 23.5,
        maxUptimeRaw: 48.25,
        averageUptime: '23h 30m',
        maxUptime: '48h 15m',
      });

      expect(analyticsPrisma.executiveReport.aggregate).toHaveBeenCalledWith({
        _avg: { system_uptime: true },
        _max: { system_uptime: true },
        where: {
          timestamp: {
            gte: expect.any(Date),
            lte: expect.any(Date),
          },
        },
      });
    });

    it('should handle null values from database', async () => {
      const mockStats = {
        _avg: { system_uptime: null },
        _max: { system_uptime: null },
      };

      (analyticsPrisma.executiveReport.aggregate as jest.Mock).mockResolvedValue(mockStats);

      const result = await SystemService.getUptimeStats(analyticsPrisma);

      expect(result).toEqual({
        averageUptimeRaw: null,
        maxUptimeRaw: null,
        averageUptime: 'N/A',
        maxUptime: 'N/A',
      });
    });

    it('should return null on database error', async () => {
      (analyticsPrisma.executiveReport.aggregate as jest.Mock).mockRejectedValue(new Error('DB error'));

      const result = await SystemService.getUptimeStats(analyticsPrisma);

      expect(result).toBeNull();
    });
  });

  describe('getAnomalies', () => {
    it('should fetch anomalies with correct filters', async () => {
      const mockAnomalies = [
        { id: 1, cpu_usage: 95, timestamp: new Date() },
        { id: 2, memory_used: 9000, timestamp: new Date() },
      ];

      (analyticsPrisma.executiveReport.findMany as jest.Mock).mockResolvedValue(mockAnomalies);

      const result = await SystemService.getAnomalies(analyticsPrisma);

      expect(result).toEqual(mockAnomalies);
      expect(analyticsPrisma.executiveReport.findMany).toHaveBeenCalledWith({
        where: {
          OR: [
            { cpu_usage: { gt: 90 } },
            { memory_used: { gt: 8000 } },
            { network_errors: { gt: 10 } },
          ],
          timestamp: {
            gte: expect.any(Date),
          },
        },
      });
    });

    it('should return empty array when no anomalies found', async () => {
      (analyticsPrisma.executiveReport.findMany as jest.Mock).mockResolvedValue([]);

      const result = await SystemService.getAnomalies(analyticsPrisma);

      expect(result).toEqual([]);
    });
  });

  describe('getDiskUsage', () => {
    it('should fetch disk usage data for last 40 days', async () => {
      const mockData = [
        { timestamp: new Date(), disk_usage_percent: 75, cpu_usage: 50 },
        { timestamp: new Date(), disk_usage_percent: 80, cpu_usage: 55 },
      ];

      (analyticsPrisma.executiveReport.findMany as jest.Mock).mockResolvedValue(mockData);

      const result = await SystemService.getDiskUsage(analyticsPrisma);

      expect(result).toEqual(mockData);
      expect(analyticsPrisma.executiveReport.findMany).toHaveBeenCalledWith({
        where: {
          timestamp: {
            gte: expect.any(Date),
            lte: expect.any(Date),
          },
        },
        select: {
          timestamp: true,
          disk_usage_percent: true,
          cpu_usage: true,
        },
      });
    });

    it('should handle empty disk usage data', async () => {
      (analyticsPrisma.executiveReport.findMany as jest.Mock).mockResolvedValue([]);

      const result = await SystemService.getDiskUsage(analyticsPrisma);

      expect(result).toEqual([]);
    });
  });
});