const fs = require('fs')

const packageJson = JSON.parse(fs.readFileSync('./package.json'))
const newPackageJson = {
  ...packageJson,
  main: 'dist/index.js',
  typings: 'src/index.d.ts',
}
const packageJsonString = JSON.stringify(newPackageJson, null, 2)
fs.writeFileSync('./dist/package.json', packageJsonString)
