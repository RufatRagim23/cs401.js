//TASK 1

//1.

// let a= 12;
// let b = 8;
// console.log(a*b);


//2.

// let x = 10/2;
// console.log(x);



//3.

// let num1 = 20;
// let num2 = 17;
// console.log(num1*num2);


//4.


// let name = 'Rufat';
// let surname = 'Ragimov';
// let birthYear= '2k';
// let info = name  + ' ' + surname + ' ' + birthYear;
// console.log(info);


//5.


// var remainder = 17 % 12;
// console.log(remainder);


//6.


// let cityName = 'Baku';
// console.log(cityName);

// cityName = 'Gence';
// console.log(cityName);







//TASK2



// let a = 1, b = 1;
// let c = ++a;
// let d = b++;
    // //console.log(c); //2
    // console.log(b);   //2
    //  //console.log(d);   //1



    //TASK3

    // let a = 2;
    // let x = 1 +(a *= 2);
    // console.log(x); //5




    //TASK 4

//   console.log('test1', 'test'); //test1 test
//   {
//      let test = 'something'
//     console.log('test2', 'test'); //test2 test
//   }
//     console.log('test3', 'test'); //test3 test


// console.log('test1', test);  // test1 undefined
// {
//      var test = "something"
//      console.log('test2', test); //  test2 something
//  }
//  console.log('test3', test); // test3 something






//TASK5 


// let name = "Ulfat" 
    // console.log(typeof name); //string

// let surname = Zakirli
// console.log(typeof surname); //error

//   let year = 2000
//   console.log(typeof year); //number

    //  year = "2000"
    // console.log(typeof year); //string

//   let city;
//   console.log(typeof city); //undefined

//    let qualification = null
//     console.log(qualification); //null

//   let obj = { name: 'ulfat' }
//   console.log(obj.name); //ulfat

//  let arr = ['a', 'b', 'c']
//     console.log(arr); //['a', 'b', 'c']



//TASK6
  

 //const arr1 = [9, 1, 5, 8, 9, 9, 3, 22, 11, 12, 32, 8]
 //arr1.sort((a, b) => a-b);
  //console.log(arr1); //ascending

// arr1.sort(function(a, b){
//     return b - a;
// })
//  console.log(arr1); //descending

// const minNumber = Math.min(...arr1);
// console.log(minNumber); //1

// const maxNumber = Math.max(...arr1);
// console.log(maxNumber); //32

// function sum(total,curr) {
//     return total + curr;
// }
// console.log(arr1.reduce(sum, 0)); //129


// arr1.push('10','88' );
// console.log(arr1); 


//console.log(arr1.slice(2)); //9,1

// arr1.unshiftshift(0,9,11);
// console.log(arr1);


// arr1.shift(4);
// console.log(arr1);



//TASK7

const arr2 = ["Murad", "Anar", "Rufet", 'Anar', 'Gulshen', 'Nermin', "Ilkin", "Fuad", "Anar"]
// for (let i = arr2.indexOf("Rufet"); i <= arr2.indexOf("Fuad"); i++  ){
//     console.log(arr2[i]);
// }

// arr2.splice (5,0, "Rovshan" );
// console.log(arr2);

// arr2.reverse();
// console.log(arr2);

// const sortedarr2 = arr2.sort();
// console.log(sortedarr2);


// for (let i = 0; i < arr2.length; i++){
//     console.log(arr2[i]);
// }

//  for (let i = 0; i < arr2.length; i++) {
//     if (arr2[i] === "Anar") {
//         console.log(arr2[i]);
//     }
//  }


// for (let i = 0; i < arr2.length; i++){
// if (arr2[i] === "Anar") {
//     console.log("Perviz");
// } else {
//     console.log(arr2[i]);
// }
//   }

//console.log(arr2.slice(-2));

// for (let i = 0; i < arr2.length; i++){
//   console.log(arr2.length);
// }



//TASK 8

// for (let i = 0; i <= 100; i++) {
//     console.log(i);
//   }
  

// for (let i = 2; i <= 20; i +=2) {
//     console.log(i);
// }


// for (let i = 1; i <= 10; i += 2) {
//     console.log(i);
//   }
  



//TASK 9

// const obj = {
//     name: 'Rufat',
//     info: {
//         surname: 'Rahimov',
//         age: '23',
//         gender: 'Male', 
//         loc: {
//             city: "Baku",
//             education: {
//                 "uniname": "BDU"
//             }
//         }
//     }
// };



    
    // obj.info.name = 'Jhon';
    // console.log(obj.info.name);

    //console.log(obj.info.gender);

    //console.log(obj.info.loc.city);
    //console.log(obj.info.loc.education.uniname);

 




    
    
