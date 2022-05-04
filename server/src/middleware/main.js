import main from '../controllers/common/main'

export default async (ctx, next) => {
    await main(ctx.state.scope, ctx);
    await next();
  };
