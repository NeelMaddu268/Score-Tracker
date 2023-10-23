    document.getElementById('buttona').style.display="none";
        document.getElementById('might').style.display="none";
var also;
var rounds = [];
var table = document.getElementById('show');
var count=0;
var arr = ["name1","name2","name3","name4","name5","name6","name7","name8","name9"];
var namesArr = [];
var showing = [document.getElementById('show1'),document.getElementById('show2'),document.getElementById('show3'),document.getElementById('show4'),document.getElementById('show5')];

function begin(){
    document.getElementById('begin').style.display="block";
   // document.getElementById('buttona').style.display="none";
    document.getElementById('ms').style.display="none"; 
    document.getElementById('rou').style.display="none";


}
var namesArra = [];

function might(){
    var ghn = false;
    var sjkd = true;
   var c = prompt('How many people are playing?');
      if(c==""){
            alert('Please enter a number');
location.reload()
  }
  else if(!isNaN(c) && c < 2){
        alert('Please enter a number greater than 1');

    location.reload()
  }
  else if(!isNaN(c) && c > 6){
alert('Please enter a number less than 6');

location.reload()        }else if(isNaN(c)){
alert('Please enter a number');

location.reload()        }else{
ghn=true;    }
    

        if(c!=null && ghn){

    namesArra.push(c)}else{sjkd=false}
    if(sjkd){
    let use = true;
    var yu;
    for(var i = 1;i<=c;i++){
   yu = prompt("Who is player "+i);
        
        if(yu!=null){
   namesArra.push(yu)  }else{use=false;break;}   
    }
    if(use){
    localStorage.removeItem('myCat');
localStorage.setItem('myCat', namesArra);
    var aasdf = localStorage.getItem('myCat');

//alert(aasdf)
    location.reload();
    other()
}}}


var edit = [document.getElementById('edit1'),document.getElementById('edit2'),document.getElementById('edit3'),document.getElementById('edit4'),document.getElementById('edit5')];

for(var i = 0;i<showing.length;i++){
    showing[i].style.display="none";
}

function other(){
                     document.getElementById('buttona').style.display="block";

        document.getElementById('begin').style.display="none";

    var cat = localStorage.getItem('myCat').split(",");
   // alert(cat);
    if(cat==null){alert("There is no deafult");ask()}else{
    document.getElementById('ms').style.display="block"; 
    document.getElementById('rou').style.display="block";

     document.getElementById('buttona').style.display="block";

     document.getElementById('begin').style.display="none";
        count=cat[0];
        for(var i = 1;i<=count;i++){
            namesArr.push(cat[i]);
        }
        var row = table.insertRow(0);

var cell1 = row.insertCell(0);
var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var k = [cell1,cell2,cell3,cell4,cell5]
    
for(var i = 0;i<count;i++){
    k[i].innerHTML = namesArr[i]+"&nbsp&nbsp";
     
}
    for(var i = 0;i<count;i++){
    k[i].innerHTML = namesArr[i]+"&nbsp&nbsp";
    }


for(var i = 0;i<count;i++){
    showing[i].style.display="block";
    edit[i].textContent=namesArr[i];
}
change(false)
    }}

function ask(){
                         document.getElementById('buttona').style.display="block";

        document.getElementById('begin').style.display="none";

   count = prompt('How many people are playing?');
  if(count==""){
            alert('Please enter a number');
    location.reload();
  }
  else if(!isNaN(count) && count < 2){
        alert('Please enter a number greater than 1');

    location.reload();
  }
  else if(!isNaN(count) && count > 6){
alert('Please enter a number less than 6');

    location.reload();
  }
  else if(!isNaN(count)){
    start()
  }
  else{
    alert('Please enter a number');
    location.reload();
    }
  }


function start(){
namesArr.push(prompt("Who is player "+1));

for(var i = 2;i<=count;i++){
   namesArr.push(prompt("Who is player "+i));
}
    
 var row = table.insertRow(0);

var cell1 = row.insertCell(0);
var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var k = [cell1,cell2,cell3,cell4,cell5]
    
for(var i = 0;i<count;i++){
    k[i].innerHTML = namesArr[i]+"&nbsp&nbsp";
    }


for(var i = 0;i<count;i++){
    showing[i].style.display="block";
    edit[i].textContent=namesArr[i];
}
change(false)

}
    let inputs = [document.getElementById('first'),document.getElementById('second'),document.getElementById('third'),document.getElementById('fourth'),document.getElementById('fifth'),]

var one = document.getElementById('first');
var two = document.getElementById('second');
var three = document.getElementById('third');
var four = document.getElementById('fourth');
var five = document.getElementById('fifth');
var sums = document.getElementById('sums')

function change(use){
        document.getElementById('might').style.display="block";

   // document.getElementById("sums").deleteRow(0);
    if(use){
                if(sums.rows.length==4){

               sums.deleteRow(3);

       sums.deleteRow(2);}else{
               sums.deleteRow(1);
}

                    let row2 = sums.insertRow(1);
let acell10 = row2.insertCell(0);
    let acell20 = row2.insertCell(1);
    let acell30 = row2.insertCell(2);
    let acell40 = row2.insertCell(3);
    let acell50 = row2.insertCell(4);
    let aco = [acell10,acell20,acell30,acell40,acell50];
        
        for(var i = 0;i<count;i++){
            aco[i].innerHTML = totals[i]+"&nbsp&nbsp";
     }
    }
    else{
        
      let row1 = sums.insertRow(0);
     let acell1 = row1.insertCell(0);
    let acell2 = row1.insertCell(1);
    let acell3 = row1.insertCell(2);
    let acell4 = row1.insertCell(3);
    let acell5 = row1.insertCell(4);
    let ac = [acell1,acell2,acell3,acell4,acell5];

    
     for(var i = 0;i<count;i++){
            ac[i].innerHTML = namesArr[i]+"&nbsp&nbsp";
     }
                let row2 = sums.insertRow(1);
    let acell10 = row2.insertCell(0);
    let acell20 = row2.insertCell(1);
    let acell30 = row2.insertCell(2);
    let acell40 = row2.insertCell(3);
    let acell50 = row2.insertCell(4);
    let aco = [acell10,acell20,acell30,acell40,acell50];
        also = aco;
        if(sums.rows.length==4){
        sums.deleteRow(3);
        sums.deleteRow(2);
    }
    for(var i = 0;i<count;i++){
            aco[i].innerHTML = totals[i];
     }
        
    }

}
    
    

let totals = [0,0,0,0,0];

function next(){
    
    let check = false;
    for(var i = 0;i<parseInt(count);i++){
        if(!isNaN(parseInt(inputs[i].value))){
        
        totals[i]+=parseInt(inputs[i].value)
        }else{        totals[i]+=0
}
        if(inputs[i].value=="" || isNaN(inputs[i].value)){}
        else{check=true;}
    }        change()

            let use = [];

    if(check){
    rounds.push(table.insertRow(table.rows.length))
    for(var i = 0;i<count;i++){
        change(true)
        use.push(rounds[rounds.length-1].insertCell(i));
        if(inputs[i].value==""){use[use.length-1].innerHTML = 0;}
else{
        use[use.length-1].innerHTML = inputs[i].value;}
        inputs[i].value="";
        

}}inputs[0].focus();
inputs[0].select();
   // debugger;
    //alert(document.getElementById("sums").rows[0].cells[0].innerHTML)
    //game()
    //console.clear()
}

document.addEventListener("keydown", event => {
  if (event.isComposing || event.keyCode ===13) {
    next()
  }
  else if (event.isComposing || event.keyCode ===82) {
    location.reload()
  }
  // do something
});
   // var use = sums.insertRow(1);

function game(){
   // debugger;
    var use = document.getElementById("sums").rows[1].cells;
    var other = [];
    var arr = [];
    var newArr = [];
    var otherArr = [];
   // alert(use);
    for(var i = 0;i<use.length;i++){
        after(use[i].innerHTML)
        
    }
    
    //alert(afterFunction)
    debugger;
    for(var i = 0;i<afterFunction.length;i++){
        //alert(afterFunction[i])
        if(parseInt(afterFunction[i])>149){
            alert(also[i].classList)
            also[i].style.fontSize="250px";
            //also[i].style.textDecoration = "line-through";
            //also[i].classList="using";
            alert(also[i].style)

        }
    }
       afterFunction=[]
    
    var cell;
    var splitHold;
    let z;
    let aa = [];
    //alert(arr);
    var afterUse;
    var loc;

}

var afterFunction = [];

function after(using){
    var myUsing = using.split("");

    //alert(myUsing);
    for(var i = 0;i<12;i++){
        myUsing.pop()
    }
    afterFunction.push(myUsing.join(""))
}