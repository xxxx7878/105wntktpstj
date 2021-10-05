let cm = 0
basic.forever(function () {
    cm = sonar.ping(
    DigitalPin.P1,
    DigitalPin.P5,
    PingUnit.Centimeters
    )
    basic.pause(100)
})
basic.forever(function () {
    basic.showNumber(cm)
})
basic.forever(function () {
    if (cm >= 10 && cm <= 15) {
        music.playTone(262, 200)
    } else if (cm >= 5 && cm <= 10) {
        music.playTone(392, 100)
    } else if (cm >= 1 && cm <= 5) {
        music.playTone(659, 50)
    } else {
        music.stopAllSounds()
        music.stopMelody(MelodyStopOptions.All)
    }
})
