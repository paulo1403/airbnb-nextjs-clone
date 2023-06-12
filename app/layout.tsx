import { Nunito } from "next/font/google";
import Navbar from "./components/navbar/Narbar";

import "./globals.css";
import ClientOnly from "./components/ClientOnly";
import Modal from "./components/modals/Modal";

export const metadata = {
  title: "Airbnb",
  description: "Airbnb clone",
};

export const font = Nunito({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <Modal isOpen title="Hello World" />
          <Navbar />
        </ClientOnly>
        {children}
      </body>
    </html>
  );
}
