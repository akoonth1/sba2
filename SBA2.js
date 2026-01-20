

    // The provided course information.
const CourseInfo = {
  id: 451,
  name: "Introduction to JavaScript"
};

// The provided assignment group.
const AssignmentGroup = {
  id: 12345,
  name: "Fundamentals of JavaScript",
  course_id: 451,
  group_weight: 25,
  assignments: [
    {
      id: 1,
      name: "Declare a Variable",
      due_at: "2023-01-25",
      points_possible: 50
    },
    {
      id: 2,
      name: "Write a Function",
      due_at: "2023-02-27",
      points_possible: 150
    },
    {
      id: 3,
      name: "Code the World",
      due_at: "3156-11-15",
      points_possible: 500
    }
  ]
};

// The provided learner submission data.
const LearnerSubmissions = [
  {
    learner_id: 125,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-25",
      score: 47
    }
  },
  {
    learner_id: 125,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-02-12",
      score: 150
    }
  },
  {
    learner_id: 125,
    assignment_id: 3,
    submission: {
      submitted_at: "2023-01-25",
      score: 400
    }
  },
  {
    learner_id: 132,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-24",
      score: 39
    }
  },
  {
    learner_id: 132,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-03-07",
      score: 140
    }
  }
];

// function getLearnerData(course, ag, submissions) {
//   // here, we would process this data to achieve the desired result.
//   const result = [
//     {
//       id: 125,
//       avg: 0.985, // (47 + 150) / (50 + 150)
//       1: 0.94, // 47 / 50
//       2: 1.0 // 150 / 150
//     },
//     {
//       id: 132,
//       avg: 0.82, // (39 + 125) / (50 + 150)
//       1: 0.78, // 39 / 50
//       2: 0.833 // late: (140 - 15) / 150
//     }
//   ];

//   return result;
// }

// const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);

// console.log(result);


function getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions) {


}

// Reference date used to check if an assignment's deadline has passed
let testDate = new Date("2026-01-26");

//Cheacks if the submission is late
function dueDate( due_at, submitted_at ) {
    let isItLate = false;
    const dueDate = new Date(due_at);
    const submitDate = new Date(submitted_at);
    if (submitDate > dueDate) {
        isItLate = true;
    }
    return isItLate;
}

//check if assignment is due yet
function isDue(due_at)
{
  const dueDate = new Date(due_at);
  console.log(dueDate);
  if(dueDate < testDate){
    return true;
  
  }

 
  return false;
}


// Check Unique Learners
function uniqueLearners(LearnerSubmissions) {
    const learners = [];
    LearnerSubmissions.forEach(submission => {
        if (!learners.includes(submission.learner_id)) {
            learners.push(submission.learner_id);
        }
    });
    return learners;
}
    const learners = uniqueLearners(LearnerSubmissions);
    const result = [];
 
 //   console.log(learners);


function course_validation(CourseInfo, AssignmentGroup){
  
switch (CourseInfo.id) {
  case AssignmentGroup.course_id:
      // No error
      break;

  default:
      return [ false, `Course_ID does not match Assignment_Course_ID, please recheck if ${CourseInfo.name} is the correct course.`];
      break;
}   

}



let assignmentsData =[];
function getAssinments(AssignmentGroup){
    
    const assignments = AssignmentGroup.assignments.forEach(assignment => { 
        assignmentsData.push(assignment);
    });
    
    return assignmentsData;
  }
getAssinments(AssignmentGroup);




function data_LearnerSubmissions(LearnerSubmissions) {    
        let student_row = [];
        const student_array = [];

    

for (let i = 0; i < LearnerSubmissions.length; i++) {
    student_row.push(LearnerSubmissions[i].learner_id);
    student_row.push(LearnerSubmissions[i].assignment_id);
    student_row.push(LearnerSubmissions[i].submission.submitted_at);
    student_row.push(LearnerSubmissions[i].submission.score);

    student_array.push(student_row);
    student_row = [];
}return student_array;
}
let learnerData = (data_LearnerSubmissions(LearnerSubmissions));

let dateChecker = data_LearnerSubmissions(LearnerSubmissions);

console.log(learnerData);

function dateformat(date_s) {
   short_date = new Date(date_s).toLocaleDateString('en-US', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
      })
    return short_date;
}



function is_not_late(datedue, datesub){
    let is_it_late;
    if (dateformat(datedue) < dateformat(datesub)){
        is_it_late = false
    }else{
        is_it_late = true
    }

return is_it_late};

console.log(is_not_late("2023-01-25", "2023-01-24"));

//console.log(assignmentsData[1]);




for (let j = 0; j < learnerData.length; j++) {
    for (let k = 0; k < assignmentsData.length; k++) {
        if (learnerData[j][1] === assignmentsData[k].id) {
if (is_not_late(assignmentsData[k].due_at, learnerData[j][2]) === false){
    learnerData[j][3] = learnerData[j][3] - assignmentsData[k].points_possible * 0.1;
   // console.log(learnerData[j][3]);
    
}

            console.log(`Learner ID: ${learnerData[j][0]} | Assignment ID: ${learnerData[j][1]} | Due Date: ${assignmentsData[k].due_at} | Submitted At: ${learnerData[j][2]} | Score: ${learnerData[j][3]} | Is Not Late: ${is_not_late(assignmentsData[k].due_at, learnerData[j][2])} 
            | Points Possible: ${assignmentsData[k].points_possible} | Weight: ${AssignmentGroup.group_weight} |  ${learnerData[j][3]} / ${assignmentsData[k].points_possible} | is Due: ${isDue(assignmentsData[k].due_at)}`);
        
        
        }
    }
}



