import fs from "fs";

/**
 * 加载外部资源的公共方法 js/css
 */
export default () => {
  let source = {};
  try {
    const { assets } = JSON.parse(
      fs.readFileSync("client/dist/asset-manifest.json")
    );
    source = assets;
  } catch (error) {
    console.error("[error] load asset-manifest.json file failed!");
    console.log('%c this is a message','color:#0f0;')
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
