import { babel } from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import generatePackageJson from 'rollup-plugin-generate-package-json'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import resolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'

const extensions = ['.js', '.jsx', '.ts', '.tsx']

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/index.js',
      format: 'cjs',
      sourcemap: true,
    },
  ],
  plugins: [
    resolve({ extensions, preferBuiltins: false }),
    commonjs({
      include: /node_modules/,
    }),
    babel({
      babelHelpers: 'bundled',
      extensions,
      exclude: ['node_modules/**'],
      presets: ['@babel/preset-env'],
    }),
    peerDepsExternal(),
    typescript({
      tsconfig: './tsconfig.json',
      declaration: true,
      declarationDir: '',
      target: 'esnext',
      jsx: 'react',
    }),
    generatePackageJson({
      baseContents: (pkg) => ({
        name: pkg.name,
        version: pkg.version,
        main: 'index.js',
        scripts: pkg.scripts,
        dependencies: pkg.dependencies,
        peerDependencies: pkg.peerDependencies,
        devDependencies: pkg.devDependencies,
      }),
    }),
  ],
}
