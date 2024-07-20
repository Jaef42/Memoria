import { Component, NgModule, OnInit } from '@angular/core';
import { PerroapiService } from './services/perroapi.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgFor } from '@angular/common';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { MemoriaComponent } from './memoria/memoria.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ HttpClientModule, NgFor, CommonModule, RouterLink, RouterOutlet, MemoriaComponent],
  providers:[PerroapiService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  perros: any[]=[];
  today: Date = new Date();
  flippedCards: any[]= [];
  matchedCards: Set<any> = new Set();
  totalPares: number = 20;
 
  reinicio(): void{
    this.flippedCards = [];
    this.matchedCards.clear();
    this.perros = [];
   /*  this.ngOnInit(); */

  }
}
