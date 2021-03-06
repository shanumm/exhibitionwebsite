const {DateTime} = require("luxon");


module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/static");
  eleventyConfig.addPassthroughCopy("./src/style.css");
  eleventyConfig.addPassthroughCopy("./src/assets");
  eleventyConfig.addPassthroughCopy("./src/admin");

eleventyConfig.addFilter("postDate",(dataObj) =>{
  return DateTime.fromJSDate(dataObj).toLocaleString(DateTime.DATE_MED);
})

  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};
