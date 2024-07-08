class Jatek {

constructor(c,objektek) {
    this.c = c;
    this.vaszon = this.c.getContext("2d");
    this.BB = this.c.getBoundingClientRect();
    this.offsetX= this.BB.left;
    this.offsetY=this.BB.top;
    this.objektek = objektek;
}


game() {

    for(let i = 0; i < this.objektek.length; i++) {
    Negyzet.rajzol(this.vaszon,this.objektek[i]) 
    if(i != 0){
   Negyzet.collision(this.objektek[i],this.objektek[0]) 
    }
  }

}

}

document.addEventListener("keydown",function(e) {
    //TODO a karakter tudjon mozogni.
    if(e.code == "KeyA") {console.log("aaaaaa")}
 })