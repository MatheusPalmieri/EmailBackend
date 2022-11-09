import { Request, Response } from "express";

const users = [
  {
    name: "Matheus",
    email: "matheus@gmail.com",
  },
];

export default {
  async index(req: Request, res: Response) {
    return res.json(users);
  },
};
