var elm=document.querySelectorAll(".loder");
    var numb=document.querySelectorAll(".w");
    var i=0;
   
      elm.forEach( (elm,numbb)=>{



          var id=setInterval(frame,30);
        const wid=elm.getAttribute("wid");
         var  w=elm.getAttribute("c");
 
        //var numb=document.getElementById("w");
        function frame(){
         
            if(w >=wid){
                clearInterval(id);
                
    
            }else{
              
                w++;
                elm.style.width=w + "%";
                //elm.innerHTML=w + "%";
                numb[numbb].innerHTML= w+"%";
                
               
               
            }
        
         
    
        }  
      


    })

    function openit(){
        if(  document.getElementById("sdbr").style.width == 0+"px" ){
        document.getElementById("sdbr").style.width= 350+ "px";
     

        
        
        
      
  
        document.getElementById("sdbr").style.contentVisibility="visible";
        document.getElementById("sdbr").style.display="relative";

        
        }
        else{
       
            document.getElementById("sdbr").style.width= 0;

              
         
      
            document.getElementById("sdbr").style.contentVisibility="hidden";
            

        }
    }

