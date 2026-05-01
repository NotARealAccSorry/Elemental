
arrays.shuffle(deck)
hand = [
deck.removeAt(0),
deck.removeAt(0),
deck.removeAt(0),
deck.removeAt(0),
deck.removeAt(0)
]
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


