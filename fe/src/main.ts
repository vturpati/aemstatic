import 'core-js/es7/reflect';
import 'zone.js/dist/zone';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { C1, C2, C3 ,Div} from './app/c1-c3.component';


platformBrowserDynamic().bootstrapModule(AppModule);
