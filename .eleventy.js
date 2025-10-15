import EleventyVitePlugin from "@11ty/eleventy-plugin-vite";

export default function (eleventyConfig) {
    eleventyConfig.addPlugin(EleventyVitePlugin);
    eleventyConfig.addPassthroughCopy("docs/assets/css/styles.css");
    eleventyConfig.addPassthroughCopy("docs/assets/js/main.js");
    eleventyConfig.addPassthroughCopy("docs/assets/images");

    

    return {
        dir: {
            input: 'docs',
            output: '_site',
        }
    }
}