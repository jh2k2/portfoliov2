const CracoLessPlugin = require("craco-less");

module.exports = {
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: {
                            "@primary-color": "#e98074",
                            "@text-color": "#e98074",
                            "heading-color": "#e85a4f",
                            "@text-color-secondary": "#e98074",
                            "@border-color-base": "#F3B5AF",
                            "@border-color-split": "#F3B5AF",
                            "@divider-color": "#F3B5AF",
                        },
                        javascriptEnabled: true,
                    },
                },
            },
        },
    ],
};
