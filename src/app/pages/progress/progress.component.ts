import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgressComponent implements OnInit {

  leyenda= '';
  progreso1= 70;
  progreso2= 20;

  constructor() { }

  ngOnInit() {
  }


actualizar(event :number){
  console.log("Evento",event)
}


  }


