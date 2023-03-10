// next.config.js
const { i18n } = require('./next-i18next.config');

module.exports = {
    i18n,
    async rewrites() {
        return [
            // Rewrite the URL /en or /es to /?lng=en or /?lng=es
            {
                source: '/:locale(en|es)',
                destination: '/?lng=$1',
            },
        ];
    },
};
