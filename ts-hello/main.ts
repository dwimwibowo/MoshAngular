// Compile: tsc --target ES6 main.ts && node main.js

// ---------------------------------------- 01
function log(message: string) {
     console.log(message);
}

var message = "Hello World";

log(message + "\n");

// ---------------------------------------- 02 = var VS let
function doSomething(){
     for(var i = 0; i < 5; i++){
          console.log(i);
     }

     console.log("Finally: " + i + "\n");
}

doSomething();

// ---------------------------------------- 03 = data types
let a: number;
let b: boolean;
let c: string;
let d: any;
let e: number[] = [1, 2, 3];
let f: any[] = [1, true, 'a', false];

const ColorRed = 0;
const ColorGreen = 1;
const ColorBlue = 2;

enum Color { Red = 0, Green = 1, Purple = 2, Blue = 3 };
let backgroundColor = Color.Red;

// ---------------------------------------- 04 = data type cast
let msg: string = 'abc';
let msg2 = (<string> msg).endsWith('c');
let msg3 = (msg as string).endsWith('c');

// ---------------------------------------- 05 = function vs arrow function
let logMessage = function(message: string) {
     console.log(message);
}

let doLogMessage = (message: string) => {
     console.log(message);
}

let doMessage = () => console.log();

// ---------------------------------------- 06 = custom type function
interface Point {
     c: number,
     d: number
}

let drawPoint = (
          point: {a: number, b: number},
          point2: Point
     ) => { // inline annotations
          console.log("a: " + point.a + ", b:" + point.b + "\n");
          console.log("c: " + point2.c + ", d:" + point2.d + "\n");
     }

drawPoint(
     {
          a: 1,
          b: 2
     },
     {
          c: 3,
          d: 4
     }
);

// ---------------------------------------- 07 = class
class Coordinate {
     private _x: number = 0;
     private _y: number = 0;

     constructor(x: number, y: number){ // x? = ? mean optional
          this._x = x;
          this._y = y;
     }

     getX(){
          return this._x;
     }

     setX(value: number) {
          if(value < 0)
               throw new Error("Value cannot be less than 0");

          this._x = value;
     }

     get y(){
          return this._y;
     }

     set y(value: number) {
          if(value < 0)
               throw new Error("Value cannot be less than 0");

          this._y = value;
     }
     
     draw() {
          console.log("x: " + this._x + ", y:" + this._y + "\n");
     }
}

let coord: Coordinate = new Coordinate(123.45, 678.90);

coord.draw();
coord.setX(100);
coord.draw();

coord.y = 200;
coord.draw();

// ---------------------------------------- 08 = modules
import { People } from "./people.js";

let people = new People("Dwi", "Wibowo");
people.fullName;

// ---------------------------------------- 09
import { LikeComponent } from "./like.component.js";

let component = new LikeComponent(10, true);
component.onClick();
console.log(`likesCount: ${component.likesCount}, isSelected: ${component.isSelected}`);