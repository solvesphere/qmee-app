"use client";
import { useEffect } from "react";
import {
  requestNotificationPermission,
  listenForNotifications,
} from "@/services/notifications";
import { registerServiceWorker } from "@/services/serviceWorker";

const Layout = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    registerServiceWorker(); // Register Service Worker
    requestNotificationPermission(); // Ask for Notification Permission
    listenForNotifications(); // Start Listening for Notifications
  }, []);

  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};

export default Layout;
