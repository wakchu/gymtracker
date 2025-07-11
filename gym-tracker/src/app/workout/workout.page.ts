import { Component, OnInit, OnDestroy } from '@angular/core';
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
import { CommonModule } from '@angular/common';

interface Exercise {
  name: string;
  description: string;
  icon: string;
  sets: number;
  reps: number;
  weight: number;
  completed: boolean;
}

interface CompletedWorkout {
  name: string;
  date: Date;
  duration: number;
  exercises: Exercise[];
}

@Component({
  selector: 'app-workout',
  templateUrl: 'workout.page.html',
  styleUrls: ['workout.page.scss'],
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
    CommonModule
  ],
})
export class WorkoutPage implements OnInit, OnDestroy {
  isWorkoutActive: boolean = false;
  workoutTimer: number = 0;
  timerInterval: any;
  currentExerciseIndex: number = 0;
  currentSets: number = 3;
  currentReps: number = 10;
  currentWeight: number = 50;
  
  workoutExercises: Exercise[] = [];
  completedWorkouts: CompletedWorkout[] = [];
  
  get currentExercise(): Exercise | null {
    return this.workoutExercises[this.currentExerciseIndex] || null;
  }

  constructor() {}

  ngOnInit() {
    // Load sample data
    this.loadSampleData();
  }

  ngOnDestroy() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
    }
  }

  startWorkout(type: string) {
    this.isWorkoutActive = true;
    this.workoutTimer = 0;
    this.currentExerciseIndex = 0;
    
    // Start timer
    this.timerInterval = setInterval(() => {
      this.workoutTimer++;
    }, 1000);
    
    // Load sample exercises based on workout type
    this.loadExercisesForType(type);
  }

  stopWorkout() {
    this.isWorkoutActive = false;
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
    }
    
    // Save completed workout
    if (this.workoutExercises.length > 0) {
      const completedWorkout: CompletedWorkout = {
        name: this.getWorkoutName(),
        date: new Date(),
        duration: Math.floor(this.workoutTimer / 60),
        exercises: [...this.workoutExercises]
      };
      this.completedWorkouts.unshift(completedWorkout);
    }
    
    // Reset
    this.workoutExercises = [];
    this.currentExerciseIndex = 0;
  }

  selectExercise(index: number) {
    this.currentExerciseIndex = index;
    if (this.currentExercise) {
      this.currentSets = this.currentExercise.sets;
      this.currentReps = this.currentExercise.reps;
      this.currentWeight = this.currentExercise.weight;
    }
  }

  completeSet() {
    if (this.currentExercise) {
      this.currentExercise.completed = true;
      this.currentExercise.sets = this.currentSets;
      this.currentExercise.reps = this.currentReps;
      this.currentExercise.weight = this.currentWeight;
      
      // Move to next exercise
      if (this.currentExerciseIndex < this.workoutExercises.length - 1) {
        this.currentExerciseIndex++;
        this.selectExercise(this.currentExerciseIndex);
      }
    }
  }

  addExercise() {
    // For now, add a sample exercise
    const newExercise: Exercise = {
      name: 'New Exercise',
      description: 'Add your exercise description here',
      icon: 'barbell',
      sets: 3,
      reps: 10,
      weight: 50,
      completed: false
    };
    this.workoutExercises.push(newExercise);
  }

  incrementSets() {
    this.currentSets++;
  }

  decrementSets() {
    if (this.currentSets > 1) {
      this.currentSets--;
    }
  }

  incrementReps() {
    this.currentReps++;
  }

  decrementReps() {
    if (this.currentReps > 1) {
      this.currentReps--;
    }
  }

  incrementWeight() {
    this.currentWeight += 2.5;
  }

  decrementWeight() {
    if (this.currentWeight > 2.5) {
      this.currentWeight -= 2.5;
    }
  }

  formatTime(seconds: number): string {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  }

  private loadExercisesForType(type: string) {
    switch (type) {
      case 'strength':
        this.workoutExercises = [
          {
            name: 'Bench Press',
            description: 'Lie on bench, lower bar to chest, press up',
            icon: 'barbell',
            sets: 3,
            reps: 8,
            weight: 80,
            completed: false
          },
          {
            name: 'Squats',
            description: 'Stand with feet shoulder-width, lower body',
            icon: 'body',
            sets: 3,
            reps: 10,
            weight: 100,
            completed: false
          },
          {
            name: 'Pull-ups',
            description: 'Hang from bar, pull body up',
            icon: 'body',
            sets: 3,
            reps: 8,
            weight: 0,
            completed: false
          }
        ];
        break;
      case 'cardio':
        this.workoutExercises = [
          {
            name: 'Running',
            description: 'Jog at moderate pace',
            icon: 'body',
            sets: 1,
            reps: 20,
            weight: 0,
            completed: false
          }
        ];
        break;
      default:
        this.workoutExercises = [
          {
            name: 'Stretching',
            description: 'Gentle stretching exercises',
            icon: 'body',
            sets: 1,
            reps: 10,
            weight: 0,
            completed: false
          }
        ];
    }
  }

  private getWorkoutName(): string {
    const completedCount = this.workoutExercises.filter(e => e.completed).length;
    if (completedCount === 0) return 'Quick Workout';
    if (completedCount <= 2) return 'Short Workout';
    if (completedCount <= 5) return 'Medium Workout';
    return 'Full Workout';
  }

  private loadSampleData() {
    this.completedWorkouts = [
      {
        name: 'Upper Body',
        date: new Date(Date.now() - 86400000),
        duration: 45,
        exercises: []
      },
      {
        name: 'Leg Day',
        date: new Date(Date.now() - 172800000),
        duration: 60,
        exercises: []
      }
    ];
  }
} 