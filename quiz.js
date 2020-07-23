class Quiz {
   constructor () {
this.explanation = createElement ('h3')
this.answer = 0;
this.firstQ = createElement('h4')


this.habit = createSelect()
this.habit.position (10,140)
this.habit.option ("")
this.habit.option ("I work continuosly without any breaks")
this.habit.option ("I like to take small breaks between tasks")
this.habit.option ("I like to work fast and take longer breaks")

this.submitButton = createButton ("Get Started")
this.submitButton.hide()


   }

   function () {
      
   }

   display() {
    
    this.explanation.position (10,40);
    this.explanation.html ("Now please answer the following questions, This will help us know how you would like to do work")

    this.firstQ.position (10,100);

    this.answer = this.habit.value()
    this.firstQ.html ("How do you tend to work")

 if (this.answer === "I work continuosly without any breaks" || this.answer === "I like to take small breaks between tasks" || this.answer === "I like to work fast and take longer breaks") {
   this.submitButton.show()
   this.submitButton.position (10, 180)
 }

 if (this.answer === "" ) {
   this.submitButton.hide()
 }

 this.submitButton.mousePressed (()=>{

menu = new Menu()

   login.state = "menu"

   login.writeQuizState(login.loginUsername.value() , "yes")
   login.writeQuiz (login.loginUsername.value() , this.habit.value())

    this.explanation.hide()
    this.firstQ.hide()
    this.habit.hide()
//login.sucessfullLogin.hide()
this.submitButton.hide()
 })
 


   }

}