import { PrismaClient } from "../prisma/main/generated";
const prismaMain = new PrismaClient();
export class SalesStatsService {
  async getCRR(
    prisma: PrismaClient = prismaMain
  ) {
    try {
      const result = await prisma.$queryRaw<
        { new_customers: number; existing_customers: number }[]
      >`
        WITH CustomerClassification AS (
          SELECT 
          id,
            CASE 
              WHEN created_at >= NOW() - INTERVAL '30 days' THEN 'new'
              ELSE 'existing'
            END AS customer_type
          FROM "User"
        )
        SELECT 
          COUNT(DISTINCT CASE WHEN customer_type = 'new' THEN id END)::Integer AS new_customers,
          COUNT(DISTINCT CASE WHEN customer_type = 'existing' THEN id END)::Integer AS existing_customers
        FROM CustomerClassification;
    `;

      // Destructure the first (and likely only) row
      const { new_customers, existing_customers } = result[0] || { new_customers: 0, existing_customers: 0 };
      
      // Prevent division by zero
      const totalCustomers = new_customers + existing_customers;
      console.log("totalCustomers", totalCustomers);
      if (totalCustomers === 0) {
        return 0;
      }

      // Calculate Customer Retention Rate (CRR)
      const crr = (existing_customers / totalCustomers) * 100;
      return Number(crr.toFixed(2)); // Round to 2 decimal places
    } catch (error) {
      console.error("Error calculating Customer Retention Rate:", error);
      throw error;
    }
  }

  // Optional: Add method to get more detailed retention insights
  async getCustomerRetentionDetails(
    prisma: PrismaClient = prismaMain
  ) {
    try {
      const result = await prisma.$queryRaw<
        { 
          new_customers: number; 
          existing_customers: number; 
          total_customers: number;
          retention_rate: number;
        }[]
      >`
        WITH CustomerClassification AS (
          SELECT 
          id,
            CASE 
              WHEN created_at >= NOW() - INTERVAL '30 days' THEN 'new'
              ELSE 'existing'
            END AS customer_type
          FROM "User"
        )
        SELECT 
          COUNT(DISTINCT CASE WHEN customer_type = 'new' THEN id END)::Integer AS new_customers,
          COUNT(DISTINCT CASE WHEN customer_type = 'existing' THEN id END)::Integer AS existing_customers,
          COUNT(DISTINCT id)::Integer AS total_customers,
          (COUNT(DISTINCT CASE WHEN customer_type = 'existing' THEN id END) * 100.0 / 
           NULLIF(COUNT(DISTINCT 1), 0))::Numeric(5,2) AS retention_rate
        FROM CustomerClassification;
    `;

      return result[0] || {
        new_customers: 0,
        existing_customers: 0,
        total_customers: 0,
        retention_rate: 0
      };
    } catch (error) {
      console.error("Error fetching customer retention details:", error);
      throw error;
    }
  }
}
