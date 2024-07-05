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
        this.height =height
        this.x1=x1;
        this.y1=y1;
        this.x2 = x1+width
        this.y2 = y1
        this.x3 = x1+width
        this.y3 = y1+height
        this.x4 = x1
        this.y4 = y1+height
            //x1,y1,x2,y2
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


var c = document.getElementById("screen");
var vaszon = c.getContext("2d");


let A = new Negyzet(100,100,50,50)
A.rajzol(vaszon)



document.addEventListener("click", function(e) {
    vaszon.clearRect(0,0,800,800);
    A.rajzol(vaszon)

    let B = new Negyzet(e.clientX-25,e.clientY-25,50,50)
    B.rajzol(vaszon)
    console.log("-")
    collision(A,B)

 })


 function skalar(VektorA,VektorB) { 
    return VektorA.x1 * VektorB.a + VektorA.y1 * VektorB.b
    }

function vetites(Obj,oldal) {
let min = skalar(Obj.oldalak[0],oldal);
let max = min; 

for(let i = 0; i < Obj.oldalak.length; i++) {
    if (min > skalar(Obj.oldalak[i],oldal)) min = skalar(Obj.oldalak[i],oldal);
    if (max < skalar(Obj.oldalak[i],oldal)) max = skalar(Obj.oldalak[i],oldal);
}

return {min: min, max: max}
}



function collision(A,B) { // 2 objektum
    for(let i = 0; i < A.oldalak.length; i++) {
        let objektA = vetites(A,B.oldalak[i])
        let objektB = vetites(B,B.oldalak[i])
        if(!(objektA.min >= objektB.min && objektA.min <= objektB.max || objektA.max >= objektB.min && objektA.max <= objektB.max)) {    console.log("nincs osszeeres");return false}
    }
    console.log("uristen osszeertek")
return true;
}
