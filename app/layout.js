
import "./globals.css";


export const metadata = {
   title: "Just Vent Out — Feelings, Finally Written",
  description: "A warm community space for honest expression. Read stories, write your own, and find people who feel like you do.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
     
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
