function تجميع_العناصر () {
    مفتاح_المستخدم = متغير
    serial.writeLine(مفتاح_المستخدم)
    if (مفتاح_المستخدم == رمز_الكود) {
        basic.showIcon(IconNames.Yes)
        basic.showLeds(`
            # # # # .
            . . . # .
            # # # # .
            # # # # .
            # # # # .
            `)
        basic.showNumber(الكود)
        basic.showNumber(الكود)
        basic.showNumber(الكود)
    } else if (مفتاح_المستخدم.length >= رمز_الكود.length) {
        basic.showIcon(IconNames.No)
        basic.pause(2000)
        basic.clearScreen()
        مفتاح_المستخدم = ""
    }
}
input.onButtonPressed(Button.A, function () {
    متغير = "" + مفتاح_المستخدم + "A"
    basic.showString("A")
    تجميع_العناصر()
})
input.onButtonPressed(Button.B, function () {
    متغير = "" + مفتاح_المستخدم + "B"
    basic.showString("B")
    تجميع_العناصر()
})
let متغير = ""
let مفتاح_المستخدم = ""
let رمز_الكود = ""
let الكود = 0
الكود = 1111
رمز_الكود = "ABA"
مفتاح_المستخدم = ""
basic.forever(function () {
    if (مفتاح_المستخدم.length == 0) {
        basic.showLeds(`
            # # # # .
            # . . # .
            # # # # .
            # # # # .
            # # # # .
            `)
        basic.pause(200)
    }
})
