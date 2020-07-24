import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/services/game.service';
import { Game } from '../../interfaces/interfaces';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-goty',
  templateUrl: './goty.component.html',
  styleUrls: ['./goty.component.css']
})
export class GotyComponent implements OnInit {

    juegos : Game[] = [];

  constructor(private gameService: GameService ) { }

  ngOnInit() {
      this.gameService.getNominados().subscribe(resp=>{
        console.log(resp);
        this.juegos = resp;
      })
  }
  votarJuego(juego : Game){
      //console.log(juego);
      this.gameService.votarJuego(juego.id).subscribe( (resp:any) =>{
        
          if(resp.ok){
            Swal.fire('Gracias', resp.mensaje, 'success')
          }else{
            Swal.fire('Ooppsss', resp.mensaje, 'error')
          }

      });
  }

}
