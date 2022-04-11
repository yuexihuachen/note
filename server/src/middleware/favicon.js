import favicon from "koa-favicon";
import path from 'path';

/**
 * 加载favicon
 */
export default () => {
  return favicon(path.resolve(__dirname, "../../../favicon.ico"));
};
