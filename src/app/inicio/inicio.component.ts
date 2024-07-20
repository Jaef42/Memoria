import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import anime from 'animejs';


@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [RouterLink,RouterOutlet, ],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent implements OnInit {

  ngOnInit(): void {
    if (typeof window !== 'undefined') {
      this.startAnimation();
    }
  }

  startAnimation(): void {
  anime.timeline({ loop: false })
      .add({
        targets: '.ml15 .word',
        scale: [14, 1],
        opacity: [0, 1],
        easing: "easeOutCirc",
        duration: 800,
        delay: (el, i) => 800 * i
      }).add({
        targets: '.ml15',
        opacity: 1,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000,
        /* complete: (anim) =>{
          style
          document.querySelectorAll('.ml15.word').forEach((el) => {
            el..opacity = '1'; 
          });
        } */
      });
  }

}
