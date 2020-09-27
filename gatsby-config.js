const path = require('path');

module.exports = {
    siteMetadata: {
        title: `Dorfnetter Server`,
    },
    plugins: [
        {
            resolve: 'gatsby-plugin-root-import',
            options: {
                "@app": path.join(__dirname, "src"),
                "@layouts": path.join(__dirname, "src/layouts"),
                "@templates": path.join(__dirname, "src/templates"),
                "@styles": path.join(__dirname, "src/styles"),
                "@types": path.join(__dirname, "src/types"),
                "@pages": path.join(__dirname, 'src/pages')
            }
        },
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-typescript`,
        `gatsby-plugin-sass`,
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                commonmark: true,
                footnotes: true,
                pedantic: true,
                gfm: true,
                plugins: [],
            }
        },
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: "YOUR_GOOGLE_ANALYTICS_TRACKING_ID",
                head: false,
                anonymize: true,
                respectDNT: true,
                exclude: ["/preview/**", "/do-not-track/me/too/"],
                pageTransitionDelay: 0,
                optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID",
                experimentId: "YOUR_GOOGLE_EXPERIMENT_ID",
                variationId: "YOUR_GOOGLE_OPTIMIZE_VARIATION_ID",
                defer: false,
                sampleRate: 5,
                siteSpeedSampleRate: 10,
                cookieDomain: "dorfnetter.at",
            },
        }
    ],
}
