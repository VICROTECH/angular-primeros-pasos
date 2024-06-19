import { Component } from "@angular/core";


@Component({
  selector: 'app-counter', //componente personalizado
  template: `
    <h3>Counter: {{ counter }}</h3>

    <button (click)="increaseBy(+1)" >+1</button>
    <button (click)="resetCounter()">Reset</button>
    <button (click)="increaseBy(-1)">-1</button>

  `,
})


//para que una clase se transforme en compoennte se debe utilizar un decorador @component

export class CounterComponent {

  public counter: number = 10;

  increaseBy( value: number): void {
    this.counter += value;
  }

  resetCounter() {
    this.counter = 10;
  }

}
