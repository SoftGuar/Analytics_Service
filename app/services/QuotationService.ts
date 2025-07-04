import { PrismaClient as MainPrismaClient } from "../prisma/main/generated";
import { PrismaClient as AnalyticsClient } from "../prisma/analytics/generated";
const prisma = new MainPrismaClient();
const analyticsPrisma = new AnalyticsClient();

export class QuotationService {
    // Taux de Conversion des Devis en Transactions
    async countConvertedQuotations(): Promise<{ConvertedQuotations: number, taux_conversion: number}> {
        const result = await prisma.transaction.count({
            where: {
                user_id: {
                    in: await prisma.quotation.findMany({
                        select: { user_id: true },
                        distinct: ['user_id']
                    }).then(quotations => quotations.map(q => q.user_id)),
                },
            },
        });
        const nbr_quotation= await prisma.quotation.count()
        const taux_conversion = (result/nbr_quotation)*100
        return {ConvertedQuotations: result, taux_conversion: taux_conversion};
    }
    //Délai Moyen Entre Devis et Achat
    async averageTimeToConversion(): Promise<number | null> {
        const result = await prisma.$queryRaw<{ avg_time: number | null }[]>`
            SELECT AVG(EXTRACT(EPOCH FROM (t.created_at - q.created_at)) / 86400) AS avg_time
            FROM "Transaction" t
            INNER JOIN "Quotation" q ON t.user_id = q.user_id
        `;
    
        return result.length > 0 ? result[0].avg_time : null;
    }    
    
    // Produits les plus souvent ajoutés aux devis
    async mostFrequentlyQuotedProducts(): Promise<{ product_id: number, product_name: string, count: number }[]> {
        const result = await prisma.$queryRaw<{ product_id: number, product_name: string, count: number }[]>
        `
            SELECT 
                pq.product_id, 
                p.name AS product_name, 
                COUNT(pq.product_id) AS count
            FROM "ProductQuotation" pq
            INNER JOIN "Product" p ON pq.product_id = p.id
            GROUP BY pq.product_id, p.name
            ORDER BY count DESC
        `;
        return result;
    }
    // Taux de Conversion par Produit
    async productConversionRate(): Promise<{ product_name: string, conversion_rate: number }[]> {
        const result = await prisma.$queryRaw<{ product_name: string, conversion_rate: number }[]>
        `
            SELECT 
                p.name AS product_name,
                (COUNT(DISTINCT pt.transaction_id) * 100.0 / NULLIF(COUNT(DISTINCT pq.quotation_id), 0)) AS conversion_rate
            FROM "ProductQuotation" pq
            LEFT JOIN "Quotation" q ON pq.quotation_id = q.id
            LEFT JOIN "Transaction" t ON q.user_id = t.user_id
            LEFT JOIN "ProductTransaction" pt ON t.id = pt.transaction_id
            INNER JOIN "Product" p ON pq.product_id = p.id
            WHERE pt."isConfirmed" = true
            GROUP BY p.name
            ORDER BY conversion_rate DESC
        `;
        return result;
    }
    
    // Valeur totale des devis par produit
    async totalQuotationValueByProduct(): Promise<{ product_name: string, total_value: number }[]> {
        const result = await prisma.$queryRaw<{ product_name: string, total_value: number }[]>
        `
            SELECT 
                p.name AS product_name, 
                SUM(pq.count * p.price) AS total_value
            FROM "ProductQuotation" pq
            INNER JOIN "Product" p ON pq.product_id = p.id
            GROUP BY p.name
            ORDER BY total_value DESC
        `;
        return result;
    }
    // Clients avec le plus de devis non convertis
    //Permet d’identifier les clients intéressés mais qui n’achètent pas.
    async clientsWithMostUnconvertedQuotations(): Promise<{ user_last_name: string, user_first_name: string, unconverted_count: number }[]> {
        const result = await prisma.$queryRaw<{ user_last_name: string, user_first_name: string, unconverted_count: number }[]>
        `
            SELECT 
                u.last_name AS user_last_name, 
                u.first_name AS user_first_name,
                COUNT(q.id) AS unconverted_count
            FROM "Quotation" q
            INNER JOIN "User" u ON q.user_id = u.id
            WHERE q.user_id NOT IN (
                SELECT DISTINCT t.user_id 
                FROM "Transaction" t
            )
            GROUP BY u.last_name, u.first_name
            ORDER BY unconverted_count DESC
        `;
        return result;
    }
    // Nombre total de devis créés
    async totalQuotationsCreated(): Promise<number> {
        const result = await prisma.quotation.count();
        return result;
    }

    // Nombre moyen de produits par devis
    async averageProductsPerQuotation(): Promise<number | null> {
        const result = await prisma.$queryRaw<{ avg_products: number | null }[]>
        `
            SELECT AVG(product_count) AS avg_products
            FROM (
                SELECT COUNT(pq.product_id) AS product_count
                FROM "ProductQuotation" pq
                GROUP BY pq.quotation_id
            ) subquery
        `;
        return result.length > 0 ? result[0].avg_products : null;
    }

    // Valeur moyenne d’un devis
    async averageQuotationValue(): Promise<number | null> {
        const result = await prisma.$queryRaw<{ avg_value: number | null }[]>
        `
            SELECT AVG(total_value) AS avg_value
            FROM (
                SELECT SUM(p.price * pq.count) AS total_value
                FROM "ProductQuotation" pq
                INNER JOIN "Product" p ON pq.product_id = p.id
                GROUP BY pq.quotation_id
            ) subquery
        `;
        return result.length > 0 ? result[0].avg_value : null;
    }
}