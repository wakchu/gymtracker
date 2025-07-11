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
  IonGrid,
  IonRow,
  IonCol,
  IonIcon,
  IonList,
  IonItem,
  IonLabel,
  IonBadge,
  IonButton,
  IonProgressBar
} from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';

interface PersonalRecord {
  exercise: string;
  weight: number;
  reps: number;
  date: Date;
  icon: string;
  color: string;
}

interface FitnessGoal {
  title: string;
  description: string;
  current: number;
  target: number;
  icon: string;
  color: string;
  progress: number;
}

interface Achievement {
  title: string;
  description: string;
  icon: string;
  color: string;
}

@Component({
  selector: 'app-progress',
  templateUrl: 'progress.page.html',
  styleUrls: ['progress.page.scss'],
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
    IonGrid,
    IonRow,
    IonCol,
    IonIcon,
    IonList,
    IonItem,
    IonLabel,
    IonBadge,
    IonButton,
    IonProgressBar,
    CommonModule
  ],
})
export class ProgressPage {
  weeklyWorkouts: number = 4;
  weeklyMinutes: number = 180;
  weeklyCalories: number = 1200;
  weeklyPRs: number = 2;

  personalRecords: PersonalRecord[] = [
    {
      exercise: 'Bench Press',
      weight: 100,
      reps: 5,
      date: new Date(),
      icon: 'barbell',
      color: 'primary'
    },
    {
      exercise: 'Squats',
      weight: 120,
      reps: 8,
      date: new Date(Date.now() - 86400000),
      icon: 'body',
      color: 'secondary'
    },
    {
      exercise: 'Deadlift',
      weight: 150,
      reps: 3,
      date: new Date(Date.now() - 172800000),
      icon: 'barbell',
      color: 'danger'
    },
    {
      exercise: 'Pull-ups',
      weight: 0,
      reps: 12,
      date: new Date(Date.now() - 259200000),
      icon: 'body',
      color: 'tertiary'
    }
  ];

  fitnessGoals: FitnessGoal[] = [
    {
      title: 'Bench Press',
      description: 'Reach 120kg for 5 reps',
      current: 100,
      target: 120,
      icon: 'barbell',
      color: 'primary',
      progress: 0.83
    },
    {
      title: 'Workout Frequency',
      description: 'Workout 5 times per week',
      current: 4,
      target: 5,
      icon: 'fitness',
      color: 'success',
      progress: 0.8
    },
    {
      title: 'Running Distance',
      description: 'Run 10km in under 45 minutes',
      current: 8,
      target: 10,
      icon: 'body',
      color: 'warning',
      progress: 0.6
    },
    {
      title: 'Weight Loss',
      description: 'Lose 5kg',
      current: 3,
      target: 5,
      icon: 'trending-down',
      color: 'danger',
      progress: 0.6
    }
  ];

  achievements: Achievement[] = [
    {
      title: 'First Workout',
      description: 'Completed your first workout',
      icon: 'trophy',
      color: 'success'
    },
    {
      title: 'Consistency',
      description: 'Worked out 7 days in a row',
      icon: 'calendar',
      color: 'primary'
    },
    {
      title: 'Strength Gains',
      description: 'Increased bench press by 20kg',
      icon: 'trending-up',
      color: 'warning'
    },
    {
      title: 'Endurance',
      description: 'Ran 5km without stopping',
      icon: 'body',
      color: 'success'
    }
  ];

  constructor() {}

  addPR() {
    // TODO: Implement add personal record functionality
    console.log('Add new personal record');
  }

  addGoal() {
    // TODO: Implement add goal functionality
    console.log('Add new fitness goal');
  }
} 