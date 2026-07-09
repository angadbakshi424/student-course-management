import {fetchStudents} from "./api.js";

import {displayStudents,displayStats,loadCourses} from "./ui.js";

import {searchStudents,filterCourse,calculateStats} from "./studentService.js";

import {getCourses} from "./utils.js";

let students=[];

let filteredStudents=[];

const init=async()=>{

try{

students=await fetchStudents();

filteredStudents=students;

document.getElementById("loading").style.display="none";

displayStudents(filteredStudents);

displayStats(calculateStats(filteredStudents));

loadCourses(getCourses(students));

}

catch(error){

document.getElementById("error").textContent=error.message;

}

}

init();

document.getElementById("search")

.addEventListener("input",(e)=>{

const course=document.getElementById("courseFilter").value;

filteredStudents=filterCourse(

searchStudents(students,e.target.value),

course

);

displayStudents(filteredStudents);

displayStats(calculateStats(filteredStudents));

});

document.getElementById("courseFilter")

.addEventListener("change",(e)=>{

const search=document.getElementById("search").value;

filteredStudents=filterCourse(

searchStudents(students,search),

e.target.value

);

displayStudents(filteredStudents);

displayStats(calculateStats(filteredStudents));

});