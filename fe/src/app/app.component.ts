import { Component,ElementRef} from '@angular/core';
import { C1, C2, C3 ,Div,Par,SamplePage,AEMtext,Title} from './c1-c3.component';

@Component({
    selector: 'app-root',
    template: `<my-tabs [tabs]="obj"></my-tabs>`
})
export class AppComponent {
  public obj: any ;

  public mapping ={
    "Div": Div,
    "C1": C1,
    "C2":C2,
    "C3":C3,
    "myHTL63/components/structure/simplePage":SamplePage,
    "myHTL63/components/content/text":AEMtext,
    "wcm/foundation/components/parsys":Par,
    "myHTL63/components/content/title":Title
  }
   constructor(private eltRef:ElementRef) {
    let native = this.eltRef.nativeElement;
    let test = native.getAttribute("props2");
    this.obj = JSON.parse(test);
    console.log("Components is ",test);
    console.log("Components is ",JSON.parse(test));
    this.obj = this.eachRecursive(this.obj);
    console.log("Components is ",this.obj);
   }

   eachRecursive(obj)
   {
       for (var k in obj)
       {
           if (typeof obj[k] == "object" && obj[k] !== null)
              obj[k] = this.eachRecursive(obj[k]);
           else{
             if(k == "feName"){
              console.log("property "+k);
              obj[k] = this.mapping[obj[k]];
             }
               
       }


   }
   return obj;
  }
}
