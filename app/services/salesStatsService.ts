import { PrismaClient } from "../prisma/generated/main";
const prisma = new PrismaClient();

export class SalesStatsService {
    async getCRR() {
        try {
            const result = await prisma.$queryRaw
            <{ id: number; new_customers: number; existing_customers: number }[]>
            `
            SELECT
            id,
            COUNT(DISTINCT CASE WHEN DATE_PART('day', NOW() - created_at) <= 30 THEN id END)::Integer AS new_customers,
            COUNT(DISTINCT CASE WHEN DATE_PART('day', NOW() - created_at) > 30 THEN id END)::Integer AS existing_customers
            FROM
            "User"
            GROUP BY
            id;
    `;
    
            const newCustomers = result.reduce((acc, { new_customers }) => acc + new_customers, 0);
            const existingCustomers = result.reduce((acc, { existing_customers }) => acc + existing_customers, 0);
    
            const crr = (existingCustomers / (newCustomers + existingCustomers)) * 100;
            return crr;
        } catch (error) {
            console.error("Error calculating Customer Retention Rate:", error);
            throw error;
        }
    
    }
}