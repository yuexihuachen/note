import koaStatic from "koa-static";
import path from "path";

/**
 * 加载web端打包好的资源文件
 */
export default () => {
  return koaStatic(path.resolve(__dirname, "../../../client/dist"));
};
