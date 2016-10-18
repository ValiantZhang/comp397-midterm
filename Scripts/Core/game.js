/// <reference path = "_reference.ts" />
// Global Variables
var assets;
var canvas;
var stage;
var spriteSheetLoader;
var enemyAtlas;
var currentScene;
var scene;
var score;
var isRobberSpawned;
// Preload Assets required
var assetData = [
    { id: "PlayBtn", src: "../../Assets/images/sack.png" },
    { id: "Enemy", src: "../../Assets/images/enemy.png" },
    { id: "Cursor", src: "../../Assets/images/crosshair.png" },
    { id: "Poof", src: "../../Assets/images/poof.png" },
    { id: "MenuBG", src: "../../Assets/images/bank1.png" },
    { id: "CSIBG", src: "../../Assets/images/bank.png" }
];
function preload() {
    // Create a queue for assets being loaded
    assets = new createjs.LoadQueue(false);
    // assets.installPlugin(createjs.Sound);
    // Register callback function to be run when assets complete loading.
    assets.on("complete", init, this);
    assets.loadManifest(assetData);
}
function init() {
    // Reference to canvas element
    canvas = document.getElementById("canvas");
    stage = new createjs.Stage(canvas);
    stage.enableMouseOver(20);
    createjs.Ticker.setFPS(config.Game.FPS);
    createjs.Ticker.on("tick", this.gameLoop, this);
    var atlasData = {
        "images": [
            assets.getResult("Enemy")
        ],
        "frames": [
            [397, 1, 127, 123, 0, 0, 0],
            [205, 1, 128, 121, 0, 0, 0],
            [404, 120, 128, 128, 0, 0, 0],
            [200, 126, 108, 131, 0, 0, 0],
            [310, 122, 100, 116, 0, 0, 0],
            [1, 1, 210, 225, 0, 0, 0]
        ],
        "animations": {
            "poof": {
                "frames": [1, 2, 3, 4, 5], "speed": 0.1, next: false
            },
            "enemy": { "frames": [6] }
        }
    };
    enemyAtlas = new createjs.SpriteSheet(atlasData);
    scene = config.Scene.MENU;
    changeScene();
}
function gameLoop(event) {
    // Update whatever scene is currently active.
    currentScene.update();
    stage.update();
}
function changeScene() {
    // Simple state machine pattern to define scene swapping.
    switch (scene) {
        case config.Scene.MENU:
            stage.removeAllChildren();
            currentScene = new scenes.Menu();
            ;
            console.log("Starting MENU scene");
            break;
        case config.Scene.GAME:
            stage.removeAllChildren();
            currentScene = new scenes.Play();
            console.log("Starting SHOOTER scene");
            break;
    }
}
//# sourceMappingURL=game.js.map