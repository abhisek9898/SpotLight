# SpotLight Mobile Application

SpotLight is a mobile application built using **React Native, TypeScript, and Expo**. The app provides a seamless authentication experience, bookmarking functionality, and an intuitive user interface.

## Features
- **Authentication**: Phone number OTP-based authentication.
- **Navigation**: Smooth navigation using `expo-router`.
- **Bookmarks**: Users can save and access their favorite items.
- **Responsive UI**: Designed for various screen sizes.
- **Custom Theming**: Using a centralized theme for consistent styling.

## Tech Stack
- **React Native**: For building the cross-platform mobile application.
- **TypeScript**: Ensures type safety and better code management.
- **Expo**: Simplifies development and deployment.
- **React Navigation**: Manages in-app navigation.
- **AsyncStorage**: Handles local storage for user preferences and bookmarks.
- **Expo Router**: File-based routing for better structure.

## Installation & Setup
### Prerequisites
Ensure you have the following installed:
- Node.js (LTS recommended)
- Expo CLI
- Android Studio / Xcode (for emulators)

### Steps
1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/spotlight-app.git
   cd spotlight-app
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the Expo development server:
   ```sh
   npx expo start
   ```
4. Scan the QR code using the Expo Go app (Android/iOS) to test the app.

## Project Structure
```
spotlight-app/
│-- assets/                # Images and icons
│-- constants/             # Theme and global styles
│-- components/            # Reusable components
│-- screens/               # App screens (Login, Home, Bookmarks)
│-- styles/                # Stylesheets
│-- navigation/            # Routing setup
│-- App.tsx                # Entry point
│-- package.json           # Dependencies
│-- tsconfig.json          # TypeScript config
```

## Screenshots
(Add screenshots here if available)

## Contributing
1. Fork the repository.
2. Create a new branch (`feature-name`).
3. Commit your changes and push the branch.
4. Open a pull request.

## License
MIT License © 2025 SpotLight App

