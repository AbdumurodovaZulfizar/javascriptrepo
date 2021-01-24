// let foo = 'hello, world';
// console.log(foo + ' -Salom, dunyo');

// function addNumber (num1, num2) {
//     console.log(num1 + num2)
// }
// addNumber(44, 39)
// // obyekt yaratish
// let fo = {
//     name:"zulfizar",
//     age:19,
//     sayName() {
//         console.log(this.name)
//     }
    
// };
// console.log("hello world")




// from this line I have began to learn javascript with freecodecamp
// var myName ='Zulfizar';
// myName = 'Abdumurodova';

// let ourPurpose = 'To be happy in both worlds!'
    
// const purpose = 'To be happy in both worlds!'

// var a;
// var b = 6;
// console.log(a)
// a = 5;
// b = a;
// console.log(a);
// console.log(b);
//     var c = 8;
//     var d = 7;
//     var e = 'I am a';

//     c = c + 3;
//     d = d + 4;
//     e = e + 'String!';
//     console.log(c,d,e);
//     // funksiya nomlari va varieblelarni dastlabki harfini kichkina harflarda , keyingi kelgan so'zlarni joy tashlamasdan katta harf bilan yozish kerak.


//     // adding numbers
//     var sum = 30 + 5;
//     console.log(sum);
//     // substracting numbers
//     var sub = 40-35;
//     // multiplying numbers
//     var product = 5*8;
//     // dividing numbers
//     var div = 56/7;
//     // Incrementing numbers
//     var inc = 23;
//     inc++;
//     console.log(inc);
//     // decrementing numbers
//     var dec = 30;
//     dec--;
//     console.log(dec);
//     // decimal numbers
// var ourDecimal = 4.6;
// var myDeciminal = 0.009;
// // multiply numbers
// var mul = 4.5*3.4;
// console.log(mul);
// // devide decimal numbers
// var mal = 3.4/1.7;
// console.log(mal);
// // Finding reminder
// var remainder;
// remainder = 30%4;
// console.log(remainder);
// 


// var a = 4;
// var b = 6;
// var c = 55;

// a += 2;
// b += 56;
// c += 8;
// // compound assignments with argument substruction
// a -= 3;
// b -= 23;
// c -= 45;
// // compound assignments with argument multiplication
// a *= 2;
// b *= 34;
// c *= 21;
// // compound assignments with argument division
// a /= 45;
// b /= 1;
// c /= 5;
// // declare String variables
// var firstName = 'Zulfizar';
// var lastName = 'Abdumurodova';
// // Escaping Literal Quotes in Strings
// var myStr = "I am a \"double qupted\" string inside double quotes";
// var ourStr = 'I am "single quoted" string with single quoted string !';
// console.log(myStr,ourStr);
// // Escape sequences in strings
// v
// var ourStr = 'I come first. ';
// ourStr += 'I come second!';
// console.log(ourStr);
// // 
// var myStr = 'I believe in Allah. ';
// myStr += 'Allah is enough for me!';
// console.log(myStr);

// Constructing Strings with Variebles
// var ourName = "We are Abdumurodov's Family";
// var myName = "I am proud of my Family, " + ourName + " Alhamdulillah for my family and my work!";
// console.log(myName);
// // Appending Variables to Strings
// var myMood = " Very Greatiful!";
// var iAm = "I am";
// console.log(iAm += myMood);
// // string length
// var firstName = "Zulfizar";
// var firstNameLength;
// firstNameLength = firstName.length;
// console.log(firstNameLength);
// // BracketsNotation to find first character in String
// var myName ='Zulfizar';
// var firstletter = myName[0];
// console.log(firstletter);
// var second = myName[1];
// console.log(second);
// String immutability
// var myStr = "Abdumurodova Zulfizar";
// myStr[0] = "B";
// myStr = "Zulfizar Abdumurodova";
// // Brackets notation to find last Character in Strings
// var firstName = "Zulfizar";
// var last = firstName[firstName.length - 1];
// console.log(last);
// // Brackets notation to find nth to last Character in Strings
// var lastName = "abdumurodova";
// var third = lastName[lastName.length -3];
// console.log(third);
// // Word blanks
// function words(noun, adjective, verb, adverb) {
//     var result = "";
//     result += "The " + noun + " is " + verb + " and give us " + adjective + ". He is " + adverb + "!"
//     return result
// }
// console.log(words("god","happiness", "mher", "near"))
// // store multiple Arrays with Arrays
// var array = ["Zulfizar", 19];
// // Nested arrays
// var myArray = [["zulfizar", 19], ["mo'tabar", 16], ["Diyora", 13], ["Oybek", 12], ["Muhammadali", 0.7]];
// // Access Arrays Data with Indexes
// var ourArray = [1,2,3,4,5];
// var data = ourArray[0];
// console.log(data);
// Modify Array Data with Indexes
// var myArray = ["zulfizar", 18, "talaba"];
// myArray[1] = 19;
// console.log(myArray);
// // Access Multi-Dimensional Arrays with Indexes
// var ourArray = [["zulfizar", 19], ["mo'tabar", 16], ["Diyora", 13], ["Oybek", 12], ["Muhammadali", 0.7]];
// var myData = ourArray[3][0];
// console.log(myData);
// // Multiple Arrays with push()
// var array = ["I", "believe", "in", "Allah"];
// var it = array.pop();
// console.log(array);
// // Manipulate Arrays with Shift()
// var string = ['Zulfizra', \'Mo\'tabar', 'Diyora', 'Oybek', 'Muhammadali']

// 17.01.2021
// var myArray = ['Zulfizar', 19];
// myArray.push('dasturchi');
// console.log(myArray);
// var ourArray = ['Mo\'tabar', 16, 'talaba'];
// ourArray.pop();
// console.log(ourArray);
// var array = ['Diyora',13,'o\'smir'];
// array.shift();
// console.log(array);
// array.unshift('qiz');
// console.log(array);
// // shopping list
// var dreams = [['be programmer','7 MONTHS'],['be healthy','21 days'], ['be wealthy','9 months'], ['be religious', '40 days']]

// function aims() {
//     var aim1 = "to win in both worlds";
//     var aim2 = "to be happy";
//     var aim3 = "to be healthy and wealthy";
//     var aim4 = "to be genius and create news";
//     var aim5 = "to make beatiful family";
//     var all = aim1 + " " + aim2 + " " + aim3 + " " + aim4 + " " + aim5  +"!!!"
//     console.log(all);

// }
// aims();
// function me(a, b) {
// console.log(a + " is " + b + '!')
// }
// me("Zulfizar", "loyal");
// // Global Scope
//  var Number1 = 30;
// var myGlobal = 10;
// function fun1() {

// }

// function fun2() {
//     var output = "";
//     if(typeof myGlobal != undefined) {
//         output += " MyGlobal: " + myGlobal;

//     }
//     if(typeof Number1 != undefined) {
//         (output += " Number is " + Number1);
//     }
//     console.log(output);
// }
// fun1();
// fun2();

// function for4(num) {
//     return num - 28;

// }
// console.log(for4(10));
// for4(10);

// var sum =10;
// function addFive() {
// sum += 23;
// return sum;
// }
// console.log(addFive());


// // counting cards
// var myObj  = {
//     "name":"Zulfizar",
//     "age": 19,
//     "status":"student"
// };
// delete myObj.status;
// var myName = muObj.name;
// console.log(myObj);
// var myAge = myObj["age"];
// ondeviceorientationabsolute.log(myAge)
// function myFunction (val) {
//     var result = ""
//     var myObj = {
//         "name":"Zulfizar",
//         "age": 19,
//         "status":"student",
//     };
//     result = myObj[val];
//     return result;
// }
// console.log(myFunction("status"));

ourObj = {
    "name":"Mo'tabar",
    "age":"16",
    "status":"people"
};
function check (prop) {
    if(ourObj.hasOwnProperty(prop)){
    return ourObj[prop];}
    else{
        return "Not found!"
    }
}
console.log(check("status"));
var myStorage = {
    "teaching": {
        "school":"11 years",
        "liceum": "3 years",
    },
    "working place": "Google as a developer!",
}
var data = myStorage.teaching["school"];
console.log(data);

var goodArray = [
    {
        first:"religion",
        second: [
        "health",
        "child",
        "wealth"
    ]
},
{
    first:"parents",
    second: [
        "siblings",
        "family",
        "friends"
    ]
}
];

var need = goodArray[0].second[0];
console.log(need);









