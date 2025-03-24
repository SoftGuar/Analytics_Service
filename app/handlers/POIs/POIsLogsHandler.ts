import { FastifyReply, FastifyRequest } from "fastify";
import POILogsService from "../../services/POIs/POILogsService";
interface POILog {
    Body : {
        navigation_id:number,
        poi_id:number,
        visit_time: Date,
    }
}
interface POILogUpdate {
    Params: {
        id: number
    }
    Body: { 
        navigation_id?:number,
        poi_id?:number,
        visit_time?: Date
    }
}
export default class POILogsHandler{
    private poiLogsService: POILogsService;
    constructor() {
        this.poiLogsService = new POILogsService();
    }

    async getAllPoilogs(
        req : FastifyRequest,
        reply: FastifyReply
    ) {
        try{
            this.poiLogsService.getAllPOILogs()
            .then((result) => {
                if (!result) {
                    throw new Error(`POI logs not found`);
                }
                reply.send(200).send(result);
            })
            .catch((error) => {
                reply.send(500).send(error.message);
            });
        }
        catch(error:any){
            reply.send(500).send(error.message);
        }
}
async getPOILogById(
    req: FastifyRequest<{Params: {id: number}}>,
    reply: FastifyReply
) {
    try {
        const id = Number(req.params.id);
        this.poiLogsService.getPOILogById(id)
        .then((result) => {
            if (!result) {
                throw new Error(`POI log with ID ${id} not found`);
            }
            reply.send(200).send(result);
        })
        .catch((error) => {
            reply.send(500).send(error.message);
        });
    } catch (error:any) {
        reply.send(500).send(error.message);
    }

}
async createPOILog(
    req: FastifyRequest<POILog>,
    reply: FastifyReply
) {
    try {
        const data = {
            navigation_id: Number(req.body.navigation_id),
            poi_id: Number(req.body.poi_id),
            visit_time: Number(req.body.visit_time)
        }
        this.poiLogsService.createPOILog(data)
        .then((result) => {
            reply.send(201).send(result);
        })
        .catch((error) => {
            reply.send(500).send(error.message);
        });
    } catch (error:any) {
        reply.send(500).send(error.message);
    }}
    async updatePOILog(
        req: FastifyRequest<POILogUpdate>,
        reply: FastifyReply
    ) {
        try {
            const id = Number(req.params.id);
            const data = {
                navigation_id: Number(req.body.navigation_id),
                poi_id: Number(req.body.poi_id),
                visit_time: Number(req.body.visit_time)
            }
            this.poiLogsService.updatePOILog(id, data)
            .then((result) => {
                if (!result) {
                    throw new Error(`POI log with ID ${id} not found`);
                }
                reply.send(200).send(result);
            })
            .catch((error) => {
                reply.send(500).send(error.message);
            });
        } catch (error:any) {
            reply.send(500).send(error.message);
        }
    }
    async deletePOILog(
        req: FastifyRequest<{Params: {id: number}}>,
        reply: FastifyReply
    ) {
        try {
            const id = Number(req.params.id);
            this.poiLogsService.deletePOILog(id)
            .then((result) => {
                if (!result) {
                    throw new Error(`POI log with ID ${id} not found`);
                }
                reply.send(200).send(result);
            })
            .catch((error) => {
                reply.send(500).send(error.message);
            });
        } catch (error:any) {
            reply.send(500).send(error.message);
        }
    }
}