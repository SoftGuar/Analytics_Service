
export const logsSchemas = {
    getLogs: {
        description: "Get the last 100 logs",
        tags: ["Logs"],
        response: {
            200: {
                type: "array",
                items: {
                    type: "object",
                    properties: {
                        id: { type: "number" },
                        level: { type: "string" },
                        time: { type: "string", format: "date-time" },
                        pid: { type: "number" },
                        hostname: { type: "string" },
                        msg: { type: "string" },
                        error: { type: "object", nullable: true },
                        request: { type: "object", nullable: true },
                        full_log: { type: "object" },
                        created_at: { type: "string", format: "date-time" },
                    },
                },
            },
        },
    },
};