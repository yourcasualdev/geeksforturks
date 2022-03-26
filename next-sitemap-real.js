const siteUrl = "http://localhost:3000";

module.exports = {
    siteUrl,
    generateRobotsTxt: true,
    robotsTxtOptions: {
        policies: [
            {
                userAgent: "*",
                allow: "/",
            },
        ],

        additionalPaths: async (config) => [
            await config.transform(config, "/comments"),
        ],

    },
};