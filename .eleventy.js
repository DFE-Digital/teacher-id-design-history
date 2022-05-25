module.exports = function (eleventyConfig) {
  // Plugins
  eleventyConfig.addPlugin(require('govuk-eleventy-plugin'), {
    stylesheets: [
      '/styles/application.css'
    ],
    header: {
      productName: 'TRA Digital design history',
      search: {
        indexPath: '/search.json',
        sitemapPath: '/sitemap'
      }
    }
  })

  // Passthrough
  eleventyConfig.addPassthroughCopy({ './app/images': '.' })

  // Config
  return {
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
    dir: {
      input: 'app',
      output: 'public',
      layouts: '_layouts',
      includes: '_components'
    }
  }
}
