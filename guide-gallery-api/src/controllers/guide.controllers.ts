import { Request, Response } from 'express';
import path from 'path';
import fs from 'fs-extra';

import Guide from '../models/Guide';

export async function getGuides(req: Request, res: Response): Promise<Response> {

  const guides = await Guide.find();
  return res.json(guides);
}

export async function getGuide(req: Request, res: Response): Promise<Response> {
  
  const guide = await Guide.findById(req.params.id);
  return res.json(guide);
}

export async function getGuidesBySubject(req: Request, res: Response): Promise<Response> {

  const guides = await Guide.find({ subject: req.params.subject });
  return res.json(guides);
}

export async function createGuide(req: Request, res: Response): Promise<Response> {

  const { title, description, subject, numberLab, semester, docent } = req.body;
  const newGuide = {
    title,
    description,
    subject,
    numberLab,
    semester,
    docent,
    imagePath: req.file.path
  }
  const guide = new Guide(newGuide);
  await guide.save();
  return res.json({
    message: 'Guide successfully saved',
    guide
  });
}

export async function deleteGuide(req: Request, res: Response): Promise<Response> {

  const { id } = req.params;
  const guide = await Guide.findByIdAndRemove(id);
  if (guide) {
    await fs.unlink(path.resolve(guide.imagePath));
  }
  return res.json({
    message: 'Guide deleted',
    guide
  });
}

export async function updateGuide(req: Request, res: Response): Promise<Response> {
  
  const { id } = req.params;
  const { title, description, subject, numberLab, semester, docent } = req.body;
  const updateGuide = await Guide.findByIdAndUpdate(id, {
    title,
    description,
    subject,
    numberLab,
    semester,
    docent
  }, {new: true});
  return res.json({
    message: 'Successfully updated',
    updateGuide
  });
}