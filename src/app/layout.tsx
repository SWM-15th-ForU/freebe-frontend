import type { Metadata } from "next";
import localFont from "next/font/local";
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import "@mantine/carousel/styles.css";
import "@mantine/notifications/styles.css";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";

const pretendard = localFont({
  src: "./fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

declare global {
  interface Window {
    Kakao: any;
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body
        className={pretendard.className}
        style={{ overflowX: "hidden", overflowY: "auto" }}
      >
        <div>
          <MantineProvider>
            <Notifications />
            {children}
          </MantineProvider>
        </div>
      </body>
    </html>
  );
}
