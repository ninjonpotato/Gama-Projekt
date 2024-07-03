class Vektor {
    a = 0;
    b = 0;
    norm_a = 0;
    norm_b = 0
    hossz = 0;
    constructor(x1,y1,x2,y2) {
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;
        this.a = x2-x1
        this.b = y2-y1
        this.hossz = Math.sqrt(this.a*this.a + this.b*this.b)
        this.a = this.a/this.hossz;
        this.b = this.b/this.hossz
        this.norm_b = this.a*-1;
        this.norm_a = this.b;
    }
}


class Negyzet {


    x2=0
    y2=0;
    x3=0
    y3=0
    x4=0
    y4=0
    AB = 0
    BD = 0
    CD = 0
    AC = 0

    constructor(x1,y1,width,height) {
       
        this.width = width;
        this.height = height
        this.x1=x1;
        this.y1=y1;
        this.x2 = x1+width
        this.y2 = y1
        this.x3 = x1+width
        this.y3 =y1+height
        this.x4 = x1
        this.y4 = y1+height

        this.AB = new Vektor(this.x1,this.y1,this.x2,this.y2)
        this.BD = new Vektor(this.x2,this.y2,this.x3,this.y3)
        this.CD = new Vektor(this.x3,this.y3,this.x4,this.y4)
        this.AC = new Vektor(this.x4,this.y4,this.x1,this.y1)
    }
    get oldalak() {
        return [this.AB,this.BD,this.CD,this.AC]
    }

    rajzol(vaszon) {
            vaszon.beginPath()
            vaszon.moveTo(this.x1, this.y1);
            vaszon.lineTo(this.x2, this.y2);

            vaszon.moveTo(this.x2, this.y2);
            vaszon.lineTo(this.x3, this.y3);

            vaszon.moveTo(this.x3, this.y3);
            vaszon.lineTo(this.x4, this.y4);

            vaszon.moveTo(this.x4, this.y4);
            vaszon.lineTo(this.x1, this.y1);

            vaszon.moveTo(this.x1, this.y1);
            vaszon.lineTo(this.x2, this.y2);

            vaszon.stroke()

    }


}



//todo: lekérdezni hogy összeérnek e.
//1. Vektorok: megvan
//2. Vektorok normalizálása és normáljaik előálítása : megvan
//3. Skaláris kiszámolása
//4. vetítés: az adott obj minden oldalát egy felületre vetítem.
//5. a vetítésekből megkeresni a minimumot és maximumot majd eldönteni hogy összeérnek-e
var c = document.getElementById("screen");
var vaszon = c.getContext("2d");


let A = new Negyzet(100,100,50,50)
A.rajzol(vaszon)


document.addEventListener("click", function(e) {
    vaszon.clearRect(0,0,800,800);
    A.rajzol(vaszon)

    let B = new Negyzet(e.clientX-25,e.clientY-25,50,50)
    B.rajzol(vaszon)
    console.log("--")
    console.log("CUCC")
    console.log("B AB: "+ skalar(B.AB,A.AB))
    console.log("B BD: "+skalar(B.BD,A.AB))
    console.log("B CD: "+ skalar(B.CD,A.AB))
    console.log("B AC: "+skalar(B.AC,A.AB))
    console.log("-")
    console.log("B AB: "+ skalar(A.AB,A.AB))
    console.log("B BD: "+skalar(A.BD,A.AB))
    console.log("B CD: "+ skalar(A.CD,A.AB))
    console.log("B AC: "+skalar(A.AC,A.AB))

 })

function skalar(A,B) { //2 vektor
return A.x1 * B.a + A.y1 * B.b
}
