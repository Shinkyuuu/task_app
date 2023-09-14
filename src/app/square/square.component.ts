import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
    <p>
      square works
    </p>
    <p>
        {{rando}}
    </p>
    <p>
        <button>{{ value }}</button>
    </p>
  `,
  styles: [
  ]
})
export class SquareComponent {
    rando;

    @Input() value: 'X' | 'O';


    constructor() {
        setInterval(() => this.rando = Math.random(), 500);
    }

}
