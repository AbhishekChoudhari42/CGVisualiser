var p = []

function setup(){
    var c = document.querySelector('#Canvas');
    var canvas = createCanvas(c.clientWidth+2,c.clientHeight-2);
    canvas.parent('Canvas');  
    window.onresize = function() {
        var c = document.querySelector('#Canvas');
        var canvas = createCanvas(c.clientWidth+2,c.clientHeight - 2);
        canvas.parent('Canvas');  
    }
    
   
    
            // -----------------------input setup------------------------------

            // --------------------------point input----------------------------
            
            const inputs = document.querySelectorAll('.Input input');
            
            document.querySelector('.inputArea button').addEventListener('click',()=>{
                p = [];
                // ----------------------object creation--------------------------

                inputs.forEach((input)=>{
                    let ivalue =  input.value;
                   
                    let i  = ivalue.split(',');
                   
                    if(i === NaN)
                    {
                        p.push(new Points(0,0));
                    }
                    else{
                        if(i[0] == NaN){i[0] = 0};
                        if(i[1] == NaN){i[1] = 0};
                        p.push(new Points(parseInt (i[0]),-parseInt (i[1])));
                    }
                   
                  console.log(p);
                });
            });

            // ---------------------transform--------------------------
           
           document.querySelector('.transform button').addEventListener('click',()=>{4
            
           //-------------------------------------------------------------------------
                        var t = document.querySelector('.f1');
                        var txy = t.value;
                            var  translatexy = txy.split(',');

                    // ----------------------------------------------
                        
                        var scal = document.querySelector('.f2');
                        var s1 = scal.value;
                            var  scalexy = s1.split(',');

                    
                    // ----------------------------------------------
                    
                        var reflect = document.querySelector('.f4');
                        var re = reflect.value;
                            var  reflectxy = re.split(',');


                    // ---------------------------------------------

                        var shear = document.querySelector('.f3');
                        var sh = shear.value;
                            var  shearxy = sh.split(',');

                    
                    // ----------------------------------------------

                        var rotate = document.querySelector('.f5');
                        var deg = rotate.value;

                    
                    // ----------------------------------------------- 



                    if(translatexy.length == 1)
                    {   translatexy = [];
                        translatexy.push(0);
                        translatexy.push(0)
                    };
                    if(scalexy.length == 1)
                    {   scalexy = [];
                        scalexy.push(1)
                        scalexy.push(1)
                    };
                    if(reflectxy.length == 1)
                    {  reflectxy = [];
                        reflectxy.push(0);
                        reflectxy.push(0)
                    };
                    if(shearxy.length == 1)
                    {   shearxy = [];
                        shearxy.push(0)
                        shearxy.push(0)
                    };
                    if(deg == ''){deg = 0}
                
                                      
                   

                    let i =  0;
                    p.forEach(trans =>{
                      
                        trans.translat(parseInt(translatexy[0]),parseInt(-translatexy[1]));
                        trans.scale(parseFloat(scalexy[0]),parseFloat(scalexy[1]));
                        trans.reflect(parseInt(reflectxy[0]),parseInt(reflectxy[1]));
                        trans.rotat(parseFloat(deg));
                        if(i == 0 || i == 2 ){
                            trans.shear(parseInt(shearxy[0]),parseInt(shearxy[1]))
                        }
                        i++
                       
                    })
                    
                    
                   
                   
                    
                           
                                
                            
                                
                            
                
                    
                    
                           

           })
            


}

   

function draw(){
   
    background(255,255,255);
    strokeWeight(1);
    stroke(0,0,255,40);
    line(width/2,0,width/2,height);
    line(0,height/2,width,height/2);


   translate(width/2,height/2);
   stroke(0,0,255)
   strokeWeight(3);
for(Point of p){
    if(Point.x == NaN || Point.y == NaN){return};
}
   if(p.length > 0){
    p.forEach((Point)=>{
        point(Point.x,Point.y);
    });
   
    strokeWeight(1);
    for(let i = 0;i<p.length-1;i++){
       line(p[i].x ,p[i].y, p[i+1].x ,p[i+1].y);
    }
    line(p[p.length - 1].x , p[p.length-1].y,p[0].x,p[0].y)
   }
  
    

   

    
    
}


const canvasHover = document.querySelector('#Canvas');
const h = document.querySelector('.hover');
const hx = document.querySelector('.hover .X span ');
const hy = document.querySelector('.hover .Y span ');
canvasHover.addEventListener('mousemove',function(e){
    hx.textContent = parseInt(mouseX -(width/2));
    hy.textContent = parseInt(-(mouseY -(height/2)));
    h.style.visibility = 'visible';
    h.style.opacity = '1';

    h.style.left = e.clientX +'px';
    h.style.top = e.clientY+'px';
    
    
    if((mouseX -(width/2)) >0){
        h.style.left = e.clientX-150+'px';
    }
    else{
        h.style.left = e.clientX+50+'px';
    }
    if(-(mouseY -(height/2))>0){
        h.style.transform = 'translateY(50px)';
    }
    else{
        h.style.transform = 'translateY(-50px)';
    }    
  
});

canvasHover.addEventListener('mouseout',()=>{
    h.style.opacity = '0.5';
})

