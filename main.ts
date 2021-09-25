let X = 0
input.onButtonPressed(Button.A, function () {
    X = randint(0, 10)
    basic.showNumber(X)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.House)
})
basic.forever(function () {
	
})
