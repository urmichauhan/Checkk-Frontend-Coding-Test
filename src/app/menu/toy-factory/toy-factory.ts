import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

interface Lane {
  name: string;
  description: string;
  perHour: number;
  queue: number;
  progress: number;
  status: 'On track' | 'Delayed' | 'Catching up';
  // icon: string;
  color: string;
}

interface PriorityItem {
  child: string;
  country: string;
  wish: string;
  priority: 'Gold' | 'Silver' | 'Bronze';
  eta: string;
}


@Component({
  selector: 'app-toy-factory',
  imports: [CommonModule,MatIconModule],
  templateUrl: './toy-factory.html',
  styleUrl: './toy-factory.css',
})
export class ToyFactory {

 lanes: Lane[] = [
    {
      name: 'Wooden toys',
      description: 'Trains, blocks & rocking horses',
      perHour: 320,
      queue: 58,
      progress: 76,
      status: 'On track',
      color: 'linear-gradient(135deg,#f97316,#fb923c)',
    },
    {
      name: 'Electronics',
      description: 'Game consoles & robots',
      perHour: 210,
      queue: 93,
      progress: 62,
      status: 'Catching up',
      color: 'linear-gradient(135deg,#22c55e,#4ade80)',
    },
    {
      name: 'Cuddly friends',
      description: 'Teddy bears & plush animals',
      perHour: 480,
      queue: 34,
      progress: 89,
      status: 'On track',
      color: 'linear-gradient(135deg,#ec4899,#f472b6)',
    },
    {
      name: 'Custom magic',
      description: 'Personalised wishes & rare toys',
      perHour: 90,
      queue: 17,
      progress: 41,
      status: 'Delayed',
      color: 'linear-gradient(135deg,#a855f7,#c4b5fd)',
    },
  ];

  priorityQueue: PriorityItem[] = [
    {
      child: 'Mia',
      country: 'Canada',
      wish: 'Limited edition robot dog',
      priority: 'Gold',
      eta: '14 min',
    },
    {
      child: 'Arjun',
      country: 'India',
      wish: 'Cricket kit with name on bat',
      priority: 'Gold',
      eta: '21 min',
    },
    {
      child: 'Luca',
      country: 'Italy',
      wish: 'Hand-painted wooden train',
      priority: 'Silver',
      eta: '32 min',
    },
    {
      child: 'Sofia',
      country: 'Brazil',
      wish: 'Glow-in-the-dark unicorn',
      priority: 'Bronze',
      eta: '47 min',
    },
  ];

  // just for *ngFor count – values unused
  snowflakes = Array.from({ length: 12 });

  // helper for choosing icon name
  iconForLane(name: string): string {
    switch (name) {
      case 'Wooden toys':
        return 'toys'; // Material icon name[web:68][web:70]
      case 'Electronics':
        return 'sports_esports';
      case 'Cuddly friends':
        return 'child_care';
      case 'Custom magic':
        return 'auto_awesome';
      default:
        return 'inventory_2';
    }
  }
}
