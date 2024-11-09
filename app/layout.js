import localFont from "next/font/local";
import { Dancing_Script, Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageWrapper from "@/components/PageWrapper";
import { Toaster } from "@/components/ui/toaster";

// Local Fonts
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Google Font
const dancingScript = Dancing_Script({
  variable: "--font-dancing-script",
  weight: ["400", "700"],
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "EventCraft",
  description:
    "Elevate your gatherings with our unique blend of entertainment and artistry",
};

export default function RootLayout({ children }) {
  const bannerMessages = [
    "🎉 Special offer: 20% off all packages booked this month!",
    "🎨 New service: Glow-in-the-dark body painting now available!",
    "🎮 Introducing VR gaming experiences for your events!",
    "📅 Limited slots available for summer events - Book now!",
  ];

  return (
    <html lang="en">
      <body
        className={`${dancingScript.variable} ${poppins.variable} ${geistSans.variable} ${geistMono.variable} antialiased `}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <PageWrapper>
            <div className="flex flex-col min-h-screen">
              <Navbar />
              <main className="flex-grow font-poppins">
                {children}
                <Toaster />
              </main>
              <Footer />
            </div>
          </PageWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
