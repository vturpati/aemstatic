import {Component, Input} from '@angular/core'
import {DclWrapper} from './dcl-wrapper.component'

@Component({
selector: 'my-tabs',
template: `<dcl-wrapper [type]="tabs"></dcl-wrapper>`
})
export class Tabs {
@Input() tabs;
}