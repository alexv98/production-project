import type webpack from 'webpack'
import { type BuildOptions } from './types/config'
import {buildCssLoaders} from "./loaders/buildCssLoaders";

export function buildLoaders (options: BuildOptions): webpack.RuleSetRule[] {
  const { isDev } = options

  const babelLoader = {
    test: /\.(.js|jsx|tsx)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env']
      }
    }
  }

  // tsLoader умеет обрабатывать jsx, иначе пришлось бы использовать babel
  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/
  }

  const cssLoader = buildCssLoaders(isDev)

  const svgLoader = {
    test: /\.svg$/,
    use: ['@svgr/webpack']
  }

  const fileLoader = {
    test: /\.(png|jpe?g|gif|woff2|woff)$/i,
    use: [
      {
        loader: 'file-loader'
      }
    ]
  }

  return [
    fileLoader,
    svgLoader,
    babelLoader,
    typescriptLoader,
    cssLoader
  ]
}
