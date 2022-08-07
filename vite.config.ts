import path from 'path'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { viteMockServe } from 'vite-plugin-mock'
import { UserConfigExport, ConfigEnv, defineConfig } from 'vite'

export default defineConfig(({ command }: ConfigEnv) => {
  return {
    plugins: [
      vue(),
      vueJsx(),
      viteMockServe({
        ignore: /^_/,
        mockPath: 'mock',
        watchFiles: true,
        localEnabled: command === 'serve'
      })
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    },
    css: {
      preprocessorOptions: {
        scss: {
          charset: false
        }
      },
      postcss: {
        plugins: [
          {
            postcssPlugin: 'internal:charset-removal',
            AtRule: {
              charset: (atRule) => {
                if (atRule.name === 'charset') {
                  atRule.remove()
                }
              }
            }
          }
        ]
      }
    }
  }
})
