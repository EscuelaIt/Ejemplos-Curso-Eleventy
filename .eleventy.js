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

    // generar una colección al vuelo
    eleventyConfig.addCollection('blogPost2024', function(collectionApi) {
        const posts = collectionApi.getFilteredByTag('blog');
        return posts.filter( post => {
            const year = post.date.getFullYear();
            return year == 2024;
        });
    });

    eleventyConfig.addFilter('fecha_es', function(date) {
        return date.toLocaleDateString("es-ES", {
            day: "2-digit",
            month: "long",
            year: "numeric"
        });
    });
    
    return {
        dir: {
            input: 'docs',
            output: '_site',
        }
    }
}