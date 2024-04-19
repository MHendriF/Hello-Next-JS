import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import app from "./init";
import bcrypt from "bcrypt";

const firestore = getFirestore(app);

export async function retrieveData(collectionName: string) {
  const snapshot = await getDocs(collection(firestore, collectionName));
  //console.log(snapshot);
  const data = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return data;
}

export async function retrieveDataById(collectionName: string, id: string) {
  const snapshot = await getDoc(doc(firestore, collectionName, id));
  const data = snapshot.data();
  return data;
}

export async function signIn(userData: { email: string }) {
  const q = query(
    collection(firestore, "users"),
    where("email", "==", userData.email)
  );
  const snapshot = await getDocs(q);
  const data = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  if (data.length > 0) return data[0];
  return null;
}

export async function signUp(userData: {
  email: string;
  fullname: string;
  password: string;
  role?: string;
}) {
  const q = query(
    collection(firestore, "users"),
    where("email", "==", userData.email)
  );
  const snapshot = await getDocs(q);
  const data = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  if (data.length > 0) {
    return { status: false, statusCode: 400, message: "Email already exists" };
  } else {
    userData.password = await bcrypt.hash(userData.password, 10);
    userData.role = "member";
    try {
      await addDoc(collection(firestore, "users"), userData);
      return { status: true, statusCode: 200, message: "Register success" };
    } catch (error) {
      return { status: false, statusCode: 400, message: error };
    }
  }
}

export async function signInWithGoogle(userData: any, callback: any) {
  const q = query(
    collection(firestore, "users"),
    where("email", "==", userData.email)
  );
  const snapshot = await getDocs(q);
  const data: any = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  if (data.length > 0) {
    userData.role = data[0].role;
    await updateDoc(doc(firestore, "users", data[0].id), userData)
      .then(() => {
        callback({
          status: true,
          message: "Sign in with google success",
          data: userData,
        });
      })
      .catch((error) => {
        callback({ status: false, message: "Sign in with google failed" });
      });
  } else {
    userData.role = "member";
    await addDoc(collection(firestore, "users"), userData)
      .then(() => {
        callback({
          status: true,
          message: "Sign in with google success",
          data: userData,
        });
      })
      .catch((error) => {
        callback({ status: false, message: "Sign in with google failed" });
      });
  }
}
