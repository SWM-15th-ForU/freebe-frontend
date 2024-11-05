import type { Metadata } from "next";
import localFont from "next/font/local";
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import "@mantine/carousel/styles.css";
import "@mantine/notifications/styles.css";
import "./globals.css";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
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
        <meta
          name="naver-site-verification"
          content="2a75aaab03248bdbc9a65fec4c3c98687d161403"
        />
        <ColorSchemeScript />
      </head>
      <body
        className={pretendard.className}
        style={{ overflowX: "hidden", overflowY: "hidden" }}
      >
        <GoogleTagManager
          gtmId={process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID || ""}
        />
        <GoogleAnalytics
          gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID || ""}
        />
        <MantineProvider
          theme={{
            colors: {
              customPrimary: [
                "#FFFFF",
                "#E4F2FF",
                "#C8E4FF",
                "#91C9FF",
                "#49A2FF",
                "#258EFF",
                "#007AFF",
                "#096FDD",
                "#0E69CC",
                "#1263BA",
              ],
            },

            primaryColor: "customPrimary",
          }}
        >
          <Notifications />
          <div style={{ overflowY: "scroll", height: "100vh" }}>{children}</div>
        </MantineProvider>
      </body>
    </html>
  );
}
