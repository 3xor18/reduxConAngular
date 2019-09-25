import { Component } from '@angular/core';
import { Store, Action } from '@ngrx/store';
import * as contador from './contador/contador.actions';
import { AppState } from './app.reducer';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'appRedux';
  contador: number;

  constructor(private store: Store<AppState>) {
    //this.contador = 10;
    this.store.select('contador').subscribe(state => {
      this.contador = state;
    })
  }

  incrementar() {
    const accion = new contador.IncrementarAction();
    this.store.dispatch(accion);
  }

  decrementar() {
    const accion = new contador.DecrementarAction();
    this.store.dispatch(accion);
  }
}
