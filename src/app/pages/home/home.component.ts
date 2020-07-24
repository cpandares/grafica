import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Game } from '../../interfaces/interfaces';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  juegos : any[] = [];

  constructor(private db:AngularFirestore) { }

  ngOnInit() {
    this.db.collection('goty').valueChanges()
            .pipe(
              map( (resp : Game[])=> resp.map( ({ name, votos })=>({name, value:votos}) ) )
            )
            .subscribe(juegos=>{
              console.log(juegos);
              this.juegos = juegos;
            });
  }

}
