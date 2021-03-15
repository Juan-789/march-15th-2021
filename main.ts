input.onButtonPressed(Button.A, function () {
    pix.move(1)
    basic.pause(100)
    pix.move(1)
    basic.pause(100)
    pix.move(1)
    basic.pause(100)
    pix.move(1)
    basic.pause(100)
    pix.change(LedSpriteProperty.Y, 1)
    basic.pause(100)
    pix.change(LedSpriteProperty.Y, 1)
    basic.pause(100)
    pix.change(LedSpriteProperty.Y, 1)
    basic.pause(100)
    pix.change(LedSpriteProperty.Y, 1)
    basic.pause(100)
    pix.change(LedSpriteProperty.X, -1)
    basic.pause(100)
    pix.change(LedSpriteProperty.X, -1)
    basic.pause(100)
    pix.change(LedSpriteProperty.X, -1)
    basic.pause(100)
    pix.change(LedSpriteProperty.X, -1)
    basic.pause(100)
    pix.change(LedSpriteProperty.Y, -1)
    basic.pause(100)
    pix.change(LedSpriteProperty.Y, -1)
    basic.pause(100)
    pix.change(LedSpriteProperty.X, -1)
    basic.pause(100)
    pix.change(LedSpriteProperty.Y, -1)
    basic.pause(100)
    pix.change(LedSpriteProperty.X, -1)
})
// 1. INDEX = sum = index = 0
// 2. index =1
// sum = 0 +
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index <= 100; index++) {
        sum += index
        basic.showNumber(sum)
    }
})
let sum = 0
let pix: game.LedSprite = null
pix = game.createSprite(0, 0)
basic.forever(function () {
	
})
