# Gym Tracker - Ionic Angular App

A modern, feature-rich gym tracking mobile application built with Ionic and Angular.

## 🏋️ Features

### Core Functionality
- **Workout Tracking**: Start, pause, and complete workouts with real-time timer
- **Exercise Library**: Browse and search through a comprehensive exercise database
- **Progress Tracking**: Monitor your fitness journey with detailed statistics
- **Personal Records**: Track and celebrate your achievements
- **Goal Setting**: Set and monitor fitness goals with progress visualization
- **User Profile**: Manage personal information and app settings

### Key Features
- 📱 **Mobile-First Design**: Optimized for mobile devices with touch-friendly interface
- 🎨 **Modern UI**: Beautiful, intuitive design with smooth animations
- 📊 **Progress Analytics**: Visual charts and statistics to track your progress
- 🏆 **Achievement System**: Gamified experience with badges and milestones
- ⚙️ **Customizable Settings**: Personalize your experience with various options
- 🔍 **Smart Search**: Find exercises quickly with advanced filtering

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Ionic CLI

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd gym-tracker
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   ionic serve
   ```

4. **Open your browser**
   Navigate to `http://localhost:8100` to view the app

### Building for Production

```bash
# Build for web
ionic build

# Build for Android
ionic capacitor add android
ionic capacitor build android

# Build for iOS
ionic capacitor add ios
ionic capacitor build ios
```

## 📱 App Structure

### Pages
- **Home**: Dashboard with quick stats and recent workouts
- **Workout**: Active workout tracking with timer and exercise management
- **Exercises**: Exercise library with search and filtering
- **Progress**: Statistics, charts, and personal records
- **Profile**: User settings and personal information

### Components
- Modern, reusable Ionic components
- Responsive design for all screen sizes
- Touch-optimized interface
- Accessibility features

## 🎯 Key Features Explained

### Workout Tracking
- Start different types of workouts (Strength, Cardio, Flexibility)
- Real-time workout timer
- Track sets, reps, and weight for each exercise
- Complete workout history

### Exercise Library
- Comprehensive database of exercises
- Search and filter by category
- Detailed exercise instructions
- Equipment and difficulty information

### Progress Analytics
- Weekly and monthly statistics
- Personal record tracking
- Goal progress visualization
- Achievement system

### User Profile
- Personal information management
- App settings and preferences
- Data backup and sync options
- Privacy and security settings

## 🛠️ Technology Stack

- **Framework**: Angular 17 (Standalone Components)
- **UI Framework**: Ionic 7
- **Language**: TypeScript
- **Styling**: SCSS with CSS Custom Properties
- **Build Tool**: Angular CLI
- **Mobile**: Capacitor for native functionality

## 📁 Project Structure

```
src/
├── app/
│   ├── home/           # Home dashboard
│   ├── workout/        # Workout tracking
│   ├── exercises/      # Exercise library
│   ├── progress/       # Progress analytics
│   ├── profile/        # User profile
│   ├── app.component.ts
│   └── app.routes.ts
├── assets/             # Static assets
├── theme/              # Global styles
└── global.scss         # Global styles
```

## 🎨 Design System

### Colors
- **Primary**: Blue (#3880ff)
- **Secondary**: Purple (#3dc2ff)
- **Tertiary**: Pink (#f64f64)
- **Success**: Green (#2dd36f)
- **Warning**: Orange (#ffc409)
- **Danger**: Red (#eb445a)

### Typography
- **Headings**: Bold, clear hierarchy
- **Body**: Readable, optimized for mobile
- **Icons**: Ionicons for consistency

## 🔧 Development

### Adding New Features
1. Create new page components in `src/app/`
2. Update routing in `app.routes.ts`
3. Add necessary imports and dependencies
4. Style with SCSS following the design system

### Code Style
- Follow Angular style guide
- Use TypeScript strict mode
- Implement proper error handling
- Write meaningful component and method names

## 📱 Mobile Features

### Native Capabilities
- Camera access for progress photos
- GPS for outdoor workout tracking
- Push notifications for workout reminders
- Local storage for offline functionality

### Platform-Specific
- iOS: Native iOS design patterns
- Android: Material Design components
- Web: Progressive Web App features

## 🚀 Deployment

### Web Deployment
```bash
ionic build
# Deploy to your preferred hosting service
```

### Mobile App Stores
```bash
# Build for production
ionic capacitor build android
ionic capacitor build ios

# Follow platform-specific deployment guides
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- Ionic team for the amazing framework
- Angular team for the robust platform
- Fitness community for inspiration and feedback

---

**Built with ❤️ using Ionic and Angular** 