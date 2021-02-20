timer = 0

def on_button_pressed_a():
    global timer
    timer = randint(1, 3)
    basic.show_icon(IconNames.CHESSBOARD)
    while timer > 0:
        timer += -1
        basic.pause(1000)
    basic.show_icon(IconNames.SKULL)
    music.play_tone(Note.C, music.beat())
input.on_button_pressed(Button.A, on_button_pressed_a)