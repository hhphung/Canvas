var acounts = {};
var students = [];
acounts.students = students;



var userName = document.getElementById('cUser');

var pass = document.getElementById('password');





// Get the modal
var modal = document.getElementById('id01');

var modal2 = document.getElementById('id02');


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


window.onclick = function(event) {
    if (event.target == modal2) {
        modal.style.display = "none";
    }
}


var cr = document.getElementById("create");


cr.addEventListener('click', create);

var checker = 0;

var fn;
var pw;

function create() {

    console.log("WTF");

    fn = userName.value;
    pw = pass.value;


    checker = 1;



    // var student = {
    //     "firstName": fn,
    //     "password": pw,
    //     "homeworks": []
    // }
    // acounts.students.push(student);

    // console.log(JSON.stringify(acounts));
    // now = acounts.students[0];






}
if (checker == 1) {

    console.log(fn);





}
// console.log(fn);

// console.log(JSON.stringify(acounts));

// console.log(JSON.stringify(acounts.students[0].firstName));


// console.log(now);


// var sitePersonel = {};
// var employees = []
// sitePersonel.employees = employees;
// console.log(sitePersonel);

// var firstName = "John";
// var lastName = "Smith";
// var employee = {
//     "firstName": firstName,
//     "lastName": lastName
// }
// sitePersonel.employees.push(employee);
// var firstName1 = "John1";
// var lastName1 = "Smith1";
// var employee1 = {
//     "firstName": firstName1,
//     "lastName": lastName1
// }
// sitePersonel.employees.push(employee1);

// console.log(sitePersonel);

// var manager = "Jane Doe";
// sitePersonel.employees[0].manager = manager;
// console.log(sitePersonel);

// console.log(JSON.stringify(sitePersonel));


// console.log(JSON.stringify(sitePersonel.employees[0].manager));



// console.log(JSON.stringify(sitePersonel));


// console.log(JSON.stringify(sitePersonel.employees[1].firstName));