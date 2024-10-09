// 1)
// let num1 = parseFloat(prompt("Birinchi sonni kiriting:"));
// let num2 = parseFloat(prompt("Ikkinchi sonni kiriting:"));
// let operator = prompt("Amalni kiriting (+, -, *, /):");
// let result;

// if (operator === '+') {
//     result = num1 + num2;
// } else if (operator === '-') {
//     result = num1 - num2;
// } else if (operator === '*') {
//     result = num1 * num2;
// } else if (operator === '/') {
//     if (num2 === 0) {
//         alert("0 ga bo'lish mumkin emas.");
//     } else {
//         result = num1 / num2;
//     }
// } else {
//     alert("Noto'g'ri amal kiritildi.");
// }

// if (result !== undefined) {
//     alert("Natija: " + result);
// }



// 2)
// let personalInfo = {
//     name: prompt("Ismingiz:"),
//     surname: prompt("Familiyangiz:"),
//     age: parseInt(prompt("Yoshingiz:")),
//     address: prompt("Manzilingiz:"),
//     email: prompt("Emailingiz:"),
//     phone: prompt("Telefon raqamingiz:"),
//     education: prompt("Ta'limingiz:"),
//     profession: prompt("Kasbingiz:"),
//     hobbies: prompt("Qiziqishlaringiz:"),
//     goals: prompt("Maqsadingiz:")
// };
//     console.log(personalInfo);


// 4)
// let total = 0;
// let products = [];

// for (let i = 0; i < 5; i++) {
//     let product = prompt("Mahsulot nomini kiriting:");
//     let price = parseFloat(prompt(product + " narxini kiriting:"));
//     products.push({ product, price });
//     total += price;
// }

// let message = "Sizning savatingizdagi mahsulotlar:\n";
// for (let i = 0; i < products.length; i++) {
//     message += products[i].product + " - " + products[i].price + " so'm\n";
// }
// message += "Jami: " + total + " so'm";

// alert(message);

// 5)
// let fahrenheit = parseFloat(prompt("Fahrenheit darajasini kiriting:"));
// let celsius = (fahrenheit - 32) * 5 / 9;
// alert(fahrenheit + "°F = " + celsius.toFixed(2) + "°C");



// 6)
// let baholar = [];

//        baholar[0] = prompt("kimyo uchun bahoni kiriting:"); 
//        baholar[1] = prompt("rus tili uchun bahoni kiriting:"); 
//        baholar[2] = prompt("iqtisodiyot uchun bahoni kiriting:"); 
//        baholar[3] = prompt("jahon tarixi uchun bahoni kiriting:"); 
//        baholar[4] = prompt("algebra uchun bahoni kiriting:");
       

//        let umumiyOrtacha = (parseInt(baholar[0]) + parseInt(baholar[1]) + parseInt(baholar[2]) + parseInt(baholar[3]) + parseInt(baholar[4])) / baholar.length;


//        alert("Sizning olgan baholaringiz:\n" + 
//       "kimyo: " + baholar[0] + "\n" +
//       "rus tili: " + baholar[1] + "\n" +
//       "iqtisodiyot: " + baholar[2] + "\n" +
//       "jahon tarixi: " + baholar[3] + "\n" +
//       ": " + baholar[4] + "\n" +
//       "Umumiy o'rtacha: " + umumiyOrtacha);

//       console.log(alert);