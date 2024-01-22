"use server";

import Answer from "@/database/answer.model";
import { connectToDatabase } from "../mongoose";
import {
  CreateAnswerParams,
  DeleteAnswerParams,
  GetAnswersParams,
} from "./shared.types";
import Question from "@/database/question.model";
import { revalidatePath } from "next/cache";
import Interaction from "@/database/interaction.model";

export const createAnswer = async (params: CreateAnswerParams) => {
  try {
    connectToDatabase();
    const { author, content, question, path } = params;

    const newAnswer = await Answer.create({ content, author, question });

    await Question.findByIdAndUpdate(question, {
      $push: { answers: newAnswer._id },
    });
    revalidatePath(path);
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getAnswers = async (params: GetAnswersParams) => {
  try {
    connectToDatabase();
    const { questionId } = params;

    const answers = await Answer.find({ question: questionId }).populate(
      "author",
      "_id clerkId name picture"
    );

    return { answers };
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const deleteAnswer = async (params: DeleteAnswerParams) => {
  try {
    connectToDatabase();
    const { answerId, path } = params;

    const answer = Answer.findOne({ _id: answerId });

    if (!answer) {
      throw new Error("Answer not found");
    }

    await answer.deleteOne({ _id: answerId });
    await Question.updateMany(
      { _id: answerId },
      { $pull: { answers: answerId } }
    );
    await Interaction.deleteMany({ question: answerId });
    revalidatePath(path);
  } catch (error) {
    console.log(error);
    throw error;
  }
};
