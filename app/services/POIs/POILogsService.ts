import POILogModel from "../../models/POILogsModel";

export default class POILogsService {
    private poiLogModel: POILogModel;

    constructor() {
        this.poiLogModel = new POILogModel();
    }

    async getAllPOILogs() {
        try {
            return await this.poiLogModel.getAllPOILogs();
        } catch (error:any) {
            throw new Error(`Error fetching POI logs: ${error.message}`);
        }
    }

    async getPOILogById(id: number) {
        try {
            const poiLog = await this.poiLogModel.getPOILogById(id);
            if (!poiLog) {
                throw new Error(`POI log with ID ${id} not found`);
            }
            return poiLog;
        } catch (error:any) {
            throw new Error(`Error fetching POI log by ID: ${error.message}`);
        }
    }

    async createPOILog(data: any) {
        try {
            return await this.poiLogModel.createPOILog(data);
        } catch (error:any) {
            throw new Error(`Error creating POI log: ${error.message}`);
        }
    }

    async updatePOILog(id: number, data: any) {
        try {
            const updatedPOILog = await this.poiLogModel.updatePOILog(id, data);
            if (!updatedPOILog) {
                throw new Error(`POI log with ID ${id} not found`);
            }
            return updatedPOILog;
        } catch (error:any) {
            throw new Error(`Error updating POI log: ${error.message}`);
        }
    }

    async deletePOILog(id: number) {
        try {
            return await this.poiLogModel.deletePOILog(id);
        } catch (error:any) {
            throw new Error(`Error deleting POI log: ${error.message}`);
        }
    }
}