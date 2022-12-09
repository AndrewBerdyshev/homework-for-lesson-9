// task1
// class Car{
//     constructor(manufacturer, model, release_year, speed){
//             this.manufacturer = manufacturer;
//             this.model = model;
//             this.release_year = release_year;
//             this.speed = speed;
//     }
//     PrintInfo(){
//         console.log(`Manufacturer: ${this.manufacturer}\nModel: ${this.model}\nRelease year: ${this.release_year}\nSpeed: ${this.speed}`);
//     }
//     CalculateTime(distance){
//         var time_without_relax = distance / this.speed;
//         var result = time_without_relax + Math.floor(time_without_relax / 4);
//         return result;
//     }
// }
// var car = new Car("Ford", "Mustang gt 500", "1964", 250);
// car.PrintInfo();
// console.log(car.CalculateTime(1000));

// task2
// class Fraction{
//     constructor(numerator, denominator){
//         this.numerator = numerator;
//         this.denominator = denominator;
//     }
//     Fold(a, b){
//         if(a.denominator !== b.denominator){
//             let temp = a.denominator;
//             a.denominator *= b.denominator;
//             a.numerator *= b.denominator;
//             b.denominator *= temp;
//             b.numerator *= temp;
//         }
//         return (new Fraction(a.numerator + b.numerator, a.denominator)).Shorten();
//     }
//     Subtract(a, b){
//         if(a.denominator !== b.denominator){
//             let temp = a.denominator;
//             a.denominator *= b.denominator;
//             a.numerator *= b.denominator;
//             b.denominator *= temp;
//             b.numerator *= temp;
//         }
//         return (new Fraction(a.numerator - b.numerator, a.denominator)).Shorten();
//     }
//     Multiply(a, b){
//         return (new Fraction(a.numerator * b.numerator, a.denominator * b.denominator)).Shorten();
//     }
//     Divide(a, b){
//         return (new Fraction(a.numerator * b.denominator, a.denominator * b.numerator)).Shorten();
//     }
//     Shorten(a){
//         if(typeof(a) == "undefined") a = this;
//         let num;
//         if(a.numerator < a.denominator){
//             num = a.numerator;
//         } else if(a.numerator > a.denominator){
//             num = a.denominator;
//         } else {
//             return new Fraction(1, 1);
//         }
//         while(num > 0){
//             if(a.numerator % num === 0 && a.denominator % num === 0){
//                 a.numerator /= num;
//                 a.denominator /= num;
//                 break;
//             }
//             num--;
//         }
//         return a;
//     }
// }

// var fract1 = new Fraction(1, 10);
// var fract2 = new Fraction(1, 20);
// var fract3 = new Fraction(20, 20);
// var fract = new Fraction(1, 1);
// console.log(fract.Fold(fract1, fract2));
// console.log(fract.Subtract(fract1, fract2));
// console.log(fract.Multiply(fract1, fract2));
// console.log(fract.Divide(fract1, fract2));
// console.log(fract.Shorten(fract3));

// task3
// class Time{
//     constructor(hours, minutes, seconds){
//         this.hours = hours;
//         this.minutes = minutes;
//         this.seconds = seconds;
//     }
//     PrintTime(){
//         console.log(`${this.hours}:${this.minutes}${this.seconds}`);
//     }
//     AddSeconds(secs){
//         this.seconds += secs;
//         if(this.seconds >= 60){
//             this.AddMinutes(Math.floor(this.seconds/60));
//             this.seconds %= 60;
//         }
//     }
//     AddMinutes(mins){
//         this.minutes += mins;
//         if(this.minutes >= 60){
//             this.AddHours(Math.floor(this.minutes/24));
//             this.minutes %= 24;
//         }
//     }
//     AddHours(hours){
//         this.hours += hours;
//         if(this.hours >= 24) this.hours %= 24;
//     }
// }

// var time = new Time(0, 0, 0);
// time.AddSeconds(60000);
// time.AddMinutes(60000);
// time.AddHours(60000);
// console.log(time);