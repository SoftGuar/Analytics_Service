export const salesSchemas = {
    CRRSchema: {
        schema: {
            description: 'Get the Customer Retention Rate (CRR)',
            tags: ['Sales'],
            response: {
                200: {
                    type: 'object',
                    properties: {
                        crr: { type: 'number', description: 'Customer Retention Rate as a percentage' }
                    },
                    required: ['crr']
                }
            }
        }
    }
};