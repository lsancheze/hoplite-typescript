import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.redirect(process.env.PORTAL_CORS_RULE || 'http://localhost:3000');
});

export default router;
