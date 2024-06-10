'use client';
import { addDoc, collection, Timestamp } from "firebase/firestore/lite";
import { firestore } from "../../utils/fireBaseConfig";

export const sendContactForm = async ({ name, email, message }) => {
    try {
        const ref = collection(firestore, "contact");
        await addDoc(ref, {
            name,
            email,
            message,
            sentAt: Timestamp.now().toDate(),
        });
        return 0;
    } catch (err) {
        console.log(err);
        return -1;
    }
};
