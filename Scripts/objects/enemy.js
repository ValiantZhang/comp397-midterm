var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    var Enemy = (function (_super) {
        __extends(Enemy, _super);
        function Enemy(imageString, life) {
            _super.call(this, enemyAtlas, imageString, "enemy");
            this.gotoAndStop("enemy");
            this._life = life;
            this.on("mousedown", this.checkHealth, this);
        }
        Object.defineProperty(Enemy.prototype, "life", {
            get: function () {
                return this._life;
            },
            enumerable: true,
            configurable: true
        });
        Enemy.prototype.update = function () {
            if (this.currentAnimationFrame >= 3) {
                this.destroy();
            }
        };
        Enemy.prototype.setPosition = function (pos) {
            this.x = pos.x;
            this.y = pos.y;
        };
        Enemy.prototype.getPosition = function () {
            return new objects.Vector2(this.x, this.y);
        };
        Enemy.prototype.shot = function () {
            this._life--;
        };
        Enemy.prototype.checkHealth = function (event) {
            if (this._life <= 0) {
                this.gotoAndPlay("poof");
            }
            else {
                this.shot();
            }
        };
        Enemy.prototype.destroy = function () {
            isRobberSpawned = false;
            score += 5;
            currentScene.removeChild(this);
            currentScene.update();
        };
        return Enemy;
    }(objects.GameObject));
    objects.Enemy = Enemy;
})(objects || (objects = {}));
//# sourceMappingURL=enemy.js.map