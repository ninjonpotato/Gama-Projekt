class Hitbox {
    x = 0;
    y = 0;



    width = 0;
    height = 0;
    parent = "";
    div = ""
    constructor(x,y,width,height,parent) {
        this.x = x;
        this.y = y;
        this.height = height;
        this.width = width;
        this.parent = parent;
        this.div = document.createElement("div")
        this.div.style.backgroundColor = "blue"
        this.div.style.left = this.x;
        this.div.style.top = this.y;
        this.div.style.width = this.width
        this.div.style.height = this.height
        this.div.style.position = "relative"
        this.div.style.display = "none";
        parent.appendChild( this.div);
    }
}
