import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
  providers : [RouterLink]
})
export class Sidebar implements OnInit {
  mobileMenuOpen = false;
  
  constructor(public routerLink:RouterLink){

  }
  
  ngOnInit() {
    // console.log(this.routerLink.routerLink,"Hi")
  }

  toggleMobileMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }


}
