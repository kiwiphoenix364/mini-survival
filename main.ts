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
function Reload_Tool_Menu () {
    ToolMenu.destroy()
    ToolMenu = miniMenu.createMenuFromArray(ToolList)
    ToolMenu.setButtonEventsEnabled(false)
    ToolMenu.setFlag(SpriteFlag.RelativeToCamera, true)
    ToolMenu.setTitle("Tools")
    ToolMenu.z = 998
    ToolMenu.top = 1
    ToolMenu.left = 1
    ToolMenu.setMenuStyleProperty(miniMenu.MenuStyleProperty.Width, 64)
    ToolMenu.setMenuStyleProperty(miniMenu.MenuStyleProperty.Height, 24)
    ToolMenu.setMenuStyleProperty(miniMenu.MenuStyleProperty.ScrollIndicatorColor, 1)
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (!(inMenu)) {
        controller.moveSprite(Collision2, 0, 0)
        ToolMenu.setButtonEventsEnabled(true)
        Reload_Tool_Menu()
    }
})
controller.anyButton.onEvent(ControllerButtonEvent.Pressed, function () {
    if (controller.right.isPressed() && inMenu && menuNum == 1) {
        myMenu.close()
        myMenu = miniMenu.createMenu(
        miniMenu.createMenuItem("Houses " + "x" + items[itemNames.indexOf("Houses")]),
        miniMenu.createMenuItem("Mines " + "x" + items[itemNames.indexOf("Mines")]),
        miniMenu.createMenuItem("Weaponsmiths " + "x" + items[itemNames.indexOf("Weaponsmiths")]),
        miniMenu.createMenuItem("Soldiers " + "x" + items[itemNames.indexOf("Soldiers")]),
        miniMenu.createMenuItem("Tree Farms " + "x" + items[itemNames.indexOf("Tree Farms")]),
        miniMenu.createMenuItem("Cactus Farms " + "x" + items[itemNames.indexOf("Cactus Farms")]),
        miniMenu.createMenuItem("Farmers" + "x" + items[itemNames.indexOf("Farmers")])
        )
        myMenu.z = 1000
        myMenu.setFlag(SpriteFlag.RelativeToCamera, true)
        myMenu.setMenuStyleProperty(miniMenu.MenuStyleProperty.Width, 148)
        myMenu.setMenuStyleProperty(miniMenu.MenuStyleProperty.Height, 118)
        myMenu.setMenuStyleProperty(miniMenu.MenuStyleProperty.Columns, 1)
        myMenu.setMenuStyleProperty(miniMenu.MenuStyleProperty.Rows, 6)
        myMenu.setMenuStyleProperty(miniMenu.MenuStyleProperty.ScrollIndicatorColor, 1)
        myMenu.setTitle("Placeable Resources")
        arrowSprite.setFlag(SpriteFlag.Invisible, true)
        menuNum = 2
        myMenu.top = 1
        myMenu.left = 11
    } else if (controller.left.isPressed() && inMenu && menuNum == 2 || controller.right.isPressed() && inMenu && menuNum == 3) {
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
        myMenu.setMenuStyleProperty(miniMenu.MenuStyleProperty.Width, 138)
        myMenu.setMenuStyleProperty(miniMenu.MenuStyleProperty.Height, 118)
        myMenu.setMenuStyleProperty(miniMenu.MenuStyleProperty.Columns, 1)
        myMenu.setMenuStyleProperty(miniMenu.MenuStyleProperty.Rows, 6)
        myMenu.setMenuStyleProperty(miniMenu.MenuStyleProperty.ScrollIndicatorColor, 1)
        myMenu.setTitle("Inventory")
        arrowSprite.setFlag(SpriteFlag.Invisible, false)
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
        miniMenu.createMenuItem("10x Wood + 4x Iron = House + Hired Farmer"),
        miniMenu.createMenuItem("10x Wood + 4x Iron + 2 Sticks + 4 Materials = House + Hired Soldier [LVL MATERIAL]")
        ])
        myMenu.z = 1000
        myMenu.setFlag(SpriteFlag.RelativeToCamera, true)
        myMenu.setMenuStyleProperty(miniMenu.MenuStyleProperty.Width, 148)
        myMenu.setMenuStyleProperty(miniMenu.MenuStyleProperty.Height, 118)
        myMenu.setMenuStyleProperty(miniMenu.MenuStyleProperty.Columns, 1)
        myMenu.setMenuStyleProperty(miniMenu.MenuStyleProperty.Rows, 6)
        myMenu.setMenuStyleProperty(miniMenu.MenuStyleProperty.ScrollIndicatorColor, 1)
        myMenu.setTitle("Crafts")
        arrowSprite.setFlag(SpriteFlag.Invisible, false)
        menuNum = 3
        myMenu.top = 1
        myMenu.left = 1
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile4`, function (sprite, location) {
    timer.throttle("action", 100, function () {
        if (!(inMenu)) {
            if (controller.A.isPressed()) {
                if (Math.percentChance(20)) {
                    mySprite.sayText("+1 Seeds, +1 Sticks", 500, false)
                    items[itemNames.indexOf("Seeds")] = items[itemNames.indexOf("Seeds")] + 1
                    items[itemNames.indexOf("Sticks")] = items[itemNames.indexOf("Sticks")] + 1
                } else {
                    mySprite.sayText("+1 Seeds", 500, false)
                    items[itemNames.indexOf("Seeds")] = items[itemNames.indexOf("Seeds")] + 1
                }
                tiles.setTileAt(location, assets.tile`myTile`)
                tiles.setWallAt(location, false)
                loadSprites()
            }
        }
    })
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
        Repeat = tiles.getTilesByType(assets.tile`myTile4`).length / 6000
        for (let value of tiles.getTilesByType(assets.tile`myTile4`)) {
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
        Repeat = tiles.getTilesByType(assets.tile`myTile6`).length / 6000
        for (let value of tiles.getTilesByType(assets.tile`myTile6`)) {
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
        myMenu.setMenuStyleProperty(miniMenu.MenuStyleProperty.Width, 138)
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
let myMenu2: miniMenu.MenuSprite = null
let Smoke2: Sprite = null
let arrowSprite2: Sprite = null
let Obj: Sprite = null
let Repeat = 0
let arrowSprite: Sprite = null
let myMenu: miniMenu.MenuSprite = null
let menuNum = 0
let inMenu = false
let RandomNum = 0
let Collision2: Sprite = null
let mySprite: Sprite = null
let itemNames: string[] = []
let items: number[] = []
let ToolMenu: miniMenu.MenuSprite = null
let ToolList: miniMenu.MenuItem[] = []
stats.turnStats(true)
let ToolNum = [
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
let Tools: number[] = []
ToolList = [miniMenu.createMenuItem("[NONE]")]
ToolMenu = miniMenu.createMenu(
miniMenu.createMenuItem("[NONE]")
)
ToolMenu.setButtonEventsEnabled(false)
ToolMenu.setFlag(SpriteFlag.RelativeToCamera, true)
ToolMenu.setTitle("Tools")
ToolMenu.z = 998
ToolMenu.top = 1
ToolMenu.left = 1
ToolMenu.setMenuStyleProperty(miniMenu.MenuStyleProperty.Width, 64)
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
"Sticks",
"Farmers"
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
assets.tile`myTile`,
assets.tile`myTile0`,
assets.tile`myTile1`,
assets.tile`myTile2`
]
for (let index = 0; index <= 99; index++) {
    for (let index2 = 0; index2 <= 99; index2++) {
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
    mySprite.bottom = Collision2.bottom + 1
    mySprite.x = Collision2.x
    mySprite.z = Collision2.bottom
})
game.onUpdate(function () {
	
})
game.onUpdate(function () {
	
})
game.onUpdate(function () {
    for (let value5 of tiles.getTilesByType(assets.tile`myTile3`)) {
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
            if (menuNum == 3) {
                if (selectedIndex == 0) {
                    if (items[itemNames.indexOf("Sticks")] >= 3) {
                        items[itemNames.indexOf("Sticks")] = items[itemNames.indexOf("Sticks")] - 3
                        Tools[selectedIndex] = "Axe [LVL 1]"
                        ToolNum[Tools.indexOf("Axe [LVL 1]")] = ToolNum[Tools.indexOf("Axe [LVL 1]")] + 1
                        ToolList[selectedIndex] = miniMenu.createMenuItem("Axe [LVL1] " + "x" + ToolNum[Tools.indexOf("Axe [LVL1]")])
                    }
                } else if (selectedIndex == 1) {
                    if (items[itemNames.indexOf("Sticks")] >= 2 && items[itemNames.indexOf("Wood")] >= 1) {
                        items[itemNames.indexOf("Sticks")] = items[itemNames.indexOf("Sticks")] - 2
                        items[itemNames.indexOf("Wood")] = items[itemNames.indexOf("Sticks")] - 1
                        Tools[selectedIndex] = "Axe [LVL 2]"
                        ToolNum[Tools.indexOf("Axe [LVL 2]")] = ToolNum[Tools.indexOf("Axe [LVL 2]")] + 1
                        ToolList[selectedIndex] = miniMenu.createMenuItem("Axe [LVL2] " + "x" + ToolNum[Tools.indexOf("Axe [LVL2]")])
                    }
                } else if (selectedIndex == 2) {
                    if (items[itemNames.indexOf("Sticks")] >= 2 && items[itemNames.indexOf("Stone")] >= 1) {
                        items[itemNames.indexOf("Sticks")] = items[itemNames.indexOf("Sticks")] - 2
                        items[itemNames.indexOf("Stone")] = items[itemNames.indexOf("Stone")] - 1
                        Tools[selectedIndex] = "Axe [LVL 3]"
                        ToolNum[Tools.indexOf("Axe [LVL 3]")] = ToolNum[Tools.indexOf("Axe [LVL 3]")] + 1
                        ToolList[selectedIndex] = miniMenu.createMenuItem("Axe [LVL3] " + "x" + ToolNum[Tools.indexOf("Axe [LVL3]")])
                    }
                } else if (selectedIndex == 3) {
                    if (items[itemNames.indexOf("Sticks")] >= 2 && items[itemNames.indexOf("Iron")] >= 1) {
                        items[itemNames.indexOf("Sticks")] = items[itemNames.indexOf("Sticks")] - 2
                        items[itemNames.indexOf("Iron")] = items[itemNames.indexOf("Iron")] - 1
                        Tools[selectedIndex] = "Axe [LVL 4]"
                        ToolNum[Tools.indexOf("Axe [LVL 4]")] = ToolNum[Tools.indexOf("Axe [LVL 4]")] + 1
                        ToolList[selectedIndex] = miniMenu.createMenuItem("Axe [LVL 4] " + "x" + ToolNum[Tools.indexOf("Axe [LVL 4]")])
                    }
                } else if (selectedIndex == 4) {
                    if (items[itemNames.indexOf("Sticks")] >= 2 && items[itemNames.indexOf("Diamonds")] >= 1) {
                        items[itemNames.indexOf("Sticks")] = items[itemNames.indexOf("Sticks")] - 2
                        items[itemNames.indexOf("Diamonds")] = items[itemNames.indexOf("Diamonds")] - 1
                        Tools[selectedIndex] = "Axe [MAX LVL]"
                        ToolNum[Tools.indexOf("Axe [MAX LVL]")] = ToolNum[Tools.indexOf("Axe [MAX LVL]")] + 1
                        ToolList[selectedIndex] = miniMenu.createMenuItem("Axe [MAX LVL] " + "x" + ToolNum[Tools.indexOf("Axe [MAX LVL]")])
                    }
                } else if (selectedIndex == 5) {
                    if (items[itemNames.indexOf("Sticks")] >= 2 && items[itemNames.indexOf("Wood")] >= 3) {
                        items[itemNames.indexOf("Sticks")] = items[itemNames.indexOf("Sticks")] - 2
                        items[itemNames.indexOf("Wood")] = items[itemNames.indexOf("Wood")] - 3
                        Tools[selectedIndex] = "Pick [LVL 1]"
                        ToolNum[Tools.indexOf("Pick [LVL 1]")] = ToolNum[Tools.indexOf("Pick [LVL 1]")] + 1
                        ToolList[selectedIndex] = miniMenu.createMenuItem("Pick [LVL 1] " + "x" + ToolNum[Tools.indexOf("Pick [LVL 1]")])
                    }
                } else if (selectedIndex == 6) {
                    if (items[itemNames.indexOf("Sticks")] >= 2 && items[itemNames.indexOf("Stone")] >= 3) {
                        items[itemNames.indexOf("Sticks")] = items[itemNames.indexOf("Sticks")] - 2
                        items[itemNames.indexOf("Stone")] = items[itemNames.indexOf("Stone")] - 3
                        Tools[selectedIndex] = "Pick [LVL 2]"
                        ToolNum[Tools.indexOf("Pick [LVL 2]")] = ToolNum[Tools.indexOf("Pick [LVL 2]")] + 1
                        ToolList[selectedIndex] = miniMenu.createMenuItem("Pick [LVL 2] " + "x" + ToolNum[Tools.indexOf("Pick [LVL 2]")])
                    }
                } else if (selectedIndex == 7) {
                    if (items[itemNames.indexOf("Sticks")] >= 2 && items[itemNames.indexOf("Iron")] >= 3) {
                        items[itemNames.indexOf("Sticks")] = items[itemNames.indexOf("Sticks")] - 2
                        items[itemNames.indexOf("Iron")] = items[itemNames.indexOf("Iron")] - 3
                        Tools[selectedIndex] = "Pick [LVL 3]"
                        ToolNum[Tools.indexOf("Pick [LVL 3]")] = ToolNum[Tools.indexOf("Pick [LVL 3]")] + 1
                        ToolList[selectedIndex] = miniMenu.createMenuItem("Pick [LVL 3] " + "x" + ToolNum[Tools.indexOf("Pick [LVL 3]")])
                    }
                } else if (selectedIndex == 8) {
                    if (items[itemNames.indexOf("Sticks")] >= 2 && items[itemNames.indexOf("Diamonds")] >= 3) {
                        items[itemNames.indexOf("Sticks")] = items[itemNames.indexOf("Sticks")] - 2
                        items[itemNames.indexOf("Diamond")] = items[itemNames.indexOf("Diamond")] - 3
                        Tools[selectedIndex] = "Pick [MAX LVL]"
                        ToolNum[Tools.indexOf("Pick [MAX LVL]")] = ToolNum[Tools.indexOf("Pick [MAX LVL]")] + 1
                        ToolList[selectedIndex] = miniMenu.createMenuItem("Pick [MAX LVL] " + "x" + ToolNum[Tools.indexOf("Pick [MAX LVL]")])
                    }
                } else if (selectedIndex == 9) {
                    if (items[itemNames.indexOf("Sticks")] >= 2 && items[itemNames.indexOf("Stone")] >= 2) {
                        items[itemNames.indexOf("Sticks")] = items[itemNames.indexOf("Sticks")] - 2
                        items[itemNames.indexOf("Stone")] = items[itemNames.indexOf("Stone")] - 2
                        Tools[selectedIndex] = "Hoe [LVL 1]"
                        ToolNum[Tools.indexOf("Hoe [LVL 1]")] = ToolNum[Tools.indexOf("Hoe [LVL 1]")] + 1
                        ToolList[selectedIndex] = miniMenu.createMenuItem("Hoe [LVL 1] " + "x" + ToolNum[Tools.indexOf("Hoe [LVL 1]")])
                    }
                } else if (selectedIndex == 10) {
                    if (items[itemNames.indexOf("Sticks")] >= 2 && items[itemNames.indexOf("Iron")] >= 2) {
                        items[itemNames.indexOf("Sticks")] = items[itemNames.indexOf("Sticks")] - 2
                        items[itemNames.indexOf("Iron")] = items[itemNames.indexOf("Iron")] - 2
                        Tools[selectedIndex] = "Hoe [LVL 2]"
                        ToolNum[Tools.indexOf("Hoe [LVL 2]")] = ToolNum[Tools.indexOf("Hoe [LVL 2]")] + 1
                        ToolList[selectedIndex] = miniMenu.createMenuItem("Hoe [LVL 2] " + "x" + ToolNum[Tools.indexOf("Hoe [LVL 2]")])
                    }
                } else if (selectedIndex == 11) {
                    if (items[itemNames.indexOf("Sticks")] >= 2 && items[itemNames.indexOf("Diamonds")] >= 2) {
                        items[itemNames.indexOf("Sticks")] = items[itemNames.indexOf("Sticks")] - 2
                        items[itemNames.indexOf("Diamonds")] = items[itemNames.indexOf("Diamonds")] - 2
                        Tools[selectedIndex] = "Hoe [MAX LVL]"
                        ToolNum[Tools.indexOf("Hoe [MAX LVL]")] = ToolNum[Tools.indexOf("Hoe [MAX LVL]")] + 1
                        ToolList[selectedIndex] = miniMenu.createMenuItem("Hoe [MAX LVL] " + "x" + ToolNum[Tools.indexOf("Hoe [MAX LVL]")])
                    }
                } else if (selectedIndex == 12) {
                    if (items[itemNames.indexOf("Cactus")] >= 3 && (items[itemNames.indexOf("Axe [LVL 1]")] >= 1 || (items[itemNames.indexOf("Axe [LVL 2]")] >= 1 || items[itemNames.indexOf("Axe [LVL 3]")] >= 1 || (items[itemNames.indexOf("Axe [LVL 4]")] >= 1 || items[itemNames.indexOf("Axe [MAX LVL]")] >= 1)))) {
                        myMenu.setButtonEventsEnabled(false)
                        myMenu2 = miniMenu.createMenu(
                        miniMenu.createMenuItem(Tools[0]),
                        miniMenu.createMenuItem(Tools[1]),
                        miniMenu.createMenuItem(Tools[2]),
                        miniMenu.createMenuItem(Tools[3]),
                        miniMenu.createMenuItem(Tools[4])
                        )
                        if (true) {
                            myMenu2.close()
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
                        items[itemNames.indexOf("Cactus")] = items[itemNames.indexOf("Cactus")] - 3
                        items[itemNames.indexOf("Cactus Farm")] = items[itemNames.indexOf("Cactus Farm")] - 10
                    }
                } else if (selectedIndex == 13) {
                    if (items[itemNames.indexOf("Cactus")] >= 3 && (items[itemNames.indexOf("Axe [LVL 1]")] >= 1 || (items[itemNames.indexOf("Axe [LVL 2]")] >= 1 || items[itemNames.indexOf("Axe [LVL 3]")] >= 1 || (items[itemNames.indexOf("Axe [LVL 4]")] >= 1 || items[itemNames.indexOf("Axe [MAX LVL]")] >= 1)))) {
                        myMenu.setButtonEventsEnabled(false)
                        myMenu2 = miniMenu.createMenu(
                        miniMenu.createMenuItem(Tools[0]),
                        miniMenu.createMenuItem(Tools[1]),
                        miniMenu.createMenuItem(Tools[2]),
                        miniMenu.createMenuItem(Tools[3]),
                        miniMenu.createMenuItem(Tools[4])
                        )
                        if (true) {
                            myMenu2.close()
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
                        items[itemNames.indexOf("Saplings")] = items[itemNames.indexOf("Saplings")] - 3
                        items[itemNames.indexOf("Tree Farm")] = items[itemNames.indexOf("Tree Farm")] - 10
                    }
                } else if (selectedIndex == 14) {
                    if (items[itemNames.indexOf("Seeds")] >= 10 && (items[itemNames.indexOf("Hoe [LVL 1]")] >= 1 || (items[itemNames.indexOf("Hoe [LVL 2]")] >= 1 || items[itemNames.indexOf("Hoe [MAX LVL]")] >= 1))) {
                        myMenu.setButtonEventsEnabled(false)
                        myMenu2 = miniMenu.createMenu(
                        miniMenu.createMenuItem("Hoe [LVL 1]"),
                        miniMenu.createMenuItem("Hoe [LVL 2]"),
                        miniMenu.createMenuItem("Hoe [MAX LVL]")
                        )
                        items[itemNames.indexOf("Seeds")] = items[itemNames.indexOf("Seeds")] - 10
                        items[itemNames.indexOf("Wheat Farm")] = items[itemNames.indexOf("Wheat Farm")] - 10
                    }
                } else if (selectedIndex == 15) {
                    if (items[itemNames.indexOf("Wood")] >= 10 && items[itemNames.indexOf("Iron")] >= 4) {
                        items[itemNames.indexOf("Wood")] = items[itemNames.indexOf("Wood")] - 10
                        items[itemNames.indexOf("Iron")] = items[itemNames.indexOf("Iron")] - 4
                    }
                } else if (selectedIndex == 16) {
                    if (items[itemNames.indexOf("Wood")] >= 10 && items[itemNames.indexOf("Iron")] >= 4 && (items[itemNames.indexOf("Sticks")] >= 2 && (items[itemNames.indexOf("Iron")] >= 2 || items[itemNames.indexOf("Diamonds")] >= 2))) {
                        myMenu.setButtonEventsEnabled(false)
                        items[itemNames.indexOf("Wood")] = items[itemNames.indexOf("Wood")] - 10
                        items[itemNames.indexOf("Iron")] = items[itemNames.indexOf("Iron")] - 4
                        items[itemNames.indexOf("Sticks")] = items[itemNames.indexOf("Sticks")] - 2
                    }
                }
            } else if (menuNum == 4) {
                if (selection == "Axe [LVL 1]" && ToolNum[selectedIndex] >= 1) {
                    Tools[0] = ToolNum[0] - 1
                } else if (selection == "Axe [LVL 2]" && ToolNum[selectedIndex] >= 1) {
                    Tools[1] = ToolNum[1] - 1
                } else if (selection == "Axe [LVL 3]" && ToolNum[selectedIndex] >= 1) {
                    Tools[2] = ToolNum[2] - 1
                } else if (selection == "Axe [LVL 4]" && ToolNum[selectedIndex] >= 1) {
                    Tools[3] = ToolNum[3] - 1
                } else if (selection == "Axe [MAX LVL]" && ToolNum[selectedIndex] >= 1) {
                    Tools[4] = ToolNum[4] - 1
                }
            } else if (menuNum == 5) {
                if (selection == "Hoe [LVL 1]" && ToolNum[selectedIndex] >= 1) {
                    Tools[0] = ToolNum[0] - 1
                } else if (selection == "Hoe [LVL 2]" && ToolNum[selectedIndex] >= 1) {
                    Tools[1] = ToolNum[1] - 1
                } else if (selection == "Hoe [MAX LVL]" && ToolNum[selectedIndex] >= 1) {
                    Tools[2] = ToolNum[2] - 1
                }
            }
        })
    }
})
game.onUpdateInterval(18750, function () {
    if (Indicator.y < 17) {
        Indicator.y += 1
    } else {
        Indicator.y = 1
    }
})
forever(function () {
	
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
