import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-disconnect',
  imports: [CommonModule],
  templateUrl: './disconnect.html',
  styleUrl: './disconnect.css',
})
export class Disconnect {
  // just to render many snowflakes
  flakes = Array.from({ length: 60 });

 
}
