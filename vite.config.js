import path from "path";

module.exports = {
  // 导入别名
  alias: {
    "/@/": path.resolve(__dirname, "./src/views"),
    "/@views/": path.resolve(__dirname, "./src/views"),
    "/@components/": path.resolve(__dirname, "./src/components"),
    "/@api/": path.resolve(__dirname, "./src/serve/api"),
  },
  // 配置Dep优化行为
  optimizeDeps: {
    include: ["lodash"],
  },
};
