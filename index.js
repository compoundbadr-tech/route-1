       // part 1 : 
/*1*/ const num = Number("123") + 7;
console.log(num);
//----------------------------------------

/*2*/ let check = (value) =>{
    if(!value) {
        return "invalid";
    }
    return "valid"
}
console.log(check(0));
//--------------------------------------------

/*3*/ for (let i = 1; i <= 10; i++){
    if (i % 2 === 0){
        continue;
    }
    console.log(i);
}
//-------------------------------------------

/*4*/ let array = [1,2,3,4,5,6,7,8,9,10]
      let Numbers = array.filter(num => num % 2 === 0)
console.log(Numbers);
//-----------------------------------------------------

/*5*/ let arr1 =  [1,2,3]
      let arr2 = [4,5,6]
let merge = arr1.concat(arr2);
console.log(merge);
//-----------------------------------------

/*6*/ function getDay(number) {
    switch (number) {
        case 1:
            return "sunday"
            break;
        case 2:
            return "monday"
        default:
            return "invalid"
            break;
    }
}
console.log(getDay(2)); 
/*or */ 
let number = 2 
console.log(getDay(number));
//------------------------------------------------

/*7*/ let strings = ["a","ab","abc"]
let length = strings.map(str => str.length);
console.log(length);
//---------------------------------------------

/*8*/ function checkDivisible(num) {
    if (num % 3 === 0 && num % 5 === 0) {
        return "divisible by both"
    }else if (num % 3 === 0) {
        return "divisible by 3 only"
    }else if (num % 5 === 0) {
        return "divisible by 5 only"
    }else {
        return "not divisible by 3 or 5"
    }
}
console.log(checkDivisible(15));
console.log(checkDivisible(10));
console.log(checkDivisible(27));
console.log(checkDivisible(79));
//----------------------------------------------

/*9*/ const square = (num) => num * num;
console.log(square(5));
//-------------------------------------------

/*10*/ const person =  {name: "badr", age: 20}
function person1({name , age}) {
    return `${name} is ${age} years old`;
}
console.log(person1(person));
//--------------------------------------------------

/*11*/ function sumNumbers(...numbers) {
    return numbers.reduce((total, num) => total + num, 0 );
}
console.log(sumNumbers(1,2,3,4,5));
//----------------------------------------------------------

/*12*/ function delay() {
    return new Promise((resolve, reject) => {  
        setTimeout(() => {
            resolve ("succsess");
        }, 3000);
    });
}
delay().then(message => console.log(message));
//---------------------------------------------------

/*13*/ function find(arr) {
    return Math.max(...arr);
}
console.log(find([4,8,5,9]));
//----------------------------------

/*14*/ function get(obj) {
    return Object.keys(obj);
}
const person2 = {name: "badr", age: 20}
console.log(get(person2));
//--------------------------------------

/*15*/ function split(str) {
    return str.split(" ");
}
console.log(split("to the person who see my assignment right now I love you"));
//--------------------------------------------------------------------------------------

                    // part 2 :
//1 => (for each) you can use it with arrays only and you cant use break or continue
//     (for of) you can use it with arrays or any somthing else
//      and you can use break and continue  
// when you use both for each ? if you gonna write simple code use for each
// but if you want use break and continue or anything else like map , string , array 
// so use for of
//-----------------------------------------------------------------------------------------
//2 => (Hoisting) moves function and variable declarations to the top before execution
//(Temporal Dead Zone) you cannot access a let or const variable before it is declared
//-------------------------------------------------------------------------------------------
//3=> (== equality)   Compares values after automatic type conversion
//(===strict equality) Compares values and types with no automatic type conversion
//-----------------------------------------------------------------------------------
//4=> (try catch) 
// you put the code inside a try , and if an error happens ,it goes to the catch
// its important when using async because something might go wrong and java
// wont detect it without a try catch
//--------------------------------------------------------------------------------------                                                 
//5=> (conversion, coercion)
// coercion is when java converts the types automatically when it finds two 
//different types , conversion is the conversion you do manually yourself.
