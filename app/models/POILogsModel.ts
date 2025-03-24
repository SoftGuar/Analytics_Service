import { PrismaClient, POI_logs } from "../prisma/generated/anayltics";
const prisma = new PrismaClient();

export default class POILogModel {
  async getAllPOILogs() {
    return await prisma.pOI_logs.findMany();
  }

  async getPOILogById(id:number) {
    return await prisma.pOI_logs.findUnique({
      where: { id: Number(id) },
    });
  }

  async createPOILog(data:POI_logs) {
    return await prisma.pOI_logs.create({
      data,
    });
  }

  async updatePOILog(id :number, data: Partial<Omit<POI_logs, 'id'>>) {
    return await prisma.pOI_logs.update({
      where: { id: id },
      data,
    });
  }

  async deletePOILog(id:number) {
    return await prisma.pOI_logs.delete({
      where: { id: id },
    });
  }
}

