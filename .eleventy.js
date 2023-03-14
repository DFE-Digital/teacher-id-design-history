module.exports = function (eleventyConfig) {
  // Plugins
  eleventyConfig.addPlugin(require('govuk-eleventy-plugin'), {
    stylesheets: [
      '/styles/application.css'
    ],
    headingPermalinks: true,
    header: {
      productName: 'TRA Digital design history',
      organisationName: 'Department for Education',
      search: {
        indexPath: '/search.json',
        sitemapPath: '/sitemap'
      }
    }
  })

  // filters
  eleventyConfig.addFilter('notifyPlaceholders', require('./lib/filters/notify-placeholders'))

  // Passthrough
  eleventyConfig.addPassthroughCopy(
    {
      './app/images': '.',
      './app/docs': '/docs'
    })

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
