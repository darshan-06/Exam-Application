const express = require('express');
const router = express.Router();
const userController = require('../controllers/UserController');
const studentController = require('../controllers/StudentController');
const classRoomController = require('../controllers/ClassRoomController');
const examContrller = require('../controllers/ExamController');
const resultController = require('../controllers/ResultController');
const userValidation = require('../dataValidation/UserValidation');
const studentValidation = require('../dataValidation/StudentValidation');
const classRoomValidation = require('../dataValidation/ClassRoomValidation');
const examValidation = require('../dataValidation/ExamValidation');
const resultValidation = require('../dataValidation/ResultValidation');

router.post('/register', userValidation.registerValidation, userController.register);
router.post('/login', userValidation.loginValidation, userController.login);

//validate user loggied in
router.use(userController.verifyToken);

//Student
router.post('/students', userController.isAdmin, userValidation.registerValidation, studentValidation.registerValidation, studentController.postStudent);
router.get('/students', userController.isAdmin, studentController.getStudent);
router.get('/students/:id', studentController.getSingleStudent);
router.put('/students/:id', studentController.updateStudent);
router.delete('/students/:id',userController.isAdmin, studentController.deleteStudent);


//Classrooms
router.post('/classroom',userController.isAdmin, classRoomValidation.classValidation, classRoomController.createClassRoom);
router.get('/classroom', classRoomController.getClassRoom);
router.get('/classroom/:id', classRoomController.getSingleClassRoom);
router.put('/classroom/:id',userController.isAdmin, classRoomValidation.classValidation, classRoomController.updateClassRoom);
router.delete('/classroom/:id',userController.isAdmin, classRoomController.deleteClassRoom);


//Exams
router.post('/exams',userController.isAdmin, examValidation.examValidation, examContrller.createExam);
router.get('/exams', examContrller.getExam);
router.get('/exams/:id', examContrller.getSingleExam);
router.put('/exams/:id',userController.isAdmin,  examValidation.examValidation, examContrller.updateExam);
router.delete('/exams/:id',userController.isAdmin, examContrller.deleteExam);


//Exam Results
router.post('/examResults', resultValidation.resultValidation, resultController.postResult);
router.get('/examResults', resultController.getResult);
router.get('/examResults/:id', resultController.getSingleResult);
router.put('/examResults/:id', resultValidation.resultValidation, resultController.updateResult);
router.delete('/examResults/:id',userController.isAdmin, resultController.deleteResult);


module.exports = router;