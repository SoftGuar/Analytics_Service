import { FastifyReply, FastifyRequest } from "fastify";
import { QuotationService } from "../services/QuotationService";

const quotationService = new QuotationService();

export class QuotationHandler {
    static async countConvertedQuotations(req: FastifyRequest, reply: FastifyReply): Promise<void> {
        try {
            const result = await quotationService.countConvertedQuotations();
            reply.status(200).send(result);
        } catch (error: any) {
            reply.status(500).send({ error: error.message });
        }
    }

    static async averageTimeToConversion(req: FastifyRequest, reply: FastifyReply): Promise<void> {
        try {
            const result = await quotationService.averageTimeToConversion();
            reply.status(200).send({ averageTimeToConversion: result });
        } catch (error: any) {
            reply.status(500).send({ error: error.message });
        }
    }

    static async mostFrequentlyQuotedProducts(req: FastifyRequest, reply: FastifyReply): Promise<void> {
        try {
            const result = await quotationService.mostFrequentlyQuotedProducts();
            reply.status(200).send(result);
        } catch (error: any) {
            reply.status(500).send({ error: error.message });
        }
    }

    static async productConversionRate(req: FastifyRequest, reply: FastifyReply): Promise<void> {
        try {
            const result = await quotationService.productConversionRate();
            reply.status(200).send(result);
        } catch (error: any) {
            reply.status(500).send({ error: error.message });
        }
    }

    static async totalQuotationValueByProduct(req: FastifyRequest, reply: FastifyReply): Promise<void> {
        try {
            const result = await quotationService.totalQuotationValueByProduct();
            reply.status(200).send(result);
        } catch (error: any) {
            reply.status(500).send({ error: error.message });
        }
    }

    static async clientsWithMostUnconvertedQuotations(req: FastifyRequest, reply: FastifyReply): Promise<void> {
        try {
            const result = await quotationService.clientsWithMostUnconvertedQuotations();
            reply.status(200).send(result);
        } catch (error: any) {
            reply.status(500).send({ error: error.message });
        }
    }

    static async totalQuotationsCreated(req: FastifyRequest, reply: FastifyReply): Promise<void> {
        try {
            const result = await quotationService.totalQuotationsCreated();
            reply.status(200).send({ totalQuotationsCreated: result });
        } catch (error: any) {
            reply.status(500).send({ error: error.message });
        }
    }

    static async averageProductsPerQuotation(req: FastifyRequest, reply: FastifyReply): Promise<void> {
        try {
            const result = await quotationService.averageProductsPerQuotation();
            reply.status(200).send({ averageProductsPerQuotation: result });
        } catch (error: any) {
            reply.status(500).send({ error: error.message });
        }
    }

    static async averageQuotationValue(req: FastifyRequest, reply: FastifyReply): Promise<void> {
        try {
            const result = await quotationService.averageQuotationValue();
            reply.status(200).send({ averageQuotationValue: result });
        } catch (error: any) {
            reply.status(500).send({ error: error.message });
        }
    }
}
