import { Types } from 'mongoose';

export type Quote = {
  _id: Types.ObjectId;
  text: string;
  author: string;
  tags: Types.ObjectId;
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
