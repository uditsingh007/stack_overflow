"use server";

import { connectToDatabase } from "../mongoose";

export const createQuestion = async () => {
  try {
    connectToDatabase();
  } catch (error) {
    console.log(error);
  }
};
