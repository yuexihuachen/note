import { nanoid } from 'nanoid'

export default async (ctx, next) => {
    const id =  nanoid()
    ctx.state.scope = {
        __requestId: id,
        getTime: function () {
            return +new Date;
        }
    };
    ctx.state.requestId = id;
    await next();
  };
