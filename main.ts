input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.magneticForce(Dimension.Strength))
})
basic.forever(function () {
    if (input.magneticForce(Dimension.Strength) < 300) {
        basic.showIcon(IconNames.Confused)
        soundExpression.giggle.play()
        basic.pause(2000)
        basic.clearScreen()
    }
    basic.pause(500)
})
