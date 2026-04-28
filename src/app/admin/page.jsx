export default function AdminPage() {
  return (
    <div className="animate-fade-in max-w-4xl mx-auto bg-slate-900/60 p-6 md:p-10 rounded-[2.5rem] border border-slate-800 shadow-2xl backdrop-blur-sm">
      
      {/* Header Admin */}
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-2">
          Panel Admin <span className="text-indigo-500">Rahasia</span> 🤫
        </h1>
        <p className="text-slate-400 font-medium">
          Hanya lu yang tau tempat ini bang. Upload anime buat pamer di sini!
        </p>
      </div>

      {/* 1. Form Tambah Anime */}
      <div className="mb-12 bg-slate-800/40 p-6 md:p-8 rounded-[2rem] border border-slate-700/50">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
          <span className="bg-indigo-500 w-2 h-8 rounded-full inline-block"></span>
          Tambah Judul Baru
        </h2>
        
        <form className="flex flex-col gap-5">
          {/* Baris 1: Judul & Slug */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <input type="text" placeholder="Judul (misal: Jujutsu Kaisen S2)" className="bg-[#0B0F19] text-white px-6 py-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500 border border-slate-700 transition-all placeholder-slate-500" />
            <input type="text" placeholder="Slug URL (misal: jujutsu-kaisen-s2)" className="bg-[#0B0F19] text-white px-6 py-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500 border border-slate-700 transition-all placeholder-slate-500" />
          </div>

          {/* Baris 2: Poster */}
          <input type="text" placeholder="URL Gambar Poster" className="bg-[#0B0F19] text-white px-6 py-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500 border border-slate-700 transition-all placeholder-slate-500" />
          
          {/* Baris 3: Info Detail */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            <select className="bg-[#0B0F19] text-white px-6 py-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500 border border-slate-700 appearance-none cursor-pointer">
              <option value="TV">TV Series</option>
              <option value="Movie">Movie</option>
              <option value="OVA">OVA</option>
              <option value="ONA">ONA</option>
            </select>
            
            <input type="text" placeholder="Studio" className="bg-[#0B0F19] text-white px-6 py-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500 border border-slate-700 transition-all placeholder-slate-500" />
            
            <input type="text" placeholder="Tahun" className="bg-[#0B0F19] text-white px-6 py-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500 border border-slate-700 transition-all placeholder-slate-500" />
            
            <select className="bg-[#0B0F19] text-white px-6 py-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500 border border-slate-700 appearance-none cursor-pointer">
              <option value="Ongoing">Ongoing</option>
              <option value="Completed">Completed</option>
            </select>
          </div>

          {/* Baris 4: Genre & Sinopsis */}
          <input type="text" placeholder="Genre (pisahkan dengan koma)" className="bg-[#0B0F19] text-white px-6 py-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500 border border-slate-700 transition-all placeholder-slate-500" />
          
          <textarea placeholder="Sinopsis..." rows="4" className="bg-[#0B0F19] text-white px-6 py-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500 border border-slate-700 transition-all placeholder-slate-500 resize-none"></textarea>
          
          <button type="button" className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-4 px-8 rounded-full mt-2 transition-all shadow-lg shadow-indigo-500/30 text-lg">
            Simpan Anime
          </button>
        </form>
      </div>

      {/* 2. Form Tambah Episode & Embed */}
      <div className="bg-slate-800/40 p-6 md:p-8 rounded-[2rem] border border-slate-700/50">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
          <span className="bg-emerald-500 w-2 h-8 rounded-full inline-block"></span>
          Tambah Episode / Embed Nonton
        </h2>
        
        <form className="flex flex-col gap-5">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <select className="bg-[#0B0F19] text-slate-300 px-6 py-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500 border border-slate-700 appearance-none cursor-pointer">
                <option>Pilih Anime (Mokup)...</option>
                <option>Jujutsu Kaisen Season 2</option>
              </select>
              
              <input type="text" placeholder="No. Episode (Misal: 1 atau Full Movie)" className="bg-[#0B0F19] text-white px-6 py-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500 border border-slate-700 transition-all placeholder-slate-500" />
           </div>
           
           <input type="text" placeholder="URL Embed Video (Iframe)" className="bg-[#0B0F19] text-white px-6 py-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500 border border-slate-700 transition-all placeholder-slate-500" />
           
           <button type="button" className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-4 px-8 rounded-full mt-2 transition-all shadow-lg shadow-emerald-500/30 text-lg">
            Simpan Episode
          </button>
        </form>
      </div>

    </div>
  );
}
