import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { C1, C2, C3 ,Div,Par,SamplePage,AEMtext,Title} from './c1-c3.component';
import { Tabs } from './tabs.component';
import { DclWrapper } from './dcl-wrapper.component';

@NgModule({
    declarations: [AppComponent,C1,C2,C3,Div,Tabs,DclWrapper,Par,SamplePage,AEMtext,Title],
    entryComponents: [C1, C2, C3, Div,Par,SamplePage,AEMtext,Title],
    imports: [BrowserModule.withServerTransition({ appId: 'universal-app' })],
    bootstrap: [AppComponent]
})
export class AppModule {

}
