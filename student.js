'use strict';
let studentList=[];
function addStudent() {
    let student = new Object();
    student.name = document.getElementById("name").value;
    student.sex = document.getElementById("sex").value;
    student.id = document.getElementById("id").value;
    student.klass = document.getElementById("klass").value;
    student.math = document.getElementById("math").value;
    student.chinese = document.getElementById("chinese").value;
    student.english = document.getElementById("english").value;
    student.code = document.getElementById("code").value;
    if(student.name&&student.sex&&student.id&&student.klass&&student.math&&student.chinese&&student.english&&student.code){
        alert('成功录入一个学生');
        localStorage.setItem(`${student.id}`,JSON.stringify(student));
        alert(`${studentList[0].name}学生的信息被录入`);
    }
    else {
        alert('请将信息填写完全');
    }
}