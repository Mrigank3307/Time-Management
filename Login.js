class Login {
    constructor () {
        canvas =  createCanvas(displayWidth - 2000 , displayHeight - 3000);
        this.state = null;
this.question = createElement ('h3')
this.yes = createButton ("Login")
this.no = createButton ("Register")
this.sup = 0;

this.timeApp = createElement ('h1')

    }

    readState (yos) {
        var player = database.ref("Data about users/" + yos + "/State");
        player.on("value",function (data){
         stat = data.val();
        }) 
      
    }

    writeQuizState (hell , yo) {
        var x = "Data about users/" + hell  
        database.ref(x).update({
       State:yo
        }); 
    }

    writeDoCount (hey , ho) {
        var x = "Data about users/" + hey
      database.ref(x).update({
    count:ho
          }); 
        
    }

    writeThingTable () {
     
    }

    writeQuiz (hell , yo) {
        var x = "Data about users/" + hell  
        database.ref(x).update({
       Type:yo
        }); 
    }


readAvailibilty (hello) {
    var players = database.ref("Registration/" + hello + "/number");
    players.on("value",function (data){
    count = data.val();
    }) 
}

readPassword (hello) {
    var playe = database.ref("Registration/" + hello + "/Data");
    playe.on("value",function (data){
    password = data.val();
    }) 
}

updateCount () {
    count = count + 1;
}

    hideButtons () {
        this.question.hide();
        this.yes.hide();
        this.no.hide();
    } 



writeRegistration (thing, count) {
   var x = "Registration/" + thing  
      database.ref(x).update({
       Data:count ,
       number:hells
      });   
}

hideUsername () {
    this.registrationElement.hide()
    this.registrationInput.hide()
}

    display () {
this.question.html ("Please login/register")
this.question.position (displayWidth/2 - 300 , displayHeight/2 - 200)
this.timeApp.html ("Time Management App")
this.timeApp.position (displayWidth/2 - 300 , displayHeight/2 - 300)
this.yes.position (displayWidth/2 - 300 , displayHeight/2 - 150);
this.no.position (displayWidth/2 - 300, displayHeight/2 - 100);

this.yes.mousePressed (() =>{
    this.loginElement = createElement ('h3') 
this.loginUsername = createInput ("Username")
this.loginButton = createButton ("Click here to login")

    this.state = "Login"
})

this.no.mousePressed (() =>{
    this.state = "Register"

    this.registrationInput = createInput('Username');
this.registrationElement = createElement ('h3')
this.registrationButton = createButton("Submit")


})

if (this.state === "Register") {

   
    this.hideButtons()
   this.registrationElement.position (displayWidth/2 - 300 , displayHeight/2 - 200)
   this.registrationElement.html ("Please enter your name/nickname");
   this.registrationInput.position (displayWidth/2 - 300 , displayHeight/2 - 150);
   
   this.registrationButton.position(displayWidth/2 - 300 , displayHeight/2 - 100)
   
   
    this.registrationButton.mousePressed(() => {

        this.hideUsername();
        this.registrationPassword = createElement ('h3')
this.passwordInput = createInput('Password')
this.readAvailibilty (this.registrationInput.value())

this.state = "password"
    
    })
}

    else if (this.state === "password") {
console.log ("yo!")
this.registrationPassword.position (displayWidth/2 - 300 , displayHeight/2 - 200);
this.registrationPassword.html ("Please enter a password")
this.passwordInput.position (displayWidth/2 - 300 , displayHeight/2 - 150);

this.registrationButton.mousePressed(()=> {
if (count === 1) {
    console.log("no")
    this.heySup = createElement ('h2')
    this.heySup.position (400 ,400) 
    this.heySup.html ("Sorry, This username is taken")

    this.errorButton = createButton ("Click here to register again")
    this.errorButton.position (450,400)

    this.errorButton.mousePressed (() => {
        this.registrationPassword.hide()
        this.passwordInput.hide();
    

        this.registrationInput = createInput('Username');
        this.registrationElement = createElement ('h3')
        this.registrationButton = createButton("Submit")
    

        
        this.state = "Register"
        this.errorButton.hide();
        this.heySup.hide()
    })
}
else {
    console.log ("yes")

    this.readState (this.registrationInput.value()) 
console.log (stat)

this.writeDoCount (this.registrationInput.value() , 1) 




if (stat === undefined) {
    this.writeQuizState(this.registrationInput.value() , "no")
}

    this.writeRegistration (this.registrationInput.value() , this.passwordInput.value())
 this.success = createElement ('h3');
 this.success.position (400,400)
 this.success.html ("You have sucessfully registered")

 this.sucessButton = createButton ("Click here to login")
 this.sucessButton.position (450,400);

 this.sucessButton.mousePressed (()=>{
this.registrationPassword.hide()
this.passwordInput.hide()
this.success.hide()
this.sucessButton.hide()
this.registrationButton.hide()

this.loginElement = createElement ('h3') 
this.loginUsername = createInput ("Username")
this.loginButton = createButton ("Click here to login")



     this.state = "Login"
 })
}

})
    }

else if (this.state === "Login") {
   
    this.hideButtons();
    console.log ("Login")
   
    this.loginElement.position (displayWidth/2 - 200 , displayHeight/2 - 200)
    this.loginElement.html ("Please enter your username")
 
    this.loginUsername.position (displayWidth/2 - 200 , displayHeight/2 - 150)
   
    this.loginButton.position (displayWidth/2 - 200 , displayHeight/2 - 100)


    this.loginButton.mousePressed (()=>{
        this.readPassword(this.loginUsername.value())
       this.loginElement.hide()
       this.loginUsername.hide()
       this.passwordElement = createElement ('h3')
       this.passwordInput = createInput ("Password")

      this.readState (this.loginUsername.value())

       this.state = "LPassword"
    })
}

else if (this.state === "LPassword") {
   
    this.passwordElement.position (displayWidth/2 - 200 , displayHeight/2 - 200)
    this.passwordElement.html ("Enter Your Password")

this.passwordInput.position (displayWidth/2 - 200 , displayHeight/2 - 150)

this.loginButton.mousePressed (()=>{
    if (this.passwordInput.value() == password) {

        this.passwordElement.hide()
        this.passwordInput.hide()
        this.loginButton.hide()
     

     this.sucessfullLogin = createElement('h3')
     this.sucessfullLogin.position (10,10)

     
     this.sucessfullLogin.html ("You have sucessfully logged in")

    

     console.log (stat)
     
  
     if (stat ==="yes") {
      
       menu = new Menu()
         this.state = "menu"

         this.timeApp.hide()
         
     }
     else {
        quiz = new Quiz ()
        this.state = "quiz"
this.timeApp.hide()
     }
      

    }
 
    else if (password === null) {
        this.passwordElement.hide()
        this.passwordInput.hide()
        this.loginButton.hide()

        this.sucessfulLogin = createElement('h3')
        this.sucessfulLogin.position (displayWidth/2 - 200 , displayHeight/2 - 200)
        this.sucessfulLogin.html ("Sorry, This account isn't registered")

        this.button = createButton ("Click here to register again")
        this.button.position (displayWidth/2 - 200 , displayHeight/2 - 150)

        this.button.mousePressed (() =>{
            this.sucessfulLogin.hide()
            this.button.hide()
            this.passwordInput.hide();
            this.passwordElement.hide()

        this.loginElement = createElement ('h3') 
this.loginUsername = createInput ("Username")
this.loginButton = createButton ("Click here to login")

this.state = "Login"
})

    }

    else {
        this.sucessfullLogin = createElement('h3')
        
     this.sucessfullLogin.position (displayWidth/2 - 200 , displayHeight/2 - 75)
     this.sucessfullLogin.html ("The password is incorrect please try again")

     this.yesButton = createButton ("Click here to re-enter username")
     this.yesButton.position (displayWidth/2 - 200 , displayHeight/2 )


     this.yesButton.mousePressed (()=>{

        this.sucessfullLogin.hide()
        this.yesButton.hide()
        this.passwordElement.hide()
        this.passwordInput.hide()

        this.loginElement = createElement ('h3') 
        this.loginUsername = createInput ("Username")
        this.loginButton.hide()
        this.loginButton = createButton ("Click here to login")

         this.state = "Login"
     })
    }
})
}

drawSprites();


    }

}