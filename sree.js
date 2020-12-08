
function colider(block,block2,wall) {

    if(block.x - block2.x <block.width/2 + block2.width/2 && (block2.x-block.x) < block.width/2+block2.width/2 &&(block.y-block2.y) <block.height/2+block2.height/2 && (block2.y-block.y) < block.height/2+block2.height/2){
      
      block.velocityX=0;
      var deformation=0.5*weight*speed*speed/22500;
  
      if(deformation>180){
  
          block.shapeColor="pink";
          wall.shapeColor="red";

  
      }
      if(deformation<180&& deformation>100){
  
        block.shapeColor="yellow";
        wall.shapeColor="green";

  
      }
      if(deformation<100){
  
        block.shapeColor="green";
        wall.shapeColor="green";

  
      }
      
      return true;
        }else return true;
    
  }

  