class Timetable {
    constructor () {
 this.one = createElement ('h3')
 this.two = createElement ('h3')
 this.three = createElement ('h3')
 this.four = createElement ('h3')
 this.five = createElement ('h3')
 this.six = createElement ('h3')
 this.seven = createElement ('h3')
 this.eight = createElement ('h3')
 this.nine = createElement ('h3')
 this.ten = createElement ('h3')
 this.eleven = createElement ('h3')
 this.twelve = createElement ('h3')
 this.thirteen = createElement ('h3')
 this.fourteen = createElement ('h3')
 this.fifteen = createElement ('h3')
 this.sixteen = createElement ('h3')
 this.seventeen = createElement ('h3')
 this.eighteen = createElement ('h3')
 this.nineteen = createElement ('h3')
 this.twenty = createElement ('h3')
 this.twentyOne = createElement ('h3')
 this.twentyTwo = createElement ('h3')
 this.twentyThree = createElement ('h3')
 this.twentyFour = createElement ('h3')

 this.html = createElement ('h2');
 this.submitB = createButton ("Click here to update timetable")
 this.dayD = createSelect()
 this.dayD.option ("Monday")
 this.dayD.option ("Tuesday")
 this.dayD.option ("Wednesday")
 this.dayD.option ("Thursday")
 this.dayD.option ("Friday")
 this.dayD.option ("Saturday")
 this.dayD.option ("Sunday")
 this.explanations = createElement ('h2')
 
    }

hideTimetable () {
    this.one.hide()
    this.two.hide()
    this.three.hide()
    this.four.hide()
    this.five.hide()
    this.six.hide()
    this.seven.hide()
    this.eight.hide()
    this.nine.hide()
    this.ten.hide()
    this.eleven.hide()
    this.twelve.hide()
    this.thirteen.hide()
    this.fourteen.hide()
    this.fifteen.hide()
    this.sixteen.hide()
    this.seventeen.hide()
    this.eighteen.hide()
    this.nineteen.hide()
    this.twenty.hide()
    this.twentyOne.hide()
    this.twentyTwo.hide()
    this.twentyThree.hide()
    this.twentyFour.hide()

    this.html.hide()
    this.submitB.hide()
    this.dayD.hide()
}

showTimetable ()  {

    this.one.show()
    this.two.show()
    this.three.show()
    this.four.show()
    this.five.show()
    this.six.show()
    this.seven.show()
    this.eight.show()
    this.nine.show()
    this.ten.show()
    this.eleven.show()
    this.twelve.show()
    this.thirteen.show()
    this.fourteen.show()
    this.fifteen.show()
    this.sixteen.show()
    this.seventeen.show()
    this.eighteen.show()
    this.nineteen.show()
    this.twenty.show()
    this.twentyOne.show()
    this.twentyTwo.show()
    this.twentyThree.show()
    this.twentyFour.show()

    this.html.show()
    this.submitB.show()
    this.dayD.show()
}

createInputs () {
    this.inputOne = createInput () 
    this.inputTwo = createInput ()
    this.inputThree = createInput ()
    this.inputFour = createInput ()
    this.inputFive = createInput ()
    this.inputSix = createInput ()
    this.inputSeven = createInput ()
    this.inputEight = createInput ()
    this.inputNine = createInput () 
    this.inputTen = createInput ()
    this.inputEleven = createInput ()
    this.inputTwelve = createInput ()
    this.inputThirteen = createInput ()
    this.inputFourteen = createInput ()
    this.inputFifteen = createInput ()
    this.inputSixteen = createInput ()
    this.inputSeventeen = createInput () 
    this.inputEighteen = createInput ()
    this.inputNineteen = createInput ()
    this.inputTwenty = createInput ()
    this.inputTwentyOne = createInput ()
    this.inputTwentyTwo = createInput ()
    this.inputTwentyThree = createInput ()
    this.inputTwentyFour = createInput ()
   

    this.givePosition()
    this.hideInputs()
    this.hideTimetable()
} 

hideInputs () {
    this.inputOne.hide()
    this.inputTwo.hide()
    this.inputThree.hide()
    this.inputFour.hide()
    this.inputFive.hide()
    this.inputSix.hide()
    this.inputSeven.hide()
    this.inputEight.hide()
    this.inputNine.hide() 
    this.inputTen.hide()
    this.inputEleven.hide()
    this.inputTwelve.hide()
    this.inputThirteen.hide()
    this.inputFourteen.hide()
    this.inputFifteen.hide()
    this.inputSixteen.hide()
    this.inputSeventeen.hide()
    this.inputEighteen.hide()
    this.inputNineteen.hide()
    this.inputTwentyOne.hide()
    this.inputTwentyTwo.hide()
    this.inputTwentyThree.hide()
    this.inputTwentyFour.hide()
    
    this.explanations.hide()
}

showInputs () {
    this.inputOne.show()
    this.inputTwo.show()
    this.inputThree.show()
    this.inputFour.show()
    this.inputFive.show()
    this.inputSix.show()
    this.inputSeven.show()
    this.inputEight.show()
    this.inputNine.show()
    this.inputTen.show()
    this.inputEleven.show()
    this.inputTwelve.show()
    this.inputThirteen.show()
    this.inputFourteen.show()
    this.inputFifteen.show()
    this.inputSixteen.show()
    this.inputSeventeen.show()
    this.inputEighteen.show()
    this.inputNineteen.show()
    this.inputTwentyOne.show()
    this.inputTwentyTwo.show()
    this.inputTwentyThree.show()
    this.inputTwentyFour.show()

    this.explanations.show()
}

givePosition () {
this.inputOne.position (displayWidth/2 - 150 , 125)
this.inputTwo.position (displayWidth/2 - 150 , 160)
this.inputThree.position (displayWidth/2 - 150 , 195)
this.inputFour.position (displayWidth/2 - 150, 230)
this.inputFive.position (displayWidth/2 - 150 , 265)
this.inputSix.position (displayWidth/2 - 150 , 300)
this.inputSeven.position (displayWidth/2 - 150 , 335)
this.inputEight.position (displayWidth/2 - 150 , 370)
this.inputNine.position (displayWidth/2 - 150 , 405)
this.inputTen.position (displayWidth/2 - 150 , 440)
this.inputEleven.position (displayWidth/2 - 150 , 475)
this.inputTwelve.position (displayWidth/2 - 150 , 510)
this.inputThirteen.position (displayWidth/2 - 150 , 545)
this.inputFourteen.position (displayWidth/2 - 150 , 590)
this.inputFifteen.position (displayWidth/2 - 150 , 625)
this.inputSixteen.position (displayWidth/2 - 150 , 660)
this.inputSeventeen.position (displayWidth/2 - 150 , 695)
this.inputEighteen.position (displayWidth/2 - 150 , 730)
this.inputNineteen.position (displayWidth/2 - 150 , 765)
this.inputTwenty.position (displayWidth/2 -150 , 800)
this.inputTwentyOne.position (displayWidth/2 - 150 , 835)
this.inputTwentyTwo.position (displayWidth/2 - 150 , 870)
this.inputTwentyThree.position (displayWidth/2 - 150 , 905)
this.inputTwentyFour.position (displayWidth/2 - 150 , 940)

this.explanations.position (800 , displayHeight/2 - 325)
this.explanations.html ("Please enter any changes in the boxes")
}

writeTT (use , day ,  time , input) {
    var x = "Data about users/" + use + "/timetable/" + day + "/" + time
    database.ref(x).update({
  input:input
    }); 
}

readTT (uses , days ,  times) {
    var playersing = database.ref("Data about users/" + uses + "/timetable/" + days + "/" + times + "/input");
    playersing.on("value",function (data){

        if (times !== undefined) {
   if (times === "00") {
     zeroZero = data.val()
   }

   if (times === "01") {
   zeroOne = data.val()
}

if (times === "02") {
  zeroTwo = data.val()
}

if (times === "03") {
   zeroThree = data.val()
}

if (times === "04") {
 zeroFour = data.val()
}

if (times === "05") {
 zeroFive = data.val()
}

if (times === "06") {
    zeroSix = data.val()
}

if (times === "07") {
 zeroSeven = data.val()
}

if (times === "08") {
zeroEight = data.val()
}

if (times === "09") {
    zeroNine = data.val()
   }

   if (times === "10") {
   oneZero = data.val()
   }
   
   if (times === "11") {
       oneOne = data.val()
   }
   
   if (times === "12") {
   oneTwo = data.val()
   }
   
   if (times === "13") {
    oneThree = data.val()
   }
   
   if (times === "14") {
       oneFour = data.val()
      }

      if (times === "15") {
        oneFive = data.val()
       }
       
       if (times === "16") {
           oneSix = data.val()
       }
       
       if (times === "17") {
     oneSeven = data.val()
       }
       
       if (times === "18") {
        oneEight = data.val()
       }
       
       if (times === "19") {
           oneNine = data.val()
          }

          if (times === "20") {
            twoZero = data.val()
           }
           
           if (times === "21") {
               twoOne = data.val()
           }
           
           if (times === "22") {
            twoTwo = data.val()
           }
           
           if (times === "23") {
        twoThree = data.val()
           }

        }
    }) 
}

givePositionHtml () {
    this.one.html ("12 pm - 1 pm -    " + "  " + oneTwo)
    this.one.position (displayWidth/2 - 500 , 105)

    this.two.html ("1 pm - 2 pm -    " + "  " + oneThree)
    this.two.position (displayWidth/2 - 500 , 140)

    this.three.html ("2 pm - 3 pm -    " + "  " + oneFour)
    this.three.position (displayWidth/2 - 500 , 175)

    this.four.html ("3 pm - 4 pm -    " + "  " + oneFive)
    this.four.position (displayWidth/2 - 500 , 210)

    this.five.html ("4 pm - 5 pm -    " + "  " + oneSix)
    this.five.position (displayWidth/2 - 500 , 245)

    this.six.html ("5 pm - 6 pm -    " + "  " + oneSeven)
    this.six.position (displayWidth/2 - 500 , 280)

    this.seven.html ("6 pm - 7 pm -    " + "  " + oneEight)
    this.seven.position (displayWidth/2 - 500 , 315) 
    
    this.eight.html ("7 pm - 8 pm -    " + "  " + oneNine)
    this.eight.position (displayWidth/2 - 500 , 350)

    this.nine.html ("8 pm - 9 pm -    " + "  " + twoZero)
    this.nine.position (displayWidth/2 - 500 , 385)

    this.ten.html ("9 pm - 10 pm -    " + "  " + twoOne)
    this.ten.position (displayWidth/2 - 500 , 420)

    this.eleven.html ("10 pm - 11 pm -    " + "  " + twoTwo)
    this.eleven.position (displayWidth/2 - 500 , 455)

    this.twelve.html ("11 pm - 12 am -    " + "  " + twoThree)
    this.twelve.position (displayWidth/2 - 500 , 490)

    this.thirteen.html ("12 am - 1 am -    " + "  " + zeroZero)
    this.thirteen.position (displayWidth/2 - 500 , 525)

    this.fourteen.html ("1 am - 2 am -    " + "  " + zeroOne)
    this.fourteen.position (displayWidth/2 - 500 , 560)

    this.fifteen.html ("2 am - 3 am -    " + "  " + zeroTwo)
    this.fifteen.position (displayWidth/2 - 500 , 595) 
    
    this.sixteen.html ("3 am  - 4 am -    " + "  " + zeroThree)
    this.sixteen.position (displayWidth/2 - 500 , 630)  
    
    this.seventeen.html ("4 am - 5 am -    " + "  " + zeroFour)
    this.seventeen.position (displayWidth/2 - 500 , 665)

    this.eighteen.html ("5 am - 6 am -    " + "  " + zeroFive)
    this.eighteen.position (displayWidth/2 - 500 , 700)

    this.nineteen.html ("6 am - 7 am -    " + "  " + zeroSix)
    this.nineteen.position (displayWidth/2 - 500 , 735)

    this.twenty.html ("7 am - 8 am -    " + "  " + zeroSeven)
    this.twenty.position (displayWidth/2 - 500 , 770)

    this.twentyOne.html ("8 am - 9 am -    " + "  " + zeroEight)
    this.twentyOne.position (displayWidth/2 - 500 , 805)

    this.twentyTwo.html ("9 am - 10 am -    " + "  " + zeroNine)
    this.twentyTwo.position (displayWidth/2 - 500 , 840)

    this.twentyThree.html ("10 am - 11 am -    " + "  " + oneZero)
    this.twentyThree.position (displayWidth/2 - 500 , 875) 
    
    this.twentyFour.html ("11 am - 12 pm -    " + "  " + oneOne)
    this.twentyFour.position (displayWidth/2 - 500 , 920)
}

readTimeTable() {
    this.readTT (login.loginUsername.value() , this.dayD.value() , "00" )
    this.readTT (login.loginUsername.value() , this.dayD.value() , "01" )
    this.readTT (login.loginUsername.value() , this.dayD.value() , "02" )
    this.readTT (login.loginUsername.value() , this.dayD.value() , "03" )
    this.readTT (login.loginUsername.value() , this.dayD.value() , "04" )
    this.readTT (login.loginUsername.value() , this.dayD.value() , "05" )
    this.readTT (login.loginUsername.value() , this.dayD.value() , "06" )
    this.readTT (login.loginUsername.value() , this.dayD.value() , "07" )
    this.readTT (login.loginUsername.value() , this.dayD.value() , "08" )
    this.readTT (login.loginUsername.value() , this.dayD.value() , "09")
    this.readTT (login.loginUsername.value() , this.dayD.value() , "10" )
    this.readTT (login.loginUsername.value() , this.dayD.value() , "11" )
    this.readTT (login.loginUsername.value() , this.dayD.value() , "12" )
    this.readTT (login.loginUsername.value() , this.dayD.value() , "13" )
    this.readTT (login.loginUsername.value() , this.dayD.value() , "14" )
    this.readTT (login.loginUsername.value() , this.dayD.value() , "15" )    
    this.readTT (login.loginUsername.value() , this.dayD.value() , "16" )
    this.readTT (login.loginUsername.value() , this.dayD.value() , "17" )
    this.readTT (login.loginUsername.value() , this.dayD.value() , "18" )
    this.readTT (login.loginUsername.value() , this.dayD.value() , "19" )
    this.readTT (login.loginUsername.value() , this.dayD.value() , "20" )
    this.readTT (login.loginUsername.value() , this.dayD.value() , "21" )
    this.readTT (login.loginUsername.value() , this.dayD.value() , "22" )
    this.readTT (login.loginUsername.value() , this.dayD.value() , "23" )
}

writeTimetable () {
    if (this.inputOne.value() !== "") {
    this.writeTT (login.loginUsername.value() , this.dayD.value() , "12" , this.inputOne.value())
}

if (this.inputTwo.value() !== "") {
    this.writeTT (login.loginUsername.value() , this.dayD.value() , "13" , this.inputTwo.value())
}

if (this.inputThree.value() !== "") {
    this.writeTT (login.loginUsername.value() , this.dayD.value() , "14" , this.inputThree.value()) 
}

if (this.inputFour.value() !== "") {
    this.writeTT (login.loginUsername.value() , this.dayD.value() , "15" , this.inputFour.value())
}

if (this.inputFive.value() !== "") {
    this.writeTT (login.loginUsername.value() , this.dayD.value() , "16" , this.inputFive.value())
}

if (this.inputSix.value() !== "") {
    this.writeTT (login.loginUsername.value() , this.dayD.value() , "17" , this.inputSix.value())
}

if (this.inputSeven.value() !== "") {
    this.writeTT (login.loginUsername.value() , this.dayD.value() , "18" , this.inputSeven.value())
}

if (this.inputEight.value() !== "") {
    this.writeTT (login.loginUsername.value() , this.dayD.value() , "19" , this.inputEight.value())
}

if (this.inputNine.value() !== "") {
    this.writeTT (login.loginUsername.value() , this.dayD.value() , "20" , this.inputNine.value())
}

if (this.inputTen.value() !== "") {
    this.writeTT (login.loginUsername.value() , this.dayD.value() , "21" , this.inputTen.value())
}

if (this.inputEleven.value() !== "") {
    this.writeTT (login.loginUsername.value() , this.dayD.value() , "22" , this.inputEleven.value())
}
    if (this.inputTwelve.value() !== "") {
    this.writeTT (login.loginUsername.value() , this.dayD.value() , "23" , this.inputTwelve.value())
    }
    if (this.inputThirteen.value() !== "") {
    this.writeTT (login.loginUsername.value() , this.dayD.value() , "00" , this.inputThirteen.value())
    }
    if (this.inputFourteen.value() !== "") {
    this.writeTT (login.loginUsername.value() , this.dayD.value() , "01" , this.inputFourteen.value())
    }
    if (this.inputFifteen.value() !== "") {
    this.writeTT (login.loginUsername.value() , this.dayD.value() , "02" , this.inputFifteen.value())
    }
    if (this.inputSixteen.value() !== "") {
    this.writeTT (login.loginUsername.value() , this.dayD.value() , "03" , this.inputSixteen.value())
    }
    if (this.inputSeventeen.value() !== "") {
    this.writeTT (login.loginUsername.value() , this.dayD.value() , "04" , this.inputSeventeen.value())
    }
    if (this.inputEighteen.value() !== "") {
    this.writeTT (login.loginUsername.value() , this.dayD.value() , "05" , this.inputEighteen.value())
    }
    if (this.inputNineteen.value() !== "") {
    this.writeTT (login.loginUsername.value() , this.dayD.value() , "06" , this.inputNineteen.value())
    }
    if (this.inputTwenty.value() !== "") {
    this.writeTT (login.loginUsername.value() , this.dayD.value() , "07" , this.inputTwenty.value())
    }
    if (this.inputTwentyOne.value() !== "") {
    this.writeTT (login.loginUsername.value() , this.dayD.value() , "08" , this.inputTwentyOne.value())
    }
    if (this.inputTwentyTwo.value() !== "") {
    this.writeTT (login.loginUsername.value() , this.dayD.value() , "09" , this.inputTwentyTwo.value())
    }
    if (this.inputTwentyThree.value() !== "") {
    this.writeTT (login.loginUsername.value() , this.dayD.value() , "10" , this.inputTwentyThree.value())
    }
    if (this.inputTwentyFour.value() !== "") {
    this.writeTT (login.loginUsername.value() , this.dayD.value() , "11" , this.inputTwentyFour.value())
    }
}



    display () {
this.html.html ("Choose which days timetable you'll see")
this.html.position (displayWidth/2 - 300 , 10)

//displayHeight = 1000

this.submitB.position (800 , displayHeight/2 - 255)
this.dayD.position (displayWidth/2 - 300 , 75)
this.helloss = this.dayD.value()

if (this.helloss === "Monday" || this.helloss === "Tuesday" ||this.helloss === "Wednesday" ||this.helloss === "Thursday" ||this.helloss === "Friday" ||this.helloss === "Saturday" ||this.helloss === "Sunday" ) {
    this.readTimeTable()
    this.givePositionHtml ()
   
}

    this.readTimeTable()

this.givePositionHtml ()

this.submitB.mousePressed(()=>{
this.writeTimetable()
this.readTimeTable()

this.givePositionHtml ()
})
    }
}