import {Component, View, bootstrap} from 'angular2/angular2';
import {Progressbar} from 'angular2-bootstrap/angular2-bootstrap';

@Component({
  selector: 'demo-app'
})
@View({
  template: `
    <h2 (click)="updateValue()">Progressbar</h2>
    {{ abc }}
    <boot-progressbar [value]="progressbarValue"></boot-progressbar>`,
  directives: [Progressbar]
})
class DemoAppCmp {
  progressbarValue: number;

  constructor() {
    this.progressbarValue = 10;
    setInterval(() => {
      this.progressbarValue = Math.random() * 100;
      console.log(this.progressbarValue);
    }, 2000)
  }

  updateValue() {
    console.log('UPDATE');
    this.abc = 100;
  }
}
bootstrap(DemoAppCmp);
