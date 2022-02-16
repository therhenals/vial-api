import { Module, Global } from '@nestjs/common';
import { FirebaseAuthService } from './auth/auth.service';
import * as admin from 'firebase-admin';
import { FirebaseStorageService } from './storage/storage.service';

@Global()
@Module({
  providers: [FirebaseAuthService, FirebaseStorageService],
  exports: [FirebaseAuthService, FirebaseStorageService],
})
export class FirebaseModule {
  constructor() {
    const serviceAccount = require('./token.json');
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
      storageBucket: process.env.FIREBASE_STORAGE,
    });
  }
}
