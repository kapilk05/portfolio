// Minimal placeholder for Toast UI components
import React from "react";

export function ToastProvider({ children }) {
  return <div>{children}</div>;
}

export function Toast({ children }) {
  return <div>{children}</div>;
}

export function ToastTitle({ children }) {
  return <div>{children}</div>;
}

export function ToastDescription({ children }) {
  return <div>{children}</div>;
}

export function ToastClose() {
  return <button>Close</button>;
}

export function ToastViewport() {
  return <div style={{ display: 'none' }} />;
}
