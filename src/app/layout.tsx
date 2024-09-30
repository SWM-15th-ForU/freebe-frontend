import type { Metadata } from "next";
import localFont from "next/font/local";
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import "@mantine/carousel/styles.css";
import "@mantine/notifications/styles.css";
import "./globals.css";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { GoogleAnalytics } from "@next/third-parties/google";
import { METADATA } from "@/constants/metadata";

const pretendard = localFont({
  src: "./fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
});

export const metadata: Metadata = {
  title: `${METADATA.title} | ${METADATA.sitename}`,
  description: METADATA.description,
  keywords: METADATA.keywords,
  icons: {
    icon: METADATA.favicon,
  },
  openGraph: {
    images: { url: METADATA.ogImage },
  },
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
        <GoogleAnalytics gaId="G-HB94Q4DZRD" />
        <ColorSchemeScript />
      </head>
      <body
        className={pretendard.className}
        style={{ overflowX: "hidden", overflowY: "hidden" }}
      >
        <MantineProvider>
          <Notifications />
          <div style={{ overflowY: "scroll", height: "100vh" }}>{children}</div>
        </MantineProvider>
      </body>
    </html>
  );
}
