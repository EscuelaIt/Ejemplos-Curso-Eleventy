import EleventyVitePlugin from "@11ty/eleventy-plugin-vite";

export default function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("docs/assets/css/styles.css");
    eleventyConfig.addPassthroughCopy("docs/assets/js");
    eleventyConfig.addPassthroughCopy("docs/assets/images");
    
    eleventyConfig.addPlugin(EleventyVitePlugin);
    
    return {
        dir: {
            input: 'docs',
            output: '_site',
        }
    }
}