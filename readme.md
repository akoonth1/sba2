# SBA 308: JavaScript Fundamentals

**Version 1.1** | Assessment Duration: 2 Days (Take-Home)

## Introduction

This project demonstrates a practical application of fundamental JavaScript concepts by processing learner submission data and calculating weighted averages for assignment groups. The script analyzes course information, assignment details, and learner submissions to generate a formatted report of learner performance.

## Project Objectives

By completing this assessment, you will demonstrate proficiency in:

- **Basic JavaScript Syntax** - Employ accurate JavaScript syntax and conventions
- **Control Flow** - Implement conditionals and loops effectively
- **Data Organization** - Use arrays and objects to manage complex data structures
- **Functions** - Develop reusable, well-structured functions
- **Iteration** - Navigate through data collections using appropriate looping techniques
- **Error Handling** - Gracefully manage potential code failures using try/catch and validation logic

## Requirements

### Core Functionality

1. Create a `getLearnerData()` function that accepts three parameters:
   - `CourseInfo` object
   - `AssignmentGroup` object
   - `LearnerSubmission` array

2. Return an array of objects containing:
   - `id` - The learner's ID
   - `avg` - Weighted average score across all due assignments
   - `<assignment_id>` - Score percentage for each assignment (score / points_possible)

### Data Validation & Error Handling

- ✅ Validate that `CourseInfo.id` matches `AssignmentGroup.course_id`
- ✅ Handle division by zero (points_possible = 0)
- ✅ Handle type mismatches (strings instead of numbers)
- ✅ Throw descriptive errors for invalid data
- ✅ Exclude assignments that are not yet due from calculations

### Business Rules

- 📅 **Not Yet Due**: Do not include assignments with future due dates in results or average calculations
- ⏰ **Late Submissions**: Deduct 10% of total points possible if submitted_at > due_at
- 📊 **Weighted Average**: Calculate as total points earned / total points possible across all due assignments

## Data Structures

### CourseInfo Object

```javascript
{
  "id": number,
  "name": string
}
```

### AssignmentGroup Object

```javascript
{
  "id": number,
  "name": string,
  "course_id": number,        // Must match CourseInfo.id
  "group_weight": number,     // Percentage weight of group
  "assignments": [AssignmentInfo]
}
```

### AssignmentInfo Object

```javascript
{
  "id": number,
  "name": string,
  "due_at": "Date string",    // ISO 8601 format
  "points_possible": number
}
```

### LearnerSubmission Object

```javascript
{
  "learner_id": number,
  "assignment_id": number,
  "submission": {
    "submitted_at": "Date string",  // ISO 8601 format
    "score": number
  }
}
```

### Expected Output Format

```javascript
[
  {
    "id": 125,
    "avg": 0.985,           // Weighted average (47 + 150) / (50 + 150)
    "1": 0.94,              // Assignment 1: 47 / 50
    "2": 1.0                // Assignment 2: 150 / 150
  },
  {
    "id": 132,
    "avg": 0.82,            // (39 + 125) / (50 + 150)
    "1": 0.78,              // Assignment 1: 39 / 50
    "2": 0.833              // Assignment 2 (late): (140 - 15) / 150
  }
]
```

## Edge Cases to Test

- ⚠️ Assignment with `points_possible = 0`
- ⚠️ Type mismatches (strings instead of numbers)
- ⚠️ Mismatched `course_id` between CourseInfo and AssignmentGroup
- ⚠️ Assignments with future due dates
- ⚠️ Late submissions (submitted_at after due_at)
- ⚠️ Missing learner submissions
- ⚠️ Invalid date formats

## Getting Started

### Setup

```bash
# Clone the repository
git clone

# Navigate to project directory
cd Sba2

# Run the script
node SBA2.js
```

### Testing

The project includes sample data in the `SBA2.js` file. Test the `getLearnerData()` function with:

1. **Provided sample data** - Validate against expected output
2. **Modified data** - Alter dates and scores to test edge cases
3. **Error scenarios** - Test with invalid inputs

## Submission

Your submission must include:

- ✅ Completed `getLearnerData()` function
- ✅ Helper functions as needed
- ✅ Error handling for invalid inputs
- ✅ Frequent git commits documenting progress
- ✅ GitHub repository link
- ✅ Working code that passes sample test cases

## Implementation Notes

- Use helper functions to keep code modular and maintainable
- Implement comprehensive error checking with try/catch blocks
- Add console logging for debugging during development
- Document complex logic with comments
- Test frequently and commit after each feature implementation

---

**Reference Example**: [SBA 308 Sandbox Example](https://codesandbox.io/p/sandbox/sba-308-example-26sg4j)
