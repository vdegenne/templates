import nodeResolve from 'rollup-plugin-node-resolve';
import {terser} from 'rollup-plugin-terser';
import typescript from 'rollup-plugin-typescript';

// use '--environment minify' with rollup
const minify = process.env.minify || false;

export default {
  input: 'src/entry.ts',
  output: {file: 'public/bundle.js', format: 'esm'},
  plugins:
      [
        nodeResolve(),
        typescript(),
        minify ? terser() : {},
      ]
};
