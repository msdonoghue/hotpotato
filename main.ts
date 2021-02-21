let timer = 0
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    
    timer = randint(1, 3)
    basic.showIcon(IconNames.Chessboard)
    while (timer > 0) {
        timer += -1
        basic.pause(1000)
    }
    basic.showIcon(IconNames.Skull)
    music.beginMelody(music.builtInMelody(Melodies.Wawawawaa), MelodyOptions.Once)
})
