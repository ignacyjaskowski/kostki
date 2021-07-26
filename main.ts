let losowanie = 0
input.onButtonPressed(Button.A, function () {
    losowanie = randint(1, 6)
    basic.showString("" + (losowanie))
})
