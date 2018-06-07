import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { C1, C2, C3 ,Div,Par,SamplePage,AEMtext,Title} from './c1-c3.component';
import { Tabs } from './tabs.component';

@NgModule({
    imports: [ServerModule, AppModule],
    bootstrap: [AppComponent]
})
export class AppServerModule {
}
