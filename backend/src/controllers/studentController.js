import question from "../models/Question.js";
import quiz from "../models/Quizes.js";
import submission from "../models/Submission.js";
import result from "../models/Result.js";

export const getQuiz = async (req, res) => {
  try {
    const { quizId } = req.body;
    
    const quizData = await quiz.findById(quizId);
    const questions = await question.find({ quizId: quizId });
    
    res.send({ msg: "Quiz fetched successfully", data: { quiz: quizData, questions: questions } });
  } catch (error) {
    console.error("Error fetching quiz:", error);
    res.status(500).send({ msg: "Internal server error" });
  }
}

export const submitQuiz = async (req, res) => {
  try {
    const { quizId, answers } = req.body;
    const newSubmission = new submission({
      rollNo: req.user.rollNo,
      quizId,
      answers
    });
    await newSubmission.save();
    res.send({ msg: "Quiz submitted successfully" });
  } catch (error) {
    console.error("Error submitting quiz:", error);
    res.status(500).send({ msg: "Internal server error" });
  }
}

export const getResults = async (req, res) => {
  try {
    const { quizId } = req.body;
    const resultData = await result.findOne({ rollNo: req.user.rollNo, quizId: quizId });
    if (!resultData) {
      return res.status(404).send({ msg: "Result not found" });
    }
    res.send({ msg: "Result fetched successfully", data: resultData });
  } catch (error) {
    console.error("Error fetching result:", error);
    res.status(500).send({ msg: "Internal server error" });
  }
}

export const getAllResults = async (req, res) => {
  try {
    const results = await result.find({ rollNo: req.user.rollNo });
    res.send({ msg: "Results fetched successfully", data: results });
  } catch (error) {
    console.error("Error fetching results:", error);
    res.status(500).send({ msg: "Internal server error" });
  }
}

export const getAllQuizzes = async  (req, res) => {
  try {

    const quizzes = await quiz.find({batch: req.user.batch});
    res.send({ msg: "All quizzes fetched successfully", data: quizzes });

  } catch (error) {
    console.error("Error fetching all quizzes:", error);
    res.status(500).send({ msg: "Internal server error" });
  }
}