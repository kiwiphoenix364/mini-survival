namespace SpriteKind {
    export const Tree = SpriteKind.create()
    export const Collision = SpriteKind.create()
    export const Smoke = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile6`, function (sprite, location) {
    timer.throttle("action", 250, function () {
        if (!(inMenu)) {
            if (controller.A.isPressed()) {
                tiles.setTileAt(location, assets.tile`myTile0`)
                tiles.setWallAt(location, false)
                loadSprites()
            }
        }
    })
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile4`, function (sprite, location) {
    timer.throttle("action", 100, function () {
        if (!(inMenu)) {
            if (controller.A.isPressed()) {
                tiles.setTileAt(location, assets.tile`myTile`)
                tiles.setWallAt(location, false)
                loadSprites()
            }
        }
    })
})
function loadSprites () {
    timer.background(function () {
        sprites.destroyAllSpritesOfKind(SpriteKind.Tree)
        for (let value of tiles.getTilesByType(assets.tile`myTile5`)) {
            if (Math.abs(value.x - scene.cameraProperty(CameraProperty.X)) + Math.abs(value.y - scene.cameraProperty(CameraProperty.Y)) <= 200) {
                Obj = sprites.create(img`
                    .......6........
                    ......666.......
                    ......666.6.....
                    .....66666......
                    ....666e66......
                    .....66e666.....
                    ....66eee66.6...
                    ...6666e6666....
                    ...6666e6666....
                    .666666e66666...
                    ...666eee6666...
                    ..66ee6e6ee6666.
                    6.66666e666666..
                    .666666e666666..
                    .66666eee666666.
                    .666ee6e6ee6666.
                    66ee666e666ee666
                    6666666ee6666666
                    .6666.eef..6666.
                    ......eef.......
                    ......eeee......
                    ......eeee......
                    ......eeee......
                    ......eeee......
                    .....eeeef......
                    .....eeeef......
                    .....eeeef......
                    .....eeeeee.....
                    .....eeeeee.....
                    .....eeeeef.....
                    .....eeeeeee....
                    ....eeeeeeee....
                    `, SpriteKind.Tree)
                Obj.setFlag(SpriteFlag.Ghost, true)
                Obj.x = value.x
                Obj.bottom = value.y
                Obj.z = Obj.bottom
            }
        }
        for (let value2 of tiles.getTilesByType(assets.tile`myTile4`)) {
            if (Math.abs(value2.x - scene.cameraProperty(CameraProperty.X)) + Math.abs(value2.y - scene.cameraProperty(CameraProperty.Y)) <= 200) {
                Obj = sprites.create(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . a . . . . . . . 
                    . . . . . . . . 6 a . . . . . . 
                    . a . . . . . . . a . . . . . . 
                    . 6 a . . . a . . a . . . . . a 
                    . . 6 a . . a . . a . . . . . a 
                    . . . a . . a . . a . . . . a 6 
                    . . . 6 a . 6 . . 6 a . . . a . 
                    . 6 . . a a . . . . a . . a 6 . 
                    . . a . a a . . . . 6 a . a . . 
                    . . 6 . a a . . . . . a a 6 . . 
                    . . . a a 6 a a . . . a a . . . 
                    . . . a a . . 6 a . . . 6 a . . 
                    . . . a a . . . a . . a . a . . 
                    . . . a a . . . 6 a . a . . . . 
                    . . . 6 . . . . . a . a . . . . 
                    `, SpriteKind.Tree)
                Obj.setFlag(SpriteFlag.Ghost, true)
                Obj.x = value2.x
                Obj.bottom = value2.y
                Obj.z = Obj.bottom
            }
        }
        for (let value3 of tiles.getTilesByType(assets.tile`myTile6`)) {
            if (Math.abs(value3.x - scene.cameraProperty(CameraProperty.X)) + Math.abs(value3.y - scene.cameraProperty(CameraProperty.Y)) <= 200) {
                Obj = sprites.create(img`
                    ......77777.....
                    .....7777777....
                    .77..a777777....
                    7777.7777777....
                    a777.a777777....
                    7777.7777777....
                    a777.a777777....
                    7777.7777777....
                    a777.a777777....
                    7777.7777777....
                    a777.a777777.77.
                    777777777777.a77
                    a77777777777.777
                    777777777777.a77
                    .77777777777.777
                    .....a777777.a77
                    .....7777777.777
                    .....a777777.a77
                    .....7777777777.
                    .....a77777777..
                    .....7777777....
                    .....a777777....
                    .....7777777....
                    .....a777777....
                    `, SpriteKind.Tree)
                Obj.setFlag(SpriteFlag.Ghost, true)
                Obj.x = value3.x
                Obj.bottom = value3.y
                Obj.z = Obj.bottom
            }
        }
    })
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile5`, function (sprite, location) {
    timer.throttle("action", 500, function () {
        if (!(inMenu)) {
            if (controller.A.isPressed()) {
                tiles.setTileAt(location, assets.tile`myTile1`)
                tiles.setWallAt(location, false)
                loadSprites()
            }
        }
    })
})
controller.menu.onEvent(ControllerButtonEvent.Pressed, function () {
    if (!(inMenu)) {
        controller.moveSprite(Collision2, 0, 0)
        inMenu = true
        myMenu = miniMenu.createMenu(
        miniMenu.createMenuItem("Seeds " + "x" + items[itemNames.indexOf("Seeds")], img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . 7 7 . . . . 7 . . . . . 
            . . . . . 7 . . . 7 . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . 7 . . . . 7 . . . . . 
            . . . . . . 7 . . 7 7 . . . . . 
            . . . 7 . . . . . . . . . . . . 
            . . 7 . . . . . 7 . . . . . . . 
            . . . . . . . . 7 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `),
        miniMenu.createMenuItem("Sticks " + "x" + items[itemNames.indexOf("Sticks")], img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . e f . . . 
            . . . . . . . . . . e e e . . . 
            . . . . . . . . . e f e . . . . 
            . . . . . . . . e e e . . . . . 
            . . . . . . . e f e . . . . . . 
            . . . . . . e e e . . . . . . . 
            . . . . . e f e . . . . . . . . 
            . . . . e e e . . . . . . . . . 
            . . . e f e . . . . . . . . . . 
            . . e e e . . . . . . . . . . . 
            . . f e . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `),
        miniMenu.createMenuItem("Wood " + "x" + items[itemNames.indexOf("Wood")], img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . d d d d . . . . . . 
            . . . . . d d e e d d . . . . . 
            . . . . . d e d d e d . . . . . 
            . . . . . d d e e d d . . . . . 
            . . . . . e d d d d e . . . . . 
            . . . . . e e e e e e . . . . . 
            . . . . . e e e e e e . . . . . 
            . . . . . e e e e e e . . . . . 
            . . . . . e e e e e e . . . . . 
            . . . . . e e e e e e . . . . . 
            . . . . . e e e e e e . . . . . 
            . . . . . . e e e e . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `),
        miniMenu.createMenuItem("Saplings " + "x" + items[itemNames.indexOf("Saplings")], img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . 6 . . . . . . . 
            . . . . . . . 6 6 6 . . . . . . 
            . . . . . . 6 6 e 6 6 . . . . . 
            . . . . . 6 6 e e e 6 6 . . . . 
            . . . . 6 6 6 6 e 6 6 6 6 . . . 
            . . . 6 6 6 6 e e 6 6 6 6 6 . . 
            . . . 6 6 6 e e e e 6 6 6 6 . . 
            . . . . 6 . e e e e e . 6 . . . 
            . . . . . . e e e e e . . . . . 
            . . . . . e e e e e e e . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `),
        miniMenu.createMenuItem("Stone " + "x" + items[itemNames.indexOf("Stone")], img`
            c b c c c c c c c c c c c c c c 
            c b c c c c c c c c c c c c c b 
            c b c c c c c c c c c c c c c b 
            c b c c c c c c b c c c c c c b 
            c b c c c c c c b c c b c c c b 
            c b c c c c c c b c c b c c c b 
            c c c c c c c c b c c b c c c b 
            c c c c c c c c b c c b c c c b 
            c c c c c c c c b c c b c c c b 
            c c c c c c c c c c c b c c c c 
            c c c c b c c c c c c b c c c c 
            c c c c b c c c c c c c c c c c 
            c c c c b c c c c c c c c c c c 
            c c c c b c c c c c c c c c c c 
            c c c c b c c c c c c c c c c c 
            c c c c b c c c c c c c c c c c 
            `),
        miniMenu.createMenuItem("Cactus " + "x" + items[itemNames.indexOf("Cactus")], img`
            . . . . . . 7 7 7 . . . . . . . 
            . . . . . 7 7 7 7 7 . . . . . . 
            . . . . . a 7 7 7 7 . . 7 7 . . 
            . . . . . 7 7 7 7 7 . 7 7 7 7 . 
            . . . . . a 7 7 7 7 . a 7 7 7 . 
            . . 7 . . 7 7 7 7 7 . 7 7 7 7 . 
            . 7 7 7 . a 7 7 7 7 . a 7 7 7 . 
            . a 7 7 . 7 7 7 7 7 . 7 7 7 7 . 
            . 7 7 7 . a 7 7 7 7 . a 7 7 7 . 
            . a 7 7 7 7 7 7 7 7 . 7 7 7 7 . 
            . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
            . . . . . 7 7 7 7 7 7 7 7 . . . 
            . . . . . a 7 7 7 7 7 7 . . . . 
            . . . . . 7 7 7 7 7 . . . . . . 
            . . . . . a 7 7 7 7 . . . . . . 
            . . . . . 7 7 7 7 7 . . . . . . 
            `),
        miniMenu.createMenuItem("Iron " + "x" + items[itemNames.indexOf("Iron")], img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . 1 1 . . . . . . . . . . . 
            . . . 1 1 1 1 . . . . . . . . . 
            . . 1 1 1 1 1 1 1 . . . . . . . 
            . . 1 1 1 1 1 1 1 1 1 . . . . . 
            . . d d 1 1 1 1 1 d 1 1 1 . . . 
            . . . . d d 1 1 1 1 d 1 1 . . . 
            . . . . . . d d 1 1 1 1 1 . . . 
            . . . . . . . . d d 1 1 . . . . 
            . . . . . . . . . . d d . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `),
        miniMenu.createMenuItem("Diamonds " + "x" + items[itemNames.indexOf("Diamonds")], img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . 9 9 9 9 9 9 . . . . . 
            . . . . 9 9 9 9 9 9 9 9 . . . . 
            . . . 9 6 9 9 9 9 9 9 6 9 . . . 
            . . . 9 6 9 9 9 9 9 9 6 9 . . . 
            . . . 9 9 6 9 9 9 9 6 9 9 . . . 
            . . . 9 9 9 9 6 6 9 9 9 9 . . . 
            . . . 9 9 9 6 9 9 6 9 9 9 . . . 
            . . . 9 9 9 6 9 9 6 9 9 9 . . . 
            . . . 9 9 9 9 6 6 9 9 9 9 . . . 
            . . . 9 6 6 9 9 9 9 6 6 9 . . . 
            . . . . 9 9 9 9 9 9 9 9 . . . . 
            . . . . . . 9 9 9 9 . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
        )
        myMenu.z = 1000
        myMenu.setFlag(SpriteFlag.RelativeToCamera, true)
        myMenu.top = 1
        myMenu.left = 1
        myMenu.setMenuStyleProperty(miniMenu.MenuStyleProperty.Width, 148)
        myMenu.setMenuStyleProperty(miniMenu.MenuStyleProperty.Height, 118)
        myMenu.setMenuStyleProperty(miniMenu.MenuStyleProperty.Columns, 1)
        myMenu.setMenuStyleProperty(miniMenu.MenuStyleProperty.Rows, 5)
        myMenu.setTitle("Inventory")
        arrowSprite = sprites.create(img`
            2 . . . . . . . 
            2 2 . . . . . . 
            2 2 2 . . . . . 
            2 2 2 2 . . . . 
            2 2 2 2 2 . . . 
            2 2 2 2 2 2 . . 
            2 2 2 2 2 2 2 . 
            2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 . 
            2 2 2 2 2 2 . . 
            2 2 2 2 2 . . . 
            2 2 2 2 . . . . 
            2 2 2 . . . . . 
            2 2 . . . . . . 
            2 . . . . . . . 
            . . . . . . . . 
            `, SpriteKind.Player)
        arrowSprite.setFlag(SpriteFlag.Ghost, true)
        arrowSprite.setFlag(SpriteFlag.RelativeToCamera, true)
        arrowSprite.right = 158
        arrowSprite.y = 60
    } else {
        myMenu.close()
        arrowSprite.destroy()
        inMenu = false
    }
})
let Smoke2: Sprite = null
let arrowSprite: Sprite = null
let myMenu: miniMenu.MenuSprite = null
let Obj: Sprite = null
let inMenu = false
let RandomNum = 0
let Collision2: Sprite = null
let itemNames: string[] = []
let items: number[] = []
items = [
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0
]
itemNames = [
"Wood",
"Stone",
"Cactus",
"Iron",
"Diamonds",
"Houses",
"Mines",
"Weaponsmiths",
"Soldiers",
"Tree Farms",
"Cactus Farms",
"Seeds",
"Saplings",
"Sticks"
]
color.setColor(10, color.rgb(50, 200, 50))
let mySprite2 = sprites.create(img`
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 9 3 9 9 9 9 9 9 9 9 9 9 9 9 1 
    1 3 3 3 9 9 9 9 9 9 9 9 9 9 9 1 
    1 9 7 9 9 9 9 9 9 9 9 9 9 9 9 1 
    1 9 7 9 9 9 9 9 9 9 9 9 9 9 9 1 
    1 9 7 2 9 9 9 9 9 2 9 2 9 9 9 1 
    1 9 9 9 2 9 9 9 2 9 9 9 2 9 9 1 
    1 2 9 2 9 2 9 2 9 2 9 2 9 2 9 1 
    1 9 2 9 2 9 2 9 2 9 2 9 2 9 2 1 
    1 9 2 9 2 9 2 9 2 9 2 9 2 9 2 1 
    1 2 9 2 7 2 9 2 9 2 9 2 9 2 9 1 
    1 2 2 7 2 2 2 9 2 2 2 9 2 2 2 1 
    1 2 4 4 9 2 9 2 2 2 2 2 9 2 9 1 
    1 4 4 4 4 2 2 2 2 2 2 2 2 2 2 1 
    1 4 4 4 4 2 2 2 2 2 2 2 2 2 2 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    `, SpriteKind.Smoke)
mySprite2.setFlag(SpriteFlag.RelativeToCamera, true)
mySprite2.right = 159
mySprite2.top = 1
mySprite2.z = 999
let Indicator = sprites.create(img`
    f f f f f f f f f f f f f f f f 
    `, SpriteKind.Smoke)
Indicator.setFlag(SpriteFlag.RelativeToCamera, true)
Indicator.right = 159
Indicator.top = 1
Indicator.z = 999
let mySprite = sprites.create(img`
    . e e e . 
    e e e e e 
    . f 4 f . 
    . 4 4 4 . 
    4 2 2 2 4 
    . 2 2 2 . 
    . f . f . 
    `, SpriteKind.Player)
mySprite.setFlag(SpriteFlag.GhostThroughWalls, true)
mySprite.setFlag(SpriteFlag.GhostThroughSprites, true)
Collision2 = sprites.create(img`
    f f f 
    `, SpriteKind.Collision)
controller.moveSprite(Collision2, 100, 100)
Collision2.setFlag(SpriteFlag.Invisible, true)
scene.cameraFollowSprite(mySprite)
tiles.setCurrentTilemap(tilemap`level1`)
let list = [
assets.tile`myTile`,
assets.tile`myTile0`,
assets.tile`myTile1`,
assets.tile`myTile2`
]
for (let index = 0; index <= 63; index++) {
    for (let index2 = 0; index2 <= 63; index2++) {
        RandomNum = randint(0, 200)
        if (RandomNum <= 99 && !(index == 0)) {
            tiles.setTileAt(tiles.getTileLocation(index, index2), tiles.tileImageAtLocation(tiles.getTileLocation(index, index2).getNeighboringLocation(CollisionDirection.Left)))
        } else if (RandomNum > 99 && RandomNum <= 198 && !(index2 == 0)) {
            tiles.setTileAt(tiles.getTileLocation(index, index2), tiles.tileImageAtLocation(tiles.getTileLocation(index, index2).getNeighboringLocation(CollisionDirection.Top)))
        } else {
            if (assets.tile`myTile1` != tiles.tileImageAtLocation(tiles.getTileLocation(index, index2).getNeighboringLocation(CollisionDirection.Left)) && assets.tile`myTile1` != tiles.tileImageAtLocation(tiles.getTileLocation(index, index2).getNeighboringLocation(CollisionDirection.Top)) && (assets.tile`myTile2` != tiles.tileImageAtLocation(tiles.getTileLocation(index, index2).getNeighboringLocation(CollisionDirection.Left)) && assets.tile`myTile2` != tiles.tileImageAtLocation(tiles.getTileLocation(index, index2).getNeighboringLocation(CollisionDirection.Top)))) {
                tiles.setTileAt(tiles.getTileLocation(index, index2), list[randint(0, 3)])
            } else {
                tiles.setTileAt(tiles.getTileLocation(index, index2), list[randint(0, 1)])
            }
        }
    }
}
for (let value4 of tiles.getTilesByType(assets.tile`myTile1`)) {
    if (Math.percentChance(5)) {
        tiles.setTileAt(value4, assets.tile`myTile5`)
        tiles.setWallAt(value4, true)
    }
}
for (let value22 of tiles.getTilesByType(assets.tile`myTile`)) {
    if (Math.percentChance(5)) {
        tiles.setTileAt(value22, assets.tile`myTile4`)
    }
}
for (let value32 of tiles.getTilesByType(assets.tile`myTile0`)) {
    if (Math.percentChance(5)) {
        tiles.setTileAt(value32, assets.tile`myTile6`)
        tiles.setWallAt(value32, true)
    }
}
for (let value42 of tiles.getTilesByType(assets.tile`myTile2`)) {
    if (Math.percentChance(3)) {
        tiles.setTileAt(value42, assets.tile`myTile3`)
    }
}
game.onUpdate(function () {
	
})
game.onUpdate(function () {
    if (controller.right.isPressed() && inMenu) {
        myMenu.close()
        myMenu = miniMenu.createMenu(
        miniMenu.createMenuItem("Houses " + "x" + items[itemNames.indexOf("Houses")]),
        miniMenu.createMenuItem("Mines " + "x" + items[itemNames.indexOf("Mines")]),
        miniMenu.createMenuItem("Weaponsmiths " + "x" + items[itemNames.indexOf("Weaponsmiths")]),
        miniMenu.createMenuItem("Soldiers " + "x" + items[itemNames.indexOf("Soldiers")]),
        miniMenu.createMenuItem("Tree Farms " + "x" + items[itemNames.indexOf("Tree Farms")]),
        miniMenu.createMenuItem("Cactus Farms " + "x" + items[itemNames.indexOf("Cactus Farms")])
        )
        myMenu.z = 1000
        myMenu.setFlag(SpriteFlag.RelativeToCamera, true)
        myMenu.top = 1
        myMenu.left = 11
        myMenu.setMenuStyleProperty(miniMenu.MenuStyleProperty.Width, 148)
        myMenu.setMenuStyleProperty(miniMenu.MenuStyleProperty.Height, 118)
        myMenu.setMenuStyleProperty(miniMenu.MenuStyleProperty.Columns, 1)
        myMenu.setMenuStyleProperty(miniMenu.MenuStyleProperty.Rows, 5)
        myMenu.setTitle("Placeable Resources")
        arrowSprite.setImage(img`
            . . . . . . . 2 
            . . . . . . 2 2 
            . . . . . 2 2 2 
            . . . . 2 2 2 2 
            . . . 2 2 2 2 2 
            . . 2 2 2 2 2 2 
            . 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 
            . 2 2 2 2 2 2 2 
            . . 2 2 2 2 2 2 
            . . . 2 2 2 2 2 
            . . . . 2 2 2 2 
            . . . . . 2 2 2 
            . . . . . . 2 2 
            . . . . . . . 2 
            . . . . . . . . 
            `)
        arrowSprite.left = 1
    }
    if (controller.left.isPressed() && inMenu) {
        myMenu.close()
        myMenu = miniMenu.createMenu(
        miniMenu.createMenuItem("Seeds " + "x" + items[itemNames.indexOf("Seeds")], img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . 7 7 . . . . 7 . . . . . 
            . . . . . 7 . . . 7 . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . 7 . . . . 7 . . . . . 
            . . . . . . 7 . . 7 7 . . . . . 
            . . . 7 . . . . . . . . . . . . 
            . . 7 . . . . . 7 . . . . . . . 
            . . . . . . . . 7 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `),
        miniMenu.createMenuItem("Sticks " + "x" + items[itemNames.indexOf("Sticks")], img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . e f . . . 
            . . . . . . . . . . e e e . . . 
            . . . . . . . . . e f e . . . . 
            . . . . . . . . e e e . . . . . 
            . . . . . . . e f e . . . . . . 
            . . . . . . e e e . . . . . . . 
            . . . . . e f e . . . . . . . . 
            . . . . e e e . . . . . . . . . 
            . . . e f e . . . . . . . . . . 
            . . e e e . . . . . . . . . . . 
            . . f e . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `),
        miniMenu.createMenuItem("Wood " + "x" + items[itemNames.indexOf("Wood")], img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . d d d d . . . . . . 
            . . . . . d d e e d d . . . . . 
            . . . . . d e d d e d . . . . . 
            . . . . . d d e e d d . . . . . 
            . . . . . e d d d d e . . . . . 
            . . . . . e e e e e e . . . . . 
            . . . . . e e e e e e . . . . . 
            . . . . . e e e e e e . . . . . 
            . . . . . e e e e e e . . . . . 
            . . . . . e e e e e e . . . . . 
            . . . . . e e e e e e . . . . . 
            . . . . . . e e e e . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `),
        miniMenu.createMenuItem("Saplings " + "x" + items[itemNames.indexOf("Saplings")], img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . 6 . . . . . . . 
            . . . . . . . 6 6 6 . . . . . . 
            . . . . . . 6 6 e 6 6 . . . . . 
            . . . . . 6 6 e e e 6 6 . . . . 
            . . . . 6 6 6 6 e 6 6 6 6 . . . 
            . . . 6 6 6 6 e e 6 6 6 6 6 . . 
            . . . 6 6 6 e e e e 6 6 6 6 . . 
            . . . . 6 . e e e e e . 6 . . . 
            . . . . . . e e e e e . . . . . 
            . . . . . e e e e e e e . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `),
        miniMenu.createMenuItem("Stone " + "x" + items[itemNames.indexOf("Stone")], img`
            c b c c c c c c c c c c c c c c 
            c b c c c c c c c c c c c c c b 
            c b c c c c c c c c c c c c c b 
            c b c c c c c c b c c c c c c b 
            c b c c c c c c b c c b c c c b 
            c b c c c c c c b c c b c c c b 
            c c c c c c c c b c c b c c c b 
            c c c c c c c c b c c b c c c b 
            c c c c c c c c b c c b c c c b 
            c c c c c c c c c c c b c c c c 
            c c c c b c c c c c c b c c c c 
            c c c c b c c c c c c c c c c c 
            c c c c b c c c c c c c c c c c 
            c c c c b c c c c c c c c c c c 
            c c c c b c c c c c c c c c c c 
            c c c c b c c c c c c c c c c c 
            `),
        miniMenu.createMenuItem("Cactus " + "x" + items[itemNames.indexOf("Cactus")], img`
            . . . . . . 7 7 7 . . . . . . . 
            . . . . . 7 7 7 7 7 . . . . . . 
            . . . . . a 7 7 7 7 . . 7 7 . . 
            . . . . . 7 7 7 7 7 . 7 7 7 7 . 
            . . . . . a 7 7 7 7 . a 7 7 7 . 
            . . 7 . . 7 7 7 7 7 . 7 7 7 7 . 
            . 7 7 7 . a 7 7 7 7 . a 7 7 7 . 
            . a 7 7 . 7 7 7 7 7 . 7 7 7 7 . 
            . 7 7 7 . a 7 7 7 7 . a 7 7 7 . 
            . a 7 7 7 7 7 7 7 7 . 7 7 7 7 . 
            . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
            . . . . . 7 7 7 7 7 7 7 7 . . . 
            . . . . . a 7 7 7 7 7 7 . . . . 
            . . . . . 7 7 7 7 7 . . . . . . 
            . . . . . a 7 7 7 7 . . . . . . 
            . . . . . 7 7 7 7 7 . . . . . . 
            `),
        miniMenu.createMenuItem("Iron " + "x" + items[itemNames.indexOf("Iron")], img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . 1 1 . . . . . . . . . . . 
            . . . 1 1 1 1 . . . . . . . . . 
            . . 1 1 1 1 1 1 1 . . . . . . . 
            . . 1 1 1 1 1 1 1 1 1 . . . . . 
            . . d d 1 1 1 1 1 d 1 1 1 . . . 
            . . . . d d 1 1 1 1 d 1 1 . . . 
            . . . . . . d d 1 1 1 1 1 . . . 
            . . . . . . . . d d 1 1 . . . . 
            . . . . . . . . . . d d . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `),
        miniMenu.createMenuItem("Diamonds " + "x" + items[itemNames.indexOf("Diamonds")], img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . 9 9 9 9 9 9 . . . . . 
            . . . . 9 9 9 9 9 9 9 9 . . . . 
            . . . 9 6 9 9 9 9 9 9 6 9 . . . 
            . . . 9 6 9 9 9 9 9 9 6 9 . . . 
            . . . 9 9 6 9 9 9 9 6 9 9 . . . 
            . . . 9 9 9 9 6 6 9 9 9 9 . . . 
            . . . 9 9 9 6 9 9 6 9 9 9 . . . 
            . . . 9 9 9 6 9 9 6 9 9 9 . . . 
            . . . 9 9 9 9 6 6 9 9 9 9 . . . 
            . . . 9 6 6 9 9 9 9 6 6 9 . . . 
            . . . . 9 9 9 9 9 9 9 9 . . . . 
            . . . . . . 9 9 9 9 . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
        )
        myMenu.z = 1000
        myMenu.setFlag(SpriteFlag.RelativeToCamera, true)
        myMenu.top = 1
        myMenu.left = 1
        myMenu.setMenuStyleProperty(miniMenu.MenuStyleProperty.Width, 148)
        myMenu.setMenuStyleProperty(miniMenu.MenuStyleProperty.Height, 118)
        myMenu.setMenuStyleProperty(miniMenu.MenuStyleProperty.Columns, 1)
        myMenu.setMenuStyleProperty(miniMenu.MenuStyleProperty.Rows, 5)
        myMenu.setTitle("Inventory")
        arrowSprite.setImage(img`
            2 . . . . . . . 
            2 2 . . . . . . 
            2 2 2 . . . . . 
            2 2 2 2 . . . . 
            2 2 2 2 2 . . . 
            2 2 2 2 2 2 . . 
            2 2 2 2 2 2 2 . 
            2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 . 
            2 2 2 2 2 2 . . 
            2 2 2 2 2 . . . 
            2 2 2 2 . . . . 
            2 2 2 . . . . . 
            2 2 . . . . . . 
            2 . . . . . . . 
            . . . . . . . . 
            `)
        arrowSprite.right = 158
    }
})
game.onUpdate(function () {
    for (let value5 of tiles.getTilesByType(assets.tile`myTile3`)) {
        if (Math.percentChance(1)) {
            Smoke2 = sprites.create(img`
                . . . . b b b b b b b . . . . 
                . . b b b b b b b b b b b . . 
                . b b b b b b b b b b b b b . 
                . b b b b b b b b b b b b b . 
                b b b b b b b b b b b b b b b 
                b b b b b b b b b b b b b b b 
                b b b b b b b b b b b b b b b 
                b b b b b b b b b b b b b b b 
                b b b b b b b b b b b b b b b 
                b b b b b b b b b b b b b b b 
                b b b b b b b b b b b b b b b 
                . b b b b b b b b b b b b b . 
                . b b b b b b b b b b b b b . 
                . . b b b b b b b b b b b . . 
                . . . . b b b b b b b . . . . 
                `, SpriteKind.Smoke)
            Smoke2.setFlag(SpriteFlag.Ghost, true)
            Smoke2.setPosition(value5.x + randint(-3, 3), value5.y)
            Smoke2.scale = randint(5, 100) / 100
            Smoke2.vy = randint(-10, -25)
            Smoke2.lifespan = 4000
        }
    }
})
game.onUpdateInterval(18750, function () {
    if (Indicator.y < 17) {
        Indicator.y += 1
    } else {
        Indicator.y = 1
    }
})
game.onUpdateInterval(1000, function () {
    if (inMenu) {
        if (arrowSprite.right < 159) {
            arrowSprite.x += 1
        }
        timer.after(500, function () {
            if (arrowSprite.left > 1) {
                arrowSprite.x += -1
            }
        })
    } else {
        loadSprites()
    }
})
forever(function () {
    mySprite.bottom = Collision2.bottom + 1
    mySprite.x = Collision2.x
    mySprite.z = Collision2.bottom
})
