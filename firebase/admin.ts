import {cert, getApps, initializeApp} from 'firebase-admin/app';
import {getAuth} from "firebase-admin/auth";
import {getFirestore} from 'firebase-admin/firestore'
// Initializing application
const initFirebaseAdmin=()=>{
    // error func that Tires to get  access to firebase applications
    const apps=getApps();
    // This sees to it that only one instance of Firebase SDK is created 
    if(!apps.length){
        initializeApp({
            credential: cert({
                projectId:process.env.FIREBASE_PROJECT_ID,
                clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
                privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g,"\n")
            })
        })
    }
    return{
       auth:getAuth(),
       db:getFirestore()
    }
}

export const { auth,db } = initFirebaseAdmin();

// so we r initializing both the admin functionalities that allow use to perform some mutations on the server side