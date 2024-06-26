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
  name: string;
  description: string;
  owner: Types.ObjectId;
  quotes: [Types.ObjectId];
  savedBy: [Types.ObjectId];
  tags: [Types.ObjectId];
  isPublic: boolean;
  createdAt: string;
};
