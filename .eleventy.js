export default async function (eleventyConfig) {
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