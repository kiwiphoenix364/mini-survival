namespace SpriteKind {
    export const Tree = SpriteKind.create()
    export const Collision = SpriteKind.create()
    export const Smoke = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile19`, function (sprite, location) {
    if (controller.A.isPressed()) {
        if (game.ask("Destroy? (NO REFUNDS)", "GO BACK")) {
            tiles.setTileAt(location, assets.tile`2`)
        }
    }
})
function Reload_Tool_Menu () {
    ToolMenu.destroy()
    ToolMenu = miniMenu.createMenuFromArray(ToolList)
    ToolMenu.setButtonEventsEnabled(false)
    ToolMenu.setFlag(SpriteFlag.RelativeToCamera, true)
    ToolMenu.setTitle("Tools [Hold B]")
    ToolMenu.z = 998
    ToolMenu.top = 1
    ToolMenu.left = 1
    ToolMenu.setMenuStyleProperty(miniMenu.MenuStyleProperty.Width, 112)
    ToolMenu.setMenuStyleProperty(miniMenu.MenuStyleProperty.Height, 24)
    ToolMenu.setMenuStyleProperty(miniMenu.MenuStyleProperty.ScrollIndicatorColor, 1)
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (!(inMenu)) {
        controller.moveSprite(Collision2, 0, 0)
        Reload_Tool_Menu()
        ToolMenu.setButtonEventsEnabled(true)
    }
})
controller.anyButton.onEvent(ControllerButtonEvent.Pressed, function () {
    if (controller.right.isPressed() && inMenu && menuNum == 1) {
    	
    } else if (controller.left.isPressed() && inMenu && menuNum == 2 || controller.right.isPressed() && inMenu && menuNum == 2) {
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
        miniMenu.createMenuItem("Wheat " + "x" + items[itemNames.indexOf("Wheat")], img`
            . . . . . . . . . . . . . . . . 
            . . . . . 5 . 5 . 5 . . . . . . 
            . . . . . . 5 5 5 . 5 . . . . . 
            . . . . . . 5 5 5 5 . . . . . . 
            . . . . . . e e 5 5 . . . . . . 
            . . . . . . 5 5 e e . . . . . . 
            . . . . . . 5 5 5 . . . . . . . 
            . . . . . e e 5 5 . . . . . . . 
            . . . . . 5 5 e e . . . . . . . 
            . . . . 5 5 5 5 5 . . . . . . . 
            . . . . . . 5 5 5 . . . . . . . 
            . . . . . 5 . 5 . . . . . . . . 
            . . . . . . . . . . . . . . . . 
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
        myMenu.setMenuStyleProperty(miniMenu.MenuStyleProperty.Width, 148)
        myMenu.setMenuStyleProperty(miniMenu.MenuStyleProperty.Height, 118)
        myMenu.setMenuStyleProperty(miniMenu.MenuStyleProperty.Columns, 1)
        myMenu.setMenuStyleProperty(miniMenu.MenuStyleProperty.Rows, 6)
        myMenu.setMenuStyleProperty(miniMenu.MenuStyleProperty.ScrollIndicatorColor, 1)
        myMenu.setTitle("Inventory")
        arrowSprite.setFlag(SpriteFlag.Invisible, true)
        menuNum = 1
        myMenu.top = 1
        myMenu.left = 11
    } else if (controller.left.isPressed() && inMenu && menuNum == 1) {
        myMenu.close()
        myMenu = miniMenu.createMenuFromArray([
        miniMenu.createMenuItem("3x Sticks = Axe [LVL 1]"),
        miniMenu.createMenuItem("2x Sticks + Wood = Axe [LVL 2]"),
        miniMenu.createMenuItem("2x Sticks + Stone = Axe [LVL 3]"),
        miniMenu.createMenuItem("2x Sticks + Iron = Axe [LVL 4]"),
        miniMenu.createMenuItem("2x Sticks + Diamond = Axe [MAX LVL]"),
        miniMenu.createMenuItem("2x Sticks + 3x Wood = Pick [LVL 1]"),
        miniMenu.createMenuItem("2x Sticks + 3x Stone = Pick [LVL 2]"),
        miniMenu.createMenuItem("2x Sticks + 3x Iron = Pick [LVL 3]"),
        miniMenu.createMenuItem("2x Sticks + 3x Diamond = Pick [MAX LVL]"),
        miniMenu.createMenuItem("2x Sticks + 2x Stone = Hoe [LVL 1]"),
        miniMenu.createMenuItem("2x Sticks + 2x Iron = Hoe [LVL 2]"),
        miniMenu.createMenuItem("2x Sticks + 2x Diamond = Hoe [MAX LVL]"),
        miniMenu.createMenuItem("3x Cactus + 1 Axe = Cactus Farm [AXE LVL]"),
        miniMenu.createMenuItem("3x Saplings + 1 Axe = Tree Farm [AXE LVL]"),
        miniMenu.createMenuItem("10x Seeds + 1 Hoe = Wheat Farm [HOE LVL]"),
        miniMenu.createMenuItem("3x Wood + 1 Pick = Mine"),
        miniMenu.createMenuItem("10x Wood + 4x Iron = House + Hired Wheat Farmer (Place house next to a Wheat Farm to auto-collect wheat)"),
        miniMenu.createMenuItem("10x Wood + 4x Iron + 2 Sticks + 4 Materials = House + Hired Soldier [LVL MATERIAL]")
        ])
        arrowSprite.setFlag(SpriteFlag.Invisible, false)
        myMenu.z = 1000
        myMenu.setFlag(SpriteFlag.RelativeToCamera, true)
        myMenu.setMenuStyleProperty(miniMenu.MenuStyleProperty.Width, 148)
        myMenu.setMenuStyleProperty(miniMenu.MenuStyleProperty.Height, 118)
        myMenu.setMenuStyleProperty(miniMenu.MenuStyleProperty.Columns, 1)
        myMenu.setMenuStyleProperty(miniMenu.MenuStyleProperty.Rows, 6)
        myMenu.setMenuStyleProperty(miniMenu.MenuStyleProperty.ScrollIndicatorColor, 1)
        myMenu.setTitle("Crafts")
        arrowSprite.setFlag(SpriteFlag.Invisible, false)
        menuNum = 2
        myMenu.top = 1
        myMenu.left = 1
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile15`, function (sprite, location) {
    if (controller.A.isPressed()) {
        if (game.ask("Destroy? (NO REFUNDS)", "GO BACK")) {
            tiles.setTileAt(location, assets.tile`0`)
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile22`, function (sprite, location) {
    if (controller.A.isPressed()) {
        if (game.ask("Destroy? (NO REFUNDS)", "GO BACK")) {
            tiles.setTileAt(location, assets.tile`2`)
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile24`, function (sprite, location) {
    if (controller.A.isPressed()) {
        if (game.ask("Destroy? (NO REFUNDS)", "GO BACK")) {
            tiles.setTileAt(location, assets.tile`1`)
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile13`, function (sprite, location) {
    if (controller.A.isPressed()) {
        if (game.ask("Destroy? (NO REFUNDS)", "GO BACK")) {
            tiles.setTileAt(location, assets.tile`0`)
        }
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (menuNum == 3) {
        if (tiles.tileAtLocationEquals(tiles.getTileLocation(mySprite3.x / 16, mySprite3.y / 16), assets.tile`4`) || (tiles.tileAtLocationEquals(tiles.getTileLocation(mySprite3.x / 16, mySprite3.y / 16), assets.tile`3`) || tiles.tileAtLocationEquals(tiles.getTileLocation(mySprite3.x / 16, mySprite3.y / 16), assets.tile`2`) || tiles.tileAtLocationEquals(tiles.getTileLocation(mySprite3.x / 16, mySprite3.y / 16), assets.tile`1`) || tiles.tileAtLocationEquals(tiles.getTileLocation(mySprite3.x / 16, mySprite3.y / 16), assets.tile`0`))) {
            if (tiles.tileAtLocationEquals(tiles.getTileLocation(mySprite3.x / 16, mySprite3.y / 16), assets.tile`4`)) {
                if (tileMem == assets.tile`myTile26` || tileMem == assets.tile`myTile27` || (tileMem == assets.tile`myTile28` || tileMem == assets.tile`myTile28`)) {
                    tiles.setTileAt(tiles.getTileLocation(mySprite3.x / 16, mySprite3.y / 16), tileMem)
                } else {
                    mySprite3.sayText("Can't Be Placed On")
                }
            } else {
                if (tiles.tileAtLocationEquals(tiles.getTileLocation(mySprite3.x / 16, mySprite3.y / 16), assets.tile`4`)) {
                    mySprite3.sayText("Can't Be Placed On")
                } else {
                    tiles.setTileAt(tiles.getTileLocation(mySprite3.x / 16, mySprite3.y / 16), tileMem)
                }
            }
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile7`, function (sprite, location) {
    if (controller.A.isPressed()) {
        if (game.ask("Destroy? (NO REFUNDS)", "GO BACK")) {
            tiles.setTileAt(location, assets.tile`1`)
        }
    }
})
function loadSprites () {
    timer.background(function () {
        for (let value of sprites.allOfKind(SpriteKind.Tree)) {
            if (scene.cameraProperty(CameraProperty.X) > mySprite.x + 96) {
                value.destroy()
            } else if (scene.cameraProperty(CameraProperty.X) < mySprite.x - 96) {
                value.destroy()
            } else if (scene.cameraProperty(CameraProperty.Y) > mySprite.y + 76) {
                value.destroy()
            } else if (scene.cameraProperty(CameraProperty.Y) < mySprite.y - 76) {
                value.destroy()
            }
        }
        Repeat = tiles.getTilesByType(assets.tile`myTile5`).length / 6000
        for (let value of tiles.getTilesByType(assets.tile`myTile5`)) {
            if (value.x > mySprite.x - 120 && value.x < mySprite.x + 120 && (value.y < mySprite.y + 100 && value.y > mySprite.y - 100)) {
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
                Obj.lifespan = 1250
                Obj.setFlag(SpriteFlag.Ghost, true)
                Obj.x = value.x
                Obj.bottom = value.y
                Obj.z = Obj.bottom
                pause(Repeat)
            }
        }
        Repeat = tiles.getTilesByType(assets.tile`5`).length / 6000
        for (let value of tiles.getTilesByType(assets.tile`5`)) {
            if (value.x > mySprite.x - 120 && value.x < mySprite.x + 120 && (value.y < mySprite.y + 100 && value.y > mySprite.y - 100)) {
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
                Obj.lifespan = 1250
                Obj.setFlag(SpriteFlag.Ghost, true)
                Obj.x = value.x
                Obj.bottom = value.y
                Obj.z = Obj.bottom
                pause(Repeat)
            }
        }
        Repeat = tiles.getTilesByType(assets.tile`6`).length / 6000
        for (let value of tiles.getTilesByType(assets.tile`6`)) {
            if (value.x > mySprite.x - 120 && value.x < mySprite.x + 120 && (value.y < mySprite.y + 100 && value.y > mySprite.y - 100)) {
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
                Obj.lifespan = 1250
                Obj.setFlag(SpriteFlag.Ghost, true)
                Obj.x = value.x
                Obj.bottom = value.y
                Obj.z = Obj.bottom
                pause(Repeat)
            }
        }
    })
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile25`, function (sprite, location) {
    if (controller.A.isPressed()) {
        if (game.ask("Destroy? (NO REFUNDS)", "GO BACK")) {
            tiles.setTileAt(location, assets.tile`1`)
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile12`, function (sprite, location) {
    if (controller.A.isPressed()) {
        tiles.setTileAt(location, assets.tile`myTile11`)
        items[itemNames.indexOf("Seeds")] = items[itemNames.indexOf("Seeds")] + randint(6, 10)
        items[itemNames.indexOf("Wheat")] = items[itemNames.indexOf("Wheat")] + randint(21, 30)
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
	
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile9`, function (sprite, location) {
    if (controller.A.isPressed()) {
        if (game.ask("Destroy? (NO REFUNDS)", "GO BACK")) {
            tiles.setTileAt(location, assets.tile`1`)
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile18`, function (sprite, location) {
    if (controller.A.isPressed()) {
        if (game.ask("Destroy? (NO REFUNDS)", "GO BACK")) {
            tiles.setTileAt(location, assets.tile`2`)
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile29`, function (sprite, location) {
    if (controller.A.isPressed()) {
        if (game.ask("Destroy? (NO REFUNDS)", "GO BACK")) {
            tiles.setTileAt(location, assets.tile`4`)
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile5`, function (sprite, location) {
    timer.throttle("action", 500, function () {
        if (!(inMenu)) {
            if (controller.A.isPressed()) {
                if (ToolNum[Tools.indexOf("Axe [LVL 1]")] > 0 || (ToolNum[Tools.indexOf("Axe [LVL 2]")] > 0 || (ToolNum[Tools.indexOf("Axe [LVL 3]")] > 0 || (ToolNum[Tools.indexOf("Axe [LVL 4]")] > 0 || ToolNum[Tools.indexOf("Axe [MAX LVL]")] > 0)))) {
                    mySprite.sayText("+1 Wood, +1 Sapling", 500, false)
                    items[itemNames.indexOf("Wood")] = items[itemNames.indexOf("Wood")] + 1
                    items[itemNames.indexOf("Saplings")] = items[itemNames.indexOf("Saplings")] + 1
                    tiles.setTileAt(location, assets.tile`2`)
                    tiles.setWallAt(location, false)
                    loadSprites()
                } else {
                    mySprite.sayText("Axe needed", 500, false)
                }
            }
        }
    })
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile21`, function (sprite, location) {
    if (controller.A.isPressed()) {
        if (game.ask("Destroy? (NO REFUNDS)", "GO BACK")) {
            tiles.setTileAt(location, assets.tile`2`)
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile16`, function (sprite, location) {
    if (controller.A.isPressed()) {
        if (game.ask("Destroy? (NO REFUNDS)", "GO BACK")) {
            tiles.setTileAt(location, assets.tile`0`)
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile20`, function (sprite, location) {
    if (controller.A.isPressed()) {
        if (game.ask("Destroy? (NO REFUNDS)", "GO BACK")) {
            tiles.setTileAt(location, assets.tile`2`)
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile17`, function (sprite, location) {
    if (controller.A.isPressed()) {
        if (game.ask("Destroy? (NO REFUNDS)", "GO BACK")) {
            tiles.setTileAt(location, assets.tile`0`)
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile8`, function (sprite, location) {
    if (controller.A.isPressed()) {
        tiles.setTileAt(location, assets.tile`myTile7`)
        items[itemNames.indexOf("Seeds")] = items[itemNames.indexOf("Seeds")] + randint(0, 3)
        items[itemNames.indexOf("Wheat")] = items[itemNames.indexOf("Wheat")] + randint(0, 10)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`6`, function (sprite, location) {
    timer.throttle("action", 250, function () {
        if (!(inMenu)) {
            if (controller.A.isPressed()) {
                if (ToolNum[Tools.indexOf("Axe [LVL 1]")] > 0 || (ToolNum[Tools.indexOf("Axe [LVL 2]")] > 0 || (ToolNum[Tools.indexOf("Axe [LVL 3]")] > 0 || (ToolNum[Tools.indexOf("Axe [LVL 4]")] > 0 || ToolNum[Tools.indexOf("Axe [MAX LVL]")] > 0)))) {
                    mySprite.sayText("+1 Wood", 500, false)
                    items[itemNames.indexOf("Cactus")] = items[itemNames.indexOf("Cactus")] + 1
                    tiles.setTileAt(location, assets.tile`0`)
                    tiles.setWallAt(location, false)
                    loadSprites()
                } else {
                    mySprite.sayText("Axe Needed", 500, false)
                }
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
        miniMenu.createMenuItem("Wheat " + "x" + items[itemNames.indexOf("Wheat")], img`
            . . . . . . . . . . . . . . . . 
            . . . . . 5 . 5 . 5 . . . . . . 
            . . . . . . 5 5 5 . 5 . . . . . 
            . . . . . . 5 5 5 5 . . . . . . 
            . . . . . . e e 5 5 . . . . . . 
            . . . . . . 5 5 e e . . . . . . 
            . . . . . . 5 5 5 . . . . . . . 
            . . . . . e e 5 5 . . . . . . . 
            . . . . . 5 5 e e . . . . . . . 
            . . . . 5 5 5 5 5 . . . . . . . 
            . . . . . . 5 5 5 . . . . . . . 
            . . . . . 5 . 5 . . . . . . . . 
            . . . . . . . . . . . . . . . . 
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
        myMenu.left = 11
        myMenu.setMenuStyleProperty(miniMenu.MenuStyleProperty.Width, 148)
        myMenu.setMenuStyleProperty(miniMenu.MenuStyleProperty.Height, 118)
        myMenu.setMenuStyleProperty(miniMenu.MenuStyleProperty.Columns, 1)
        myMenu.setMenuStyleProperty(miniMenu.MenuStyleProperty.Rows, 6)
        myMenu.setMenuStyleProperty(miniMenu.MenuStyleProperty.ScrollIndicatorColor, 1)
        myMenu.setTitle("Inventory")
        arrowSprite = sprites.create(img`
            f . . . . . . . 
            1 f . . . . . . 
            1 1 f . . . . . 
            1 1 1 f . . . . 
            1 1 1 1 f . . . 
            1 1 1 1 1 f . . 
            1 1 1 1 1 1 f . 
            1 1 1 1 1 1 1 f 
            1 1 1 1 1 1 f . 
            1 1 1 1 1 f . . 
            1 1 1 1 f . . . 
            1 1 1 f . . . . 
            1 1 f . . . . . 
            1 f . . . . . . 
            f . . . . . . . 
            . . . . . . . . 
            `, SpriteKind.Player)
        arrowSprite.setFlag(SpriteFlag.Invisible, true)
        arrowSprite.setFlag(SpriteFlag.Ghost, true)
        arrowSprite.setFlag(SpriteFlag.RelativeToCamera, true)
        arrowSprite.right = 158
        arrowSprite.y = 60
        arrowSprite.z = 999
        arrowSprite2 = sprites.create(img`
            . . . . . . . f 
            . . . . . . f 1 
            . . . . . f 1 1 
            . . . . f 1 1 1 
            . . . f 1 1 1 1 
            . . f 1 1 1 1 1 
            . f 1 1 1 1 1 1 
            f 1 1 1 1 1 1 1 
            . f 1 1 1 1 1 1 
            . . f 1 1 1 1 1 
            . . . f 1 1 1 1 
            . . . . f 1 1 1 
            . . . . . f 1 1 
            . . . . . . f 1 
            . . . . . . . f 
            . . . . . . . . 
            `, SpriteKind.Player)
        arrowSprite2.setFlag(SpriteFlag.Ghost, true)
        arrowSprite2.setFlag(SpriteFlag.RelativeToCamera, true)
        arrowSprite2.left = 1
        arrowSprite2.y = 60
        arrowSprite2.z = 999
        menuNum = 1
    } else {
        myMenu.close()
        arrowSprite.destroy()
        arrowSprite2.destroy()
        inMenu = false
        controller.moveSprite(Collision2)
        menuNum = 0
    }
})
controller.B.onEvent(ControllerButtonEvent.Released, function () {
    controller.moveSprite(Collision2)
    ToolMenu.setButtonEventsEnabled(false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile10`, function (sprite, location) {
    if (controller.A.isPressed()) {
        tiles.setTileAt(location, assets.tile`myTile9`)
        items[itemNames.indexOf("Seeds")] = items[itemNames.indexOf("Seeds")] + randint(2, 5)
        items[itemNames.indexOf("Wheat")] = items[itemNames.indexOf("Wheat")] + randint(11, 20)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile27`, function (sprite, location) {
    if (controller.A.isPressed()) {
        if (game.ask("Destroy? (NO REFUNDS)", "GO BACK")) {
            tiles.setTileAt(location, assets.tile`4`)
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`5`, function (sprite, location) {
    timer.throttle("action", 100, function () {
        if (!(inMenu)) {
            if (controller.A.isPressed()) {
                if (Math.percentChance(40)) {
                    mySprite.sayText("+1 Seeds, +1 Sticks", 500, false)
                    items[itemNames.indexOf("Seeds")] = items[itemNames.indexOf("Seeds")] + 1
                    items[itemNames.indexOf("Sticks")] = items[itemNames.indexOf("Sticks")] + 1
                } else {
                    mySprite.sayText("+1 Seeds", 500, false)
                    items[itemNames.indexOf("Seeds")] = items[itemNames.indexOf("Seeds")] + 1
                }
                tiles.setTileAt(location, assets.tile`1`)
                tiles.setWallAt(location, false)
                loadSprites()
            }
        }
    })
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile23`, function (sprite, location) {
    if (controller.A.isPressed()) {
        if (game.ask("Destroy? (NO REFUNDS)", "GO BACK")) {
            tiles.setTileAt(location, assets.tile`1`)
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile14`, function (sprite, location) {
    if (controller.A.isPressed()) {
        if (game.ask("Destroy? (NO REFUNDS)", "GO BACK")) {
            tiles.setTileAt(location, assets.tile`0`)
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile11`, function (sprite, location) {
    if (controller.A.isPressed()) {
        if (game.ask("Destroy? (NO REFUNDS)", "GO BACK")) {
            tiles.setTileAt(location, assets.tile`1`)
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile26`, function (sprite, location) {
    if (controller.A.isPressed()) {
        if (game.ask("Destroy? (NO REFUNDS)", "GO BACK")) {
            tiles.setTileAt(location, assets.tile`4`)
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile28`, function (sprite, location) {
    if (controller.A.isPressed()) {
        if (game.ask("Destroy? (NO REFUNDS)", "GO BACK")) {
            tiles.setTileAt(location, assets.tile`4`)
        }
    }
})
let Randomized = 0
let textSprite: TextSprite = null
let enemyStats = 0
let myStats = 0
let myMenu2: miniMenu.MenuSprite = null
let Smoke2: Sprite = null
let arrowSprite2: Sprite = null
let Obj: Sprite = null
let Repeat = 0
let tileMem: Image = null
let mySprite3: Sprite = null
let arrowSprite: Sprite = null
let myMenu: miniMenu.MenuSprite = null
let menuNum = 0
let inMenu = false
let savedTilemap: number[] = []
let RandomNum = 0
let Collision2: Sprite = null
let mySprite: Sprite = null
let itemNames: string[] = []
let items: number[] = []
let ToolMenu: miniMenu.MenuSprite = null
let ToolList: miniMenu.MenuItem[] = []
let Tools: string[] = []
let ToolNum: number[] = []
if (blockSettings.exists("Tilemap")) {
    if (game.ask("Continue Saved Game? [A]", "Delete Save [B]")) {
    	
    } else {
        if (game.ask("Confirm Delete [A]", "Go Back [A]")) {
            blockSettings.clear()
        } else {
            game.reset()
        }
    }
}
ToolNum = [
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
0,
0,
0,
0,
0
]
Tools = [
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
""
]
ToolList = [
miniMenu.createMenuItem(""),
miniMenu.createMenuItem(""),
miniMenu.createMenuItem(""),
miniMenu.createMenuItem(""),
miniMenu.createMenuItem(""),
miniMenu.createMenuItem(""),
miniMenu.createMenuItem(""),
miniMenu.createMenuItem(""),
miniMenu.createMenuItem(""),
miniMenu.createMenuItem(""),
miniMenu.createMenuItem("")
]
ToolMenu = miniMenu.createMenu(
miniMenu.createMenuItem("[NONE]")
)
ToolMenu.setButtonEventsEnabled(false)
ToolMenu.setFlag(SpriteFlag.RelativeToCamera, true)
ToolMenu.setTitle("Tools [Hold B]")
ToolMenu.z = 998
ToolMenu.top = 1
ToolMenu.left = 1
ToolMenu.setMenuStyleProperty(miniMenu.MenuStyleProperty.Width, 112)
ToolMenu.setMenuStyleProperty(miniMenu.MenuStyleProperty.Height, 24)
ToolMenu.setMenuStyleProperty(miniMenu.MenuStyleProperty.ScrollIndicatorColor, 1)
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
"Seeds",
"Saplings",
"Sticks",
"Wheat"
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
mySprite = sprites.create(img`
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
assets.tile`1`,
assets.tile`0`,
assets.tile`2`,
assets.tile`3`
]
for (let index = 0; index <= 99; index++) {
    for (let index2 = 0; index2 <= 99; index2++) {
        RandomNum = randint(0, 200)
        if (RandomNum <= 99 && !(index == 0)) {
            tiles.setTileAt(tiles.getTileLocation(index, index2), tiles.tileImageAtLocation(tiles.getTileLocation(index, index2).getNeighboringLocation(CollisionDirection.Left)))
        } else if (RandomNum > 99 && RandomNum <= 198 && !(index2 == 0)) {
            tiles.setTileAt(tiles.getTileLocation(index, index2), tiles.tileImageAtLocation(tiles.getTileLocation(index, index2).getNeighboringLocation(CollisionDirection.Top)))
        } else {
            if (assets.tile`2` != tiles.tileImageAtLocation(tiles.getTileLocation(index, index2).getNeighboringLocation(CollisionDirection.Left)) && assets.tile`2` != tiles.tileImageAtLocation(tiles.getTileLocation(index, index2).getNeighboringLocation(CollisionDirection.Top)) && (assets.tile`3` != tiles.tileImageAtLocation(tiles.getTileLocation(index, index2).getNeighboringLocation(CollisionDirection.Left)) && assets.tile`3` != tiles.tileImageAtLocation(tiles.getTileLocation(index, index2).getNeighboringLocation(CollisionDirection.Top)))) {
                tiles.setTileAt(tiles.getTileLocation(index, index2), list[randint(0, 3)])
            } else {
                tiles.setTileAt(tiles.getTileLocation(index, index2), list[randint(0, 1)])
            }
        }
    }
}
for (let value4 of tiles.getTilesByType(assets.tile`2`)) {
    if (Math.percentChance(5)) {
        tiles.setTileAt(value4, assets.tile`myTile5`)
        tiles.setWallAt(value4, true)
    }
}
for (let value22 of tiles.getTilesByType(assets.tile`1`)) {
    if (Math.percentChance(5)) {
        tiles.setTileAt(value22, assets.tile`5`)
    }
}
for (let value32 of tiles.getTilesByType(assets.tile`0`)) {
    if (Math.percentChance(5)) {
        tiles.setTileAt(value32, assets.tile`6`)
        tiles.setWallAt(value32, true)
    }
}
for (let value42 of tiles.getTilesByType(assets.tile`3`)) {
    if (Math.percentChance(3)) {
        tiles.setTileAt(value42, assets.tile`4`)
    }
}
list = [
assets.tile`1`,
assets.tile`0`,
assets.tile`2`,
assets.tile`3`,
assets.tile`4`,
assets.tile`5`,
assets.tile`myTile5`,
assets.tile`6`,
assets.tile`myTile7`,
assets.tile`myTile8`,
assets.tile`myTile9`,
assets.tile`myTile10`,
assets.tile`myTile11`,
assets.tile`myTile12`,
assets.tile`myTile13`,
assets.tile`myTile14`,
assets.tile`myTile15`,
assets.tile`myTile16`,
assets.tile`myTile17`,
assets.tile`myTile18`,
assets.tile`myTile19`,
assets.tile`myTile20`,
assets.tile`myTile21`,
assets.tile`myTile22`,
assets.tile`myTile23`,
assets.tile`myTile24`,
assets.tile`myTile25`,
assets.tile`myTile26`,
assets.tile`myTile27`,
assets.tile`myTile28`,
assets.tile`myTile29`
]
if (blockSettings.exists("Tilemap")) {
    savedTilemap = blockSettings.readNumberArray("Tilemap")
    for (let index = 0; index <= 99; index++) {
        for (let index2 = 0; index2 <= 99; index2++) {
            tiles.setTileAt(tiles.getTileLocation(index2, index), list[savedTilemap[index * 100 + index2]])
        }
    }
    items = blockSettings.readNumberArray("items")
    ToolNum = blockSettings.readNumberArray("ToolNum")
}
ToolList[0] = miniMenu.createMenuItem("Axe [LVL 1] " + "x" + ToolNum[0])
ToolList[1] = miniMenu.createMenuItem("Axe [LVL 2] " + "x" + ToolNum[1])
ToolList[2] = miniMenu.createMenuItem("Axe [LVL 3] " + "x" + ToolNum[2])
ToolList[3] = miniMenu.createMenuItem("Axe [LVL 4] " + "x" + ToolNum[3])
ToolList[4] = miniMenu.createMenuItem("Axe [MAX LVL] " + "x" + ToolNum[4])
ToolList[5] = miniMenu.createMenuItem("Pick [LVL 1] " + "x" + ToolNum[5])
ToolList[6] = miniMenu.createMenuItem("Pick [LVL 2] " + "x" + ToolNum[6])
ToolList[7] = miniMenu.createMenuItem("Pick [LVL 3] " + "x" + ToolNum[7])
ToolList[8] = miniMenu.createMenuItem("Pick [MAX LVL] " + "x" + ToolNum[8])
ToolList[9] = miniMenu.createMenuItem("Hoe [LVL 1] " + "x" + ToolNum[9])
ToolList[10] = miniMenu.createMenuItem("Hoe [LVL 2] " + "x" + ToolNum[10])
ToolList[11] = miniMenu.createMenuItem("Hoe [MAX LVL] " + "x" + ToolNum[11])
Reload_Tool_Menu()
for (let value32 of tiles.getTilesByType(assets.tile`myTile23`)) {
    tiles.setWallAt(value32, true)
}
for (let value32 of tiles.getTilesByType(assets.tile`myTile24`)) {
    tiles.setWallAt(value32, true)
}
for (let value32 of tiles.getTilesByType(assets.tile`myTile25`)) {
    tiles.setWallAt(value32, true)
}
for (let value32 of tiles.getTilesByType(assets.tile`myTile5`)) {
    tiles.setWallAt(value32, true)
}
for (let value32 of tiles.getTilesByType(assets.tile`6`)) {
    tiles.setWallAt(value32, true)
}
game.onUpdate(function () {
    mySprite.bottom = Collision2.bottom + 1
    mySprite.x = Collision2.x
    mySprite.z = Collision2.bottom
})
game.onUpdate(function () {
    for (let value5 of tiles.getTilesByType(assets.tile`4`)) {
        if (Math.percentChance(1)) {
            if (Math.abs(value5.x - scene.cameraProperty(CameraProperty.X)) + Math.abs(value5.y - scene.cameraProperty(CameraProperty.Y)) <= 200) {
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
                Smoke2.setFlag(SpriteFlag.AutoDestroy, true)
                Smoke2.setFlag(SpriteFlag.Ghost, true)
                Smoke2.setPosition(value5.x + randint(-3, 3), value5.y)
                Smoke2.scale = randint(5, 100) / 100
                Smoke2.vy = randint(-10, -25)
                Smoke2.lifespan = 4000
            }
        }
    }
})
game.onUpdate(function () {
    if (inMenu) {
        myMenu.onButtonPressed(controller.A, function (selection, selectedIndex) {
            if (menuNum == 2) {
                if (selectedIndex == 0) {
                    if (items[itemNames.indexOf("Sticks")] >= 3) {
                        items[itemNames.indexOf("Sticks")] = items[itemNames.indexOf("Sticks")] - 3
                        Tools[selectedIndex] = "Axe [LVL 1]"
                        ToolNum[0] = ToolNum[0] + 1
                        ToolList[selectedIndex] = miniMenu.createMenuItem("Axe [LVL 1] " + "x" + ToolNum[0])
                    }
                } else if (selectedIndex == 1) {
                    if (items[itemNames.indexOf("Sticks")] >= 2 && items[itemNames.indexOf("Wood")] >= 1) {
                        items[itemNames.indexOf("Sticks")] = items[itemNames.indexOf("Sticks")] - 2
                        items[itemNames.indexOf("Wood")] = items[itemNames.indexOf("Sticks")] - 1
                        Tools[selectedIndex] = "Axe [LVL 2]"
                        ToolNum[1] = ToolNum[1] + 1
                        ToolList[selectedIndex] = miniMenu.createMenuItem("Axe [LVL 2] " + "x" + ToolNum[1])
                    }
                } else if (selectedIndex == 2) {
                    if (items[itemNames.indexOf("Sticks")] >= 2 && items[itemNames.indexOf("Stone")] >= 1) {
                        items[itemNames.indexOf("Sticks")] = items[itemNames.indexOf("Sticks")] - 2
                        items[itemNames.indexOf("Stone")] = items[itemNames.indexOf("Stone")] - 1
                        Tools[selectedIndex] = "Axe [LVL 3]"
                        ToolNum[2] = ToolNum[2] + 1
                        ToolList[selectedIndex] = miniMenu.createMenuItem("Axe [LVL 3] " + "x" + ToolNum[2])
                    }
                } else if (selectedIndex == 3) {
                    if (items[itemNames.indexOf("Sticks")] >= 2 && items[itemNames.indexOf("Iron")] >= 1) {
                        items[itemNames.indexOf("Sticks")] = items[itemNames.indexOf("Sticks")] - 2
                        items[itemNames.indexOf("Iron")] = items[itemNames.indexOf("Iron")] - 1
                        Tools[selectedIndex] = "Axe [LVL 4]"
                        ToolNum[3] = ToolNum[3] + 1
                        ToolList[selectedIndex] = miniMenu.createMenuItem("Axe [LVL 4] " + "x" + ToolNum[3])
                    }
                } else if (selectedIndex == 4) {
                    if (items[itemNames.indexOf("Sticks")] >= 2 && items[itemNames.indexOf("Diamonds")] >= 1) {
                        items[itemNames.indexOf("Sticks")] = items[itemNames.indexOf("Sticks")] - 2
                        items[itemNames.indexOf("Diamonds")] = items[itemNames.indexOf("Diamonds")] - 1
                        Tools[selectedIndex] = "Axe [MAX LVL]"
                        ToolNum[4] = ToolNum[4] + 1
                        ToolList[selectedIndex] = miniMenu.createMenuItem("Axe [MAX LVL] " + "x" + ToolNum[4])
                    }
                } else if (selectedIndex == 5) {
                    if (items[itemNames.indexOf("Sticks")] >= 2 && items[itemNames.indexOf("Wood")] >= 3) {
                        items[itemNames.indexOf("Sticks")] = items[itemNames.indexOf("Sticks")] - 2
                        items[itemNames.indexOf("Wood")] = items[itemNames.indexOf("Wood")] - 3
                        Tools[selectedIndex] = "Pick [LVL 1]"
                        ToolNum[5] = ToolNum[5] + 1
                        ToolList[selectedIndex] = miniMenu.createMenuItem("Pick [LVL 1] " + "x" + ToolNum[5])
                    }
                } else if (selectedIndex == 6) {
                    if (items[itemNames.indexOf("Sticks")] >= 2 && items[itemNames.indexOf("Stone")] >= 3) {
                        items[itemNames.indexOf("Sticks")] = items[itemNames.indexOf("Sticks")] - 2
                        items[itemNames.indexOf("Stone")] = items[itemNames.indexOf("Stone")] - 3
                        Tools[selectedIndex] = "Pick [LVL 2]"
                        ToolNum[6] = ToolNum[6] + 1
                        ToolList[selectedIndex] = miniMenu.createMenuItem("Pick [LVL 2] " + "x" + ToolNum[6])
                    }
                } else if (selectedIndex == 7) {
                    if (items[itemNames.indexOf("Sticks")] >= 2 && items[itemNames.indexOf("Iron")] >= 3) {
                        items[itemNames.indexOf("Sticks")] = items[itemNames.indexOf("Sticks")] - 2
                        items[itemNames.indexOf("Iron")] = items[itemNames.indexOf("Iron")] - 3
                        Tools[selectedIndex] = "Pick [LVL 3]"
                        ToolNum[7] = ToolNum[7] + 1
                        ToolList[selectedIndex] = miniMenu.createMenuItem("Pick [LVL 3] " + "x" + ToolNum[7])
                    }
                } else if (selectedIndex == 8) {
                    if (items[itemNames.indexOf("Sticks")] >= 2 && items[itemNames.indexOf("Diamonds")] >= 3) {
                        items[itemNames.indexOf("Sticks")] = items[itemNames.indexOf("Sticks")] - 2
                        items[itemNames.indexOf("Diamond")] = items[itemNames.indexOf("Diamond")] - 3
                        Tools[selectedIndex] = "Pick [MAX LVL]"
                        ToolNum[8] = ToolNum[8] + 1
                        ToolList[selectedIndex] = miniMenu.createMenuItem("Pick [MAX LVL] " + "x" + ToolNum[8])
                    }
                } else if (selectedIndex == 9) {
                    if (items[itemNames.indexOf("Sticks")] >= 2 && items[itemNames.indexOf("Stone")] >= 2) {
                        items[itemNames.indexOf("Sticks")] = items[itemNames.indexOf("Sticks")] - 2
                        items[itemNames.indexOf("Stone")] = items[itemNames.indexOf("Stone")] - 2
                        Tools[selectedIndex] = "Hoe [LVL 1]"
                        ToolNum[9] = ToolNum[9] + 1
                        ToolList[selectedIndex] = miniMenu.createMenuItem("Hoe [LVL 1] " + "x" + ToolNum[9])
                    }
                } else if (selectedIndex == 10) {
                    if (items[itemNames.indexOf("Sticks")] >= 2 && items[itemNames.indexOf("Iron")] >= 2) {
                        items[itemNames.indexOf("Sticks")] = items[itemNames.indexOf("Sticks")] - 2
                        items[itemNames.indexOf("Iron")] = items[itemNames.indexOf("Iron")] - 2
                        Tools[selectedIndex] = "Hoe [LVL 2]"
                        ToolNum[10] = ToolNum[10] + 1
                        ToolList[selectedIndex] = miniMenu.createMenuItem("Hoe [LVL 2] " + "x" + ToolNum[10])
                    }
                } else if (selectedIndex == 11) {
                    if (items[itemNames.indexOf("Sticks")] >= 2 && items[itemNames.indexOf("Diamonds")] >= 2) {
                        items[itemNames.indexOf("Sticks")] = items[itemNames.indexOf("Sticks")] - 2
                        items[itemNames.indexOf("Diamonds")] = items[itemNames.indexOf("Diamonds")] - 2
                        Tools[selectedIndex] = "Hoe [MAX LVL]"
                        ToolNum[11] = ToolNum[11] + 1
                        ToolList[selectedIndex] = miniMenu.createMenuItem("Hoe [MAX LVL] " + "x" + ToolNum[11])
                    }
                } else if (selectedIndex == 12) {
                    if (items[itemNames.indexOf("Cactus")] >= 3 && (items[itemNames.indexOf("Axe [LVL 1]")] >= 1 || (items[itemNames.indexOf("Axe [LVL 2]")] >= 1 || items[itemNames.indexOf("Axe [LVL 3]")] >= 1 || (items[itemNames.indexOf("Axe [LVL 4]")] >= 1 || items[itemNames.indexOf("Axe [MAX LVL]")] >= 1)))) {
                        myMenu.setButtonEventsEnabled(false)
                        myMenu2 = miniMenu.createMenu(
                        miniMenu.createMenuItem("" + Tools[0] + " x" + ToolNum[0]),
                        miniMenu.createMenuItem("" + Tools[1] + " x" + ToolNum[1]),
                        miniMenu.createMenuItem("" + Tools[2] + " x" + ToolNum[2]),
                        miniMenu.createMenuItem("" + Tools[3] + " x" + ToolNum[3]),
                        miniMenu.createMenuItem("" + Tools[4] + " x" + ToolNum[4])
                        )
                        myMenu2.z = 1000
                        myMenu2.setFlag(SpriteFlag.RelativeToCamera, true)
                        myMenu2.setMenuStyleProperty(miniMenu.MenuStyleProperty.Width, 158)
                        myMenu2.setMenuStyleProperty(miniMenu.MenuStyleProperty.Height, 118)
                        myMenu2.setMenuStyleProperty(miniMenu.MenuStyleProperty.Columns, 1)
                        myMenu2.setMenuStyleProperty(miniMenu.MenuStyleProperty.Rows, 6)
                        myMenu2.setMenuStyleProperty(miniMenu.MenuStyleProperty.ScrollIndicatorColor, 1)
                        myMenu2.setTitle("Select Axe Type")
                        menuNum = 7
                        myMenu.top = 1
                        myMenu.left = 1
                    }
                } else if (selectedIndex == 13) {
                    if (items[itemNames.indexOf("Sapling")] >= 3 && (items[itemNames.indexOf("Axe [LVL 1]")] >= 1 || (items[itemNames.indexOf("Axe [LVL 2]")] >= 1 || items[itemNames.indexOf("Axe [LVL 3]")] >= 1 || (items[itemNames.indexOf("Axe [LVL 4]")] >= 1 || items[itemNames.indexOf("Axe [MAX LVL]")] >= 1)))) {
                        myMenu.setButtonEventsEnabled(false)
                        myMenu2 = miniMenu.createMenu(
                        miniMenu.createMenuItem("" + Tools[0] + " x" + ToolNum[0]),
                        miniMenu.createMenuItem("" + Tools[1] + " x" + ToolNum[1]),
                        miniMenu.createMenuItem("" + Tools[2] + " x" + ToolNum[2]),
                        miniMenu.createMenuItem("" + Tools[3] + " x" + ToolNum[3]),
                        miniMenu.createMenuItem("" + Tools[4] + " x" + ToolNum[4])
                        )
                        myMenu2.z = 1000
                        myMenu2.setFlag(SpriteFlag.RelativeToCamera, true)
                        myMenu2.setMenuStyleProperty(miniMenu.MenuStyleProperty.Width, 158)
                        myMenu2.setMenuStyleProperty(miniMenu.MenuStyleProperty.Height, 118)
                        myMenu2.setMenuStyleProperty(miniMenu.MenuStyleProperty.Columns, 1)
                        myMenu2.setMenuStyleProperty(miniMenu.MenuStyleProperty.Rows, 6)
                        myMenu2.setMenuStyleProperty(miniMenu.MenuStyleProperty.ScrollIndicatorColor, 1)
                        myMenu2.setTitle("Select Axe Type")
                        menuNum = 4
                        myMenu.top = 1
                        myMenu.left = 1
                    }
                } else if (selectedIndex == 14) {
                    if (items[itemNames.indexOf("Seeds")] >= 10 && (items[itemNames.indexOf("Hoe [LVL 1]")] >= 1 || (items[itemNames.indexOf("Hoe [LVL 2]")] >= 1 || items[itemNames.indexOf("Hoe [MAX LVL]")] >= 1))) {
                        myMenu.setButtonEventsEnabled(false)
                        myMenu2 = miniMenu.createMenu(
                        miniMenu.createMenuItem("" + Tools[9] + " x" + ToolNum[9]),
                        miniMenu.createMenuItem("" + Tools[10] + " x" + ToolNum[10]),
                        miniMenu.createMenuItem("" + Tools[11] + " x" + ToolNum[11])
                        )
                        myMenu2.z = 1000
                        myMenu2.setFlag(SpriteFlag.RelativeToCamera, true)
                        myMenu2.setMenuStyleProperty(miniMenu.MenuStyleProperty.Width, 158)
                        myMenu2.setMenuStyleProperty(miniMenu.MenuStyleProperty.Height, 118)
                        myMenu2.setMenuStyleProperty(miniMenu.MenuStyleProperty.Columns, 1)
                        myMenu2.setMenuStyleProperty(miniMenu.MenuStyleProperty.Rows, 6)
                        myMenu2.setMenuStyleProperty(miniMenu.MenuStyleProperty.ScrollIndicatorColor, 1)
                        myMenu2.setTitle("Select Hoe Type")
                        menuNum = 5
                        myMenu.top = 1
                        myMenu.left = 1
                    }
                } else if (selectedIndex == 15) {
                    if (items[itemNames.indexOf("Wood")] >= 3 && (items[itemNames.indexOf("Pick [LVL 1]")] >= 1 || (items[itemNames.indexOf("Pick [LVL 2]")] >= 1 || (items[itemNames.indexOf("Pick [LVL 3]")] >= 1 || items[itemNames.indexOf("Pick [MAX LVL]")] >= 1)))) {
                        myMenu.setButtonEventsEnabled(false)
                        myMenu2 = miniMenu.createMenu(
                        miniMenu.createMenuItem("" + Tools[5] + " x" + ToolNum[5]),
                        miniMenu.createMenuItem("" + Tools[6] + " x" + ToolNum[6]),
                        miniMenu.createMenuItem("" + Tools[7] + " x" + ToolNum[7]),
                        miniMenu.createMenuItem("" + Tools[3] + " x" + ToolNum[8])
                        )
                        myMenu2.z = 1000
                        myMenu2.setFlag(SpriteFlag.RelativeToCamera, true)
                        myMenu2.setMenuStyleProperty(miniMenu.MenuStyleProperty.Width, 158)
                        myMenu2.setMenuStyleProperty(miniMenu.MenuStyleProperty.Height, 118)
                        myMenu2.setMenuStyleProperty(miniMenu.MenuStyleProperty.Columns, 1)
                        myMenu2.setMenuStyleProperty(miniMenu.MenuStyleProperty.Rows, 6)
                        myMenu2.setMenuStyleProperty(miniMenu.MenuStyleProperty.ScrollIndicatorColor, 1)
                        myMenu2.setTitle("Select Pick Type")
                        menuNum = 6
                        myMenu.top = 1
                        myMenu.left = 1
                    }
                } else if (selectedIndex == 16) {
                    if (items[itemNames.indexOf("Wood")] >= 10 && items[itemNames.indexOf("Iron")] >= 4) {
                        items[itemNames.indexOf("Wood")] = items[itemNames.indexOf("Wood")] - 10
                        items[itemNames.indexOf("Iron")] = items[itemNames.indexOf("Iron")] - 4
                    }
                } else if (selectedIndex == 17) {
                    if (items[itemNames.indexOf("Wood")] >= 10 && items[itemNames.indexOf("Iron")] >= 4 && (items[itemNames.indexOf("Sticks")] >= 2 && (items[itemNames.indexOf("Iron")] >= 2 || items[itemNames.indexOf("Diamonds")] >= 2))) {
                        myMenu.setButtonEventsEnabled(false)
                        myMenu2 = miniMenu.createMenu(
                        miniMenu.createMenuItem("" + itemNames[7] + " x" + items[7]),
                        miniMenu.createMenuItem("" + itemNames[8] + " x" + items[8])
                        )
                        myMenu2.z = 1000
                        myMenu2.setFlag(SpriteFlag.RelativeToCamera, true)
                        myMenu2.setMenuStyleProperty(miniMenu.MenuStyleProperty.Width, 158)
                        myMenu2.setMenuStyleProperty(miniMenu.MenuStyleProperty.Height, 118)
                        myMenu2.setMenuStyleProperty(miniMenu.MenuStyleProperty.Columns, 1)
                        myMenu2.setMenuStyleProperty(miniMenu.MenuStyleProperty.Rows, 6)
                        myMenu2.setMenuStyleProperty(miniMenu.MenuStyleProperty.ScrollIndicatorColor, 1)
                        myMenu2.setTitle("Select Material")
                        menuNum = 8
                        myMenu.top = 1
                        myMenu.left = 1
                    }
                } else {
                	
                }
                myMenu.close()
                arrowSprite.destroy()
                arrowSprite2.destroy()
                menuNum = 0
            } else if (menuNum == 4) {
                items[itemNames.indexOf("Saplings")] = items[itemNames.indexOf("Saplings")] - 3
                items[itemNames.indexOf("Tree Farm")] = items[itemNames.indexOf("Tree Farm")] + 1
                if (selection == "Axe [LVL 1]" && ToolNum[selectedIndex] >= 1) {
                    ToolNum[0] = ToolNum[0] - 1
                    tileMem = assets.tile`myTile18`
                } else if (selection == "Axe [LVL 2]" && ToolNum[selectedIndex] >= 1) {
                    ToolNum[1] = ToolNum[1] - 1
                    tileMem = assets.tile`myTile19`
                } else if (selection == "Axe [LVL 3]" && ToolNum[selectedIndex] >= 1) {
                    ToolNum[2] = ToolNum[2] - 1
                    tileMem = assets.tile`myTile20`
                } else if (selection == "Axe [LVL 4]" && ToolNum[selectedIndex] >= 1) {
                    ToolNum[3] = ToolNum[3] - 1
                    tileMem = assets.tile`myTile21`
                } else if (selection == "Axe [MAX LVL]" && ToolNum[selectedIndex] >= 1) {
                    ToolNum[4] = ToolNum[4] - 1
                    tileMem = assets.tile`myTile22`
                }
                menuNum = 3
            } else if (menuNum == 5) {
                items[itemNames.indexOf("Seeds")] = items[itemNames.indexOf("Seeds")] - 10
                items[itemNames.indexOf("Wheat Farm")] = items[itemNames.indexOf("Wheat Farm")] + 1
                if (selection == "Hoe [LVL 1]" && ToolNum[selectedIndex] >= 1) {
                    ToolNum[0] = ToolNum[0] - 1
                    tileMem = assets.tile`myTile7`
                } else if (selection == "Hoe [LVL 2]" && ToolNum[selectedIndex] >= 1) {
                    ToolNum[1] = ToolNum[1] - 1
                    tileMem = assets.tile`myTile9`
                } else if (selection == "Hoe [MAX LVL]" && ToolNum[selectedIndex] >= 1) {
                    ToolNum[2] = ToolNum[2] - 1
                    tileMem = assets.tile`myTile11`
                }
                menuNum = 3
            } else if (menuNum == 6) {
                items[itemNames.indexOf("Wood")] = items[itemNames.indexOf("Wood")] - 3
                items[itemNames.indexOf("Mine")] = items[itemNames.indexOf("Mine")] + 1
                if (selection == "Pick [LVL 1]" && ToolNum[selectedIndex] >= 1) {
                    ToolNum[5] = ToolNum[5] - 1
                    tileMem = assets.tile`myTile26`
                } else if (selection == "Pick [LVL 2]" && ToolNum[selectedIndex] >= 1) {
                    ToolNum[6] = ToolNum[6] - 1
                    tileMem = assets.tile`myTile27`
                } else if (selection == "Pick [LVL 3]" && ToolNum[selectedIndex] >= 1) {
                    ToolNum[7] = ToolNum[7] - 1
                    tileMem = assets.tile`myTile28`
                } else if (selection == "Pick [MAX LVL]" && ToolNum[selectedIndex] >= 1) {
                    ToolNum[8] = ToolNum[8] - 1
                    tileMem = assets.tile`myTile29`
                }
                menuNum = 3
            } else if (menuNum == 7) {
                items[itemNames.indexOf("Cactus")] = items[itemNames.indexOf("Cactus")] - 3
                items[itemNames.indexOf("Cactus Farm")] = items[itemNames.indexOf("Cactus Farm")] - 10
                if (selection == "Axe [LVL 1]" && ToolNum[selectedIndex] >= 1) {
                    ToolNum[0] = ToolNum[0] - 1
                    tileMem = assets.tile`myTile13`
                } else if (selection == "Axe [LVL 2]" && ToolNum[selectedIndex] >= 1) {
                    ToolNum[1] = ToolNum[1] - 1
                    tileMem = assets.tile`myTile14`
                } else if (selection == "Axe [LVL 3]" && ToolNum[selectedIndex] >= 1) {
                    ToolNum[2] = ToolNum[2] - 1
                    tileMem = assets.tile`myTile15`
                } else if (selection == "Axe [LVL 4]" && ToolNum[selectedIndex] >= 1) {
                    ToolNum[3] = ToolNum[3] - 1
                    tileMem = assets.tile`myTile16`
                } else if (selection == "Axe [MAX LVL]" && ToolNum[selectedIndex] >= 1) {
                    ToolNum[4] = ToolNum[4] - 1
                    tileMem = assets.tile`myTile17`
                }
                menuNum = 3
            } else if (menuNum == 8) {
                items[itemNames.indexOf("Wood")] = items[itemNames.indexOf("Wood")] - 10
                items[itemNames.indexOf("Iron")] = items[itemNames.indexOf("Iron")] - 4
                items[itemNames.indexOf("Sticks")] = items[itemNames.indexOf("Sticks")] - 2
                if (selection == "Iron" && items[selectedIndex] >= 4) {
                    items[5] = items[5] - 4
                } else if (selection == "Diamond" && items[selectedIndex] >= 4) {
                    items[6] = items[6] - 4
                }
                menuNum = 3
            } else {
            	
            }
            Reload_Tool_Menu()
        })
    }
    if (menuNum == 3) {
        myMenu.close()
        mySprite3 = sprites.create(img`
            . . 1 . . 
            . . 1 . . 
            1 1 . 1 1 
            . . 1 . . 
            . . 1 . . 
            `, SpriteKind.Player)
        controller.moveSprite(mySprite3)
    }
})
game.onUpdate(function () {
    characterAnimations.loopFrames(
    mySprite,
    [img`
        . e e e . 
        e e e e e 
        . f 4 f . 
        . 4 4 4 . 
        4 2 2 2 4 
        . 2 2 2 . 
        . f . f . 
        `],
    0,
    characterAnimations.rule(Predicate.FacingDown)
    )
    characterAnimations.loopFrames(
    mySprite,
    [img`
        . e e e . 
        e e e e e 
        . 4 4 4 . 
        . 4 4 4 . 
        4 2 2 2 4 
        . 2 2 2 . 
        . f . f . 
        `],
    100,
    characterAnimations.rule(Predicate.FacingUp)
    )
    characterAnimations.loopFrames(
    mySprite,
    [img`
        . e e . . 
        e e e e . 
        . f 4 . . 
        . 4 4 . . 
        . 2 2 . . 
        . 2 2 . . 
        . . f . . 
        `],
    100,
    characterAnimations.rule(Predicate.FacingLeft)
    )
    characterAnimations.loopFrames(
    mySprite,
    [img`
        . . e e . 
        . e e e e 
        . . 4 f . 
        . . 4 4 . 
        . . 2 2 . 
        . . 2 2 . 
        . . f . . 
        `],
    100,
    characterAnimations.rule(Predicate.FacingRight)
    )
})
game.onUpdateInterval(5000, function () {
    if (Math.percentChance(1) && tiles.getTilesByType(assets.tile`myTile24`).length + tiles.getTilesByType(assets.tile`myTile25`).length * 2 > 0) {
        myStats = tiles.getTilesByType(assets.tile`myTile24`).length + tiles.getTilesByType(assets.tile`myTile25`).length * 2
        enemyStats = (tiles.getTilesByType(assets.tile`myTile24`).length + tiles.getTilesByType(assets.tile`myTile25`).length * 1.8) * randint(0.5, 1.5)
        for (let index = 0; index < 100; index++) {
            enemyStats += 0 - myStats / randint(50, 150)
            myStats += 0 - enemyStats / randint(50, 150)
        }
        if (myStats > enemyStats) {
            items[3] = items[3] - randint(10, 20)
            items[4] = items[4] - randint(1, 5)
            textSprite = textsprite.create("An attack from an enemy has been defended.")
            textSprite.top = 32
            textSprite.left = 1
            textSprite = textsprite.create("Gained Iron and diamond(s)")
            textSprite.top = 64
            textSprite.left = 1
            timer.after(500, function () {
                sprites.destroyAllSpritesOfKind(SpriteKind.Text)
            })
        } else {
            for (let index = 0; index < 3; index++) {
                Randomized = randint(0, 9)
                items[Randomized] = items[Randomized] - randint(0, Math.max(items[Randomized], 10))
            }
            textSprite = textsprite.create("An attack from an enemy has not been defended.")
            textSprite.top = 32
            textSprite.left = 1
            textSprite = textsprite.create("Lost some materials")
            textSprite.top = 64
            textSprite.left = 1
            timer.after(500, function () {
                sprites.destroyAllSpritesOfKind(SpriteKind.Text)
            })
        }
    }
})
game.onUpdateInterval(500, function () {
    if (inMenu) {
        arrowSprite.x += 1
        arrowSprite2.x += 1
        timer.after(250, function () {
            arrowSprite.x += -1
            arrowSprite2.x += -1
        })
    } else {
        loadSprites()
    }
})
game.onUpdateInterval(18750, function () {
    if (Indicator.y < 17) {
        Indicator.y += 1
    } else {
        Indicator.y = 1
        for (let value of tiles.getTilesByType(assets.tile`myTile7`)) {
            tiles.setTileAt(value, assets.tile`myTile8`)
        }
        for (let value of tiles.getTilesByType(assets.tile`myTile9`)) {
            tiles.setTileAt(value, assets.tile`myTile10`)
        }
        for (let value of tiles.getTilesByType(assets.tile`myTile11`)) {
            tiles.setTileAt(value, assets.tile`myTile12`)
        }
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile26`)) {
        items[itemNames.indexOf("Stone")] = items[itemNames.indexOf("Stone")] + 5
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile27`)) {
        items[itemNames.indexOf("Stone")] = items[itemNames.indexOf("Stone")] + 10
        items[itemNames.indexOf("Iron")] = items[itemNames.indexOf("Iron")] + 1
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile28`)) {
        items[itemNames.indexOf("Stone")] = items[itemNames.indexOf("Stone")] + 15
        items[itemNames.indexOf("Iron")] = items[itemNames.indexOf("Iron")] + 10
        if (Math.percentChance(1)) {
            items[itemNames.indexOf("Diamonds")] = items[itemNames.indexOf("Diamonds")] + 1
        }
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile28`)) {
        items[itemNames.indexOf("Stone")] = items[itemNames.indexOf("Stone")] + 30
        items[itemNames.indexOf("Iron")] = items[itemNames.indexOf("Iron")] + 20
        if (Math.percentChance(80)) {
            items[itemNames.indexOf("Diamonds")] = items[itemNames.indexOf("Diamonds")] + randint(0, 5)
        }
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile13`)) {
        items[itemNames.indexOf("Cactus")] = items[itemNames.indexOf("Cactus")] + randint(0, 1)
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile14`)) {
        items[itemNames.indexOf("Cactus")] = items[itemNames.indexOf("Cactus")] + randint(1, 3)
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile15`)) {
        items[itemNames.indexOf("Cactus")] = items[itemNames.indexOf("Cactus")] + randint(4, 7)
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile16`)) {
        items[itemNames.indexOf("Cactus")] = items[itemNames.indexOf("Cactus")] + randint(8, 15)
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile17`)) {
        items[itemNames.indexOf("Cactus")] = items[itemNames.indexOf("Cactus")] + randint(16, 30)
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile18`)) {
        items[itemNames.indexOf("Saplings")] = items[itemNames.indexOf("Saplings")] + randint(0, 1)
        items[itemNames.indexOf("Wood")] = items[itemNames.indexOf("Wood")] + randint(0, 1)
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile19`)) {
        items[itemNames.indexOf("Saplings")] = items[itemNames.indexOf("Saplings")] + randint(1, 2)
        items[itemNames.indexOf("Wood")] = items[itemNames.indexOf("Wood")] + randint(1, 3)
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile20`)) {
        items[itemNames.indexOf("Saplings")] = items[itemNames.indexOf("Saplings")] + randint(2, 3)
        items[itemNames.indexOf("Wood")] = items[itemNames.indexOf("Wood")] + randint(4, 7)
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile21`)) {
        items[itemNames.indexOf("Saplings")] = items[itemNames.indexOf("Saplings")] + randint(3, 5)
        items[itemNames.indexOf("Wood")] = items[itemNames.indexOf("Wood")] + randint(7, 15)
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile22`)) {
        items[itemNames.indexOf("Saplings")] = items[itemNames.indexOf("Saplings")] + randint(5, 10)
        items[itemNames.indexOf("Wood")] = items[itemNames.indexOf("Wood")] + randint(16, 30)
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile23`)) {
        if (tiles.tileAtLocationEquals(value.getNeighboringLocation(CollisionDirection.Left), assets.tile`myTile8`)) {
            tiles.setTileAt(value.getNeighboringLocation(CollisionDirection.Left), assets.tile`myTile7`)
            items[itemNames.indexOf("Seeds")] = items[itemNames.indexOf("Seeds")] + randint(0, 3)
            items[itemNames.indexOf("Wheat")] = items[itemNames.indexOf("Wheat")] + randint(0, 10)
        } else if (tiles.tileAtLocationEquals(value.getNeighboringLocation(CollisionDirection.Top), assets.tile`myTile8`)) {
            tiles.setTileAt(value.getNeighboringLocation(CollisionDirection.Top), assets.tile`myTile7`)
            items[itemNames.indexOf("Seeds")] = items[itemNames.indexOf("Seeds")] + randint(0, 3)
            items[itemNames.indexOf("Wheat")] = items[itemNames.indexOf("Wheat")] + randint(0, 10)
        } else if (tiles.tileAtLocationEquals(value.getNeighboringLocation(CollisionDirection.Right), assets.tile`myTile8`)) {
            tiles.setTileAt(value.getNeighboringLocation(CollisionDirection.Right), assets.tile`myTile7`)
            items[itemNames.indexOf("Seeds")] = items[itemNames.indexOf("Seeds")] + randint(0, 3)
            items[itemNames.indexOf("Wheat")] = items[itemNames.indexOf("Wheat")] + randint(0, 10)
        } else if (tiles.tileAtLocationEquals(value.getNeighboringLocation(CollisionDirection.Bottom), assets.tile`myTile8`)) {
            tiles.setTileAt(value.getNeighboringLocation(CollisionDirection.Bottom), assets.tile`myTile7`)
            items[itemNames.indexOf("Seeds")] = items[itemNames.indexOf("Seeds")] + randint(0, 3)
            items[itemNames.indexOf("Wheat")] = items[itemNames.indexOf("Wheat")] + randint(0, 10)
        } else if (tiles.tileAtLocationEquals(value.getNeighboringLocation(CollisionDirection.Left), assets.tile`myTile10`)) {
            tiles.setTileAt(value.getNeighboringLocation(CollisionDirection.Left), assets.tile`myTile9`)
            items[itemNames.indexOf("Seeds")] = items[itemNames.indexOf("Seeds")] + randint(2, 5)
            items[itemNames.indexOf("Wheat")] = items[itemNames.indexOf("Wheat")] + randint(11, 20)
        } else if (tiles.tileAtLocationEquals(value.getNeighboringLocation(CollisionDirection.Top), assets.tile`myTile10`)) {
            tiles.setTileAt(value.getNeighboringLocation(CollisionDirection.Top), assets.tile`myTile9`)
            items[itemNames.indexOf("Seeds")] = items[itemNames.indexOf("Seeds")] + randint(2, 5)
            items[itemNames.indexOf("Wheat")] = items[itemNames.indexOf("Wheat")] + randint(11, 20)
        } else if (tiles.tileAtLocationEquals(value.getNeighboringLocation(CollisionDirection.Right), assets.tile`myTile10`)) {
            tiles.setTileAt(value.getNeighboringLocation(CollisionDirection.Right), assets.tile`myTile9`)
            items[itemNames.indexOf("Seeds")] = items[itemNames.indexOf("Seeds")] + randint(2, 5)
            items[itemNames.indexOf("Wheat")] = items[itemNames.indexOf("Wheat")] + randint(11, 20)
        } else if (tiles.tileAtLocationEquals(value.getNeighboringLocation(CollisionDirection.Bottom), assets.tile`myTile10`)) {
            tiles.setTileAt(value.getNeighboringLocation(CollisionDirection.Bottom), assets.tile`myTile9`)
            items[itemNames.indexOf("Seeds")] = items[itemNames.indexOf("Seeds")] + randint(2, 5)
            items[itemNames.indexOf("Wheat")] = items[itemNames.indexOf("Wheat")] + randint(11, 20)
        } else if (tiles.tileAtLocationEquals(value.getNeighboringLocation(CollisionDirection.Left), assets.tile`myTile12`)) {
            tiles.setTileAt(value.getNeighboringLocation(CollisionDirection.Left), assets.tile`myTile12`)
            items[itemNames.indexOf("Seeds")] = items[itemNames.indexOf("Seeds")] + randint(6, 10)
            items[itemNames.indexOf("Wheat")] = items[itemNames.indexOf("Wheat")] + randint(21, 30)
        } else if (tiles.tileAtLocationEquals(value.getNeighboringLocation(CollisionDirection.Top), assets.tile`myTile12`)) {
            tiles.setTileAt(value.getNeighboringLocation(CollisionDirection.Top), assets.tile`myTile12`)
            items[itemNames.indexOf("Seeds")] = items[itemNames.indexOf("Seeds")] + randint(6, 10)
            items[itemNames.indexOf("Wheat")] = items[itemNames.indexOf("Wheat")] + randint(21, 30)
        } else if (tiles.tileAtLocationEquals(value.getNeighboringLocation(CollisionDirection.Right), assets.tile`myTile12`)) {
            tiles.setTileAt(value.getNeighboringLocation(CollisionDirection.Right), assets.tile`myTile12`)
            items[itemNames.indexOf("Seeds")] = items[itemNames.indexOf("Seeds")] + randint(6, 10)
            items[itemNames.indexOf("Wheat")] = items[itemNames.indexOf("Wheat")] + randint(21, 30)
        } else if (tiles.tileAtLocationEquals(value.getNeighboringLocation(CollisionDirection.Bottom), assets.tile`myTile12`)) {
            tiles.setTileAt(value.getNeighboringLocation(CollisionDirection.Bottom), assets.tile`myTile12`)
            items[itemNames.indexOf("Seeds")] = items[itemNames.indexOf("Seeds")] + randint(6, 10)
            items[itemNames.indexOf("Wheat")] = items[itemNames.indexOf("Wheat")] + randint(21, 30)
        }
    }
    savedTilemap = []
    for (let index2 = 0; index2 <= 99; index2++) {
        for (let index = 0; index <= 99; index++) {
            savedTilemap.push(list.indexOf(tiles.tileImageAtLocation(tiles.getTileLocation(index, index2))))
        }
    }
    blockSettings.writeNumberArray("Tilemap", savedTilemap)
    blockSettings.writeNumberArray("ToolNum", ToolNum)
    blockSettings.writeNumberArray("items", items)
})
