
class Negyzet {


    x2=0
    y2=0;

    x3=0
    y3=0

    x4=0
    y4=0

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
})
