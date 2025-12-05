import express from "express"
import { student, faculty, createFaculty, createStudent} from "../controllers/authController.js";

const router = express.Router();

router.post('/student', student);
router.post('/faculty', faculty);


router.post('/admin/student', createStudent);
router.post('/admin/faculty', createFaculty);

export default router;