const students = [
  { rollno: 1, name: "Aman", department: "Computer Science", CGPA: 8.5 },
  { rollno: 2, name: "Rahul", department: "Mechanical", CGPA: 7.8 },
  { rollno: 3, name: "Priya", department: "Electronics", CGPA: 9.1 },
  { rollno: 4, name: "Sneha", department: "Civil", CGPA: 8.0 },
  { rollno: 5, name: "Arjun", department: "Computer Science", CGPA: 8.9 },
  { rollno: 6, name: "Neha", department: "Electrical", CGPA: 7.5 },
  { rollno: 7, name: "Kiran", department: "Mechanical", CGPA: 8.2 },
  { rollno: 8, name: "Divya", department: "Computer Science", CGPA: 9.3 },
  { rollno: 9, name: "Ravi", department: "Civil", CGPA: 7.9 },
  { rollno: 10, name: "Anjali", department: "Electronics", CGPA: 8.7 }
];
    function loadTable(){
    let tabletask=document.querySelector("#tablebody")
    students.forEach((student,idx)=>{
        let tr=document.createElement("tr")
        let td1=document.createElement("td")
        td1.innerHTML=student.rollno
        let td2=document.createElement("td")
        td2.innerHTML=student.name
        let td3=document.createElement("td")
        td3.innerHTML=student.department
        let td4=document.createElement("td")
        td4.innerHTML=student.CGPA

        tr.appendChild(td1)
        tr.appendChild(td2)
        tr.appendChild(td3)
        tr.appendChild(td4)
        tabletask.appendChild(tr)
    })
}
loadTable()