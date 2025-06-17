

const car = "RANGEROVER";
const a = car.split("").reverse().join("");

console.log(a);  
 
  




// E-TASK: 

// Shunday function tuzing, u bitta string argumentni
//  qabul qilib osha stringni teskari qilib return qilsin.
// MASALAN: getReverse("hello") return qilsin "olleh"

// @MITASK







//TASK (D)

// function checkContent(bobo, obbo) {
//   let word1 = bobo.split("").sort().join('')
//    let word2 = obbo.split("").sort().join('')

//    return word1 === word2;
// }
   


// console.log(checkContent("bobo", "obbo"));





//  TASK D

// Ikkita parametra ega function tuzing, va functioning
// berilgan birinchi va ikkinchi parametr qiymatlari o'zaro to'liq
// mos kelsa true qiymat qaytarsin

// Masalan: checkContent("mitgroup", "gmtiprou");
// Yuqoridagi misolda birinchi va ikkinchi parametr qiymatli bir xil
// ya'ni bir xil harflar qatnashganligi uchun true qiymat qaytaradi.






// // TASK (C)

// class Shop {
//   constructor(non, suv, osh) {
//     this.mahsulotlar = {
//       non: non,
//       suv: suv,
//       osh: osh
//     };   
//   }    

//   realTime() {
//     const hozir = new Date();
//     const soat = hozir.getHours().toString().padStart(2, '0');
//     const minut = hozir.getMinutes().toString().padStart(2, '0');
//     return `${soat}:${minut}`;
//   }

//   qoldiq() {
//     const vaqt = this.realTime();
//     const { non, suv, osh } = this.mahsulotlar;
//     const result = `Hozir ${vaqt}da ${non}ta non, ${suv}ta suv va ${osh}ta osh mavjud!`;
//     console.log(result);
//     return result;
//   }  

//   sotish(mahsulot, soni) {
//     const vaqt = this.realTime();
//     if (this.mahsulotlar[mahsulot] === undefined) {
//       const xatolik = `Mahsulot nomi notogri: ${mahsulot}`;
//       console.log(xatolik);
//       return xatolik;
//     }

//     if (this.mahsulotlar[mahsulot] < soni) {
//       const xatolik = `false: ${mahsulot} dan faqat ${this.mahsulotlar[mahsulot]}ta mavjud`;
//       console.log(xatolik);
//       return xatolik;
//     }

//     this.mahsulotlar[mahsulot] -= soni;
//     const result = `Hozir ${vaqt}da ${soni}ta ${mahsulot} sotildi.`;
//     console.log(result);
//     return result;
//   }

//   qabul(mahsulot, soni) {
//     const vaqt = this.realTime();
//     if (this.mahsulotlar[mahsulot] === undefined) {
//       const xatolik = `Mahsulot nomi notogri: ${mahsulot}`;
//       console.log(xatolik);
//       return xatolik;
//     }

//     this.mahsulotlar[mahsulot] += soni;
//     const result = `Hozir ${vaqt}da ${soni}ta ${mahsulot} qabul qilindi.`;
//     console.log(result); 
//     return result;
//   }
// }

// const shop = new Shop(4, 3, 2); 

// shop.qoldiq();              
// shop.sotish("non", 4);      
// shop.qabul("osh", 4);       
// shop.qoldiq();               
 







// // TASK (B) by JONY



// function countDigits(text){
//   console.log(typeof text);
//   const result = text.split("");
//   console.log(result);
  
//   const lastResult = result.filter((ele) => {
//     return ele >= 0  && ele !== " ";
//   })
//   console.log(lastResult);
// }
//  countDigits("ieowhfwoui3948665096609elch") ; 




//TASK (A) // natijamiz 3

// function countLetter(taassurotsizlik, word) {
//   let count = 0;
  
//   for (let i = 0; i < word.length; i++) {
//     if (word[i] === taassurotsizlik) {
//       count++;
//     }
//   }

//   return count;
// }

// console.log(countLetter("s", "taassurotsizlik")); 


// natijamiz 3






// console.log("===== PRACTICE =====");

// // DEFINE
// function qoldiqliBolish(a, b, callback) {
//   if (b === 0) {
//     callback("Mahraj nolga teng emas", null);
//   } else {
//     callback(null, a % b);
//   } 
// }  

// // CALL
// qoldiqliBolish(10, 10, (err, data) => {
//   if (err) console.log("Error:", err);
//   else {
//     console.log("data:", data);
//   }  
// });    





// console.log("Jack Ma maslahatlari");
// const list = [
//     "Yaxshi talaba bo'ling",  //0-20
//     "To'g'ri boshliq tanlang va ko'proq xato qiling",  // 20-30
//     "O'zingizga ishlashni boshlang",   // 30-40
//     "Siz kuchli bo'lgan narsalarni qiling", // 40-50
//     "Yoshlarga investititsiya qiling", // 50-60
//     "Endi dam oling, foydasi yo'q endi" // 60
// ];
 
// // CALLBACK function
// function maslahatBering(a, callback) {
//     if(typeof a !== 'number') callback("insert a number", null);
//     else if (a <= 20) callback(null,list[0]);
//     else if (a > 20 && a <= 30) callback(null, list[1]);
//     else if (a > 30 && a <= 40) callback(null, list[2]);
//     else if (a > 40 && a <= 50) callback(null, list[3]);
//     else if (a > 50 && a <= 60) callback(null, list[4])
//     else {

//     setInterval(function () {
//         callback(null, list[5]);
//     }, 1000);
//     }
// }

// console.log("passed here 0");
// maslahatBering(70, (err, data) => {
//     if (err) console.log("ERROR:", err);
//     else {
//         console.log(data);
//     }
// });

// console.log("passed here 1");









// function maslahatBering(a, callback) {
//     if(typeof a !== 'number') callback("insert a number", null);
//     else if (a <= 20) callback(null,list[0]);
//     else if (a > 20 && a <= 30) callback(null, list[1]);
//     else if (a > 30 && a <= 40) callback(null, list[2]);
//     else if (a > 40 && a <= 50) callback(null, list[3]);
//     else if (a > 50 && a <= 60) callback(null, list[4])
//     else {

//     setTimeout(function () {
//         callback(null, list[5]);
//     }, 5000);
//     }
// }


//ASYNC function

//  async function maslahatBering(a,) {
//     if(typeof a !== 'number') throw new Error("insert a number");
//     else if (a <= 20) return list[0];
//     else if (a > 20 && a <= 30) return list[1];
//     else if (a > 30 && a <= 40) return list[2];
//     else if (a > 40 && a <= 50) return list[3];
//     else if (a > 50 && a <= 60) return list[4];
//     else {
 
//        return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(list[5]);
//         }, 5000);
//        });

//     }
// }

// call via then/ catch
// maslahatBering(25)
// .then((data) => {
//     console.log("javob:", data);
// })
// .catch((err) => {
//     console.log("ERROR:", err)
// });


// console.log("passed here 1");


//call via async/await

// async function run() {
//     let javob = await maslahatBering(65);  
//     console.log(javob);
//     javob = await maslahatBering(31);
//     console.log(javob);
//     javob = await maslahatBering(41);
//     console.log(javob);
    
// }

// run();







// maslahatBering(65, (err, data) => {
//     if(err) console.log('ERROR:', err);
//     console.log('javob:', data)
//     });
