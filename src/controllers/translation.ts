import { Request, Response, NextFunction } from "express";
import fs from "fs";


export const getTranslations = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
  try {
    let data = fs.readFileSync('data.json');
    // @ts-ignore
    const resData = JSON.parse(data);
    return res.status(200).json(resData);
  } catch (err) {
    next(err);
  }
};

export const updateTranslations = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
  try {
    const { index, data } = req.body;
    let currentData: any = fs.readFileSync('data.json');
    const parsedData = JSON.parse(currentData);
    parsedData[index] = data;

    fs.writeFileSync("data.json", JSON.stringify(parsedData));
    return res.status(200).json({});
  } catch (err) {
    next(err);
  }
};

