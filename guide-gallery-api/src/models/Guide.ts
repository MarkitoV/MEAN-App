import { Schema, model, Document } from 'mongoose';

const schema = new Schema({
  title: String,
  description: String,
  subject: String,
  numberLab: String,
  semester: String,
  docent: String,
  imagePath: String
});

interface IGuide extends Document {
  title: string;
  description: string;
  subject: string;
  numberLab: string;
  semester: string;
  docent: string;
  imagePath: string;
}

export default model<IGuide>('Guide', schema);