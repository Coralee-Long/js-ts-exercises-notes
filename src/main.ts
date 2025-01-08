import {response} from "./response";


// Step 1: Age verification function
const checkAge = (age: number) => {
    if (age < 0 || age > 120 || !Number.isInteger(age)) {
        console.log("Please enter a valid age as a number (0-120)");
    } else if (age > 18) {
        console.log("Person is over 18 years in age");
    } else if (age === 18) {
        console.log("Person is exactly 18 years in age");
    } else {
        console.log("Person is under 18 years in age");
    }
};

// Sample calls to checkAge
[44, 18, 12, 0, -5, 130].forEach(checkAge);

// Step 2: Score verification function
const checkScore = (score: number) => {
    if (score !== 0) {
        console.log('Score is available.');
    }
    if (score) {
        console.log('Score is evaluated as truthy.');
    } else {
        console.log('Score is not truthy.');
    }
};

// Sample calls to checkScore
[0, 5, -1].forEach(checkScore);

// Step 3: Username availability check
const checkUsername = (username: string) => {
    if(username) {
        console.log("Username is available.");
    } else {
        console.log("Username is evaluated as falsy.");
    }
};

// Sample call to checkUsername
checkUsername("");
checkUsername("user123");

// Step 4: Admin status check
const checkAdminStatus = (isAdmin: boolean) => {
    if(isAdmin) {
        console.log("isAdmin is evaluated as truthy.");
    } else {
        console.log("isAdmin is false.");
    }
};

// Sample call to checkAdminStatus
checkAdminStatus(false);
checkAdminStatus(true);


// BONUS

// Write a code that accepts a number n and outputs a Christmas tree with the following patterns for n = 5:
//
//
//     *
//    ***
//   *****
//  *******
// *********
//     *
//     *
//     *
//     *
//     *

function createTree(n) {

    const width = 2 * n - 1; // The total width of the tree's widest part

    // Print the top part of the tree (triangle)
    for (let i = 1; i <= n; i++) {
        const stars = 2 * i - 1; // The number of stars for the current row
        const spaces = (width - stars) / 2; // The number of spaces needed to center the stars
        console.log(' '.repeat(spaces) + '*'.repeat(stars)); // Combine spaces and stars
    }

    // Print the trunk of the tree
    const trunkSpaces = (width - 1) / 2; // The number of spaces to center the trunk
    for (let i = 1; i <= 5; i++) { // Loop to print 5 rows for the trunk
        console.log(' '.repeat(trunkSpaces) + '*'); // Single star centered with spaces
    }
}

createTree(5);


// TS Types

const age: number = 30;
const name: string = 'Martin';
const isActive: boolean = true;

// Interface
interface Person {
    name: string;
    age: number;
    hobbies: string[];
}

interface Animal {
    name: string;
}

interface Dog extends Animal {
    breed: string;
}

// Type (more flexibility than Interface)
type Person2 = {
    name: string;
    age: number;
    hobbies: string[];
}

const person: Person2 = {
    name: 'John',
    age: 38,
    hobbies: ["spont", "cinema", "chess"]
}

// Literals
type TrafficLightColour = "red" | "green" | "yellow";

const myLight: TrafficLightColour = "blue"; // Type "blue" is not assignable to type TrafficLightColour
const myLight2: TrafficLightColour = "yellow"; // Will work


// Coding Example

// Breakdown:
// calculate()
// operation: sum, sub, multi, div
// operands: 5,6
// const result: number = calculate(input):


type Operator = "sum" | "sub" | "multi" | "div";

type CalculatorInput = {
    operands: [number, number],
    operator: Operator,
}
const input = {
    operator: "sum",
    operands: [5, 6]
}

const calculator = (input: CalculatorInput) => {
    switch (input.operator) {
        case "sum":
            return input.operands[0] + input.operands[1];
            case "sub":
                return input.operands[0] - input.operands[1];
                case "multi":
                    return input.operands[0] * input.operands[1];
                    case "div":
                        return input.operands[0] / input.operands[1];
                        default:
                            throw new Error("Unsupported operator operator " + input.operator);
    }
}

// Test the function
let result = calculator(input);

console.log(result); // 11


// Exercise 1:
type Grades = 1 | 2 | 3 | 4 | 5 | 6 | "A" | "B" | "C" | "D" | "E" | "F" | undefined;

type Student = {
    firstName: string,
    lastName: string,
    age: number,
    grades: {
        [subject: string]: Grades[],
    }
}

const grades1: {[subject: string]: Grades[]}= {
    Maths: ["A", 4, undefined, "D"],
    English: ["C", undefined, "E"],
    History: [4, "C", 1, "A"]
}

const student1 = {
    firstName: "John",
    lastName: "Doe",
    age: 18,
    grades: grades1
}

const student2 = {
    firstName: "Claire",
    lastName: "Down",
    age: 15,
    grades: {
        Maths: ["C", 2, 1, "D"],
        English: [1, undefined, "A"],
        History: [4, "A", 1, "A"]
    }
}

const student3 = {
    firstName: "Max",
    lastName: "Verstappen",
    age: 18,
    grades: {
        Maths: [undefined, "F"],
        English: ["B", 3, 1, undefined, "C"],
        History: [4, 1, "A"]
    }
}


const students = [student1, student2, student3];



const createStudent = (student: Student) => {
    // 1. Create Student Details first line
    const fullStudent = `${student.firstName} ${student.lastName} (${student.age})`;
    console.log(fullStudent);

    // 2. Create custom line of "=" characters
    console.log("=".repeat(fullStudent.length));

    console.log("Grades:");

    // 3. Loop through each subject in the grades object
    for (const subject in student.grades) {
        // Get the grades array for the current subject
        const subjectGrades = student.grades[subject];

        // Replace undefined grades with "*" and join them into a single string
        const gradesWithAbsenteeism = subjectGrades
            .map(grade => (grade === undefined ? "*" : grade))
            .join(",");

        // Print the subject and its formatted grades
        console.log(`${subject}: ${gradesWithAbsenteeism}`);
    }
};



// Function to print all students
const printAllStudents = (students: Student[]): void => {
    students.forEach(student => {
        createStudent(student);
        console.log(); // Add an empty line between students
    });
};

console.log("ALL STUDENTS:");
console.log("-------------------")
// createStudent(student1);
// createStudent(student2);
// createStudent(student3);
printAllStudents(students);


// Bonus Exercise

const convertGrade = (grade: Grades): number | null => {
    if (typeof grade === "number") return grade; // Return the number directly
    if (grade === undefined) return null; // Treat undefined as null (not included in average)
    const gradeMap: { [key: string]: number } = {
        A: 1,
        B: 2,
        C: 3,
        D: 4,
        E: 5,
        F: 6
    };
    return gradeMap[grade] || null;
};

const calculateStudentAverage = (grades: { [subject: string]: Grades[] }): number | null => {
    let totalSum = 0;
    let totalCount = 0;

    for (const subject in grades) {
        const subjectGrades = grades[subject];
        for (const grade of subjectGrades) {
            const numericGrade = convertGrade(grade);
            if (numericGrade !== null) { // Only include valid grades
                totalSum += numericGrade;
                totalCount++;
            }
        }
    }

    return totalCount > 0 ? totalSum / totalCount : null; // Return null if no valid grades
};

const calculateClassAverage = (students: Student[]): number | null => {
    let totalSum = 0;
    let studentCount = 0;

    for (const student of students) {
        const studentAverage = calculateStudentAverage(student.grades);
        if (studentAverage !== null) { // Only include students with valid grades
            totalSum += studentAverage;
            studentCount++;
        }
    }

    return studentCount > 0 ? totalSum / studentCount : null;
};

const printAverages = (students: Student[]): void => {
    for (const student of students) {
        const studentAverage = calculateStudentAverage(student.grades);
        const averageText = studentAverage !== null ? studentAverage.toFixed(2) : "No valid grades";
        console.log(`${student.firstName} ${student.lastName}: Average Grade = ${averageText}`);
    }

    const classAverage = calculateClassAverage(students);
    const classAverageText = classAverage !== null ? classAverage.toFixed(2) : "No valid grades";
    console.log("-------------------")
    console.log(`Class Average: ${classAverageText}`);
};

console.log("STUDENT AVERAGES:")
console.log("-------------------")
printAverages(students);


console.log("-------------------")

// --------------------------------------------------

// BONUS:

// Copy the response from the Rick&Morty API with the characters into a variable.
//
//     Write a function that takes a list of Rick&Morty characters and returns a list of only the living humans.
//
//     Write another function that takes a list of Rick&Morty characters and returns a list (of strings) with the names of the characters.
//
//     Write another function that takes a list of Rick&Morty characters and returns a list of special objects. The objects should be structured as follows:
//
//
// {
//     "name": "some-name",
//     "origin": "name-of-origin",
// }


const apiResponse = response;


// Function 1: Get a list of only the living humans
const getLivingHumans = (characters) => {
    return characters.filter(character => character.status === "Alive" && character.species === "Human");
};

// Function 2: Get a list of character names (strings)
const getCharacterNames = (characters) => {
    return characters.map(character => character.name);
};

// Function 3: Get a list of special objects with name and origin
const getSpecialObjects = (characters) => {
    return characters.map(character => ({
        name: character.name,
        origin: character.origin.name,
    }));
};

// Example Usage
const livingHumans = getLivingHumans(apiResponse);
console.log("Living Humans:");
console.log(livingHumans);

const characterNames = getCharacterNames(apiResponse);
console.log("Character Names:");
console.log(characterNames);

const specialObjects = getSpecialObjects(apiResponse);
console.log("Special Objects:");
console.log(specialObjects);