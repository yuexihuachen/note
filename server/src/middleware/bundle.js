import fs from "fs";

/**
 * 加载资源的公共方法
 */
export default () => {
  let source = {};
  try {
    const { assets } = JSON.parse(
      fs.readFileSync("client/dist/asset-manifest.json")
    );
    source = assets;
  } catch (error) {
    assert("load asset-manifest.json file failed!");
  }

  return async (ctx, next) => {
    const { scope } = ctx.state;
    const loadSource = function (key) {
      return `${source[`${key}`]}`;
    };
    ctx.state.scope = Object.assign({}, scope, {
      bundle: loadSource,
    });
    await next();
  };
};
