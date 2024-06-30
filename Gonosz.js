class Gonosz {
    hp = 100
    x=0
    y = 0
    gonosz = ""
    width = 0;
    height = 0;
    constructor(x,y,hp) {
        this.x = x;
        this.y = y;
        this.hp = hp
        this.gonosz = document.createElement("div");
        this.gonosz.style.left = x;
        this.gonosz.style.top = y;
        this.width = 50;
        this.height = 50
        this.gonosz.style.width = this.width;
        this.gonosz.style.height = this.height;
        this.gonosz.style.backgroundColor = "green"
        this.gonosz.style.position = "absolute"
        this.gonosz.setAttribute("id","gonosz")
        document.body.appendChild(this.gonosz)
    }
    }
   