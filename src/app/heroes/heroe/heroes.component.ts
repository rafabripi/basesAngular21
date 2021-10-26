import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class heroesComponent {
  nombre: string = 'IronMan';
  edad:   number =  43;

  
  public get nombreCAP() : string {
    return this.nombre.toUpperCase();
  }
  

  cambiarHeroe():void{
    this.nombre = 'SpiderMan';
  }

  cambiarNombre():void{
    this.edad = 24;
  }


  obtenerNombre():  string {
    return `${this.nombre} - ${this.edad}`;
  }


}
