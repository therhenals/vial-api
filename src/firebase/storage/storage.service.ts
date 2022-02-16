import { Injectable } from '@nestjs/common';
import { storage } from 'firebase-admin';

@Injectable()
export class FirebaseStorageService {
  async upload(path: string, base64: string) {
    try {
      const mimeType = 'image/jpg';
      const imageBuffer = Buffer.from(
        base64.replace('data:image/jpeg;base64,', ''),
        'base64',
      );
      const bucket = storage().bucket();
      const file = bucket.file(path);
      await file.save(imageBuffer, {
        public: true,
        metadata: { contentType: mimeType },
      });
      return file.publicUrl();
    } catch (error) {
      console.log(error);
    }
  }

  async changeName(path: string, newPath: string) {
    try {
      const bucket = storage().bucket();
      const file = bucket.file(path);
      await file.move(newPath);
    } catch (error) {
      console.log(error);
    }
  }

  async delete(path: string) {
    try {
      const bucket = storage().bucket();
      const file = bucket.file(path);
      await file.delete();
    } catch (error) {
      console.log(error);
    }
  }
}
