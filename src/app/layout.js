import "./globals.css";
import { Inter } from "next/font/google";
import { AppProvider } from "@/contexts/AppContext";
import ThemeProvider from "@/contexts/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Elite Salon",
  description: "Your premier destination for professional hair care and styling services.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppProvider>
          <ThemeProvider>
            {children}
          </ThemeProvider>
        </AppProvider>
      </body>
    </html>
  );
} 