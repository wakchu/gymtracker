import { Component } from '@angular/core';
import { 
  IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonContent,
  IonSearchbar,
  IonSegment,
  IonSegmentButton,
  IonLabel,
  IonList,
  IonItem,
  IonAvatar,
  IonIcon,
  IonChip,
  IonModal,
  IonButtons,
  IonButton,
  IonGrid,
  IonRow,
  IonCol
} from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Exercise {
  id: string;
  name: string;
  description: string;
  category: string;
  icon: string;
  color: string;
  equipment?: string;
  muscleGroup: string;
  difficulty: string;
  type: string;
  instructions: string[];
}

@Component({
  selector: 'app-exercises',
  templateUrl: 'exercises.page.html',
  styleUrls: ['exercises.page.scss'],
  imports: [
    IonHeader, 
    IonToolbar, 
    IonTitle, 
    IonContent,
    IonSearchbar,
    IonSegment,
    IonSegmentButton,
    IonLabel,
    IonList,
    IonItem,
    IonAvatar,
    IonIcon,
    IonChip,
    IonModal,
    IonButtons,
    IonButton,
    IonGrid,
    IonRow,
    IonCol,
    CommonModule,
    FormsModule
  ],
})
export class ExercisesPage {
  searchTerm: string = '';
  selectedCategory: string = 'all';
  isModalOpen: boolean = false;
  selectedExercise: Exercise | null = null;
  
  allExercises: Exercise[] = [
    {
      id: '1',
      name: 'Bench Press',
      description: 'Classic chest exercise using a barbell',
      category: 'strength',
      icon: 'barbell',
      color: 'primary',
      equipment: 'Barbell, Bench',
      muscleGroup: 'Chest, Triceps',
      difficulty: 'Intermediate',
      type: 'Compound',
      instructions: [
        'Lie on the bench with feet flat on the ground',
        'Grip the barbell slightly wider than shoulder width',
        'Lower the bar to your chest',
        'Press the bar back up to the starting position'
      ]
    },
    {
      id: '2',
      name: 'Squats',
      description: 'Fundamental lower body exercise',
      category: 'strength',
      icon: 'body',
      color: 'secondary',
      equipment: 'Barbell',
      muscleGroup: 'Quadriceps, Glutes',
      difficulty: 'Beginner',
      type: 'Compound',
      instructions: [
        'Stand with feet shoulder-width apart',
        'Hold barbell on your upper back',
        'Lower your body by bending knees',
        'Keep chest up and back straight',
        'Return to starting position'
      ]
    },
    {
      id: '3',
      name: 'Pull-ups',
      description: 'Upper body pulling exercise',
      category: 'strength',
      icon: 'body',
      color: 'tertiary',
      equipment: 'Pull-up Bar',
      muscleGroup: 'Back, Biceps',
      difficulty: 'Intermediate',
      type: 'Compound',
      instructions: [
        'Hang from the pull-up bar',
        'Pull your body up until chin over bar',
        'Lower yourself back down',
        'Repeat for desired reps'
      ]
    },
    {
      id: '4',
      name: 'Running',
      description: 'Cardiovascular exercise',
      category: 'cardio',
      icon: 'body',
      color: 'success',
      equipment: 'None',
      muscleGroup: 'Full Body',
      difficulty: 'Beginner',
      type: 'Cardio',
      instructions: [
        'Start with a light warm-up',
        'Maintain good posture',
        'Land on mid-foot',
        'Keep a steady pace'
      ]
    },
    {
      id: '5',
      name: 'Stretching',
      description: 'Improve flexibility and range of motion',
      category: 'flexibility',
      icon: 'body',
      color: 'warning',
      equipment: 'None',
      muscleGroup: 'Full Body',
      difficulty: 'Beginner',
      type: 'Flexibility',
      instructions: [
        'Hold each stretch for 15-30 seconds',
        'Don\'t bounce',
        'Breathe deeply',
        'Don\'t stretch to the point of pain'
      ]
    },
    {
      id: '6',
      name: 'Deadlift',
      description: 'Full body strength exercise',
      category: 'strength',
      icon: 'barbell',
      color: 'danger',
      equipment: 'Barbell',
      muscleGroup: 'Back, Legs',
      difficulty: 'Advanced',
      type: 'Compound',
      instructions: [
        'Stand with feet hip-width apart',
        'Bend at hips and knees',
        'Grip the bar with both hands',
        'Lift the bar by extending hips and knees',
        'Return the bar to the ground'
      ]
    }
  ];
  
  filteredExercises: Exercise[] = [...this.allExercises];

  constructor() {}

  filterExercises() {
    this.filteredExercises = this.allExercises.filter(exercise => {
      const matchesSearch = exercise.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
                          exercise.description.toLowerCase().includes(this.searchTerm.toLowerCase());
      const matchesCategory = this.selectedCategory === 'all' || exercise.category === this.selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }

  viewExercise(exercise: Exercise) {
    this.selectedExercise = exercise;
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
    this.selectedExercise = null;
  }

  addToWorkout(exercise: Exercise) {
    // TODO: Implement add to workout functionality
    console.log('Adding exercise to workout:', exercise.name);
    this.closeModal();
  }

  getCategoryColor(category: string): string {
    switch (category) {
      case 'strength':
        return 'primary';
      case 'cardio':
        return 'success';
      case 'flexibility':
        return 'warning';
      default:
        return 'medium';
    }
  }
} 