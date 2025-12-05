import express from 'express';
import jwt from 'jsonwebtoken';
import User from '../models/Student.js';


const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET;

router.get('/', (req, res) => {
  res.send({msg:"successfully accessed dashboard"});
})

// for faculty
router.post('/createQuiz', createQuiz);
router.post('/deleteQuiz', deleteQuiz);
router.post('/editQuiz', editQuiz);
router.post('/getSubmissions', getSubmissions);


// for students
router.post('/getQuiz', getQuiz);
router.post('/submitQuiz', submitQuiz);
router.post('/getResults', getResults);
router.post('/getAllQuizzes', getAllQuizzes);



export default router;