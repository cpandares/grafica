import { Component, OnDestroy, Input } from '@angular/core';

@Component({
  selector: 'graphics',
  templateUrl: './graphics.component.html',
  styleUrls: ['./graphics.component.css']
})
export class GraphicsComponent implements OnDestroy {

  //Inyectar informacion de un compoente externo
  @Input() result : any[] = [];

 /* result: any[]= [
    {
      "name": "Juego 1",
      "value": 20
    },
    {
      "name": "Juego 2",
      "value": 30
    },
    {
      "name": "Juego 3",
      "value": 15
    },
    {
      "name": "Juego 4",
      "value": 18
    }
  ];
  */

 

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'votos';
  showYAxisLabel = true;
  yAxisLabel = 'juegos';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  //intervalo;

  constructor() {

    /* this.intervalo = setInterval( ()=>{
        console.log("tick");
        //Para actualizar la informacion en tiempo real se debe reescribir el resultado completo
        const newResults = [...this.result]
        for(let i in newResults){
          newResults[i].value = Math.round(Math.random() * 500);
        }

        this.result = [...newResults];
  
      }, 1500)
*/
    
   }

  onSelect(event) {
    console.log(event);
  }

  ngOnDestroy(){
   // clearInterval(this.intervalo);
  }
}
