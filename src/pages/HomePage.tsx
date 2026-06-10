export default function HomePage() {
  return (
    <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center animate-page-content">
      <div>
        <div className="space-y-6">
          <div className="rounded-[2rem] border border-slate-800/90 bg-slate-950/95 p-8 shadow-soft">
            <h2 className="text-2xl font-semibold text-white">Sumber Daya & Panduan Roblox Studio</h2>
            <p className="mt-4 text-slate-400">
              Pelajari praktik terbaik dan akses asset siap pakai untuk mempercepat pembuatan game di Roblox Studio. Temukan tutorial, template, dan aset RBXM yang telah diuji untuk dipakai langsung di proyekmu.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-[2rem] border border-slate-800/90 bg-slate-900/95 p-6 shadow-soft transition-transform duration-500 hover:-translate-y-1">
              <p className="text-sm uppercase tracking-[0.24em] text-cyan-300">Free Asset</p>
              <p className="mt-4 text-slate-300">Download model, skrip, dan plugin RBXM yang kompatibel dengan Roblox Studio untuk mempercepat prototyping dan produksi.</p>
            </div>
            <div className="rounded-[2rem] border border-slate-800/90 bg-slate-900/95 p-6 shadow-soft transition-transform duration-500 hover:-translate-y-1">
              <p className="text-sm uppercase tracking-[0.24em] text-emerald-300">Komunitas & Support</p>
              <p className="mt-4 text-slate-300">Gabung Discord untuk diskusi scripting, optimasi performa, dan berbagi asset atau proyek Roblox Studio kamu.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="rounded-[2rem] border border-slate-800/90 bg-gradient-to-br from-slate-900 to-slate-950 p-8 shadow-soft">
        <div className="rounded-[1.75rem] bg-slate-950/95 p-7">
          <h3 className="text-xl font-semibold text-white">Panduan Singkat Roblox Studio</h3>
          <p className="mt-4 text-slate-400">Ringkasan langkah cepat untuk memulai dan mengoptimalkan workflow di Roblox Studio.</p>
          <div className="mt-8 grid gap-4 text-slate-300 sm:grid-cols-2">
            <div className="rounded-3xl bg-slate-900/90 p-4">
              <p className="text-sm text-slate-400">Optimize</p>
              <p className="mt-3 text-lg font-semibold text-white">Kurangi Draw Calls</p>
            </div>
            <div className="rounded-3xl bg-slate-900/90 p-4">
              <p className="text-sm text-slate-400">Scripting</p>
              <p className="mt-3 text-lg font-semibold text-white">Best Practices</p>
            </div>
          </div>
          <ul className="mt-6 list-disc pl-5 text-slate-300">
            <li className="mt-2">Gunakan Model dan Mesh yang teroptimasi untuk performa.</li>
            <li className="mt-2">Pisahkan logic server dan client untuk keamanan dan skalabilitas.</li>
            <li className="mt-2">Manfaatkan plugin untuk mempercepat workflow (contoh: Rojo, Studio Tools).</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
