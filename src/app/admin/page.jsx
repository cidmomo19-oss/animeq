"use client"; // Wajib ditambahin karena kita pake form interaktif

import { useState } from 'react';

export default function AdminPage() {
  const [isLoading, setIsLoading] = useState(false);
  
  // Tempat nyimpen ketikan form
  const [form, setForm] = useState({
    title: '', slug: '', poster: '', type: 'TV',
    studio: '', release_year: '', status: 'Ongoing',
    genres: '', synopsis: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submitAnime = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const res = await fetch('/api/anime', {
        method: 'POST',
        body: JSON.stringify(form)
      });
      const data = await res.json();
      
      if (data.success) {
        alert('Mantap bang! Anime berhasil masuk ke Database! 🎉');
        // Kosongin form lagi setelah sukses
        setForm({ title: '', slug: '', poster: '', type: 'TV', studio: '', release_year: '', status: 'Ongoing', genres: '', synopsis: '' });
      } else {
        alert('Gagal: ' + data.message);
      }
    } catch (err) {
      alert('Terjadi kesalahan sistem.');
    }
    setIsLoading(false);
  };

  return (
    <div className="animate-fade-in max-w-4xl mx-auto bg-slate-900/60 p-6 md:p-10 rounded-[2.5rem] border border-slate-800 shadow-2xl backdrop-blur-sm">
      
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-2">
          Panel Admin <span className="text-indigo-500">Rahasia</span> 🤫
        </h1>
        <p className="text-slate-400 font-medium">Hanya lu yang tau tempat ini bang.</p>
      </div>

      {/* Form Tambah Anime */}
      <div className="mb-12 bg-slate-800/40 p-6 md:p-8 rounded-[2rem] border border-slate-700/50">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
          <span className="bg-indigo-500 w-2 h-8 rounded-full inline-block"></span>
          Tambah Judul Baru
        </h2>
        
        <form onSubmit={submitAnime} className="flex flex-col gap-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <input required name="title" value={form.title} onChange={handleChange} type="text" placeholder="Judul (misal: Jujutsu Kaisen S2)" className="bg-[#0B0F19] text-white px-6 py-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500 border border-slate-700 transition-all" />
            <input required name="slug" value={form.slug} onChange={handleChange} type="text" placeholder="Slug URL (misal: jujutsu-kaisen-s2)" className="bg-[#0B0F19] text-white px-6 py-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500 border border-slate-700 transition-all" />
          </div>

          <input required name="poster" value={form.poster} onChange={handleChange} type="text" placeholder="URL Gambar Poster" className="bg-[#0B0F19] text-white px-6 py-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500 border border-slate-700 transition-all" />
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            <select name="type" value={form.type} onChange={handleChange} className="bg-[#0B0F19] text-white px-6 py-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500 border border-slate-700 appearance-none cursor-pointer">
              <option value="TV">TV Series</option>
              <option value="Movie">Movie</option>
              <option value="OVA">OVA</option>
              <option value="ONA">ONA</option>
            </select>
            <input required name="studio" value={form.studio} onChange={handleChange} type="text" placeholder="Studio" className="bg-[#0B0F19] text-white px-6 py-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500 border border-slate-700 transition-all" />
            <input required name="release_year" value={form.release_year} onChange={handleChange} type="text" placeholder="Tahun" className="bg-[#0B0F19] text-white px-6 py-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500 border border-slate-700 transition-all" />
            <select name="status" value={form.status} onChange={handleChange} className="bg-[#0B0F19] text-white px-6 py-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500 border border-slate-700 appearance-none cursor-pointer">
              <option value="Ongoing">Ongoing</option>
              <option value="Completed">Completed</option>
            </select>
          </div>

          <input required name="genres" value={form.genres} onChange={handleChange} type="text" placeholder="Genre (pisahkan koma: Action, Comedy)" className="bg-[#0B0F19] text-white px-6 py-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500 border border-slate-700 transition-all" />
          
          <textarea required name="synopsis" value={form.synopsis} onChange={handleChange} placeholder="Sinopsis..." rows="4" className="bg-[#0B0F19] text-white px-6 py-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500 border border-slate-700 transition-all resize-none"></textarea>
          
          <button type="submit" disabled={isLoading} className="bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 text-white font-bold py-4 px-8 rounded-full mt-2 transition-all shadow-lg shadow-indigo-500/30 text-lg">
            {isLoading ? 'Menyimpan...' : 'Simpan Anime'}
          </button>
        </form>
      </div>

      {/* Bagian Tambah Episode dibiarkan dulu seperti sebelumnya (Nanti kita fungsikan) */}
      <div className="bg-slate-800/40 p-6 md:p-8 rounded-[2rem] border border-slate-700/50 opacity-50">
        <h2 className="text-xl font-bold text-white mb-2">Form Tambah Episode</h2>
        <p className="text-slate-400 text-sm">Ini kita fungsikan di tahap selanjutnya ya bang.</p>
      </div>
    </div>
  );
}
