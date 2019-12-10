"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const fs_extra_1 = __importDefault(require("fs-extra"));
const Photo_1 = __importDefault(require("../models/Photo"));
async function getPhotos(req, res) {
    const photos = await Photo_1.default.find();
    return res.json(photos);
}
exports.getPhotos = getPhotos;
async function getPhoto(req, res) {
    const photo = await Photo_1.default.findById(req.params.id);
    return res.json(photo);
}
exports.getPhoto = getPhoto;
async function createPhoto(req, res) {
    const { title, description } = req.body;
    const newPhoto = {
        title,
        description,
        imagePath: req.file.path
    };
    const photo = new Photo_1.default(newPhoto);
    await photo.save();
    return res.json({
        message: 'Photo successfully saved',
        photo
    });
}
exports.createPhoto = createPhoto;
async function deletePhoto(req, res) {
    const { id } = req.params;
    const photo = await Photo_1.default.findByIdAndRemove(id);
    if (photo) {
        await fs_extra_1.default.unlink(path_1.default.resolve(photo.imagePath));
    }
    return res.json({
        message: 'Photo deleted',
        photo
    });
}
exports.deletePhoto = deletePhoto;
async function updatePhoto(req, res) {
    const { id } = req.params;
    const { title, description } = req.body;
    const updatePhoto = await Photo_1.default.findByIdAndUpdate(id, {
        title,
        description
    }, { new: true });
    return res.json({
        message: 'Successfully updated',
        updatePhoto
    });
}
exports.updatePhoto = updatePhoto;
