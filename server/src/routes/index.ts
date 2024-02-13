import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.redirect(process.env.PORTAL_CORS_RULE || 'http://localhost:8088');
});

export default router;
