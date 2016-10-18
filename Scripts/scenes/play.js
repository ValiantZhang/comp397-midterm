var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
    var Play = (function (_super) {
        __extends(Play, _super);
        function Play() {
            _super.call(this);
            this.start();
        }
        Play.prototype.start = function () {
            isRobberSpawned = false;
            score = 0;
            stage.cursor = "none";
            this._playBG = new createjs.Bitmap(assets.getResult("CSIBG"));
            this.addChildAt(this._playBG, 0);
            this._cursor = new createjs.Bitmap(assets.getResult("Cursor"));
            this._cursor.x = -100;
            this._cursor.y = -100;
            this.addChild(this._cursor);
            this._scoreLabel = new objects.Label("Score: ", "40px Consolar", "#000000", config.Screen.CENTER_X - 300, config.Screen.CENTER_Y - 250);
            this._scoreLabel.lineWidth = 900;
            this._scoreLabel.lineHeight = 30;
            this.addChild(this._scoreLabel);
            stage.addChild(this);
        };
        Play.prototype.update = function () {
            this._enemyHealth = this._getRandomHealth();
            this._spawnEnemy();
            this._enemy.update();
            this._updateScore();
            this._updateCursor();
            stage.update();
        };
        Play.prototype._spawnEnemy = function () {
            if (isRobberSpawned == false) {
                this._enemy = new objects.Enemy("Enemy", this._enemyHealth);
                this._enemy.x = config.Screen.CENTER_X + this._getRandomSpawn();
                this._enemy.y = config.Screen.CENTER_Y + this._getRandomSpawn();
                this.addChild(this._enemy);
                isRobberSpawned = true;
            }
        };
        Play.prototype._getRandomHealth = function () {
            return Math.floor(Math.random() * ((5 - 1 + 1) + 1));
        };
        Play.prototype._getRandomSpawn = function () {
            return Math.floor(Math.random() * ((200 - 1 + 1) + 1));
        };
        Play.prototype._updateScore = function () {
            this._scoreLabel.text = "Score: " + score;
        };
        Play.prototype._updateCursor = function () {
            this._cursor.x = stage.mouseX;
            this._cursor.y = stage.mouseY;
        };
        Play.prototype._onEnemyClick = function (event) {
        };
        return Play;
    }(objects.Scene));
    scenes.Play = Play;
})(scenes || (scenes = {}));
//# sourceMappingURL=play.js.map