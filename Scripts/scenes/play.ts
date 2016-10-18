module scenes {
    export class Play extends objects.Scene {

        private _playBG : createjs.Bitmap;
        private _enemy : objects.Enemy;
        private _cursor : createjs.Bitmap;
        private _scoreLabel : objects.Label;
        
        private _randomNum : Number;
        private _currentTick : Number;
        private _enemyHealth : number;

        constructor() {
            super();
            this.start();
        }

        public start() : void {
            isRobberSpawned = false;
            score = 0;
            stage.cursor = "none";
            
            this._playBG = new createjs.Bitmap(assets.getResult("CSIBG"));
            this.addChildAt(this._playBG, 0);
            
            this._cursor = new createjs.Bitmap(assets.getResult("Cursor"));
            this._cursor.x = -100;
            this._cursor.y = -100;
            this.addChild(this._cursor);
            
            this._scoreLabel = new objects.Label("Score: ",
                "40px Consolar", "#000000", config.Screen.CENTER_X - 300, config.Screen.CENTER_Y - 250);
            this._scoreLabel.lineWidth = 900;
            this._scoreLabel.lineHeight = 30;
            this.addChild(this._scoreLabel);

            stage.addChild(this);
        }

        public update() : void {
            this._enemyHealth = this._getRandomHealth();
            
            this._spawnEnemy();
            
            this._enemy.update();
            this._updateScore();
            this._updateCursor();
            
            stage.update();
        }
        
        private _spawnEnemy() : void {
            
            if (isRobberSpawned == false){
                this._enemy = new objects.Enemy("Enemy", this._enemyHealth);
                this._enemy.x = config.Screen.CENTER_X + this._getRandomSpawn();
                this._enemy.y = config.Screen.CENTER_Y + this._getRandomSpawn();
                this.addChild(this._enemy);
                isRobberSpawned = true;
            }

        }
        
        private _getRandomHealth() {
            return Math.floor(Math.random() * ((5 - 1 + 1) + 1));
        }
        
        private _getRandomSpawn() {
            return Math.floor(Math.random() * ((200 - 1 + 1) + 1));
        }
        
        private _updateScore(){
            this._scoreLabel.text = "Score: " + score;
        }
        
        private _updateCursor(){
            this._cursor.x = stage.mouseX;
            this._cursor.y = stage.mouseY;
        }

        private _onEnemyClick(event : createjs.MouseEvent) : void {
        }
    }
}