import { Component } from '@angular/core';
import { 
  IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonGrid,
  IonRow,
  IonCol,
  IonIcon,
  IonList,
  IonItem,
  IonLabel,
  IonButton,
  IonAvatar,
  IonChip
} from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';

interface UserProfile {
  name: string;
  email: string;
  age: number;
  weight: number;
  height: number;
  level: string;
}

@Component({
  selector: 'app-profile',
  templateUrl: 'profile.page.html',
  styleUrls: ['profile.page.scss'],
  imports: [
    IonHeader, 
    IonToolbar, 
    IonTitle, 
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonGrid,
    IonRow,
    IonCol,
    IonIcon,
    IonList,
    IonItem,
    IonLabel,
    IonButton,
    IonAvatar,
    IonChip,
    CommonModule
  ],
})
export class ProfilePage {
  userProfile: UserProfile = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    age: 28,
    weight: 75,
    height: 180,
    level: 'Intermediate'
  };

  totalWorkouts: number = 45;
  totalHours: number = 67;
  totalCalories: number = 12500;
  personalRecords: number = 8;

  constructor() {}

  editProfile() {
    // TODO: Implement edit profile functionality
    console.log('Edit profile');
  }

  openNotifications() {
    // TODO: Implement notifications settings
    console.log('Open notifications settings');
  }

  openUnits() {
    // TODO: Implement units settings
    console.log('Open units settings');
  }

  openPrivacy() {
    // TODO: Implement privacy settings
    console.log('Open privacy settings');
  }

  openBackup() {
    // TODO: Implement backup functionality
    console.log('Open backup settings');
  }

  openHelp() {
    // TODO: Implement help functionality
    console.log('Open help');
  }

  openAbout() {
    // TODO: Implement about functionality
    console.log('Open about');
  }

  openFeedback() {
    // TODO: Implement feedback functionality
    console.log('Open feedback');
  }

  logout() {
    // TODO: Implement logout functionality
    console.log('Logout');
  }
} 