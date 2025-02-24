import { getToken, onMessage } from "firebase/messaging";
import { messaging } from "@/config/firebase";

const VAPID_KEY = process.env.NEXT_PUBLIC_FIREBASE_VAPID_KEY; // Ensure this is set in .env

// Ensure this only runs in the client-side environment
if (typeof window !== "undefined" && messaging) {
  onMessage(messaging, (payload) => {
    console.log("Foreground Notification received:", payload);
  });
}

// Request Notification Permission & Get Token
export const requestNotificationPermission = async (): Promise<
  string | null
> => {
  if (typeof window === "undefined") return null; // Prevents SSR issues
  if (!messaging) {
    console.warn("Firebase Messaging is not initialized");
    return null;
  }

  try {
    const permission = await Notification.requestPermission();
    if (permission !== "granted") {
      console.warn("Notification permission denied");
      return null;
    }

    if (!VAPID_KEY) {
      console.error("VAPID Key is missing. Ensure it's set in the .env file.");
      return null;
    }

    const token = await getToken(messaging, { vapidKey: VAPID_KEY });
    console.log("Notification Token:", token);
    return token;
  } catch (error) {
    console.error("Error getting notification token:", error);
    return null;
  }
};

// Listen for Incoming Notifications
export const listenForNotifications = () => {
  if (typeof window === "undefined" || !messaging) return; // Prevent SSR issues

  onMessage(messaging, (payload) => {
    console.log("Received Notification:", payload);
  });
};
