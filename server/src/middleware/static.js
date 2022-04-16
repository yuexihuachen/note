import koaStatic from "koa-static";
import path from "path";

/**
 * 设置可访问目录
 */
export default () => {
  return koaStatic(path.resolve(__dirname, "../../../client/dist"));
};
