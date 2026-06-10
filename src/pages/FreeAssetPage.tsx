import { type FreeAsset } from '../data/freeAssets';

interface FreeAssetPageProps {
  freeAssets: FreeAsset[];
}

export default function FreeAssetPage({ freeAssets }: FreeAssetPageProps) {
  return (
    <div className="space-y-10 animate-page-content">
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-[2rem] border border-slate-800/90 bg-slate-950/95 p-8 shadow-soft">
          <p className="text-sm uppercase tracking-[0.24em] text-cyan-300">Free Asset</p>
          <h2 className="mt-4 text-3xl font-bold text-white">Kumpulan Free Asset Hasil Mulung</h2>
          <p className="mt-4 text-slate-400">
            Semua asset ini gratis hasil mulung dari berbagai server discord. jadi berterima kasih lah sama orang yg udah ngeshare asset gratisan di server discord manapun, karena tanpa mereka mungkin asset gratisan ini gk akan ada. Asset ini bisa kamu pakai untuk belajar, referensi, atau bahkan dipakai langsung di projek Roblox Studio kamu. Tapi ingat, jangan pernah menjual atau mengklaim asset ini sebagai milikmu.
          </p>
        </div>
        <div className="rounded-[2rem] border border-slate-800/90 bg-slate-900/95 p-8 shadow-soft">
          <p className="text-sm uppercase tracking-[0.24em] text-amber-300">MOHON DI BACA</p>
          <ul className="mt-4 space-y-3 text-slate-300">
            <li>• Dilarang memperjual belikan asset gratisan ini.</li>
            <li>• Dilarang mengklaim asset gratisan / mengaku-ngaku asset milik sendiri.</li>
            <li>• Gunakan asset ini hanya untuk referensi, learning, atau penggunaan non-komersial kecuali pemilik asli memberi izin.</li>
          </ul>
          <p className="mt-4 text-slate-400">Mohon hormati pembuat dan pemberi sumber. Jika kamu ingin menyumbang atau menyertakan kredit, cantumkan sumber asal asset. Untuk pertanyaan lebih lanjut atau klaim hak cipta, hubungi pemilik materi atau admin server yang menyediakan asset.</p>
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {freeAssets.map((asset) => {
          const fileLabel = asset.name.toLowerCase().endsWith('.rbxl') ? 'RBXL File' : 'RBXM File';
          const displayName = asset.name.replace(/\.(rbxm|rbxl)$/i, '');
          return (
            <article key={asset.name} className="rounded-[2rem] border border-slate-800/90 bg-slate-900/95 p-6 shadow-soft transition duration-500 hover:-translate-y-1 hover:border-cyan-500/60">
              <p className="text-sm uppercase tracking-[0.24em] text-slate-400">{fileLabel}</p>
              <h3 className="mt-4 text-lg font-semibold text-white">{displayName}</h3>
              <p className="mt-3 text-slate-400">Reupload by ZaneXyuu Studio</p>
              <a
                href={`/FreeAssets/${encodeURIComponent(asset.name)}`}
                className="mt-6 inline-flex rounded-full bg-cyan-500 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
              >
                Download
              </a>
            </article>
          );
        })}
      </div>
    </div>
  );
}
