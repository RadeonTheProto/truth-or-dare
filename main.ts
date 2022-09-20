input.onButtonPressed(Button.A, function () {
    if (randint(0, 1) == 0) {
        basic.showString("Truth")
    } else {
        basic.showString("Dare")
    }
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    if (randint(0, 3) == 0) {
        basic.showArrow(ArrowNames.West)
    } else if (randint(0, 3) == 1) {
        basic.showArrow(ArrowNames.South)
    } else if (randint(0, 3) == 2) {
        basic.showArrow(ArrowNames.East)
    } else if (randint(0, 3) == 3) {
        basic.showArrow(ArrowNames.North)
    }
})
basic.forever(function () {
	
})
