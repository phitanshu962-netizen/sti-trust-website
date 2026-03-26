# Firebase Integration for Next.js

This project has been initialized with Firebase for Next.js applications.

## Setup Instructions

### ✅ Firebase Project Created

Your Firebase project "STITrustWebsite" has been successfully created and configured! The Firebase configuration is already set up with the correct credentials.

### Project Structure

The Firebase setup is now properly organized in the `hosting/` directory, which contains your Next.js application:

```
hosting/
├── firebase.config.js     # Firebase configuration
├── firebase.js           # Firebase initialization
├── components/           # React components
│   └── FirebaseExample.tsx
├── app/                  # Next.js app directory
│   └── api/
│       └── firebase-test/
│           └── route.ts  # Test API endpoint
└── package.json          # Dependencies including Firebase
```

### Project Details

- **Project ID**: stitrust-website
- **Project Name**: STITrustWebsite
- **Web App ID**: 1:831123913215:web:198cbfc3830e623c318fca
- **API Key**: AIzaSyCQ18FmA8Zr7kobE94S4yvU0PvQXSZ8NSw
- **Auth Domain**: stitrust-website.firebaseapp.com
- **Storage Bucket**: stitrust-website.firebasestorage.app

### Firebase Console

Access your Firebase project at: https://console.firebase.google.com/project/stitrust-website/overview



## Available Firebase Services

The following Firebase services are initialized and exported:

- **Authentication** (`auth`): User authentication
- **Firestore** (`db`): NoSQL database
- **Storage** (`storage`): File storage

## Usage Examples

### Authentication

```javascript
import { auth } from '../firebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';

// Sign in with email and password
const signIn = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    console.log('User signed in:', userCredential.user);
  } catch (error) {
    console.error('Sign in error:', error);
  }
};
```

### Firestore

```javascript
import { db } from '../firebase';
import { collection, addDoc, getDocs } from 'firebase/firestore';

// Add a document
const addDocument = async (collectionName, data) => {
  try {
    const docRef = await addDoc(collection(db, collectionName), data);
    console.log('Document written with ID:', docRef.id);
  } catch (error) {
    console.error('Error adding document:', error);
  }
};
```

### Storage

```javascript
import { storage } from '../firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

// Upload file
const uploadFile = async (file, path) => {
  try {
    const storageRef = ref(storage, path);
    const snapshot = await uploadBytes(storageRef, file);
    const downloadURL = await getDownloadURL(snapshot.ref);
    return downloadURL;
  } catch (error) {
    console.error('Upload error:', error);
  }
};
```

## Testing

A test API endpoint is available at `/api/firebase-test` to verify Firebase initialization.

## Next Steps

1. Configure Firebase Authentication methods in the Firebase Console
2. Set up Firestore rules and indexes
3. Configure Storage security rules
4. Implement your application logic using the Firebase services