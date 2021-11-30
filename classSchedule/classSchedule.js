var a = document.getElementById("a");

var b = document.getElementById("b");

var c = document.getElementById("c");

var d = document.getElementById("d");

var e = document.getElementById("e");

var edit = document.getElementById("editB");

b.addEventListener('click',classDetail);
c.addEventListener('click',classDetail);
d.addEventListener('click',classDetail);
e.addEventListener('click',classDetail);

edit.addEventListener("click", makevis);




function classDetail(evt){

    //alert("fuck")
    alert(evt.currentTarget.innerHTML);
}





var i = document.getElementById("i1");


var ii = document.getElementById("i2");

var iii = document.getElementById("i3");

var iiii = document.getElementById("i4");

var cn = document.getElementById("cancel");

var cf =document.getElementById("confirm");

cn.addEventListener("click", canc);

function makevis(){


    i.style.display = 'block';
    ii.style.display = 'block';
    iii.style.display = 'block';
    iiii.style.display = 'block';
    cn.style.display = 'block';
    cf.style.display = 'block';
    
    
}

function canc(){

    i.style.display = 'none';
    ii.style.display = 'none';
    iii.style.display = 'none';
    iiii.style.display = 'none';
    cn.style.display = 'none';
    cf.style.display = 'none';


}

cf.addEventListener("click", conf);
function conf(){
    
        // handle button click
       
            const rbs = document.querySelectorAll('input[name="choice"]');
            let selectedValue;
            for (const rb of rbs) {
                if (rb.checked) {
                    selectedValue = rb.value;
                    break;
                }
            }
            //alert(selectedValue);
            var id;

            if(selectedValue == "class one"){

                id = b;

            }
            else if(selectedValue == "class two"){

                id = c;




            }
            else if(selectedValue == "class three"){
                
                id = d;



            }
            else if(selectedValue == "class four"){

                id = e;


            }


            var ans = prompt(selectedValue, "infomation");

            id.innerHTML = ans;


            i.style.display = 'none';
            ii.style.display = 'none';
            iii.style.display = 'none';
            iiii.style.display = 'none';
            cn.style.display = 'none';
            cf.style.display = 'none';
    


}