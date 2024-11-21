input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    if (randomNumber == 2) {
        basic.showString("Yes")
    } else if (randomNumber == 1) {
        basic.showString("No")
    } else if (randomNumber == 3) {
        basic.showString("Try Again")
    } else if (randomNumber == 4) {
        basic.showString("Yes, definitely!")
    } else if (randomNumber == 5) {
        basic.showString("Reply hazy, try again.")
    } else if (randomNumber == 6) {
        basic.showString("Don’t count on it.")
    } else if (randomNumber == 7) {
        basic.showString("Signs point to yes.")
    } else if (randomNumber == 8) {
        basic.showString("Ask a deity")
    } else {
        basic.showString("I don't know")
    }
    basic.showNumber(8)
    randomNumber = randint(0, 8)
})
let randomNumber = 0
basic.showString("Ask a question ")
basic.showNumber(8)
basic.forever(function () {
	
})
