import Link from 'next/link';

export default function Navbar() {
  return (
    // Pake backdrop-blur biar ala ala Apple / Web modern
    <nav className="fixed top-0 w-full bg-[#0B0F19]/80 backdrop-blur-md z-50 border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-white tracking-widest">
            ANI<span className="text-indigo-500">FLEX</span>
          </Link>

          {/* Kolom Pencarian - BENTUK OVAL/KAPSUL (Nggak lancip) */}
          <div className="relative">
            <input 
              type="text" 
              placeholder="Cari anime..." 
              className="bg-slate-800/50 text-slate-200 placeholder-slate-400 px-6 py-2.5 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all w-48 sm:w-64"
            />
          </div>
          
        </div>
      </div>
    </nav>
  );
}
