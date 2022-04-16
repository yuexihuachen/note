import favicon from "koa-favicon";
import path from 'path';

/**
 * 加载favicon icon
 */
export default () => {
  return favicon(path.resolve(__dirname, "../../../favicon.ico"));
};
