let calculator={
    add :(num1,num2)=>num1+num2,  
   sub :(num1,num2)=>num1-num2,
   mul :(num1,num2)=>num1*num2,
    div :(num1,num2)=>num2==0?0:num1/num2,


}

function calculate(operation){
    let num1=Number(document.getElementById("num1").value);
    let num2=Number(document.getElementById("num2").value);

  
document.getElementById("output").innerHTML= calculator[operation](num1,num2)


}


//  function agecompare(){
//     let n1=Number(document.getElementById("name1").value);
//     let n2=Number(document.getElementById("name2").value);

// if(n1<n2)
// {
//     output1=`${n2} is bigger`
// }
// else
// {
//      output1=`${n1} is bigger`
// }
// document.getElementById("output1").innerHTML= output1;

// }





