import React from "react";

export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <html lang="en">
    <body>{children}</body>
  </html>
);

export default RootLayout;
