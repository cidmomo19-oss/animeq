import './globals.css';
import Navbar from '@/components/Navbar';

export const metadata = {
  title: 'AniFlex - Nonton Anime Bersih & Modern',
  description: 'Web streaming anime buatan gw',
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className="bg-[#0B0F19] text-slate-200 antialiased min-h-screen">
        <Navbar />
        {/* Konten dikasih padding atas biar gak ketutup navbar */}
        <main className="pt-24 pb-12 px-4 sm:px-6 max-w-6xl mx-auto">
          {children}
        </main>
      </body>
    </html>
  );
}
