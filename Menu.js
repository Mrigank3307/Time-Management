class Menu {
    constructor () {
     this.yo = "menu"
this.hohohoh = "To Do List"
        this.todo = createButton (this.hohohoh)
        this.timetable = createButton ("Timetable")
        this.info = createButton ("Info")
        this.about = createButton ("About")
       this.logo = createElement ('h2')
       this.line = line(80, 80, 80, 200);

       this.aboutOne = createElement ('h1')
       this.aboutTwo = createElement ('h3')
       this.aboutThree = createElement ('h2')
       this.aboutFour = createButton ("Click here to explore the features")
       this.aboutFour.hide()

       this.infoOne = createElement ('h1')
       this.infoTwo = createElement ('h3')
       this.infoButtonTwo = createButton ("Click here to go to about")
       this.infoThree = createElement ('h3')
       this.infoButtonThree = createButton ("Click here to go to to do")
       this.infoFour = createElement ('h3')
       this.infoButtonFour = createButton ("Click here to go to TimeTable")

this.infoButtonTwo.hide();
this.infoButtonThree.hide()
this.infoButtonFour.hide()

timetable = new Timetable();
timetable.createInputs() 


todo = new ToDo ()


y = 75

this.todoButton = createButton ("Add New Event")
this.todoButton.hide();
this.submitButton = createButton ("Submit")
this.inputDo = createInput ("Enter event")
this.submitButton.hide()
this.inputDo.hide()
  
this.gameState = "menu"
    }

    getToDo (usingName , numbers) {
        var playerings = database.ref("Data about users/" + usingName + "/doEvents/" + hells + "/Task");
        playerings.on("value",function (data){
         fo = data.val()
        })
    }

    processing () {
        this.getToCount (login.loginUsername.value())
       this.updateIndex()
        this.writeToDo (login.loginUsername.value())
        this.writeIndex (login.loginUsername.value())
    }

    getToCount (username) {
        var playering = database.ref("Data about users/" + username + "/count");
        playering.on("value",function (data){
         counting = data.val();
        }) 

        
    }

    writeToDo (he) {
        var xy = "Data about users/" + he + "/doEvents/" + counting;
        database.ref(xy).update({
       "Task" : this.inputDo.value()
        }); 
    }

    writeIndex (h) {
        var xy = "Data about users/" + h;
        database.ref(xy).update({
       count:video
        }); 
    }

updateIndex () {
   video = counting + 1
}

    hideToDo () {
this.todoButton.hide()
this.submitButton.hide()
this.inputDo.hide()
    }

    showToDo () {
   this.todoButton.show()
    }

    hideAbout() {
 this.aboutOne.hide();
 this.aboutTwo.hide();
 this.aboutThree.hide()
 this.aboutFour.hide()
    }

    hideInfo () {
this.infoOne.hide()
this.infoTwo.hide()
this.infoButtonTwo.hide();
this.infoButtonThree.hide()
this.infoButtonFour.hide()
this.infoThree.hide()
this.infoFour.hide()

    }

    showAbout () {
        this.aboutOne.show();
        this.aboutTwo.show();
        this.aboutThree.show()
        this.aboutFour.show()
    }

    showInfo () {
        this.infoOne.show()
this.infoTwo.show()
this.infoButtonTwo.show()
this.infoThree.show()
this.infoFour.show()
this.infoButtonTwo.show();
this.infoButtonThree.show()
this.infoButtonFour.show()
    }

    display () {
        

        this.todo.position (0 ,40 )
        this.todo.style ('background-color' , 'transparent')
        this.todo.style ('width' , '200px')
        this.todo.style ('height' , '70px')
        this.todo.style ('font-size' , '30px')

        this.timetable.position (0 ,110 )
        this.timetable.style ('background-color' , 'transparent')
        this.timetable.style ('width' , '200px')
        this.timetable.style ('height' , '70px')
        this.timetable.style ('font-size' , '30px')

        this.about.position (0 ,180 )
        this.about.style ('background-color' , 'transparent')
        this.about.style ('width' , '200px')
        this.about.style ('height' , '70px')
        this.about.style ('font-size' , '30px')

        this.info.position (0 ,250 )
        this.info.style ('background-color' , 'transparent')
        this.info.style ('width' , '200px')
        this.info.style ('height' , '70px')
        this.info.style ('font-size' , '30px')

      //  this.explanation.position (400,10);
       // this.explanation.html ("Nice")

        this.logo.position (5,-10);
        this.logo.html ("Time Management")

        login.sucessfullLogin.html ("Please click on one of the buttons to get started")
        login.sucessfullLogin.position (displayWidth/2 , 0)

this.about.mousePressed (()=>{

    login.sucessfullLogin.hide();
   
this.hideInfo()
this.showAbout()
this.hideToDo()
todo.hideThis()
timetable.hideInputs()
timetable.hideTimetable()

this.gameState = "about"
})

this.info.mousePressed (()=>{
    login.sucessfullLogin.hide()

  
    this.hideAbout()
 this.showInfo()
 this.hideToDo()
 todo.hideThis()
 timetable.hideInputs()
 timetable.hideTimetable()

 this.gameState= "info"
})

this.timetable.mousePressed (()=>{
    login.sucessfullLogin.hide()

    this.hideAbout()
    this.hideInfo();
    this.hideToDo()
    timetable.showInputs() 
    timetable.showTimetable();
   
    todo.hideThis()

    timetable.display()

    this.gameState = "timetable"
})


this.todo.mousePressed (()=>{
    if (this.gameState !== "create")
    this.hideAbout()
    this.hideInfo();
    this.showToDo()
    todo.get ()
    todo.showThis()
    timetable.hideInputs()
    timetable.hideTimetable()
   
    this.submitButton.hide()
this.inputDo.hide()
//todo.hideThis()

    this.gameState = "ToDo"
})


this.aboutFour.mousePressed (()=>{
    login.sucessfullLogin.hide()
  
    this.hideAbout()
    this.showInfo()
   
    this.gameState= "info"
})

if (this.gameState === "about") {
    this.showAbout()
this.aboutOne.position (displayWidth/2 - 200, 0)
this.aboutOne.html ("This Is the Time Management App!")

this.aboutTwo.position (displayWidth/2 - 550 , 75)
this.aboutTwo.html (" Good time management allows you to accomplish more in a shorter period of time, which leads to more free time, which lets you take advantage of learning opportunities, lowers your stress, and helps you focus, which leads to more career success. Each benefit of time management improves another aspect of your life. Many people fall into depression due to them not bein able to manage their time well.")
this.aboutTwo.style ('font-size' , '18px')

this.aboutThree.position (displayWidth/2 - 550 , 175)
this.aboutThree.html ("This app is made to help those people who want to manage their time well. This app has many tools, To explore them,")

this.aboutFour.show()
this.aboutFour.position (displayWidth/2-550 , 225)
}

if (this.gameState === "info") {
    this.infoOne.position (displayWidth/2 - 200, 0)
this.infoOne.html ("These are the features of this app")

this.infoTwo.position (displayWidth/2 - 550 , 75)
this.infoTwo.html ("Click here to know why this app is important and what it is about")
this.infoButtonTwo.position (displayWidth/2 - 550 , 120)

this.infoThree.position (displayWidth/2 - 550 , 150)
this.infoThree.html ("There is timetable feture where you can view your timetabe daywise")
this.infoButtonThree.position (displayWidth/2 - 550 , 195)

this.infoFour.position (displayWidth/2 - 550 , 225)
this.infoFour.html ("There is a timetable feature, Here you can have a schedule of what you have to do on a weekly basis")
this.infoButtonFour.position (displayWidth/2 - 550 , 270)

this.infoButtonTwo.mousePressed (()=>{
    this.hideInfo();
    this.showAbout();
    this.gameState = "about"
})

this.infoButtonThree.mousePressed (()=>{
    this.hideInfo();
    this.hideAbout();
    this.showToDo()
    todo.get()
    todo.showThis()

    this.gameState = "ToDo"
})

this.infoButtonFour.mousePressed (()=>{
    this.hideInfo();
    this.hideAbout();
    this.gameState = "timetable"

    timetable.showInputs() 
    timetable.showTimetable();
    timetable.display()
   
  //  prompt ("You are in the timetable")
})

}

if (this.gameState == "ToDo") {
    login.sucessfullLogin.hide()
    this.todoButton.position (displayWidth/2-500 , 600)
    
           // this.getToDo(login.loginUsername.value() , 1 )
    
           todo.get ()

    this.todoButton.mousePressed (()=>{
        this.getToCount (login.loginUsername.value())

        this.todoButton.hide()
 this.submitButton.show()
 this.submitButton.position(displayWidth/2-500 , 660)
this.inputDo.position (displayWidth/2 - 500 , 630)
this.inputDo.show()

    })

    this.submitButton.mousePressed (()=>{
        this.submitButton.hide()
        this.inputDo.hide()
        this.todoButton.show()

this.processing();

       
    })
}

if (this.gameState === "timetable") {
    timetable.display()
}
 

    }
}