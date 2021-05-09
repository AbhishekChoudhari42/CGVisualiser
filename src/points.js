



class Points{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
    translat(translateX,translateY) {
        this.x = this.x + translateX;
        this.y = this.y + translateY;
    }


    scale(scaleX,scaleY){
        if(scaleX > 0 && scaleY >0){
            this.x = this.x * scaleX;
            this.y = this.y * scaleY;
        }
        
    }


    shear(shearX,shearY){
        this.x = this.x + shearX;
        this.y = this.y + shearY;
    }


    reflect(xaxis,yaxis){
        if(xaxis){
            this.y = this.y * -1;
        }
        if(yaxis){
            this.x = this.x * -1;
        }
    }

    rotat(deg){
        let r = (2*Math.PI*deg)/360;
        let cosr = Math.cos(r)
        let sinr = Math.sin(r);

        let vx = this.x*cosr - this.y*sinr;
        let vy = this.x*sinr + this.y*cosr;
        this.x = vx;
        this.y = vy;

    }

    
}