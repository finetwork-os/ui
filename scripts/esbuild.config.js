const esbuild = require('esbuild')

const { nodeExternalsPlugin } = require('esbuild-node-externals')

esbuild
  .build({
    entryPoints: ['./src/index.ts'],
    outfile: './dist/dist/index.js',
    bundle: true,
    minify: true,
    platform: 'node',
    sourcemap: true,
    target: 'node14',
    plugins: [nodeExternalsPlugin()],
  })
  .catch(() => process.exit(1))
