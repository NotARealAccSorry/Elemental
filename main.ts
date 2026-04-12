namespace SpriteKind {
    export const Mouse = SpriteKind.create()
    export const Card = SpriteKind.create()
}

sprites.onOverlap(SpriteKind.Mouse, SpriteKind.Card, function (sprite, otherSprite) {
    otherSprite.y = 215
    otherSprite.z=5
    if (browserEvents.MouseLeft.isPressed()) {
        easing.easeTo(otherSprite, 160, 120, 2000, easing.Mode.InBack)
        otherSprite.setFlag(SpriteFlag.Ghost, true)
        pause(2500)
        easing.blockEaseTo(otherSprite, 300, 215, 1000, easing.Mode.InOutBack)
        pause(1350)
        sprites.destroy(otherSprite)
        scene.backgroundImage().drawTransparentImage(assets.image`myImage2`, 282, 190)
        discard.push(hand.removeAt(sprites.readDataNumber(otherSprite, "Index")))
        drawHand()
    }
})
// Functions
// CardDrawingFunction
function doSomething(a: number, b: number, c: number, d: number, e: number, f: number, g: number, i: Image) {
    textPosition = 27
    returnImage = image.create(35, 50)
    returnImage.fillRect(0, 0, 35, 50, f * 2 + 1)
    returnImage.fillRect(2, 2, 31, 46, 9)
    returnImage.drawRect(4, 4, 27, 20, 13)
    returnImage.fillRect(4, 25, 27, 22, 8)
    returnImage.drawImage(i, 7, 5)
    for (let i = 0; i <= g - 1; i++) {
        returnImage.drawTransparentImage(assets.image`EC1`, 0, 0 * 8 + 1)
    }
    if (a > 0) {
        fancyText.draw("DMG" + a, returnImage, 5, textPosition, 25, 2, fancyText.tiny_4)
        textPosition += 5
    }
    if (b > 0) {
        fancyText.draw("DFND" + b, returnImage, 5, textPosition, 25, 2, fancyText.tiny_4)
        textPosition += 5
    }
    if (c > 0) {
        fancyText.draw("CSME", returnImage, 5, textPosition, 25, 2, fancyText.tiny_4)
        textPosition += 5
        returnImage.drawTransparentImage(elementIcons[c - 1], 25, textPosition - 4)
    }
    if (d > 0) {
        fancyText.draw("MTRL", returnImage, 5, textPosition, 25, 2, fancyText.tiny_4)
        textPosition += 5
        returnImage.drawTransparentImage(elementIcons[d - 1], 25, textPosition - 4)
    }
    if (e > 0) {
        fancyText.draw("APPLY", returnImage, 5, textPosition, 25, 2, fancyText.tiny_4)
        textPosition += 5
        returnImage.drawTransparentImage(elementIcons[e + 3], 25, textPosition - 4)
    }
    return returnImage
}
browserEvents.onMouseMove(function (x, y) {
    if (mouseSprite) {
        mouseSprite.setPosition(x, y)
    }
})
events.spriteEvent(SpriteKind.Mouse, SpriteKind.Card, events.SpriteEvent.StopOverlapping, function (sprite, otherSprite) {
    otherSprite.y = 230
    otherSprite.z=1
})
let mouseSprite: Sprite = null
let index = 0
let cardSprite: Sprite = null
let elementIcons: Image[] = []

let textPosition = 0
let returnImage: Image = null
let switchingblocks = null
let list: number[] = []
let discard: Card[] = []
namespace userconfig {
    export const ARCADE_SCREEN_WIDTH = 320
    export const ARCADE_SCREEN_HEIGHT = 240
}
class Card {
    //Properties
    damage: number
    defense: number
    consume: number
    materialize: number
    enemyEffect: number
    rarity: number
    cost: number
    image: Image
    //Constructor
    constructor(a: number, b: number, c: number, d: number, e: number, f: number, g: number, i: Image) {
        this.damage = a
        this.defense = b
        this.consume = c
        this.materialize = d
        this.enemyEffect = e
        this.rarity = f
        this.cost = g
        this.image = i
    }
}
// Cards Setup
let commonCards = [



    new Card(6, 0, 0, 0, 0, 0, 1, assets.image`Chop`),

    new Card(0, 5, 0, 0, 0, 0, 1, assets.image`Defend`),

    new Card(2, 1, 0, 1, 0, 0, 1, assets.image`Inferno`),

    new Card(10, 5, 1, 0, 1, 0, 1, assets.image`Wildfire`),

    new Card(3, 0, 0, 0, 1, 0, 1, assets.image`SlowBurn`),

    new Card(1, 2, 0, 4, 0, 0, 1, img`
        eeeeeeeeeeeeeeeeeeee
        eedddeeeddeddddedeee
        eddddddddddddddedeee
        edddd9ddddddd9dddeee
        eed99ddd9dddd99ddeee
        eeedddddd99dddddeeee
        eeeee75edddeddddeeee
        eeeee75e75eee75eeeee
        eeee75ee75eeee75eeee
        eeee75eee75eee75eeee
        eee75eeeee75ee75eeee
        eee75ee5ee75ee75eeee
        eeee75eee75eeee75eee
        eeee75eee75eeee75eee
        ee5ee75e75ee5e75e5ee
        eeeee75ee75ee75eeeee
        e5e77577757e775e7e5e
        eeee77ee77eee777eeee
    `),

    new Card(20, 4, 4, 0, 0, 4, 2, img``)
]
elementIcons = [
    assets.image`4x4F`,
    assets.image`4x4WA`,
    assets.image`4x4WI`,
    assets.image`4x4L`,
    assets.image`3x3F`,
    assets.image`3x3WA`,
    assets.image`3x3WI`,
    assets.image`3x3L`
]
let deck = [
    commonCards[0],
    commonCards[0],
    commonCards[0],
    commonCards[0],
    commonCards[1],
    commonCards[1],
    commonCards[1],
    commonCards[1],
    commonCards[2],
    commonCards[3]
]
arrays.shuffle(deck)
let hand = [
    deck.removeAt(0),
    deck.removeAt(0),
    deck.removeAt(0),
    deck.removeAt(0),
    deck.removeAt(0)
]
function drawHand() {
    let index = 0
    sprites.destroyAllSpritesOfKind(SpriteKind.Card)
    for (let value of hand) {
        cardSprite = sprites.create(doSomething(value.damage, value.defense, value.consume, value.materialize, value.enemyEffect, value.rarity, value.cost, value.image), SpriteKind.Card)
        cardSprite.setPosition(index * 25 + 50, 230)
        sprites.setDataNumber(cardSprite, "Index", index)
        index += 1
    }
}
mouseSprite = sprites.create(img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . 3 3 . . . . . . . .
    . . . . . . 3 1 3 . . . . . . .
    . . . . . . 3 1 3 . . . . . . .
    . . . . . . 3 1 1 3 . . . . . .
    . . . . . . 3 1 1 1 3 . . . . .
    . . . . . . 3 1 1 1 3 . . . . .
    . . . . . . 3 1 1 1 1 3 . . . .
    . . . . . . 3 1 1 1 1 1 3 . . .
    . . . . . . 3 1 1 1 1 1 3 . . .
    . . . . . . 3 1 1 1 1 3 . . . .
    . . . . . . 3 1 1 1 1 1 3 . . .
    . . . . . . 3 3 3 3 1 1 1 3 . .
    . . . . . . . . . . 3 1 3 3 . .
    . . . . . . . . . . . 3 3 . . .
`, SpriteKind.Mouse)
mouseSprite.z = 10
browserEvents.setCursorVisible(false)
drawHand()

