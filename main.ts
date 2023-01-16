input.onButtonPressed(Button.A, function () {
    temp = 21
})
let temp = 0
if (temp > 20) {
    basic.showIcon(IconNames.Sad)
} else if (temp < 20) {
    basic.showIcon(IconNames.Happy)
}
basic.forever(function () {
    temp = input.temperature()
    if (temp < 20) {
        temp = 20
    } else if (temp > 35) {
        temp = 35
        pins.servoWritePin(AnalogPin.P0, pins.map(
        temp,
        20,
        35,
        0,
        180
        ))
    }
})
