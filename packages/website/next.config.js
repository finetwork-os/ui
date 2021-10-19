const compose = require('compose-function')
const { withDokz } = require('dokz/dist/plugin')
const withTM = require('next-transpile-modules')([
  '@finetwork/ui',
  '@finetwork/ui-sections',
])

const composed = compose(withDokz, withTM)

module.exports = composed({
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
})
