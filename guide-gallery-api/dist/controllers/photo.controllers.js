"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const fs_extra_1 = __importDefault(require("fs-extra"));
const Guide_1 = __importDefault(require("../models/Guide"));
async function getGuides(req, res) {
    const guides = await Guide_1.default.find();
    return res.json(guides);
}
exports.getGuides = getGuides;
async function getGuide(req, res) {
    const guide = await Guide_1.default.findById(req.params.id);
    return res.json(guide);
}
exports.getGuide = getGuide;
async function createGuide(req, res) {
    const { title, description } = req.body;
    const newGuide = {
        title,
        description,
        imagePath: req.file.path
    };
    const guide = new Guide_1.default(newGuide);
    await guide.save();
    return res.json({
        message: 'Guide successfully saved',
        guide
    });
}
exports.createGuide = createGuide;
async function deleteGuide(req, res) {
    const { id } = req.params;
    const guide = await Guide_1.default.findByIdAndRemove(id);
    if (guide) {
        await fs_extra_1.default.unlink(path_1.default.resolve(guide.imagePath));
    }
    return res.json({
        message: 'Guide deleted',
        guide
    });
}
exports.deleteGuide = deleteGuide;
async function updateGuide(req, res) {
    const { id } = req.params;
    const { title, description } = req.body;
    const updateGuide = await Guide_1.default.findByIdAndUpdate(id, {
        title,
        description
    }, { new: true });
    return res.json({
        message: 'Successfully updated',
        updateGuide
    });
}
exports.updateGuide = updateGuide;
