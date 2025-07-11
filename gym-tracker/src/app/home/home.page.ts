import { Component } from '@angular/core';
import { 
  IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonButton,
  IonIcon,
  IonGrid,
  IonRow,
  IonCol,
  IonList,
  IonItem,
  IonLabel,
  IonBadge
} from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';
import { DatePipe } from '@angular/common';

interface Workout {
  name: string;
  date: Date;
  duration: number;
  exercises: any[];
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [
    IonHeader, 
    IonToolbar, 
    IonTitle, 
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    IonButton,
    IonIcon,
    IonGrid,
    IonRow,
    IonCol,
    IonList,
    IonItem,
    IonLabel,
    IonBadge,
    RouterLink,
    DatePipe
  ],
})
export class HomePage {
  thisWeekWorkouts: number = 3;
  totalMinutes: number = 120;
  recentWorkouts: Workout[] = [
    {
      name: 'Upper Body',
      date: new Date(),
      duration: 45,
      exercises: ['Bench Press', 'Pull-ups', 'Shoulder Press']
    },
    {
      name: 'Leg Day',
      date: new Date(Date.now() - 86400000), // Yesterday
      duration: 60,
      exercises: ['Squats', 'Deadlifts', 'Lunges']
    }
  ];

  constructor() {}
}
