# Exam Application

This is the Exam app for Student including class room system.

Entry point to the application is `app.js`

`.env` file contains configuration

Use `npm run dev` for debugging run


### Install

    npm install

### Run the app

    To run the application use npm start


## API

The REST API to the Exam System app is described below.

## Register New User (Admin)

### Request
    POST /register
    Content-Type: application/json

    {
      "name":"admin",
      "email": "test@mail.com",
      "password":"123456",
      "confirmPassword":"123456"
    }


### Response

#### success
    Status: 200 OK
    Content-Type: application/json

    { 
      "id": "6602ba484e5cbd9d12517a2c",
      "message": "User registered successfully."
    }

#### error
    Status: 400 Bad Request
    Content-Type: application/json

    {
      "message": "Email alredy Exsist! Please login."
    }

## Login 

### Request
    POST /login
    Content-Type: application/json

    {
      "email": "test@mail.com",
      "password":"123456",
    }


### Response

#### success
    Status: 200 OK
    Content-Type: application/json
    
    {
        "token": "eyJhbGciOiJIUzI1N...."
    }

#### error
    Status: 400 Bad Request
    Content-Type: application/json

    {
      "message": "Invalid email or password."
    }

## Register Student

### Request
    POST /students
    Content-Type: application/json
    authorization: eyJhbGciOiJIUzI1N....
    
    {
        "name": "user",
        "email": "user@mail.com",
        "password": "1234567",
        "confirmPassword":"1234567",
        "rollNumber":1,
        "gender":"Male",
        "classId":"6602a65395a5cd5df55b5f39",
        "role": "STUDENT"
    }


### Response

#### success
    Status: 200 OK
    Content-Type: application/json

    { 
      "id": "6602ba484e5cbd9d12517a2c",
      "message": "Student Created."
    }

#### error
    Status: 400 Bad Request
    Content-Type: application/json

    {
      "message": "Email alredy Exsist! Please login."
    }

## Get Students

### Request
    GET /students
    Content-Type: application/json
    authorization: eyJhbGciOiJIUzI1N....
    

### Response

#### success
    Status: 200 OK
    Content-Type: application/json
    
    [
        {
            "_id": "6602ba484e5cbd9d12517a2c",
            "name": "tester",
            "email": "user@mail.com",
            "__t": "Student",
            "rollNumber": 1,
            "gender": "Male",
            "classId": "6602a65395a5cd5df55b5f39"
        }
    ]

#### error
    Status: 400 Bad Request
    Content-Type: application/json

    {
      "message": "Please try after some time."
    }

## Get Student

### Request
    GET /students/:id
    Content-Type: application/json
    authorization: eyJhbGciOiJIUzI1N....
    
### Response

#### success
    Status: 200 OK
    Content-Type: application/json
    
    {
        "_id": "6602ba484e5cbd9d12517a2c",
        "name": "tester",
        "email": "user@mail.com",
        "__t": "Student",
        "rollNumber": 1,
        "gender": "Male",
        "classId": "6602a65395a5cd5df55b5f39"
    }

#### error
    Status: 400 Bad Request
    Content-Type: application/json

    {
      "message": "Student not found."
    }


## Update Student

### Request
    PUT /students/:id
    Content-Type: application/json
    authorization: eyJhbGciOiJIUzI1N....
    
    {
        "name": "tester",
        "email": "user@mail.com",
        "password": "1234567",
        "rollNumber":2,
        "gender":"Male",
        "classId":"6602a65395a5cd5df55b5f39",
        "role": "STUDENT"
    } 
    
### Response

#### success
    Status: 200 OK
    Content-Type: application/json
    
    {
        "message": "Student Details Updated."
    }

#### error
    Status: 400 Bad Request
    Content-Type: application/json

    {
      "message": "Student not found."
    }

## Delete Student

### Request
    DELETE /students/:id
    Content-Type: application/json
    authorization: eyJhbGciOiJIUzI1N....
    
### Response

#### success
    Status: 200 OK
    Content-Type: application/json
    
    {
        "message": "Student deleted successfully."
    }

#### error
    Status: 400 Bad Request
    Content-Type: application/json

    {
      "message": "Student not found."
    }

## Create ClassRoom

### Request
    POST /classroom
    Content-Type: application/json
    authorization: eyJhbGciOiJIUzI1N....
    
    {
        "className": "9",
        "lessons": [
            {
                "subject": "Mathematics",
                "lessonNumber":1,
                "videoLink":"https://www.youtube.com/"
            },
            {
                "subject": "Mathematics",
                "lessonNumber":2,
                "videoLink":"https://www.youtube.com/"
            }
        ]
    }


### Response

#### success
    Status: 200 OK
    Content-Type: application/json

    {
        "id": "6603ed6c95e07a337292600d",
        "message": "Classroom Created."
    }

#### error
    Status: 400 Bad Request
    Content-Type: application/json

    {
      "message": "Please try after some time."
    }

## Get ClassRooms

### Request
    GET /classroom
    Content-Type: application/json
    authorization: eyJhbGciOiJIUzI1N....
    

### Response

#### success
    Status: 200 OK
    Content-Type: application/json
    
    [
        {
            "_id": "6603ed6c95e07a337292600d",
            "className": "9",
            "lessons": [
                {
                    "subject": "Mathematics",
                    "lessonNumber": 1,
                    "videoLink": "https://www.youtube.com/"
                },
                {
                    "subject": "English",
                    "lessonNumber": 2,
                    "videoLink": "https://www.youtube.com/"
                }
            ]
        }
    ]

#### error
    Status: 400 Bad Request
    Content-Type: application/json

    {
      "message": "Please try after some time."
    }

## Get ClassRoom

### Request
    GET /classroom/:id
    Content-Type: application/json
    authorization: eyJhbGciOiJIUzI1N....
    
### Response

#### success
    Status: 200 OK
    Content-Type: application/json
    
    {
        "_id": "6602c5380897dc3ec0df2540",
        "className": "8",
        "lessons": [
            {
                "subject": "Mathematics",
                "lessonNumber": 1,
                "videoLink": "https://www.youtube.com/"
            }
        ]
    }

#### error
    Status: 400 Bad Request
    Content-Type: application/json

    {
      "message": "ClassRoom not found."
    }


## Update ClassRoom

### Request
    PUT /classroom/:id
    Content-Type: application/json
    authorization: eyJhbGciOiJIUzI1N....
    
    {
        "className": "8",
        "lessons": [
            {
                "subject": "Mathematics",
                "lessonNumber": 1,
                "videoLink": "https://www.youtube.com/abcd"
            }
        ]
    }

### Response

#### success
    Status: 200 OK
    Content-Type: application/json
    
    {
        "message": "ClassRoom Details Updated."
    }

#### error
    Status: 400 Bad Request
    Content-Type: application/json

    {
      "message": "ClassRoom not found."
    }

## Delete ClassRoom

### Request
    DELETE /classroom/:id
    Content-Type: application/json
    authorization: eyJhbGciOiJIUzI1N....
    
### Response

#### success
    Status: 200 OK
    Content-Type: application/json
    
    {
        "message": "Classroom deleted successfully."
    }

#### error
    Status: 400 Bad Request
    Content-Type: application/json

    {
      "message": "Classroom not found."
    }

## Create Exam

### Request
    POST /exams
    Content-Type: application/json
    authorization: eyJhbGciOiJIUzI1N....
    
    {
        "classId": "6602c5380897dc3ec0df2540",
        "subject": "English",
        "timeDuration": 20,
        "questions": [
            {   
                "questionId": 1,
                "question": "test1",
                "options": [
                    "option 1",
                    "option 2",
                    "option 3"
                ],
                "answer": ["option 3"]
            }
            {
                "questionId":2,
                "question": "test3",
                "options": [
                    "option 1",
                    "option 2",
                    "option 3"
                ],
                "answer": ["option 1","option 2"]
            }
        ]
    }


### Response

#### success
    Status: 200 OK
    Content-Type: application/json

    {
        "id": "6603de544fb65c52dfcfe874",
        "message": "Exam Created."
    }

#### error
    Status: 400 Bad Request
    Content-Type: application/json

    {
      "message": "Please try after some time."
    }

## Get Exams

### Request
    GET /exams
    Content-Type: application/json
    authorization: eyJhbGciOiJIUzI1N....
    

### Response

#### success
    Status: 200 OK
    Content-Type: application/json
    
    [
        {
            "_id": "6603de0e4341c2e9bfcd0f6e",
            "classId": "6602c5380897dc3ec0df2540",
            "subject": "English",
            "timeDuration": 20,
            "questions": [
                {
                    "questionId": 1,
                    "question": "test1",
                    "options": [
                        "option 1",
                        "option 2",
                        "option 3"
                    ]
                },
                {
                    "questionId": 2,
                    "question": "test2",
                    "options": [
                        "option 1",
                        "option 2",
                        "option 3"
                    ]
                }
            ]
        }
    ]

#### error
    Status: 400 Bad Request
    Content-Type: application/json

    {
      "message": "Please try after some time."
    }

## Get Exam

### Request
    GET /exams/:id
    Content-Type: application/json
    authorization: eyJhbGciOiJIUzI1N....
    
### Response

#### success
    Status: 200 OK
    Content-Type: application/json
    
    {
        "_id": "6603de0e4341c2e9bfcd0f6e",
         "classId": "6602c5380897dc3ec0df2540",
         "subject": "English",
         "timeDuration": 20,
         "questions": [
             {
                 "questionId": 1,
                 "question": "test1",
                 "options": [
                     "option 1",
                     "option 2",
                     "option 3"
                 ]
             },
             {
                 "questionId": 2,
                 "question": "test2",
                 "options": [
                     "option 1",
                     "option 2",
                     "option 3"
                 ]
             }
         ]
    }

#### error
    Status: 400 Bad Request
    Content-Type: application/json

    {
      "message": "Exam not found."
    }


## Update Exam

### Request
    PUT /exams/:id
    Content-Type: application/json
    authorization: eyJhbGciOiJIUzI1N....
    
    {
        "classId": "6602c5380897dc3ec0df2540",
        "subject": "English",
        "timeDuration": 20,
        "questions": [
            {   
                "questionId": 1,
                "question": "test1",
                "options": [
                    "option 1",
                    "option 2",
                    "option 3"
                ],
                "answer": ["option 3"]
            }
            {
                "questionId":2,
                "question": "test3",
                "options": [
                    "option 1",
                    "option 2",
                    "option 3"
                ],
                "answer": ["option 1","option 2"]
            }
        ]
    }

### Response

#### success
    Status: 200 OK
    Content-Type: application/json
    
    {
        "message": "Exam Details Updated."
    }

#### error
    Status: 400 Bad Request
    Content-Type: application/json

    {
      "message": "Exam not found."
    }

## Delete Exam

### Request
    DELETE /exams/:id
    Content-Type: application/json
    authorization: eyJhbGciOiJIUzI1N....
    
### Response

#### success
    Status: 200 OK
    Content-Type: application/json
    
    {
        "message": "Exam deleted successfully."
    }

#### error
    Status: 400 Bad Request
    Content-Type: application/json

    {
      "message": "Exam not found."
    }


## Create Result

### Request
    POST /examResults
    Content-Type: application/json
    authorization: eyJhbGciOiJIUzI1N....
    
    {
        "examId": "6603de0e4341c2e9bfcd0f6e",
        "answers": [
            {
                "selectedOption": [
                    "option 2"
                ],
                "questionId": 3
            },
            {
                "selectedOption": [
                    "option 1"
                ],
                "questionId": 2
            }
        ]
    }    

### Response

#### success
    Status: 200 OK
    Content-Type: application/json

    {
        "id": "6603de544fb65c52dfcfe874",
        "message": "Exam Submitted."
    }

#### error
    Status: 400 Bad Request
    Content-Type: application/json

    {
      "message": "Please try after some time."
    }

## Get Exams Results

### Request
    GET /examResults
    Content-Type: application/json
    authorization: eyJhbGciOiJIUzI1N....
    

### Response

#### success
    Status: 200 OK
    Content-Type: application/json
    
    [
        {
            "_id": "6603f74291f560690bc91365",
            "examId": "6603de0e4341c2e9bfcd0f6e",
            "answers": [
                {
                    "questionId": 3,
                    "selectedOption": [
                        "option 2"
                    ]
                },
                {
                    "questionId": 2,
                    "selectedOption": [
                        "option 1"
                    ]
                },
                {
                    "questionId": 1,
                    "selectedOption": [
                        "option 3"
                    ]
                }
            ],
            "totalScore": 2,
            "studentId": "6602ba154e5cbd9d12517a29"
        }
    ]

#### error
    Status: 400 Bad Request
    Content-Type: application/json

    {
      "message": "Please try after some time."
    }

## Get Exam Results

### Request
    GET /examResults/:id
    Content-Type: application/json
    authorization: eyJhbGciOiJIUzI1N....
    
### Response

#### success
    Status: 200 OK
    Content-Type: application/json
    
    {
        "_id": "6603f74291f560690bc91365",
        "examId": "6603de0e4341c2e9bfcd0f6e",
        "answers": [
            {
                "questionId": 3,
                "selectedOption": [
                    "option 2"
                ]
            },
            {
                "questionId": 2,
                "selectedOption": [
                    "option 1"
                ]
            },
            {
                "questionId": 1,
                "selectedOption": [
                    "option 3"
                ]
            }
        ],
        "totalScore": 2,
        "studentId": "6602ba154e5cbd9d12517a29"
    }


#### error
    Status: 400 Bad Request
    Content-Type: application/json

    {
      "message": "Exam Results not found."
    }


## Update Exam Results

### Request
    PUT /examResults/:id
    Content-Type: application/json
    authorization: eyJhbGciOiJIUzI1N....
    
    {
        "examId": "6603de0e4341c2e9bfcd0f6e",
        "answers": [
            {
                "selectedOption": [
                    "option 2"
                ],
                "questionId": 3
            },
            {
                "selectedOption": [
                    "option 1"
                ],
                "questionId": 2
            }
        ]
    } 

### Response

#### success
    Status: 200 OK
    Content-Type: application/json
    
    {
        "message": "Exam Results Details Updated."
    }

#### error
    Status: 400 Bad Request
    Content-Type: application/json

    {
      "message": "Exam Results not found."
    }

## Delete Exam Results

### Request
    DELETE /examResults/:id
    Content-Type: application/json
    authorization: eyJhbGciOiJIUzI1N....
    
### Response

#### success
    Status: 200 OK
    Content-Type: application/json
    
    {
        "message": "Exam Results deleted successfully."
    }

#### error
    Status: 400 Bad Request
    Content-Type: application/json

    {
      "message": "Exam Results not found."
    }
