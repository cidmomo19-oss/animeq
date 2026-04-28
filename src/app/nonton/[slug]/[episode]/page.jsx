import Link from 'next/link';

export default function NontonPage({ params }) {
  // Mock data sementara buat pamer UI
  const { slug, episode } = params;
  const animeTitle = "Jujutsu Kaisen Season 2";
  
  // Ini contoh link embed (nanti diganti dari database)
  // Kalau mau ngetest embed beneran, bisa diganti link YouTube atau link embed web lain
  const embedUrl = "https://www.youtube.com/embed/O6qVQCMxbwg"; 

  return (
    <div className="animate-fade-in max-w-5xl mx-auto">
      
      {/* Header Info (Judul & Tombol Kembali) */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-white">
            {animeTitle}
          </h1>
          <p className="text-indigo-400 font-medium mt-1 text-lg">
            Episode {episode}
          </p>
        </div>
        
        {/* Tombol Back - Tumpul */}
        <Link 
          href={`/anime/${slug}`}
          className="bg-slate-800/80 hover:bg-slate-700 text-slate-200 px-5 py-2.5 rounded-full backdrop-blur-md transition-all font-medium border border-slate-700"
        >
          Kembali
        </Link>
      </div>

      {/* Video Player Container - Super Lengkung & Punya Bayangan Premium */}
      <div className="relative w-full aspect-video rounded-[2rem] overflow-hidden shadow-2xl shadow-indigo-500/20 bg-slate-900 border border-slate-800">
        <iframe 
          src={embedUrl}
          className="absolute top-0 left-0 w-full h-full border-none"
          allowFullScreen
          title={`Nonton ${animeTitle} Episode ${episode}`}
        ></iframe>
      </div>

      {/* Navigasi Episode (Prev / Next) */}
      <div className="flex justify-between items-center mt-8">
        <button className="bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 px-6 py-3 rounded-full transition-all font-semibold">
          &laquo; Ep Sebelumnya
        </button>
        <button className="bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-3 rounded-full transition-all shadow-lg shadow-indigo-500/30 font-semibold">
          Ep Selanjutnya &raquo;
        </button>
      </div>

      {/* Server Alternatif (Opsional buat pamer webnya kompleks) */}
      <div className="mt-8 p-6 bg-slate-800/30 rounded-3xl border border-slate-800">
        <h3 className="text-slate-300 font-semibold mb-4 text-center">Pilih Server:</h3>
        <div className="flex flex-wrap justify-center gap-4">
          <button className="bg-indigo-500 text-white px-6 py-2 rounded-full font-medium shadow-md shadow-indigo-500/20">Server 1 (HD)</button>
          <button className="bg-slate-800 text-slate-300 hover:bg-slate-700 px-6 py-2 rounded-full font-medium transition-all">Server 2</button>
          <button className="bg-slate-800 text-slate-300 hover:bg-slate-700 px-6 py-2 rounded-full font-medium transition-all">Server 3</button>
        </div>
      </div>

    </div>
  );
}
