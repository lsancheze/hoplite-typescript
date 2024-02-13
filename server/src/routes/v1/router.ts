import express, {Router} from 'express';

import SiteRouter from './Site';
import TemplateRouter from './Templates';

const createPortalRouter = (): Router => {
  const portalRouter = express.Router();

  portalRouter.use('/site', SiteRouter);
  portalRouter.use('/template', TemplateRouter);

  return portalRouter;
};

export default createPortalRouter;
