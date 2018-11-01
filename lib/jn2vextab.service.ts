import { Injectable } from '@angular/core';
@Injectable()
export class Jn2VextabService {

      constructor() {}

      jnToVextab(jnElement){
          return {x:jnElement.x , y:jnElement.y}
      }
      
      jnArrayToVextabArray(jnArray){
        let a = []
        jnArray.forEach(function(jnElement){
          a.push({x:jnElement.x,y:jnElement.y})
        });
        return a;
      }

      vexTabArrayToString(vextabArray){
        let a = [];
        vextabArray.forEach(function(vextabElement){
            a.push( vextabElement.x + "/" + vextabElement.y );
        })
        return a.join(" ");
      }


      jnArrayToVextabString(jnArray){
         return this.vexTabArrayToString(
           this.jnArrayToVextabArray(jnArray)
         );
      }
}
