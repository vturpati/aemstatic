import {Component} from '@angular/core'


// Dynamically added components
@Component({
  selector: 'c1',
  template: `<h2>c1</h2>{{props.message}}`,
  inputs : ["props"]
  
})
export class C1 {
  public props:any;
}

@Component({
  selector: 'c2',
  template: `<h2>c2</h2>{{props.message}}`,
  inputs : ["props"]
})
export class C2 {
  public props:any;
}

@Component({
  selector: 'c3',
  template: `<h2>c3</h2>{{props.message}}`,
  inputs : ["props"]
})
export class C3 {
  public props:any;
}


@Component({
  selector: 'Div',
  template: `<div class={{props.message}}>
          <div *ngFor="let item of props.children" >
                  <my-tabs [tabs]="item"></my-tabs>
                  </div>
             </div>`
  ,  inputs : ["props"]
  
})
export class Div {
  public props:any;
}


@Component({
  selector: 'samplePage',
  template: `<div class="Sample">
          <div *ngFor="let item of props.children" >
                  <my-tabs [tabs]="item"></my-tabs>
                  </div>
             </div>`
  ,  inputs : ["props"]
  
})
export class SamplePage {
  public props:any;
}

@Component({
  selector: 'par',
  template: `<div class="par">
          <div *ngFor="let item of props.children" >
                  <my-tabs [tabs]="item"></my-tabs>
                  </div>
             </div>`
  ,  inputs : ["props"]
  
})
export class Par {
  public props:any;
}


@Component({
  selector: 'aemtext',
  template: `<div [innerHTML]="props.text"></div>`
  ,  inputs : ["props"]
  
})
export class AEMtext {
  public props:any;
}


@Component({
  selector: 'aemtitle',
  template: `<h1 [innerHTML]="props.jcr_title"></h1>`
  ,  inputs : ["props"]
  
})
export class Title {
  public props:any;
}