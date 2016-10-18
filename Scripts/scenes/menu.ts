/*
    Scene module to group all user-defined scenes  under the same "namespace aka module"
    Menu scene that contains all assets and functionality associated with the menu itself
*/

module scenes {
    export class Menu extends objects.Scene {

        // Private instance variables
        // Label or bitmap
        // Button 
        private _playBtn : objects.Button;
        private _menuBG : createjs.Bitmap;
        private _titleLabel : objects.Label;
        private _bgBlur : createjs.BlurFilter;
        
        
        // Menu Class Contructor
        constructor() {
            super();
        }

        public start() : void {
            console.log("Menu Scene Started");
            
            this._menuBG = new createjs.Bitmap(assets.getResult("MenuBG"));
            this.addChild(this._menuBG);
            
            this._bgBlur = new createjs.BlurFilter(5, 5, 1);
            this._menuBG.filters = [this._bgBlur];
            
            this._titleLabel = new objects.Label("COPS AND ROBBERS",
                "40px Impact", "#000000", config.Screen.CENTER_X, config.Screen.CENTER_Y - 250);
            this._titleLabel.lineWidth = 900;
            this._titleLabel.lineHeight = 30;
            this.addChild(this._titleLabel);

            this._playBtn = new objects.Button("PlayBtn", config.Screen.CENTER_X, config.Screen.CENTER_Y + 150);
            this.addChild(this._playBtn);
            this._playBtn.on("click", this._playBtnClick, this);

            // Add menu scene to global stage container
            stage.addChild(this);
        }

        public update() : void {
        }

        private _playBtnClick(event : createjs.MouseEvent) {
            console.log("PRINT");
            scene = config.Scene.GAME;
            changeScene();
        }
    }
}