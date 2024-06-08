// var a=3;
// console.log(a);
// var ourArray=["Areej",23,["Talha",23]];
// console.log(ourArray[1][0]);
function chain(num)
{if(num<5){
    return "tiny";
}else if(num<10){
    return "Small";
}else if(num<15){
    return "Medium";
}
else if(num<20){
    return "Large";
}
else if(num>=20){
    return "Huge";
}
}
val=[2,2];
console.log(Math.round(Math.pow(Math.sqrt(val[0])+Math.sqrt(val[1]),2)));
chain(7);
var Areej={
    "name":"Areej","semester":6
}



// objects par loop karny k liye hota hy forin loop


var obj={
    name:"Areej",
    age:24,
    city:"Narowal"
}

for(var key in obj){
    console.log(key);
}//just print variables name

for(var key in obj){
    console.log(obj[key]);
}// just print the variables value

for(var key in obj){
    console.log(key,obj[key]);
}// now print the both name and value

//do while loop
var a=12;
do{
    console.log(a)
    a++;
}while(a>15)



    //callback fncs :Jab bhi koi aisa code jo baad me chalta hy aap likhogy, kyuki vo code baad mein chalta hai js ko ye pta nai hota ke vo complete hua ya nahi, aise code ke completion par js ko btaya jaata hai ke vo complete hogya aur aap usy chala skty ho,ye btany ka kaam callback ka hai
setTimeout(function(){
console.log("2 second baad chlna ");
},2000);
// aisa code jo baad my cahlta hai usy hum ek function dedety hn k bhaiya jab complete hojana to ye function chalaa dena, aur zo function jo hum dete hn vo aik normal function hota hai aur usy kahty hn callback function













//first class function
//js main ek concept hai jiska matlab hota hai ki aap fnc ko use kar skty ho as a value, simply function ko as value treat kr skty hn

function abcd(a){
    a();
}

abcd(function(){console.log("Hello i am Areej");})




// Thsi is not array, its object actually its just assigning value to 1,2,3,4 variables
var arr=[1,2,3,4];
arr[-1]=2
//Array.isArray([])  through this function we can check whether is it array or not








var a={
    name:"Areej",
    age:20
}
delete a.age;
console.log(a);