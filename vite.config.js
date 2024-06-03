import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import pxtovw from 'postcss-px-to-viewport'
import {ElementPlusResolver} from "unplugin-vue-components/resolvers";
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
const my_pxtovw = pxtovw({
  //这里是设计稿宽度 自己修改
  unitToConvert: "px", // 要转化的单位
  viewportWidth: 1536, // UI设计稿的宽度
  unitPrecision: 6, // 转换后的精度，即小数点位数
  propList: ["*"], // 指定转换的css属性的单位，*代表全部css属性的单位都进行转换
  viewportUnit: "vw", // 指定需要转换成的视窗单位，默认vw
  fontViewportUnit: "vw", // 指定字体需要转换成的视窗单位，默认vw
  selectorBlackList: [], // 指定不转换为视窗单位的类名，
  minPixelValue: 12, // 默认值1，小于或等于1px则不进行转换
  mediaQuery: true, // 是否在媒体查询的css代码中也进行转换，默认false
  replace: true, // 是否转换后直接更换属性值
  exclude: [/node_modules/], // 设置忽略文件，用正则做目录名匹配
  landscape: false // 是否处理横屏情况
})
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  css:{
    postcss:{
      plugins:[my_pxtovw]
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  proxy: {
    '/abc': {    //1
      target: 'http://localhost:9090',    //2
      changOrigin: true,
      pathRewrite: {    //3
        '^/abc': ''
      }
    }
  },
  // use custom server, default value 5173
  server: {
    // host: '0.0.0.0',
    // port: 8080,
    // auto open browser when first start project    
    open: true,
    // use hmr
    hmr: true,
  },
})
