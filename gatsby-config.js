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
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Dorfnetter Server`,
                short_name: `Dorfnetter`,
                start_url: `/`,
                background_color: `#00C2FF`,
                theme_color: `#00C2FF`,
                // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
                // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
                display: `standalone`,
                icon: `src/assets/images/logo_short.svg`, // This path is relative to the root of the site.
            },
        },
        `gatsby-plugin-offline`,
    ],
}
