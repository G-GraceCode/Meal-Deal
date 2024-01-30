import { AppProvider } from "@/components/AppContext";
import { Roboto } from "next/font/google";
import Sidenav from "@/components/Sidenav";
import Navbar from "@/components/Navbar";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500", "700"] });

export const metadata = {
  title: "Meal Deal",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <main className="main">
          <AppProvider>
            <Toaster />
            <Sidenav />
            <div className="bg-bg right-side flex-1">
              <Navbar />
              {children}
            </div>
          </AppProvider>
        </main>
      </body>
    </html>
  );
}
