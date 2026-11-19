// let jsonText = `
// {
//     "students" : [
//     {"name":"Leyla","surname":"Mammadli"},
//     {"name":"Aysel","surname":"Aliyeva"},
//     {"name":"Nurlan","surname":"Jafarov"}
//     ]
// }`;

// // console.log(jsonText);
// let obj=JSON.parse(jsonText);
// console.log(obj);

// const header=document.getElementById("demo");

// obj.students.array.forEach(s=> {
//     header.innerHTML+=s.name +" - " + s.surname;
//     header.innerHTML+="</br>";
// });


// async function MyFunction(){
//     return 1;

// };

// async function ForCall(){
//     let result=await MyFunctionAsync();
//     console.log(result);
// };

// console.log("Start");
// ForCall();
// console.log("Stop");

const Start = ()=>1;

async function GetPostsAsync(params) {
    const url = "jsonplaceholder.typicode.com/posts";

    const xhr = new XMLHttpRequest();

    xhr.open("GET",url,true);

    xhr.onload=()=>{
        console.log(xhr.status);
        console.log(JSON.parse(xhr.responseText))


    }
    xhr.send();

    
}



 