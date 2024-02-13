import express from 'express';

import {celebrate, Joi} from 'celebrate';
import TemplateService from '../../../services/Template';
import routeMiddleware from '../../../middlewares/routeMiddleware';

const router = express.Router();

const templateSchema = {
  name: Joi.string()
    .pattern(new RegExp('^[a-z]([-_a-z0-9]{0,61}[a-z0-9])?$'))
    .required(),
};

router.get(
  '/:templateId',
  celebrate({
    params: Joi.object({
      templateId: Joi.string(),
    }),
  }),
  routeMiddleware(async (req, res) => {
    const template = TemplateService.get(req.body.templateId);

    res.status(template ? 200 : 204).json(template);
  })
);

router.post(
  '/',
  celebrate({body: templateSchema}),
  routeMiddleware(async (req, res) => {
    const createdTemplate = await TemplateService.create(req.body.name);

    res.status(201).json(createdTemplate);
  })
);

export default router;
