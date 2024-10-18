
let fullname= "elisa";
console.log(fullname);

fullname = fullname + " rumeysa"
console.log(fullname);

fullname += " Solberg"
console.log(fullname);
const password="1234";
console.log(password);

//==============================
let counter =320;
counter =counter+1; // uzun yol
counter+=1 ;         //kisa yol
counter++;
console.log(counter)

counter--;

let a= 18;
let b= 4;
let sum=a+b;
let diff= a-b;
let prod = a*b;
let div = a/b;
let mod=a%b;
console.log(" a+b=" ,sum,
    " a-b =" ,diff , 
    " a*b=",prod,
    " a/b=",div,
    " a%b=",mod
)
let c=17;
c++;
c++;
c +=5 ; ///// farkli bir sayi ekleyecegimizde

console.log("c=",c)
let d=26;
d--;
d--;
d-=3;
console.log("d",d)

let f= 8;
f*=10;
console.log("f=",f)

let g= f/=2;
console.log("g=",g);

/// mod almayi tek cift olup olmadigina bakilabilir

console.log(17%2)// cift ise 0 tek ise 1 yazar
// 8 urun alan kutuya tum urunler sigiyor mu
console.log("koli ornegi",246%8)

// us alma **  number of exponents
console.log(6*6*6*6*6*6*6*6);
console.log(6**8);

//round down asagi yuvarlam math.floor:
console.log( Math.floor(15.25));

//round up yukari yuvarlama Math.ceil
console.log(Math.ceil(23.25))

//near rounding yakina yuvarlama Math.round
console.log(Math.round(14.25));
console.log(Math.round(14.75));

let stringNumber="11";
console.log(stringNumber); // burada string turundedei

let newNumber = Number(stringNumber);

console.log(newNumber); // bura da number
console.log("Number Constructor icine bilgi gonderildi:", Number(242))

////=======
//Boolean
// eger bir bilginin var olup olmadigini kontrol etmek icin kullanilir
// eger degiskenin icine bir veri tanaimlanmis ise true gelir 
//tanimlanmamissa  false gelir

let isActive= false; //0
isavtive=true;//1

let userName
let hasUserName= Boolean(userName);
console.log("tanimsiz ", hasUserName); // burada false olur cunku hicbir deger animli degil

userName ="user";
console.log("tanimli", Boolean(userName))
let hasUserName1= Boolean(userName);

console.log("tanimli; ",hasUserName1);// burada true verir cunku tanimli

console.log(Boolean(1n));
console.log(Boolean(-1n));
console.log(Boolean(Infinity));
console.log(Boolean({}));
console.log(Boolean(Symbol()));

let z = "0";
   console.log("z:" ,Boolean(z)); // returns true

   //===================================================

   //Değişken Türünü Kontrol Etmek ve Değişken Türünü Değiştirmek
   // typeof
   console.log(typeof 42);
// beklenen output: "number"

console.log(typeof 'Kodehode');
//beklenen output: "string"

console.log(typeof true);
// beklenen output: "boolean"

console.log(typeof Variable);
// beklenen output: "undefined"


//Değişken Türünü Değiştirmek (Type Coercion)









