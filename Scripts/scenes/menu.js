/*
    Scene module to group all user-defined scenes  under the same "namespace aka module"
    Menu scene that contains all assets and functionality associated with the menu itself
*/
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
    var Menu = (function (_super) {
        __extends(Menu, _super);
        // Menu Class Contructor
        function Menu() {
            _super.call(this);
        }
        Menu.prototype.start = function () {
            console.log("Menu Scene Started");
            this._menuBG = new createjs.Bitmap(assets.getResult("MenuBG"));
            this.addChild(this._menuBG);
            this._bgBlur = new createjs.BlurFilter(5, 5, 1);
            this._menuBG.filters = [this._bgBlur];
            this._titleLabel = new objects.Label("COPS AND ROBBERS", "40px Impact", "#000000", config.Screen.CENTER_X, config.Screen.CENTER_Y - 250);
            this._titleLabel.lineWidth = 900;
            this._titleLabel.lineHeight = 30;
            this.addChild(this._titleLabel);
            this._playBtn = new objects.Button("PlayBtn", config.Screen.CENTER_X, config.Screen.CENTER_Y + 150);
            this.addChild(this._playBtn);
            this._playBtn.on("click", this._playBtnClick, this);
            // Add menu scene to global stage container
            stage.addChild(this);
        };
        Menu.prototype.update = function () {
        };
        Menu.prototype._playBtnClick = function (event) {
            console.log("PRINT");
            scene = config.Scene.GAME;
            changeScene();
        };
        return Menu;
    }(objects.Scene));
    scenes.Menu = Menu;
})(scenes || (scenes = {}));
//# sourceMappingURL=menu.js.map