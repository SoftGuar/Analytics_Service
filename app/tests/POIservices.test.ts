import { POIsService } from '../services/POIs/POIsService';

// Create a manual mock of the AnalyticsClient
jest.mock('../prisma/analytics/generated', () => {
  return {
    PrismaClient: jest.fn().mockImplementation(() => ({
      pOI_logs: {
        groupBy: jest.fn()
      }
    }))
  };
});
import { PrismaClient as AnalyticsClient } from "../prisma/analytics/generated";

describe('POIsService', () => {
  let analyticsPrisma: jest.Mocked<AnalyticsClient>;

  beforeEach(() => {
    // Clear all mocks before each test
    jest.clearAllMocks();

    // Create a new instance of the mocked PrismaClient
    analyticsPrisma = new AnalyticsClient() as jest.Mocked<AnalyticsClient>;
  });

  describe('getTopVisitedPOIs', () => {
    it('should return top 10 visited POIs sorted by visit count', async () => {
      // Prepare mock data
      const mockResult = [
        { poi_id: 1, _count: { poi_id: 100 } },
        { poi_id: 2, _count: { poi_id: 75 } },
        { poi_id: 3, _count: { poi_id: 50 } }
      ];

      // Setup the mock implementation
      (analyticsPrisma.pOI_logs.groupBy as jest.Mock).mockResolvedValue(mockResult);

      // Call the method
      const result = await POIsService.getTopVisitedPOIs(analyticsPrisma);
      // Assertions
      expect(result).toEqual([
        { POI_id: 1, visit_count: 100 },
        { POI_id: 2, visit_count: 75 },
        { POI_id: 3, visit_count: 50 }
      ]);

      // Verify Prisma method was called with correct arguments
      expect(analyticsPrisma.pOI_logs.groupBy).toHaveBeenCalledWith({
        by: ["poi_id"],
        _count: {
          poi_id: true,
        },
        orderBy: {
          _count: {
            poi_id: "desc",
          },
        },
        take: 10,
      });
    });

    it('should return an empty array when no POIs are found', async () => {
      // Setup the mock to return an empty array
      (analyticsPrisma.pOI_logs.groupBy as jest.Mock).mockResolvedValue([]);

      // Call the method
      const result = await POIsService.getTopVisitedPOIs(analyticsPrisma);

      // Assertions
      expect(result).toEqual([]);
    });

    it('should handle non-array results gracefully', async () => {
      // Setup the mock to return a non-array result
      (analyticsPrisma.pOI_logs.groupBy as jest.Mock).mockResolvedValue(null);

      // Call the method
      const result = await POIsService.getTopVisitedPOIs(analyticsPrisma);

      // Assertions
      expect(result).toEqual([]);
    });

    it('should throw an error when Prisma query fails', async () => {
      // Create a mock error
      const mockError = new Error('Database connection failed');

      // Setup the mock to throw an error
      (analyticsPrisma.pOI_logs.groupBy as jest.Mock).mockRejectedValue(mockError);

      // Spy on console.error to verify logging
      const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation();

      // Assertions
      await expect(POIsService.getTopVisitedPOIs(analyticsPrisma)).rejects.toThrow('Database connection failed');

      // Verify error was logged
      expect(consoleErrorSpy).toHaveBeenCalledWith(
        'Error fetching top visited POIs:', 
        mockError
      );

      // Restore console.error
      consoleErrorSpy.mockRestore();
    });
  });
});