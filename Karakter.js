class Karakter {
    hp = 100
    dmg = 1
    speed= 0.70;
    stop= 0.90;
    maxspeed = 4;
    karakter = "";
    hitbox = "";
    x = 0;
    y = 0;
    speedX = 0;
    speedY = 0;
    angle = 0;
    irany = {
    up:false,
    down:false,
    left:false,
    right:false,
   
    }

    eger = {
        x: null,
        y: null
    }
    constructor(div,x,y) {
        this.x = x;
        this.y = y;
        this.karakter = div;
        this.karakter.style.left = x;
        this.karakter.style.top = y;
        this.karakter.style.transform = "rotate("+this.angle+"deg)"
        this.hitbox = new Hitbox(this.y/2,25*-1,50,100,karakter)

    }

    mozgas() {
   if(this.irany.right) this.speedX = Math.min(this.speedX + this.speed, this.maxspeed);
    if(this.irany.left)  this.speedX = Math.max(this.speedX - this.speed, -this.maxspeed);
    if(this.irany.up)  this.speedY = Math.max(this.speedY - this.speed, -this.maxspeed);
    if(this.irany.down)  this.speedY = Math.min(this.speedY + this.speed, this.maxspeed);
    if(!this.irany.right && !this.irany.left) this.speedX *= this.stop;
    if(!this.irany.up && !this.irany.down) this.speedY *= this.stop
    this.x += this.speedX;
    this.y+= this.speedY
    karakter.style.left = this.x;
    karakter.style.top = this.y;
   
   

    }
    
    utes() {

        for(let i = 0; i < enemyk.length; i++) {
            this.talalat(enemyk[i]); 
        }

        this.hitbox.div.style.display = "block";
        setTimeout(function(){
            this.hitbox.div.style.display = "none";

        }.bind(this),100)
   
    }

    talalat(enemy) {

        let hitboxKord = {
            balF:new Csucs(this.x-25,this.y-50),
            jobbF: new Csucs(this.x+this.hitbox.width+20,this.y-50),
            balL: new Csucs(this.x-25,this.y),
            jobbL: new Csucs(this.x+this.hitbox.width+20,this.y)
        }
        console.log("player: "+this.x+","+this.y)
        console.log(hitboxKord.jobbL.x,hitboxKord.jobbL.y)
    }

    hitbox_lekovetes() {

        let u = this.eger.x - this.x-50/2
        let v = this.eger.y - this.y-50/2
        let angleRad = Math.atan2(v,u)
        let angle = angleRad * (180/Math.PI)
        this.karakter.style.transform = "rotate("+angle+"deg)"
       
    }

}
  
class Csucs {
    x= 0
    y= 0
    constructor(x,y) {
        this.x = x
        this.y = y
    }
}