import EleventyVitePlugin from "@11ty/eleventy-plugin-vite";
import tailwindcss from '@tailwindcss/vite'

export default function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("docs/assets/css");
    eleventyConfig.addPassthroughCopy("docs/assets/js");
    eleventyConfig.addPassthroughCopy("docs/assets/images");
    
    eleventyConfig.addPlugin(EleventyVitePlugin, {
        viteOptions: {
            plugins: [
                tailwindcss(),
            ],
        }
    });
    
    return {
        dir: {
            input: 'docs',
            output: '_site',
        }
    }
}