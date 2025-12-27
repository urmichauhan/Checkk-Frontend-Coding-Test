import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [RouterModule,RouterLink],
  templateUrl: './topbar.html',
  styleUrl: './topbar.css',
  providers : [RouterLink]
})
export class Topbar {

  mobileMenuOpen = false;

  toggleMobileMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }
}
