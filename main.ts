basic.forever(function () {
    led.plot(4, 0)
    basic.pause(input.temperature())
    led.unplot(4, 0)
    basic.pause(input.temperature())
})
