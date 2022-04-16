import Logger from "guozishu-mango-logger";
import utils from "utility";
import path from "path";
/**
 * 日志系统
 * ctx.logger[error | warn | info | debug](message)
 * 记录到root logger目录
 */
export default async (ctx, next) => {
  ctx.logger = new Logger({
    dir: path.resolve(__dirname,'../../../log'),
    file: `${utils.YYYYMMDD()}.log`,
  });
  await next();
};
