module objects {
    export class Enemy extends objects.GameObject {

        private _move : objects.Vector2;
        private _speed : number;
        private _waitToDestroy : number;

        private _life : number;

        // public variables
        public name:string;
        public width:number;
        public height:number;
        public center:objects.Vector2;

        constructor(imageString:string, life : number) {
            super(enemyAtlas, imageString, "enemy");
            this.gotoAndStop("enemy");
            this._life = life;
            
            this.on("mousedown", this.checkHealth, this);
        }

        get life() : number {
            return this._life;
        }

        public update() : void {
            if (this.currentAnimationFrame >= 3){
                this.destroy();
                }
        }

        public setPosition(pos : objects.Vector2) : void {
            this.x = pos.x;
            this.y = pos.y;
        }

        public getPosition() : objects.Vector2 {
            return new objects.Vector2(this.x, this.y);
        }

        public shot() : void {
            this._life--;
        }
        
        checkHealth(event:createjs.MouseEvent) : void{
            if (this._life <= 0){
                this.gotoAndPlay("poof");
                
            }

            else {
                this.shot();
            }
        }
        
        destroy() : void{
            isRobberSpawned = false;
            score += 5;
            currentScene.removeChild(this);
            currentScene.update();
        }

    }
}