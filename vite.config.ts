import { resolve } from "path";

function pathResolve(dir: string) {
  return resolve(__dirname, ".", dir);
}

module.exports = {
  outDir: "dist",
  port: 3000,
  // 是否自动在浏览器打开
  open: true,
  // 是否开启 https
  https: false,
  // 服务端渲染
  ssr: false,
  // 导入别名
  alias: {
    // 键必须以斜线开始和结束
    "/@/": pathResolve("src"),
    "/@views/": pathResolve("src/views"),
    "/@components/": pathResolve("src/components"),
    "/@api/": pathResolve("src/serve/api"),
  },
  // 配置Dep优化行为
  optimizeDeps: {
    include: ["lodash"],
  },
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          modifyVars: {
            "primary-color": "#d16b37",
            "link-color": "#1DA57A",
            "border-radius-base": "2px",
          },
          javascriptEnabled: true,
        },
      },
    },
  },
};
