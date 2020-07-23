class ToDo {
    constructor () {
        this.todo10 = createElement ('h3')
        this.todo9 = createElement ('h3')
        this.todo8 = createElement ('h3')
        this.todo7 = createElement ('h3')
        this.todo6 = createElement ('h3')
        this.todo5 = createElement ('h3')
        this.todo4 = createElement ('h3')
        this.todo3= createElement ('h3')
        this.todo2 = createElement ('h3')
        this.todo1 = createElement ('h3')
        this.todo20 = createElement ('h3')
        this.todo19 = createElement ('h3')
        this.todo18 = createElement ('h3')
        this.todo17 = createElement ('h3')
        this.todo16 = createElement ('h3')
        this.todo15 = createElement ('h3')
        this.todo14 = createElement ('h3')
        this.todo13= createElement ('h3')
        this.todo12 = createElement ('h3')
        this.todo11 = createElement ('h3')
    }

    hideThis () {
        this.todo10.hide()
        this.todo9.hide()
        this.todo8.hide()
        this.todo7.hide()
        this.todo6.hide()
        this.todo5.hide()
        this.todo4.hide()
        this.todo3.hide()
        this.todo2.hide()
        this.todo1.hide()
        this.todo20.hide()
        this.todo19.hide()
        this.todo18.hide()
        this.todo17.hide()
        this.todo16.hide()
        this.todo15.hide()
        this.todo14.hide()
        this.todo13.hide()
        this.todo12.hide()
        this.todo11.hide()
    }

    showThis () {
        this.todo10.show()
        this.todo9.show()
        this.todo8.show()
        this.todo7.show()
        this.todo6.show()
        this.todo5.show()
        this.todo4.show()
        this.todo3.show()
        this.todo2.show()
        this.todo1.show()
        this.todo20.show()
        this.todo19.show()
        this.todo18.show()
        this.todo17.show()
        this.todo16.show()
        this.todo15.show()
        this.todo14.show()
        this.todo13.show()
        this.todo12.show()
        this.todo11.show()
    }


    get () {
        this.getOne (login.loginUsername.value() , 1)
        this.getOne (login.loginUsername.value() , 2)
        this.getOne (login.loginUsername.value() , 3)
        this.getOne (login.loginUsername.value() , 4)
        this.getOne (login.loginUsername.value() , 5)
        this.getOne (login.loginUsername.value() , 6)
        this.getOne (login.loginUsername.value() , 7)
        this.getOne (login.loginUsername.value() , 8)
        this.getOne (login.loginUsername.value() , 9)
        this.getOne (login.loginUsername.value() , 10)
        this.getOne (login.loginUsername.value() , 11)
        this.getOne (login.loginUsername.value() , 12)
        this.getOne (login.loginUsername.value() , 13)
        this.getOne (login.loginUsername.value() , 14)
        this.getOne (login.loginUsername.value() , 15)
        this.getOne (login.loginUsername.value() , 16)
        this.getOne (login.loginUsername.value() , 17)
        this.getOne (login.loginUsername.value() , 18)
        this.getOne (login.loginUsername.value() , 19)
        this.getOne (login.loginUsername.value() , 20)
    }

    getOne (username, num) {

        var playerings = database.ref("Data about users/" + username + "/doEvents/" + num + "/Task");
        playerings.on("value",function (data){
            if (num !== undefined) {
    if (num === 1) {
    fo1 = data.val()
    } 
           
    if (num===2) {
    fo2 = data.val()
    }

    if (num===3) {
    fo3 = data.val()
        }

    if (num===4) {
    fo4 = data.val()
        }

    if (num===5) {
    fo5 = data.val()
        }

    if (num===6) {
    fo6 = data.val()
        }

    if (num===7) {
    fo7 = data.val()
        }

    if (num=== 8) {
    fo8 = data.val()
    }

    if (num===9) {
        fo9 = data.val()
        }

        if (num===10) {
            fo10 = data.val()
            }
            if (num===11) {
                fo11 = data.val()
                }

    if (num===12) {
        fo12 = data.val()
        }
if (num===13) {
    fo13 = data.val()
            }
            if (num===14) {
                fo14 = data.val()
                }
                if (num===15) {
                    fo15 = data.val()
                    }
                    if (num===16) {
                        fo16 = data.val()
                        }
                        if (num===17) {
                            fo17 = data.val()
                            }
                            if (num===18) {
                                fo18 = data.val()
                                }
                                if (num===19) {
                                    fo19 = data.val()
                                    }
                                    if (num===20) {
                                        fo20 = data.val()
                                        }
                                    }
        
        })

      this.textAll()


    }

       textAll () {
        if (fo1!== undefined) {
            this.todo1.position (displayWidth/2 - 550, 50 * 1)
            this.todo1.html (fo1)
        }

        if (fo2 !== undefined) {
          
            this.todo2.position (displayWidth/2 - 550, 50 * 2)
            this.todo2.html (fo2)
        }

        if (fo3!== undefined) {
            this.todo3.position (displayWidth/2 - 550, 50 * 3)
            this.todo3.html (fo3)
        }

        if (fo4 !== undefined) {
          
            this.todo4.position (displayWidth/2 - 550, 50 * 4)
            this.todo4.html (fo4)
        }

        if (fo5!== undefined) {
            this.todo5.position (displayWidth/2 - 550, 50 * 5)
            this.todo5.html (fo5)
        }

        if (fo6 !== undefined) {
          
            this.todo6.position (displayWidth/2 - 550, 50 * 6)
            this.todo6.html (fo6)
        }

        if (fo7!== undefined) {
            this.todo7.position (displayWidth/2 - 550, 50 * 7)
            this.todo7.html (fo7)
        }

        if (fo8 !== undefined) {
          
            this.todo8.position (displayWidth/2 - 550, 50 * 8)
            this.todo8.html (fo8)
        }


        if (fo9!== undefined) {
            this.todo9.position (displayWidth/2 - 550, 50 * 9)
            this.todo9.html (fo9)
        }

        if (fo10 !== undefined) {
          
            this.todo10.position (displayWidth/2 - 550, 50 * 10)
            this.todo10.html (fo10)
        }


        if (fo11!== undefined) {
            this.todo11.position (displayWidth/2 - 550, 50 * 11)
            this.todo11.html (fo11)
        }

        if (fo12 !== undefined) {
          
            this.todo12.position (displayWidth/2 - 550, 50 * 12)
            this.todo12.html (fo12)
        }

        if (fo13!== undefined) {
            this.todo13.position (displayWidth/2 - 550, 50 * 13)
            this.todo13.html (fo13)
        }

        if (fo14 !== undefined) {
          
            this.todo14.position (displayWidth/2 - 550, 50 * 14)
            this.todo14.html (fo14)
        }

        if (fo15!== undefined) {
            this.todo15.position (displayWidth/2 - 550, 50 * 15)
            this.todo15.html (fo15)
        }

        if (fo16 !== undefined) {
          
            this.todo16.position (displayWidth/2 - 550, 50 * 16)
            this.todo16.html (fo16)
        }

        if (fo17!== undefined) {
            this.todo17.position (displayWidth/2 - 550, 50 * 17)
            this.todo17.html (fo17)
        }

        if (fo18 !== undefined) {
          
            this.todo18.position (displayWidth/2 - 550, 50 * 18)
            this.todo18.html (fo18)
        }

        if (fo19!== undefined) {
            this.todo19.position (displayWidth/2 - 550, 50 * 19)
            this.todo19.html (fo19)
        }

        if (fo20 !== undefined) {
          
            this.todo20.position (displayWidth/2 - 550, 50 * 20)
            this.todo20.html (fo20)
        }
    }

    display () {

    }
}