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


    update_vektor(x1,y1,x2,y2) {
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;
        this.a = x2-x1
        this.b = y2-y1
        this.hossz = Math.sqrt(this.a*this.a + this.b*this.b)
        this.a = this.a/this.hossz;
        this.b = this.b/this.hossz
    }

}


class Negyzet {

    center_x = 0;
    center_y = 0;
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
        this.center_x = x1
        this.center_y = y1;
        this.width = width;
        this.height =height
        this.x1=x1 -width/2
        this.y1=y1 -height/2

        this.x2 = x1+width/2
        this.y2 = y1 -height/2
        this.x3 = x1+width/2
        this.y3 = y1+height/2
        this.x4 = x1-width/2
        this.y4 = y1+height/2
        //hogy a középpontja legyen
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
var BB=c.getBoundingClientRect();
var offsetX=BB.left;
var offsetY=BB.top;
A.rajzol(vaszon)
let Objektek = [A]
document.addEventListener("mousemove",function(e){
    vaszon.clearRect(0,0,1920,1080)
    A.rajzol(vaszon)
    let angle = Math.atan2(e.clientY-offsetY - Objektek[0].center_y,e.clientX-offsetX- Objektek[0].center_x ) * (180 / Math.PI)
    elforgat(Objektek[0],angle)
    Objektek[0].rajzol(vaszon)
    collision(A,Objektek[0])
    elforgat(Objektek[0],angle*-1)
    
   
})
    
document.addEventListener("click",function(e) {
    vaszon.clearRect(0,0,1920,1080)
    let B = new Negyzet(e.clientX-offsetX,e.clientY-offsetY,50,50)
    Objektek[0] = B
    A.rajzol(vaszon)
    Objektek[0].rajzol(vaszon)

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

function elforgat(Objekt,szog) {
let rad = (Math.PI/180)*szog
            let tmpX = [Objekt.x1,Objekt.x2,Objekt.x3,Objekt.x4]
            let tmpY = [Objekt.y1,Objekt.y2,Objekt.y3,Objekt.y4]
       

        for(let i = 0; i < tmpX.length; i++) { //P''
           
            let x = (tmpX[i]-Objekt.center_x) * Math.cos(rad) - (tmpY[i]-Objekt.center_y) * Math.sin(rad)
            let y = (tmpX[i]-Objekt.center_x) * Math.sin(rad) + (tmpY[i]-Objekt.center_y) * Math.cos(rad)
            tmpX[i] = x;
            tmpY[i] = y
            
        }

        Objekt.x1= tmpX[0] + Objekt.center_x;
        Objekt.x2= tmpX[1]+ Objekt.center_x;
        Objekt.x3= tmpX[2]+ Objekt.center_x;
        Objekt.x4= tmpX[3]+ Objekt.center_x;

        Objekt.y1= tmpY[0] + Objekt.center_y;
        Objekt.y2= tmpY[1]  + Objekt.center_y;
        Objekt.y3= tmpY[2]  + Objekt.center_y;
        Objekt.y4= tmpY[3] + Objekt.center_y;
        Objekt.AB = new Vektor(Objekt.x1, Objekt.y1, Objekt.x2, Objekt.y2) //AB
        Objekt.BD= new Vektor(Objekt.x2, Objekt.y2, Objekt.x3, Objekt.y3) //BD
        Objekt.CD= new Vektor(Objekt.x3, Objekt.y3, Objekt.x4, Objekt.y4) //CD
        Objekt.AC= new Vektor(Objekt.x4, Objekt.y4, Objekt.x1, Objekt.y1) //AC


}
