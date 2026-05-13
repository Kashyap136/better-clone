import { Inter } from "next/font/google";
import "./globals.css";
import { metadata } from './metadata';
import StyledComponentsRegistry from './registry';
import { SpeedInsights } from '@vercel/speed-insights/next';

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StyledComponentsRegistry>
          {children}
        </StyledComponentsRegistry>
        <SpeedInsights />
      </body>
    </html>
  );
}
