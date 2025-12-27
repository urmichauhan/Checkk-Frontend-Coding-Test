import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Sidebar } from './layout/sidebar/sidebar';
import { Topbar } from './layout/topbar/topbar';
// import { LettersList } from './menu/letterslist/letterslist';
// import { ToyFactory } from './menu/toy-factory/toy-factory';
// import { Legal } from './menu/legal/legal';
// import { Disconnect } from './menu/disconnect/disconnect';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Topbar,
    Sidebar
    
  ],
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('frontend-santa-inc');
}
