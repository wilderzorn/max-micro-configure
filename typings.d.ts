// import '@umijs/max/typings';
declare module '*.css';
declare module '*.less';
declare module '*.png';
declare module '*.svg' {
  export function ReactComponent(
    props: React.SVGProps<SVGSVGElement>,
  ): React.ReactElement;
  const url: string;
  export default url;
}

declare module '*.jsx';
declare module '*.js';
declare module 'webpack-bundle-analyzer';
interface Window {
  emitter: any;
  publicPath: string;
  AMap: any;
}
