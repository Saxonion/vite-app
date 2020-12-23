import { resolve } from "path";
import { loadEnv } from 'vite';
import type { UserConfig } from 'vite';
import VitePluginHtml from 'vite-plugin-html';


import { modifyVars } from './src/assets/styles/ant/lessModifyVars';

function pathResolve(dir: string) {
  return resolve(__dirname, ".", dir);
}

const root: string = process.cwd();

export default (mode: 'development' | 'production'): UserConfig => {
  const env = loadEnv(mode, root);
  const { VITE_APP_TITLE, VITE_OUT_DIR, VITE_PORT, VITE_PUBLIC_PATH } = env;

  return {
    root,
    outDir: VITE_OUT_DIR,
    port: Number(VITE_PORT),
    open: true,
    https: false,
    ssr: false,
    /**
     * Base public path when served in production.
     * @default '/'
     */
    base: VITE_PUBLIC_PATH,
    alias: {
      "/@/": pathResolve("src"),
      "/@views/": pathResolve("src/views"),
      "/@components/": pathResolve("src/components"),
      "/@api/": pathResolve("src/serve/api"),
    },
    optimizeDeps: {
      include: ["lodash", 'ant-design-vue/es/locale/zh_CN', "@ant-design/icons-vue"],
    },
    cssPreprocessOptions: {
      less: {
        modifyVars,
        javascriptEnabled: true,
      }
    },
    plugins: [
      VitePluginHtml({
        minify: mode === 'production',
        options: {
          title: VITE_APP_TITLE
        },
      }),
    ],
  }
}
