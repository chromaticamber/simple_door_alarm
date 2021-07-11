basic.forever(function () {
    if (input.magneticForce(Dimension.Strength) > 200) {
        basic.showIcon(IconNames.Confused)
        soundExpression.giggle.play()
        basic.pause(2000)
        basic.clearScreen()
    }
})
