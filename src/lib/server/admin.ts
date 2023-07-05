import pkg from "firebase-admin";
import {
  FB_PROJECT_ID,
  FB_CLIENT_EMAIL,
  FB_PRIVATE_KEY,
  FB_SERVICE_ACCOUNT,
} from "$env/static/private";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

try {
  pkg.initializeApp({
    credential: pkg.credential.cert({
      projectId: FB_PROJECT_ID,
      clientEmail: FB_CLIENT_EMAIL,
      privateKey: FB_PRIVATE_KEY,
    }),
  });
} catch (err: any) {
  if (!/already exists/u.test(err.message)) {
    console.error("Firebase Admin Error: ", err.stack);
  }
}

export const adminDB = getFirestore();
export const adminAuth = getAuth();