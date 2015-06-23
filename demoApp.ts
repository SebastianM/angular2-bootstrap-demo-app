import {Component, View, bootstrap} from 'angular2/angular2';
import {Progressbar} from 'angular2-bootstrap/angular2-bootstrap';

@Component({
  selector: 'demo-app'
})
@View({
  template: `
    <h2>Progressbar</h2>
    <boot-progressbar [value]="progressbarValue"></boot-progressbar>
    `,
  directives: [Progressbar]
})
class DemoAppCmp {
  progressbarValue: number;

  constructor() {
    this.progressbarValue = 10;

    setInterval(() => {
      this.progressbarValue = Math.random() * 100;
    }, 2000)
  }
}
bootstrap(DemoAppCmp);
