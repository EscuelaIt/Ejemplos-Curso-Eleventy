export default async function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("styles.css");
    eleventyConfig.addPassthroughCopy("main.js");
}