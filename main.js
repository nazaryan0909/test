// const year = 2007
// month = 4,
// day = 24,
// hours = 2,
// minutes = 15,
// seconds = 45;

// let bd = new Date(year, month, day, hours, minutes);
// console.log(bd);

// //get the parts of date

// bd.getFullYear();
// bd.getMonth(); // 0 -> january , 11 -> Dectember
// bd.getDate();
// bd.getDay();
// bd.getHours();
// bd.getMilliseconds();
// bd.getTime();
// console.log( bd.getTime())

// //set date
// bd.setFullYear(2010);
// bd.setMonth(0);
// //bd.setDate();
// bd.setHours(6);
// //bd.setMinutes();
// //bd.setTime();
// console.log(bd);

// let date = new Date();
// console.log(date.getDate());

// let hour = date.getHours();
// let min = date.getMinutes();
// console.log(`${hour}:${min}`);

// let day = date.toLocaleString('default', {weekday: 'long'});
// console.log(day);

// const year = 2000
//   month = 12,
//   day = 29;


//   let bd = new Date(year,month,day);
//   console.log(bd);

//   bd.getFullYear();
// bd.getMonth();
// bd.getDate();
// bd.getDay();
// bd.getHours();
// console.log( bd.getTime())

// bd.setFullYear(2009);
// bd.setMonth(4);
// bd.setDate(22);
// console.log(bd);

// let db1 = new Date(2000,3,18);
// console.log(db1);

// if(db1.getFullYear() < bd.getFullYear()){
//     console.log(db1.getFullYear() + " " + "is the biggest")
// }else {
    
// console.log(bd.getFullYear() + " " + "is the biggest")

// }

// if(db1.getFullYear() == bd.getFullYear()){
//   if(db1.getMonth() < bd.getMonth()){
//   console.log(db1.getMonth())
//   } else {
//     console.log(bd.getMonth())
//   }
// } else {
//     if(db1.getFullYear() < bd.getFullYear()){
//         console.log(db1.getFullYear())
//     } else {
//         console.log(bd.getFullYear())
//     }
// } 
    
// const Karen = new Date(1985,7,23)

// const Armen = new Date(1985,9,8)

// if(Karen.getFullYear() == Armen.getFullYear()){
//     if(Karen.getMonth() < Armen.getMonth()){
//         console.log("Karen is the biggest")
//     }else {
//         console.log("Armen is the biggest")
//     }
// } else {
//     if(Karen.getFullYear() < Armen.getFullYear()){
//         console.log("Karen is the biggest")
// } else {
//     console.log("Armen is the biggest")
// }
// }

//TNAYIN HASHVEL NUYN PAYMANY AMISNERY NUYNNE TARBERAKOV, ETE AMISNERY NUYYN EN HASHVEL ORER OV

// const Alen = new Date(2009,5,9)

// const Lyusi = new Date(2009,5,30)

// if(Alen.getFullYear() == Lyusi.getFullYear()){
//     if(Alen.getMonth() === Lyusi.getMonth()){
//         if(Alen.getDate() < Lyusi.getDate()){
//             console.log("Alen is biggest")
//         }else {
//             console.log("Lyusi is biggest")
//         }
//     }else {
//         if (Alen.getMonth() < Lyusi.getMonth()){
//             console.log('Alen is biggest')
//         }else {
//             console.log("Lusi is biggest")
//         }
//     }
// }else {
//     if(Alen.getFullYear() < Lyusi.getFullYear()){
//        console.log("Alen is biggest") 
//     }else {
//         console.log("Lusi is biggest")
//     }
// }

// let start = new Date(1992,0,1);
// let end = new Date(1993,0,12);
// let count = 0;

// start = Date.parse(start);
//  console.log(start);

//  end = Date.parse(end);
//  // console.log(end - start);
  
//  for(let i = start; i <= end ; i = i + 24*60*60*1000){
//     count++
//  }
//  console.log(count)

// let now = new Date();
// console.log(now)

// function formatDate(date) {
//     const monthNames = [
//         'Jan', 'Feb', 'Mar', 'Apr', ' May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
//     ];

// let day = date.getDate();
// let monthIndex = date.getMonth(); //4
// let year = date.getFullYear();

// return day + '.' + monthNames[monthIndex] + '.' + year;

// }

// console.log(formatDate(now)); // Output:

// function isNahanj(year){
//     let start = new Date(year,0,1);
//     let end = new Date(year,11,31);
//     let countDay = (Date.parse(end) - Date.parse(start))/1000/60/60/24 + 1
//     if(countDay === 366){
//         return " Nahanj tari"
//     } else {
//         return "sovorakan tari"
//     }
// }
// console.log(isNahanj(2028))

///////////////JSON/////////////////////////

//1.
// let num = `["gurgen",2,3]`
// console.log(num);
// let num1 = JSON.parse(num);
// console.log(num1);
// console.log(num1[0])
// //2
// let admin = `{"anun":"Poghos","tariq":"25","pashton":"NetAdmin"}`
// console.log(admin);
// admin = JSON.parse(admin);
// console.log(admin);
// //STRINGIFY

// JSON.stringify({});
// JSON.stringify(true);
// JSON.stringify(`Hello`);
// let test = JSON.stringify({x:15,y:25})
// JSON.stringify([1,2,"admin"])
// console.log(typeof test)
// console.log(JSON.stringify([1,2,"admin"]))

// 7. Նկարագրել ֆունկցիա, որն արգումենտում ստանում է ամբողջ թվերի հաջորդականություն և վերադարձնում է հաջորդականության  
// ա) տարրերի միջին թվաբանականը,  
// բ) ամենաշատ կրկնվող տարրը,  
// գ) այն տարրերի քանակը, որոնք առանց մնացորդի բաժանվում են իրենց կարգահամարի վրա, 
//  դ) առաջին բացասական տարրի կարգահամարը կամ -1, եթե այն բացասական տարր չի պարունակում,  
// ե) վերջին 0-ի կարգահամարը կամ -1, եթե այն 0-ներ չի պարունակում

// ա) տարրերի միջին թվաբանականը,  

// function mijin(arr){
//     let sum = 0;
//     for(let i = 0; i < arr.length; i++){
//         sum = sum + arr[i]
//     }
//    return sum / arr.length
// }
// console.log(mijin([2,4,3,1,5]))

// բ) ամենաշատ կրկնվող տարրը,  

// function B7(arr){
//  let obj = {}
//  for(let i = 0; i < arr.length; i++){
//     if(obj[arr[i]] == undefined ){
//         obj[arr[i]] = 1
//     }else {
//         obj[arr[i]]++
//     }
//  }
//  let arr1 = Object.entries(obj) 
//  arr1.sort((a, b) => b[1] - a[1])
//  return arr1[0][0] 

// }
// console.log(B7([3,3,2,1,9,9,9,6,6,7,1,6]))

// գ) այն տարրերի քանակը, որոնք առանց մնացորդի բաժանվում են իրենց կարգահամարի վրա, 

// function G(arr){
//     let count = 0;
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] % i == 0){
//             count++
//         }
//     }
//     return count
// }
// console.log(G([2,4,8,5,1,15]))

//  դ) առաջին բացասական տարրի կարգահամարը կամ -1, եթե այն բացասական տարր չի պարունակում,  

// function D(arr){
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] < 0){
//             return i
//         }
//     }
//     return -1
//  }
//  console.log(D([2,3, 1, 5,-8,-4]))

// ե) վերջին 0-ի կարգահամարը կամ -1, եթե այն 0-ներ չի պարունակում
//TNAYIN^
// Vitali Mangasaryan, [5/12/2024 11:50 AM]
// 8. Նկարագրել ֆունկցիա, որն արգումենտում ստանում է իրական թվերի զանգված և վերադարձնում է՝  
// ա) true, եթե զանգվածը պարունակում է կրկնվող տարրեր, և վերադարձնում է false՝ հակառակ դեպքում,
// բ) այն տարրերի քանակը, որոնք զանգվածում հանդիպում են ճիշտ 1 անգամ:

// ա) true, եթե զանգվածը պարունակում է կրկնվող տարրեր, և վերադարձնում է false՝ հակառակ դեպքում,

// function krknvox(arr) {
//     let R = {};
//     for (let i = 0; i < arr.length; i++) {
//         if(R[arr[i]]) {
//             return true;
//         }
//         R[arr[i]] = true;
//     }
//     return false;
// }
// console.log(krknvox([2, 4, 6, 2]))

// բ) այն տարրերի քանակը, որոնք զանգվածում հանդիպում են ճիշտ 1 անգամ:

// function onlyOne(arr){
//     let count = 0
//     let obj = {}
//     for(let i = 0; i < arr.length; i++){
//         if(obj[arr[i]] === undefined){
//             obj[arr[i]] = 1
//         }else {
//             obj[arr[i]]++
//         }
//     }
//     for(let key in obj){
//         if(obj[key] === 1){
//             count++
//         }
//     }
//     return count
// }
// console.log(onlyOne([2,3,2,5,6,7,5,8]))
// ե) վերջին 0-ի կարգահամարը կամ -1, եթե այն 0-ներ չի պարունակում

// function n(arr) {
//     for(let i = arr.length-1; i >= 0; i--){
//         if(arr[i] == 0 ){
//           return i
//         }
//     }
//     return -1
// }

// console.log(n([5, 9, 0, 5, 8]))

// function f(arr){
//     let arr1 = []
//     for(let i = 0; i < arr.length; i++){
//         if(arr1.includes(arr[i]) === true){
//             return true
//         }else {
//             arr1.push(arr[i])
//         }
//     }
//     return false

// }
// console.log(f([3,4,5,6,7,13,832]))

// let code = "98 97 114 101 118 32 98 97 114 101 118";

// let arr = code.split(" ")
// console.log(arr)
//  console.log(String.fromCharCode(...arr))

//Գտնել տրված տեքստի մեջ ություն վերջածանցով բառը և դուրս բերել։ 
  // let str = "Հայաստանի լեռնաշխարհի բնությունը գեղեցիկ է"; 
  // let str1 = "ություն";

  // 10. Արտածել տրված n թիվը չգերազանցող բոլոր այն բնական
  //  թվերը, որոնք առանց մնացորդի բաժանվում են իրենց թվանշանների գումարի վրա:


//   function s(num) {
//     return num.toString().split('').reduce((sum, digit) => sum + parseInt(digit), 0);
// }
// function e(n) {
//     let result = [];
//     for (let i = 1; i <= n; i++) {
//         let Sum = s(i);
//         if (i % Sum === 0) {
//             result.push(i);
//         }
//     }
//     return result;
// }
// let n = 50;  
// console.log(e(n));

// function sumDgigtNumber(num){
//   let sum = 0; 
//   while(num > 0){
//     let c = num % 10;
//     sum = sum + c;
//     num = (num - c) / 10
//   }
//   return sum
// }

// let n = 100;
// for(let i = 1; i <= n; i++){
//   if(i % sumDgigtNumber(i) === 0){
//     console.log(i)
//   }
// }

// let str = "Հայաստանի լեռնաշխարհի բնությունը գեղեցիկ է"
// let str1 = "ություն"

// //console.log(str.indexOf(str))
//  const arr = str.split(" ");
//  console.log(arr)

//  for(let i = 0; i < arr.length; i++){
//   let index = arr[i].indexOf(str1);
//   let lastIndex = arr[i].lastIndexOf(str1);
//   if(index === lastIndex && index != -1){
//     console.log(arr[i])
//   }
//  }

// function check(str, str1) {
  
//   let arr = str.split(" ");
//   console.log(arr);

//   for(let i = 0; i < arr.length; i++){
//     if(arr[i].includes(str1) === true){
//       console.log(arr[i]);
//     }
//   }
// }

//   check("Հայաստանի լեռնաշխարհի բնությունը գեղեցիկ է","ություն" )

//! function constructoors

// function User(name,age,position,addres){
//   this.name = name;
//   this.age = age;
//   this.position = position;
//   this.status = true;
//   this.addres = addres
// }
//   let u1 = new User("Aram",30,"Programmer","echmiadzin","gegam",56);
//   console.log(u1)
//   let u2 = new User("Karen",25,"SysAdmin")
//   // u2.status = false;
//   console.log(u2)

//   let u3 = new User("Karen", 55)
//   console.log(u3)

// console.log(User.prototype)
// User.prototype.gurgen = function(){
//   return this.name
// }

// User.prototype.getAddres = function(){
//   return this.addres
// }
// console.log(User.prototype)
// console.log(u1.gurgen())
// console.log(u2.getAddres())  

//ClassWork  
//Ստեղծել function-constructor Book հետևյալ 3 պարտաֆիր հատկություններով 
//title 
//pub_year 
//price 
 
//show(); ֆունկցիայի PROTOTYPE ում ստեղծել մեթոդ, որը դուրս է  
//բերում այդ գրքերի տվյալները։ 
//book1, book2

// function Book(title,pub_year,price){
//   this.title = title;
//   this.pub_year = pub_year;
//   this.price = price;
// }
// let book1 = new Book("title","pub_year","price")
// console.log(book1)
// let book2 = new Book("title","pub_year","price")
//    console.log(book2)

//    console.log(Book.prototype)

// Book.prototype.show = function(){
//   return`${this.title}  ${this.pub_year}  ${this.price}`
// }
// console.log(book1.show())
// console.log(book2.show())

// //get title, get price , get pub_year, arandzin functiane

// 6. Տրված է բնական թվերի հաջորդականություն: Արտածել այդ հաջորդականության  
// ա) այն տարրերի քանակը, որոնց թվանշանների գումարը հավասար է տրված c թվին,  
// բ) 2-ի աստիճան հանդիսացող տարրերի արտադրյալը,  
// գ) որևէ թվի ֆակտորիալ հանդիսացող տարրերի միջին թվաբանականը,  
// դ) կատարյալ թվերի գումարը,  
// ե) պարզ թվերի արտադրյալը, 
//  զ) Ֆիբոնաչիի թվերի քանակը,  
// է) սիմետրիկ թվերի միջին թվաբանականը,

// let arr = [1209,4,5,67,84,9,9,39,4,5]
// let c = 12;
// let count = 0;

// function sumDigit(num){
//   let sum = 0;
//   while(num > 0){
//     sum = sum + num % 10;
//     num = Math.floor(num / 10);
//   }
//   return sum;
// }

// for(let i = 0; i < arr.length; i++){
//   if(sumDigit(arr[i]) === c){
//     count++
//   }
// }
// console.log(count)

// let arr = [2,4,5,77,256];
// let result = 1; //2 * 4 * 256

// function isTwoPow(num) {
//   while(num != 1){
//     if(num % 2 != 0){
//       return false
//     }else{
//       num = num / 2;
//     }
//   }
//   return true
// }

// for(let i = 0; i < arr.length; i++){
//   if(isTwoPow(arr[i]) === true){
//     result = result * arr[i]
//   }
// }
// console.log(result)

// let arr = [24,45,6,678,120,34,5]
// let sum = 0 
// let count = 0

// function isFactorial(num){
//   let n = 2
//   while(num % n != 0){
//     if(num % n != 0){
//       return false 
//     }else{
//       num = num / n
//       n++
//     }
//   }
//   return true
// }

// for(let i = 0; i < arr.length; i++){
//   if(isFactorial(arr[i]) === true){
//     sum = sum + arr[i];
//   }
// }
// console.log(sum)
// console.log(count)

// let arr = [3, 4, 5, 6, 7, 888, 28, 6, 34]
// let sum = 0
// function isPerfect(num){
//   let sum = 0; 
//   for(let i = 1; i <= num/2; i++){
//     if(num % 1 == 0){
//       sum = sum + i
//     }
//   }
//   if(sum == num){
//     return true
//   }else {
//     return false 
//   }
//   }

//   for(let i = 0; i < arr.length;i++){
//     if(isPerfect(arr[i]) === true){
//       sum = sum + arr[i]
//     }
//   }
//   console.log(sum)

// զ) Ֆիբոնաչիի թվերի քանակը,  
 
// let arr = [8,45,13,55,6,790] 
// let count = 0; 
 
// function isFibonacci(num){ 
//   let fib1 = 1; 
//   let fib2 = 1; 
//   let nexFib; 
//   while(fib2 < num){ 
//     nexFib = fib1 + fib2; 
//     fib1 = fib2; 
//     fib2 = nexFib; 
//   } 
//   if(fib2 == num){ 
//     return true 
//   }else { 
//     return false 
//   } 
// } 
// for(let i = 0; i < arr.length ;i++){ 
//   if(isFibonacci(arr[i]) === true){ 
//     count++ 
//   } 
// } 
// console.log(count)

// ե) պարզ թվերի արտադրյալը, 

// function parz(num){
// for(let i = 2; i <= num/2; i++){
//  if(num % i == 0){
//     return false
//  }
// }
// return true
// }
// // console.log(parz(4))

// let arr = [2, 6, 7, 3]
// let sam = 1;
// for(let i = 0; i < arr.length; i++){
//   if(parz(arr[i]) == true){
//     sam = sam * arr[i]
//   }
// }
// console.log(sam)

// է) սիմետրիկ թվերի միջին թվաբանականը,

function isSimetrik(num){
  let str = num + "";
  let arr = [];
  for(let i = str.length - 1; i >= 0; i--){
    arr.push(str[i]);
  }
  if(str == arr.join("")){
    return true
  }else {
    return false
  }
}
let arr = [243,535,3445,101]
let sum = 0;
let count = 0;

for(let i = 0; i < arr.length; i++){
  if(isSimetrik(arr[i]) === true){
    sum = sum + arr[i];
    count++
  }
}

let mijin = sum / count
console.log(mijin)