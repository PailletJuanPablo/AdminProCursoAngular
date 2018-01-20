import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {


  @ViewChild('txtProgress') txtProgress: ElementRef;
  @Input("nombre") leyenda = 'Leyenda';
  @Input() progreso = 50;
  value: any;

  @Output() cambioValor: EventEmitter<number> = new EventEmitter();

  constructor() {


  }

  ngOnInit() {



  }

  cuandoCambia(valornuevo) {


console.log(this.txtProgress);
    if (valornuevo >= 100 ) {
this.progreso = 100;
    }else if (valornuevo <= 0) {
this.progreso = 0;
    }else {
      this.progreso = valornuevo;

    }
this.txtProgress.nativeElement.value = this.progreso;
    console.log(valornuevo);
  this.cambioValor.emit(this.progreso);

  }


  cambiarValor(valor) {

    if (this.progreso >= 100) {
   this.progreso = 100;
    }

    if (this.progreso <= 0) {
     this.progreso = 0;
    }

    this.progreso = this.progreso + valor;
console.log(this.progreso);


this.cambioValor.emit(this.progreso);

this.txtProgress.nativeElement.focus();
    }

}
