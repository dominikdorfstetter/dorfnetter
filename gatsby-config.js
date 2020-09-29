const CONFIG = require('./config');
const path = require('path');

module.exports = {
    siteMetadata: {
        title: `Dorfnetter Server`,
    },
    plugins: [
        {
            resolve: `gatsby-plugin-prefetch-google-fonts`,
            options: {
                fonts: [
                    {
                        family: `Source Code Pro`,
                        variants: [`300`, `400`, `500`, `700`, `900`]
                    },
                    {
                        family: `Montserrat`,
                        variants: [`300`, `400`, `500`, `700`, `900`]
                    },
                ],
            },
        },
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
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: path.join(__dirname, `src`, `assets`, `images`),
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `icons`,
                path: path.join(__dirname, `src`, `assets`, `icons`),
            },
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
                trackingId: CONFIG.google.trackingId,
                head: false,
                anonymize: true,
                respectDNT: true,
                exclude: ["/preview/**", "/do-not-track/me/too/"],
                pageTransitionDelay: 0,
                optimizeId: CONFIG.google.optimizeId,
                experimentId: CONFIG.google.experimentId,
                variationId: CONFIG.google.variationId,
                defer: false,
                sampleRate: 5,
                siteSpeedSampleRate: 10,
                cookieDomain: "dorfnetter.at",
            },
        },
        {
            resolve: 'gatsby-plugin-codegen',
            options: {},
        },
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
    ],
}
