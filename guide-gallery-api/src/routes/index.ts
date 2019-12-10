import { Router } from 'express';
const router = Router();

import { 
  createGuide, getGuides, getGuide, deleteGuide, updateGuide
} from '../controllers/guide.controllers';

import multer from '../libs/multer';

router.route('/guides')
  .get(getGuides)
  .post(multer.single('image'), createGuide);

router.route('/guides/:id')
  .get(getGuide)
  .delete(deleteGuide)
  .put(updateGuide);

export default router;