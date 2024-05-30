/* eslint-disable tailwindcss/no-custom-classname */
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../globals.css";
import Sidebar from "../../components/layout/Sidebar";
import Header from "../../components/Header/Header";
// import Sidebar from "../components/layout/Sidebar";
// import Header from "../components/Header/Header";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  // eslint-disable-next-line no-undef
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <main>
          <div className="">
            <div className="bg-background">
              <div className="flex flex-row">
                <div className="hidden w-[18%] lg:block">
                  <Sidebar />
                </div>
                <div className="col-span-3 w-[82%] overflow-auto lg:col-span-5 lg:border-l">
                  <div className="p-6 lg:px-8">
                    <Header />
                    {children}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}