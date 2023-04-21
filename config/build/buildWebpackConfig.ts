import { type BuildOptions } from './types/config'
import type webpack from 'webpack'
import { buildLoaders } from './buildLoaders'
import { buildResolves } from './buildResolves'
import { buildPlugins } from './buildPlugins'
import { buildDevServer } from './buildDevServer'

export function buildWebpackConfig (options: BuildOptions): webpack.Configuration {
  const { mode, paths, isDev } = options

  return {
    mode,
    entry: paths.entry,
    output: {
      path: paths.output,
      filename: '[name].[contenthash].js',
      clean: true
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(options) // обработка файлов, выходящих за рамки JS
    },
    resolve: buildResolves(options), // для таких файлов не будут указаны расширения при импорте
    devtool: isDev ? 'inline-source-map' : undefined,
    devServer: isDev ? buildDevServer(options) : undefined
  }
}
