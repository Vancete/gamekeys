const path = require('node:path')

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
    },
    webpack(config) {
        //  Source: https://github.com/vercel/next.js/discussions/24013#discussioncomment-3787335
        config.module.rules.forEach((rule) => {
            const { oneOf } = rule
            if (oneOf) {
                oneOf.forEach((one) => {
                    if (!`${one.issuer?.and}`.includes('_app')) return
                    one.issuer.and = [path.resolve(__dirname)]
                })
            }
        })
        return config
    },
}

module.exports = nextConfig
