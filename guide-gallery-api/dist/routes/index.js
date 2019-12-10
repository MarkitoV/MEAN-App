"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
const guide_controllers_1 = require("../controllers/guide.controllers");
const multer_1 = __importDefault(require("../libs/multer"));
router.route('/guides')
    .get(guide_controllers_1.getGuides)
    .post(multer_1.default.single('image'), guide_controllers_1.createGuide);
router.route('/guides/:id')
    .get(guide_controllers_1.getGuide)
    .delete(guide_controllers_1.deleteGuide)
    .put(guide_controllers_1.updateGuide);
exports.default = router;
