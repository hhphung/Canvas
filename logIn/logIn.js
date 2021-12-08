var acounts = {};
var students = [];
acounts.students = students;

var json = JSON.parse(localStorage.getItem('users'));

var i = 0;



var j = json.students.length;

console.log(JSON.stringify(json.students));

console.log(j);



while (i < j) {

    acounts.students.push(json.students[i]);

    console.log(JSON.stringify(acounts.students[i]));

    i++;

}


//localStorage.removeItem('users');

var userName = document.getElementById('cUser');

var pass = document.getElementById('cPassword');


var userNameL = document.getElementById('lUser');

var passL = document.getElementById('lPassword');





// Get the modal
var modal = document.getElementById('id01');

var modal2 = document.getElementById('id02');


// When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }


// window.onclick = function(event) {
//     if (event.target == modal2) {
//         modal.style.display = "none";
//     }
// }


var cr = document.getElementById("create");


var li = document.getElementById("Login");

li.addEventListener('click', logger);


cr.addEventListener('click', create);

var checker = 0;

var fn;
var pw;

var now;

function create() {


    fn = userName.value;
    pw = pass.value;


    var student = {
        "firstName": fn,
        "password": pw,
        "classes": []
    }

    //localStorage.removeItem('users');
    localStorage.clear();
    acounts.students.push(student);


    localStorage.setItem('users', JSON.stringify(acounts));


    now = JSON.stringify(findStudent(fn, pw));

    console.log("now");
    console.log(now);





    console.log(JSON.stringify(acounts.students[0].firstName));

    console.log(JSON.stringify(acounts.students[0].password));

    var user = JSON.parse(localStorage.getItem('users'));

    console.log(JSON.stringify(user));

    module.exports = { now };

    location.href = '../home.html';


}

function findStudent(name, pass) {

    var all = JSON.parse(localStorage.getItem('users'));

    var allSize = all.students.length;

    console.log(allSize);
    console.log("name");
    console.log(JSON.stringify(all.students[allSize - 1].firstName));
    console.log(name);

    console.log("password");
    console.log(JSON.stringify(all.students[allSize - 1].password));
    console.log(pass);


    for (var l = 0; l < allSize; l++) {

        if ((all.students[l].firstName) == name) {

            console.log("name");
            console.log(JSON.stringify(all.students[l].firstName));
            console.log(name);




            if ((all.students[l].password) == pass) {


                console.log("password");
                console.log(JSON.stringify(all.students[l].password));
                console.log(pass);


                return all.students[l];

            }



        }
    }
    console.log("not found")

}

function logger() {


    fn = userNameL.value;
    pw = passL.value;

    now = JSON.stringify(findStudent(fn, pw));

    console.log("now");
    console.log(now);

    location.href = '../home.html';


    module.exports = { now };




}







// var user = JSON.parse(localStorage.getItem('users'));

// console.log(JSON.stringify(user));







// console.log(checker);

// if (checker == 1) {

//     console.log("HEY");


//     console.log(fn);







// }
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