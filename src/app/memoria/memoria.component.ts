import { Component, OnInit } from '@angular/core';
import { PerroapiService } from '../services/perroapi.service';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-memoria',
  standalone: true,
  imports: [NgFor, RouterLink],
  providers:[PerroapiService],
  templateUrl: './memoria.component.html',
  styleUrl: './memoria.component.css'
})
export class MemoriaComponent implements OnInit {
  perros: any[]=[];
  today: Date = new Date();
  flippedCards: any[]= [];
  matchedCards: Set<any> = new Set();
  totalPares: number = 20;

  constructor(private perroServicio: PerroapiService){}
  ngOnInit(): void {
    this.perroServicio.obtenerImagenes().subscribe(datos => {
      this.perros=datos.message;
      this.totalPares = this.perros.length /1 ;
    })
  }
  trackByIndex(index: number, item: any): number{
    return index;
  }

  toggleCard(event: any, perro: any): void{
    if(this.matchedCards.has(perro))
      return;
    event.currentTarget.classList.toggle('flipped');
    this.flippedCards.push({element: event.currentTarget, perro});

    if(this.flippedCards.length===2){
      this.checkMatch();
    }
    
  }
  checkMatch(): void {
    const [card1, card2] = this.flippedCards;
    if(card1.perro === card2.perro){
      this.matchedCards.add(card1.perro);
      this.matchedCards.add(card2.perro);

      if (this.matchedCards.size===this.totalPares)
      { alert('¡Felicidades, has ganado!')}
    }else{
      setTimeout(() => {
        card1.element.classList.remove('flipped');
        card2.element.classList.remove('flipped');
      }, 5000);
    }
    this.flippedCards = [];
  }
  reinicio(): void{
    this.flippedCards = [];
    this.matchedCards.clear();
    this.perros = [];
    this.ngOnInit();

  }

  


}
