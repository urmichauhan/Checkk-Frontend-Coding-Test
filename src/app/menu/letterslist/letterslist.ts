import { Component } from '@angular/core';
import { LETTERS } from '../../core/mock-data';
import { CommonModule } from '@angular/common';

interface ChildRow {
  firstName: string;
  lastName: string;
  address: string;
  wishes: string;
  naughty: boolean;
}

@Component({
  selector: 'app-letters-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './letterslist.html',
  styleUrl: './letterslist.css',
})
export class LettersList {
  children: ChildRow[] = [
    { firstName: 'William', lastName: 'Shakespeare', address: 'England', wishes: 'Books', naughty: true },
    { firstName: 'JRR', lastName: 'Tolkien', address: 'England', wishes: 'Pen', naughty: false },
    { firstName: 'Charles', lastName: 'Dickens', address: 'England', wishes: 'Teddy Bear', naughty: false },
    { firstName: 'Agatha', lastName: 'Christie', address: 'England', wishes: 'Knife', naughty: true },
  ];

  extraChild: ChildRow = {
    firstName: 'JK',
    lastName: 'Rolling',
    address: 'England',
    wishes: 'Hat',
    naughty: false,
  };

  pages = Array.from({ length: 42 }, (_, i) => i + 1);
  currentPage = 18;


  goToPage(page: number): void {
    this.currentPage = page;
  }
}
