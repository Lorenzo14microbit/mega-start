input.onSound(DetectedSound.Loud, function () {
    basic.showLeds(`
        # # # # #
        # # . # #
        # . # . #
        # # . # #
        # # # # #
        `)
})
input.onGesture(Gesture.Shake, function () {
    if (345678 == 345678) {
        music.play(music.stringPlayable("C5 G B A F A C5 B ", 170), music.PlaybackMode.LoopingInBackground)
    } else {
    	
    }
})
input.onGesture(Gesture.TiltLeft, function () {
    basic.showString("" + (images.createImage(`
        . . . . .
        . . # . .
        . # . # .
        . . # . .
        . . . . .
        `)))
})
basic.forever(function () {
    basic.showIcon(IconNames.Heart)
})
