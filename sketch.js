var database , login , i , canvas, count = 0 , password , quiz , stat , menu , color , sup , calendar , y = 900 , x = y+20 , counting , video , hells = 1;
 var array = [] , fo1 , fo2 , fo3 , fo4 , fo5 , fo6 , fo7 , fo8, fo9 , fo10 , fus , no , todo , fonts , fo11 , fo12 , fo13 , fo14 , fo15 , fo16 , fo17 , fo18 , fo19 , fo20
var  timetable , zeroZero ,zeroOne , zeroTwo , zeroThree , zeroFour , zeroFive , zeroSix , zeroSeven , zeroEight , zeroNine, oneZero , oneOne , oneTwo , oneThree , oneFour, oneFive
var oneSix , oneSeven , oneEight , oneNine , twoZero , twoOne , twoTwo , twoThree 

function setup() {
  canvas =  createCanvas(displayWidth - 2000 , displayHeight - 3000);
  database = firebase.database();

  

  login = new Login()
}

function draw() {
 
 background(rgb (200 , 200 ,200));  
 
  
login.display();

if (login.state === "quiz" ){
  quiz.display()
}

if (login.state === "menu") {


  menu.display()
 }

 

} 