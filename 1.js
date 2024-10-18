
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
//===============================
//JavaScript'te string veri türü üzerinde çeşitli işlemler yapabiliriz
// İşte en yaygın string işlemleri ve nasıl kullanıldıkları:

// 1) String concatenation string bielestirme
//1) + operatøru

let firstName = "Elisa";
let lastName = "Solberg";
let fullName = firstName + " " + lastName;

console.log(fullName); // "Elisa Solberg"

//2 ) concat() method

let firstName1 = "Elisa";
let secondName = "rumeysa";
let lastName1 = "Solberg";
let fullName2 = firstName1.concat(" ", secondName, " ", lastName1)
console.log(fullName2);

 // 3) Template Literals (Şablon Dizeleri)
 let firstName2 = "Elisa";
 let lastName2 = "Solberg";
 let fullName3 = `${firstName} ${lastName}`;
 
 console.log(fullName);
  let m = 99;
  let n= 999;
  console.log(`${m} ganger ${n} erlik ${m*n}`);

// 2. String Uzunluğu (length)
// Bir string'in uzunluğunu öğrenmek için length özelliği kullanılır.

let message = "Hello, World!";
console.log(message.length); // 13

// 3. Karakterlere Erişim
// String içindeki belirli bir karaktere ulaşmak için köşeli parantez [] veya charAt() yöntemi kullanılabilir.

let str = "JavaScript";
console.log(str[0]); // "J"
console.log(str.charAt(1)); // "a"

// 4. Büyük/Küçük Harf Dönüşümü
// String'leri büyük veya küçük harfe çevirmek için toUpperCase() ve toLowerCase() yöntemleri kullanılır.

let text1 = "Hello World";
console.log(text1.toUpperCase()); // "HELLO WORLD"
console.log(text1.toLowerCase()); // "hello world"

// 5. String'de Arama (Searching in Strings)
// indexOf(), lastIndexOf(), includes() gibi yöntemlerle bir string içinde arama yapılabilir.

let sentence = "JavaScript is fun";
console.log(sentence.indexOf("is")); // 11 (ilk "is" dizisinin başladığı indeks)
console.log(sentence.includes("fun")); // true (var mı yok mu kontrolü)
console.log(sentence.search('ip'));  // sonuc 7 eger kelime yada harf yoksa -1

// 6. Parçalama ve Dilimleme (Slicing and Substrings)
// slice(), substring(), ve substr() yöntemleri, string'in belirli bir kısmını elde etmek için kullanılır.

let text3 = "JavaScript";
console.log(text3.slice(0, 4)); // "Java"
console.log(text3.substring(4, 10)); // "Script"

// 7. String'i Bölme (split)
// split() yöntemi, string'i belirli bir karaktere göre ayırır ve bir dizi (array) döner.

let sentence1 = "Elisa loves programming";
let words = sentence.split(" "); // ["Elisa", "loves", "programming"]

// 8. String Değiştirme (replace)
// replace() yöntemi, string içinde bir kısmı değiştirmek için kullanılır.

let text4 = "Hello Elisa!";
let newText = text4.replace("Elisa", "Rumeysa"); // "Hello Rumeysa!"
console.log(newText);
// 9. Trim (Boşluk Kaldırma)
// trim(), trimStart() ve trimEnd() string'in başındaki veya sonundaki boşlukları kaldırır.

let text5 = "   Hello World!   ";
console.log(text5.trim()); // "Hello World!"

//10. String Tekrar Etme (repeat)
// repeat() ile bir string'i belirtilen sayıda tekrar ettirebilirsin.
let word = "Java";
console.log(word.repeat(3)); // "JavaJavaJava"

// 11. String Karşılaştırma
//String'ler karşılaştırmak için === operatörü kullanılır.

let h1 = "hello";
let h2 = "hello";
console.log(h1 === h2); // true

let email= "elisarumeysasolberg@gmail.com";
let DOMAIN =email.slice(email.search('@')+1);

console.log(
    DOMAIN.slice(0,DOMAIN.indexOf('.')) //sadece gmail kismini al
);

// ilk harfi buyuk yapma
let name5 = "elisa";
let secondName5 = "rumeysa";
let lastname5 = "solberg";
let fullname5= `${name5[0].toUpperCase()}${name5.slice(1).
    toLowerCase()} ${secondName5[0].toUpperCase()}${secondName5.slice(1).
        toLowerCase()} ${lastname5[0].toUpperCase()}${lastname5.slice(1).toLowerCase()}`;
console.log(fullname5);

/*
Sorular
let url = "www.kodluyoruz.org";
let language = "Java";
Soru 1: Yukarıdaki language değişkenin değerini JavaScript olarak değiştirin ve konsola yazdırın.

Çözüm Soru 1

Soru 2: Yukarıdaki url değişkenini kullanarak "www" olmadan domain (kodluyoruz.org)
 adında yeni bir değişken oluşturun ve konsola yazdırın.

Çözüm Soru 2
*/
let url = "www.kodluyoruz.org";
let language = "Java";
console.log(language.replace("JavaScript"));
let domain= url.slice(url.indexOf('.')+1,);
console.log(domain);









