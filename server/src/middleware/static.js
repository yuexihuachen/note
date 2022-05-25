import koaStatic from "koa-static";
import path from "path";

/**
 * 设置可访问目录
 */
export default () => {
  let opts = {
    maxage: 2160000000
  }
  if (process.env && process.env.NODE_ENV === 'development') {
    opts = {}
  }
  return koaStatic(path.resolve(__dirname, "../../../client/dist"), opts);
};
