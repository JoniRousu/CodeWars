function isValidWalk(walk) {
    if(walk.length < 10 || walk.length > 10) {
      return false;  
    } else {
      let n = 0;
      let s = 0;
      let e = 0;
      let w = 0;
      
      for (direction of walk) {
         switch (direction) {
             case 'n': n++; break;
             case 's': s++; break;
             case 'e': e++; break;
             case 'w': w++; break;
         } 
      }
       
      if (n === s && w === e) {
        return true;
      } else {
        return false;
      }
    }
  }