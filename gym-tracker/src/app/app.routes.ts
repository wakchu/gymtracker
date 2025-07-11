import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'workout',
    loadComponent: () => import('./workout/workout.page').then((m) => m.WorkoutPage),
  },
  {
    path: 'exercises',
    loadComponent: () => import('./exercises/exercises.page').then((m) => m.ExercisesPage),
  },
  {
    path: 'progress',
    loadComponent: () => import('./progress/progress.page').then((m) => m.ProgressPage),
  },
  {
    path: 'profile',
    loadComponent: () => import('./profile/profile.page').then((m) => m.ProfilePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];