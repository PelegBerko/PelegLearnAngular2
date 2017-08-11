import {Component} from 'angular2/core';
import {MyComponentComponent} from './my-component.component';

@Component({
    selector: 'my-app',
    template: `
        <h1>Am i aweomse?!??!1</h1>
        <my-component></my-component>
    `,
    directives: [MyComponentComponent]
})
export class AppComponent {

}