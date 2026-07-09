export const searchStudents = (students, text) => {

    return students.filter(student =>

        student.name.toLowerCase().includes(text.toLowerCase())

    );

};

export const filterCourse = (students, course) => {

    if(course==="All") return students;

    return students.filter(student=>student.course===course);

};

export const calculateStats=(students)=>{

    const totalStudents=students.length;

    const averageAge=(

        students.reduce((sum,student)=>sum+student.age,0)

        /students.length

    ).toFixed(1);

    const courseCounts=students.reduce((acc,student)=>{

        acc[student.course]=(acc[student.course]||0)+1;

        return acc;

    },{});

    return{

        totalStudents,

        averageAge,

        courseCounts

    };

}