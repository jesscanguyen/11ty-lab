
// The export statement makes these settings available to other files in 11ty
module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("styles");

  eleventyConfig.addShortcode("details", function(date, location) {
    return `
      <div class="details">
        <p>:// ${date}</p>
        <p>:// ${location}</p>
      </div>
    `;
  });

  eleventyConfig.addShortcode("log-navi", function(text, url) {
    return `
      <div class="log-navi">
        <a href="${url}" class="button">${text}</a>
      </div>
    `;
  });
};