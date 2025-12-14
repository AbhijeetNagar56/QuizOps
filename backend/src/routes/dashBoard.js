import express from 'express';
import { createQuiz, deleteQuiz, editQuiz, getSubmissions } from '../controllers/facultyController.js';
import { getQuiz, submitQuiz, getResults, getAllQuizzes } from '../controllers/studentController.js';



const router = express.Router();


router.get('/', (req, res) => {
  res.send({msg:`successfully accessed dashboard ${req.user}`});
})

// for faculty
router.post('/createQuiz', createQuiz);
router.post('/deleteQuiz/:quizId', deleteQuiz);
router.post('/editQuiz/:quizId', editQuiz);
router.post('/getSubmissions', getSubmissions);


// for students
router.post('/getQuiz', getQuiz);
router.post('/submitQuiz', submitQuiz);
router.post('/getResults', getResults);
router.post('/getAllQuizzes', getAllQuizzes);



export default router;