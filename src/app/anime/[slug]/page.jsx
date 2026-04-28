import Image from 'next/link'; // Nanti dipake buat gambar kalau butuh

export default function AnimeDetail() {
  // Anggap aja ini data dari D1 (Kita mock dulu buat pamer desain)
  const anime = {
    title: "Jujutsu Kaisen Season 2",
    poster: "https://i.pinimg.com/736x/8f/c9/71/8fc9715a201caedb16d1ba52ed9ba1cd.jpg",
    type: "TV",
    status: "Completed",
    studio: "MAPPA",
    release_year: "2023",
    genres: "Action, Fantasy, Supernatural",
    synopsis: "Gojo Satoru dan Geto Suguru ditugaskan untuk mengawal Star Plasma Vessel. Namun, masa lalu mereka yang kelam mulai terungkap. Pertarungan epik antar penyihir jujutsu tingkat atas dimulai dengan animasi yang super mulus."
  };

  return (
    <div className="animate-fade-in">
      {/* Bagian Atas: Poster & Info */}
      <div className="flex flex-col md:flex-row gap-8">
        
        {/* Poster - Lengkung ekstrim (rounded-3xl) */}
        <div className="shrink-0 mx-auto md:mx-0">
          <img 
            src={anime.poster} 
            alt={anime.title} 
            className="w-64 h-96 object-cover rounded-[2rem] shadow-2xl shadow-indigo-500/20"
          />
        </div>

        {/* Info Detail */}
        <div className="flex flex-col justify-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
            {anime.title}
          </h1>

          {/* Info Badge - Kapsul (rounded-full) */}
          <div className="flex flex-wrap gap-3 text-sm font-medium">
            <span className="bg-indigo-500/20 text-indigo-300 px-4 py-1.5 rounded-full border border-indigo-500/30">
              {anime.type}
            </span>
            <span className="bg-emerald-500/20 text-emerald-300 px-4 py-1.5 rounded-full border border-emerald-500/30">
              {anime.status}
            </span>
            <span className="bg-slate-800 text-slate-300 px-4 py-1.5 rounded-full">
              Studio: {anime.studio}
            </span>
            <span className="bg-slate-800 text-slate-300 px-4 py-1.5 rounded-full">
              Rilis: {anime.release_year}
            </span>
          </div>

          <div className="pt-2">
            <h3 className="text-slate-400 font-semibold mb-1">Genre:</h3>
            <p className="text-slate-200">{anime.genres}</p>
          </div>

          {/* Sinopsis - Box tumpul */}
          <div className="pt-4">
            <h3 className="text-xl font-semibold text-white mb-3">Sinopsis</h3>
            <p className="text-slate-400 leading-relaxed bg-slate-800/30 p-6 rounded-3xl border border-slate-800">
              {anime.synopsis}
            </p>
          </div>
        </div>
      </div>

      {/* Bagian Bawah: Daftar Episode */}
      <div className="mt-12">
        <h3 className="text-2xl font-bold text-white mb-6">Daftar Episode</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {/* Contoh Tombol Episode - Sangat Tumpul */}
          {[1, 2, 3, 4, 5].map((ep) => (
            <button key={ep} className="bg-slate-800 hover:bg-indigo-600 text-white py-4 rounded-2xl transition-all duration-300 font-semibold shadow-lg hover:shadow-indigo-500/25">
              Episode {ep}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
