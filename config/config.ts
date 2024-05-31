// https://umijs.org/docs/api/config
import { defineConfig } from '@umijs/max';
import routes from './routes';
import webpackPlugin from './webpackPlugin';
const { NODE_ENV, CLIENT_ENV, TERMINAL_ENV } = process.env;
const packageName = require('../package.json').name;

const DQ_BASE = '/web/child';
const IS_PRODUCTION = NODE_ENV === 'production';

const cig: any = {};

export default defineConfig({
  base: IS_PRODUCTION ? `/web/child/${packageName}` : '/web', // 在非根目录下部署 umi 项目时，你可以使用 base 配置
  // base: `/web/${packageName}`, // 在非根目录下部署 umi 项目时，你可以使用 base 配置
  // base: `/${packageName}/`, // 在非根目录下部署 umi 项目时，你可以使用 base 配置
  antd: {},
  clickToComponent: {}, // 点击组件跳转至编辑器源码位置
  access: {},
  model: {},
  initialState: {},
  request: {}, 
  fastRefresh: true,
  conventionLayout: false, //src/layouts/index.[tsx|vue|jsx|js] 为约定式布局，默认开启
  routes,
  npmClient: 'npm',
  outputPath: `/web/child/${packageName}`, // 配置输出路径。
  // publicPath: `/web/child/${packageName}/`, //这里打包地址都要基于主应用的中注册的entry值
  publicPath: IS_PRODUCTION ? `/web/child/${packageName}/` : '/', //这里打包地址都要基于主应用的中注册的entry值
  hash: true,
  mountElementId: `${packageName}`, // 配置 react 组件树渲染到 HTML 中的元素 id。
  // theme: {
  // 'primary-color': defaultSettings.primaryColor,
  // },
  title: false,
  ignoreMomentLocale: true, //忽略 moment 的 locale 文件，用于减少产物尺寸。
  // qiankun: {}, // 配置 qiankun 的一些配置
  // 开启 build 时生成额外的 manifest 文件，用于描述产物。
  define: {
    TERMINAL_ENV: TERMINAL_ENV || 'SUB',
    CLIENT_ENV: CLIENT_ENV,
    'process.env.CLIENT_ENV': CLIENT_ENV,
  },
  inlineLimit: 3000, // 配置图片文件是否走 base64 编译的阈值。默认是 10000 字节，少于他会被编译为 base64 编码，否则会生成单独的文件。
  //设置哪些模块不打包，转而通过 <script> 或其他方式引入，通常需要搭配 headScripts 配置使用。
  // externals: IS_PRODUCTION
  //   ? {
  //       jspdf: 'jspdf',
  //       react: 'React',
  //       antd: 'antd',
  //       'react-dom': 'ReactDOM',
  //       echarts: 'echarts',
  //     }
  //   : {
  //       echarts: 'echarts',
  //     },
  // scripts: IS_PRODUCTION
  //   ? [
  //       'https://static-pre.gw-greenenergy.com/react.production.min.js',
  //       'https://static-pre.gw-greenenergy.com/react-dom.production.min.js',
  //       'https://static-pre.gw-greenenergy.com/react-router-dom.min.js',
  //       'https://static-pre.gw-greenenergy.com/antd.min.js',
  //       'https://static-pre.gw-greenenergy.com/echarts.min.js',
  //     ]
  //   : ['https://static-pre.gw-greenenergy.com/echarts.min.js'],
  ...cig,
  chainWebpack: webpackPlugin,
  plugins: [
    // '@umijs/plugins/dist/initial-state',
    // '@umijs/plugins/dist/model',
    // '@umijs/plugins/dist/request',
  ],
  mfsu: {
    strategy: 'normal',
  },
  dva: {},
  qiankun: {
    slave: {
      shouldNotModifyDefaultBase: true,
    },
  },
  //启用运行时 publicPath，开启后会使用 window.publicPath 作为资源动态加载的起始路径
  runtimePublicPath: {},
  // headScripts: IS_PRODUCTION ? ['window.publicPath = window.resourceBaseUrl || "/web/"'] : [],
  alias: {
    '#': '/src/tool',
  },
});
