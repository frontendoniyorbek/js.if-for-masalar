// 10.number o'zgaruvchisi musbat bo'lsa va 100 dan kichik bo'lsa, konsolga "Musbat va kichik" chiqaring.
let number = 150;
if (number > 0 && number < 100) {
	console.log('Musbat va kichik');
} else {
	console.log('Bu shart qontirilmadi');
}

// 11.x va y sonlari teng bo'lmasa, konsolga "Sonlar teng emas" chiqaring.
let x = 12;
let y = 132;

if (x !== y) {
	console.log('Sonlar teng emas');
} else {
	console.log('Sonlar teng');
}

// 12.a yoki b ning biri false bo'lsa, konsolga "Kamida biri false" chiqaring.
let a = true;
let b = false;
if (a || b) {
	console.log('Kamida biri false');
} else {
	console.log("Ikkalasi ham true bo'lishi kerak");
}

// 13.num o'zgaruvchisi manfiy bo'lsa, konsolga "Manfiy son" chiqaring.
let num = -2;
if (num < 0) {
	console.log('Manfiy son');
} else {
	console.log('Musbat son son ');
}

// 14.x va y sonlari juft bo'lsa, konsolga "Ikkalasi ham juft" chiqaring.
let h = 12;
let u = 9;
if (h % 2 === 0 && u % 2 === 0) {
	console.log('Ikkalasi ham juft');
} else {
	console.log('Ikkalasi ham juft emas');
}

// 15.isMember o'zgaruvchisi true bo'lsa va age o'zgaruvchisi 18 dan katta bo'lsa, konsolga "Xush kelibsiz, a'zo!" chiqaring.
let isMember = true;
let age = 2;
if (isMember && age > 18) {
	console.log("Xush kelibsiz, a'zo!");
} else {
	console.log('Teziroq keling Abdulloh aka');
}

// 16.a va b teng bo'lsa yoki c soni musbat bo'lsa, konsolga "Shartlardan biri bajarildi" chiqaring.
let aa = 24;
let bb = 24;
let c = -15;
if (aa === bb || c > 0) {
	console.log('Shartlardan biri bajarildi');
} else {
	console.log('shart bajarilmadi');
}

// 17.isValid o'zgaruvchisi true bo'lsa, konsolga "Valid" chiqaring, aks holda "Invalid" chiqaring.
let isValit = '';
if (isValit) {
	console.log('Valid');
} else {
	console.log('inValid');
}

// 18.temp o'zgaruvchisi 0 dan past bo'lsa, konsolga "Sovuq" chiqaring.
let temp = -10;
if (temp < 0) {
	console.log('Sovuq');
} else {
	console.log('Issiq');
}

// 19.score 50 dan katta bo'lsa va isPassed true bo'lsa, konsolga "O'tdi" chiqaring.

// 24.age o'zgaruvchisi 13 va 19 orasida bo'lsa, konsolga "Teenager" chiqaring.
let agee = 26;
if (13 < agee && agee < 19) {
	console.log('Ajoyib');
} else {
	console.log("G'aroyib");
}
