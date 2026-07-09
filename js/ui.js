export const displayStudents=(students)=>{

const container=document.getElementById("studentContainer");

container.innerHTML="";

students.forEach(student=>{

container.innerHTML+=`

<div class="card">

<h2>${student.name}</h2>

<p>Age : ${student.age}</p>

<p>${student.email}</p>

<p>${student.course}</p>

<p>Year : ${student.enrollmentYear}</p>

<p>GPA : ${student.gpa}</p>

</div>

`;

});

}

export const displayStats=(stats)=>{

const div=document.getElementById("stats");

let html=`

<h2>Total Students : ${stats.totalStudents}</h2>

<h2>Average Age : ${stats.averageAge}</h2>

`;

for(const course in stats.courseCounts){

html+=`

<p>${course} : ${stats.courseCounts[course]}</p>

`;

}

div.innerHTML=html;

}

export const loadCourses=(courses)=>{

const select=document.getElementById("courseFilter");

courses.forEach(course=>{

select.innerHTML+=`

<option value="${course}">

${course}

</option>

`;

});

}