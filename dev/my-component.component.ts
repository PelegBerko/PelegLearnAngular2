import {
    Component, 
    OnInit
} from 'angular2/core';
import {TestComponent} from './test.component';

@Component({
    selector: "my-component",
    templateUrl: "templates/my-component.html",
    directives: [TestComponent],
    styleUrls: ['src/css/my-component.css']
})

export class MyComponentComponent implements OnInit {
    text: string;

    ngOnInit():any {
        this.text = "my awesome random text";
    }
}