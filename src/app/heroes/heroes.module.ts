import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// COMPONTES
import { heroesComponent } from './heroe/heroes.component';
import { ListadoComponent } from './listado/listado.component';



@NgModule({
  declarations: [
    heroesComponent,
    ListadoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ListadoComponent,
    heroesComponent
  ]
})
export class HeroesModule { }
