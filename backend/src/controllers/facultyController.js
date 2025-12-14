
import Quizes from "../models/Quizes.js";
import Question from "../models/Question.js";

export const createQuiz = async (req, res) => {
  try {
    const { faculty, batch, subject, startTime, endTime } = req.body;

    if (!faculty || !batch || !subject) {
      return res.status(400).json({ msg: "All required fields missing" });
    }

    const newQuiz = await Quizes.create({
      faculty,
      batch,
      subject,   // array of question IDs
      startTime,
      endTime,
      status: "scheduled"
    });

    return res.status(201).json({
      msg: "Quiz created successfully",
      quiz: newQuiz
    });

  } catch (error) {
    console.error("Error creating quiz:", error);
    res.status(500).json({ msg: "Internal server error" });
  }
};

export const addQuestionToQuiz = async (req, res) => {
  try {
    const { quizId, question, options } = req.body;

    if (!quizId || !questionData) {
      return res.status(400).json({ msg: "Quiz ID and question data are required" });
    }

    // Create a new question
    const newQuestion = await Question.create({quizId, question, options });

    // Add the question ID to the quiz's questions array
    const quiz = await Quizes.findById(quizId);
    if (!quiz) {
      return res.status(404).json({ msg: "Quiz not found" });
    }

    quiz.questions.push(newQuestion._id);
    await quiz.save();

    return res.status(200).json({
      msg: "Question added to quiz successfully",
      question: newQuestion
    });

  } catch (error) {
    console.error("Error adding question to quiz:", error);
    res.status(500).json({ msg: "Internal server error" });
  }
}



export const deleteQuiz = async (req, res) => {
  try {
    const { quizId } = req.params.quizId;

    if (!quizId) {
      return res.status(400).send({ msg: "Quiz ID is required" });
    }

    const deletedQuiz = await Quizes.findByIdAndDelete(quizId);

    if (!deletedQuiz) {
      return res.status(404).send({ msg: "Quiz not found" });
    }

    res.status(200).send({ msg: "Quiz deleted successfully", quiz: deletedQuiz });
  } catch (error) {
    console.error("Error deleting result:", error);
    res.status(500).send({ msg: "Internal server error" });
  }
}

export const editQuiz = async (req, res) => {
  try {
    const { quizId } = req.params.quizId;
    const updateData = req.body;

    if (!quizId) {
      return res.status(400).send({ msg: "Quiz ID is required" });
    }

    const updatedQuiz = await Quizes.findByIdAndUpdate(quizId, updateData, { new: true });

    if (!updatedQuiz) {
      return res.status(404).send({ msg: "Quiz not found" });
    }

    res.status(200).send({ msg: "Quiz updated successfully", quiz: updatedQuiz });
    
  } catch (error) {
    console.error("Error editing result:", error);
    res.status(500).send({ msg: "Internal server error" });
  }
}

export const getSubmissions = async (req, res) => {
  try {
    const { quizId } = req.params.quizId;
    if (!quizId) {
      return res.status(400).send({ msg: "Quiz ID is required" });
    }

    const submissions = await submission.find({ quizId: quizId });

    res.status(200).send({ msg: "Submissions fetched successfully", data: submissions });
    
  } catch (error) {
    console.error("Error fetching submissions:", error);
    res.status(500).send({ msg: "Internal server error" });
  }
} 
