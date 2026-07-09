export const getCourses=(students)=>{

    return [...new Set(

        students.map(student=>student.course)

    )];

}