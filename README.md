# Student Course Management System

## Overview

A browser-based Student Course Management System built using **HTML, CSS, and Vanilla JavaScript (ES6+)**. The application fetches student data from a local `students.json` file and provides search, filtering, and statistics features.

---

## Features

* Fetch student data using the Fetch API
* Loading and error handling
* Display students as responsive cards
* Live search by student name
* Filter students by course
* Statistics dashboard:

  * Total students
  * Average age
  * Students per course
* Modular JavaScript using ES Modules

---

## Technologies Used

* HTML5
* CSS3
* JavaScript (ES6+)

---

## Project Structure

```text
student-course-management/
│
├── index.html
├── style.css
├── students.json
├── README.md
│
└── js/
    ├── api.js
    ├── main.js
    ├── studentService.js
    ├── ui.js
    └── utils.js
```

---

## Setup

1. Clone the repository.
2. Open the project in VS Code.
3. Start **Live Server**.
4. Open `index.html` in the browser.

---

## Challenges Faced

* Working with ES Modules.
* Fetching local JSON data.
* Managing search and filter together.
* Organizing the project into separate modules.

---

## Learning Outcomes

* Improved understanding of modern JavaScript (ES6+).
* Learned asynchronous programming using `async/await`.
* Practiced array methods such as `map`, `filter`, and `reduce`.
* Gained experience with modular code organization and DOM manipulation.
