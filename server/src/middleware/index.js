import koaBody from "./bodyParser";
import compress from "./compress";
import koaView from "./render";
import routes from "./router";
import helmet from "./helmet";
import favicon from "./favicon";
import koaStatic from "./static";
import logger from "./logger";
import bundle from "./bundle";

export default (app) => {
  app.use(logger);
  app.use(koaStatic());
  app.use(favicon());
  app.use(helmet());
  app.use(koaView);
  app.use(koaBody());
  app.use(compress());
  app.use(bundle());
  app.use(routes());
};
