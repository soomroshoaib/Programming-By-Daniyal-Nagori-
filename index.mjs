// console.log("elll1234")
// alert("soomro")

// var name = "soomro123 "

// name = "Soomro muammas "

// console.log("name1", name)


// var name = "soomro "

// console.log("name1", name)
 

///Variable scope    
 
//agr kise varabale  ko funcation k under define keeya hai ai wo  Locial Scope 
//example 
// function abc (){

//     var name3 = "solangi "

//     console.log("name3", name3)
// }

// abc()


//and other example Global scope 

// example 

// var name11 = "shoaib"

// function myInformation (){
//     console,log("name" , name11)
// }

// myInformation()

// var name = `noman Ali 
// '''''''soomro '''''''`

// console.log(name)



// const age = prompt("lovely your age");


// if(age === "23"){
//     console.log("mashallah yau are age is perfect ")
// }


// const age = Number(prompt("lovely your age"));


// if(age === 23){
//     console.log("mashallah yau are age is perfect ")
// }


// var num = 9
// var num2 = 3

// console.log(num % num2)

// const age = prompt("enter your age ? ")

// if(age == 20){
//     console.log("your comfatable age")
// }else{
//     console.log("your not elgable ")
// }


// const name = prompt("where did ypu live........... ? ")
// const correctAnswer = "Pakistan";

// if(name.toLocaleUpperCase() == correctAnswer){
//     console.log("your Answer is correct")
// }else if(name == "Pakista"){
//     console.log(" your answer is closed ")
// }else{
//     console.log("please correct the answer .......")
// }


// let name = prompt("enter your name ");

// let friend = ['soomro', " tanveer ", "yasir Soomro "]

// let as = friend.push(name);
// console.log(as)
// console.log(friend)


// pop


// let friend = ['soomro', " tanveer ", "yasirSoomro "];
// let aad = friend.pop()

// console.log(aad)

// let friend = ['soomro', " tanveer ", "yasirSoomro "];
// friend.push("Ali Haider  ")
// console.log(friend)

// let friend = ['soomro', " tanveer ", "yasirSoomro "];
// friend.pop();
// console.log(friend)

// push meaning array  ki last  value add 
// arr.pop()     pop meaning array ki last mei value ko delete
// arr.shift()      shift meaning remove the first Element array 
// arr.unshift(44)    unshift meaning add the first Element array 
//arr.splice(2,2,)     splice meaning add delete all in one 
//arr.reverse()            reverse  meaning reverse
// const newarr = arr.slice(1,3)   slice meaning new array create 
// console.log(newarr)
// console.log(arr)

// let friend = ['soomro', " tanveer ", "yasirSoomro "];

// friend.shift();
// console.log(friend)

// let friend = ['soomro', " tanveer ", "yasirSoomro "];
// friend.unshift("Ali Haider");
// console.log(friend)

// let friend = ['soomro', " tanveer ", "yasirSoomro "];
// friend.splice(1,0,"Hussain soomro");

// console.log(friend);

// let friend = ['soomro', " tanveer ", "yasirSoomro ", "Noman Ali ", "jawad "];
// friend.reverse();
// console.log(friend)

// let friend = ['soomro', " tanveer ", "yasirSoomro ", "Noman Ali ", "jawad "];
// let a =friend.slice(2,4);

// console.log(friend)
// console.log(a)

/////////////////////////////////////////////Object

// const name ={
//     name: "Noman-Ali",
//     Father: "Ali ",
//     Age:   12,
//     'Name-Father ': "JAveed-iqabal"
    
// }
// console.log(name["Name-Father "]




//  const names = ['shoaib', 'soomro', "abdullah", "tanveer",'noman']

// for(let i=0; i<names.length; i++){
//     console.log(names[i])
// }
// for(let i = 0; i<1000 ; i++){
//     console.log(i)
// }


// for(let i = 0; i<1000; i++){
//     console.log(i)
// }

// const names = ['shoaib', 'soomro', "abdullah", "tanveer",'noman'];
// for(let i = 0; i<names.length; i++){
//     console.log(names[i]);
// }

///////////////for in Loop ////////////////////////
// for(let elem in names){
//     console.log(elem)
// }

////////////////////////////for of loop

// for(let elem of names){
//     console.log(elem)
// }
///////////////////////////////////////for eac


// names.forEach(function(ind, value ){
//     console.log(value + "  " + ind)
// })


// const names = ['shoaib', 'soomro', "abdullah", "tanveer",'noman'];
// for(let i = 0; i<= 5; i++){
//     console.log(names[i]);
// }


// const city = ["karachi", "Lahore", "Islamabad", "RahimYarkhan"];
// for(let i = 0; i <= 4; i++){
//     if("Islamabad" === city[i]){
//         console.log("it s is one of the best cleanest city ");
//         break;
//     }

// }


// const city = ["karachi", "Lahore", "Islamabad", "RahimYarkhan"];
// for(let i = 0 ; i<=4; i++){
//     if("RahimYarkhan" === city[i]){
//         console.log("it is the one the best city ")
//         break;
//     }
    
// }


// const city = ["karachi", "Lahore", "Islamabad", "RahimYarkhan"];

// for(let i = 0; i<city.length ; i++){
//     console.log(i)
// }



 var FirstName = ['shoaib', 'Ali', "abdullah", "tanveer",'noman'];
var LastName = [" soomro", " Solangi", " tanveer boeri ", " naomer", " soomro"];
var FullName = [];


for(var i = 0; i<FirstName.length ; i++){
    
    for(var a = 0; a<LastName.length; a++){
        FullName.push(FirstName[i] + LastName[i])
    }
}

console.log(FullName)