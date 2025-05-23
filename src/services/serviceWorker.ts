export const registerServiceWorker = () => {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker
      .register("/firebase-messaging-sw.js")
      .then((registration) =>
        console.log("Service Worker registered successfully: ", registration)
      )
      .catch((error) =>
        console.error("Service Worker registration failed:", error)
      );
  }
};
