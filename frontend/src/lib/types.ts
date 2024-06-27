import { Types } from 'mongoose';

export type Quote = {
  _id?: Types.ObjectId;
  text: string;
  author: string;
  tags?: Types.ObjectId;
  creator: string;
  createdAt?: string;
};

export type Response = {
  sucess: boolean;
  data: any;
};

export type User = {
  name?: string;
  email?: string;
  image?: string;
};

export type Collection = {
  _id?: Types.ObjectId;
  name: string;
  description?: string;
  owner: String;
  quotes?: Types.ObjectId[];
  savedBy?: Types.ObjectId[];
  tags?: String[];
  isPublic: boolean;
  createdAt?: string;
};
