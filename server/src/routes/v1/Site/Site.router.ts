import express from 'express';

import {celebrate, Joi} from 'celebrate';

import SiteService from '../../../services/Site';
import routeMiddleware from '../../../middlewares/routeMiddleware';

const router = express.Router();

const siteSchema = {
  name: Joi.string()
    .pattern(new RegExp('^[a-z]([-_a-z0-9]{0,61}[a-z0-9])?$'))
    .required(),
};

router.get(
  '/:siteId',
  celebrate({
    params: Joi.object({
      siteId: Joi.string(),
    }),
  }),
  routeMiddleware(async (req, res) => {
    const site = SiteService.get(req.body.siteId);

    res.status(site ? 200 : 204).json(site);
  })
);

router.post(
  '/',
  celebrate({body: siteSchema}),
  routeMiddleware(async (req, res) => {
    const createdSite = SiteService.create(req.body.name);

    res.status(201).json(createdSite);
  })
);

export default router;
