import { useState } from 'react';
import { searchContent } from '../data/searchContent';

export default function SearchPage() {
  const [query, setQuery] = useState('');
  const results = searchContent(query);

  return (
    <div className="space-y-6 animate-page-content">
      <header className="rounded-[1.25rem] border border-slate-800/90 bg-slate-950/95 p-8">
        <h2 className="text-2xl font-semibold text-white">Search Tutorials & Guides</h2>
        <p className="mt-3 text-slate-400">Cari artikel, tutorial, dan panduan Roblox Studio dengan mudah.</p>
      </header>

      <div className="rounded-[1rem] border border-slate-800/80 bg-slate-900/95 p-6">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Cari: 'datastore', 'humanoid', 'performance', etc..."
          className="w-full rounded-lg bg-slate-950/80 border border-slate-700/50 px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
        />
      </div>

      {query && results.length === 0 && (
        <div className="rounded-[1rem] border border-slate-800/80 bg-slate-900/95 p-8 text-center">
          <p className="text-slate-400">Tidak ada hasil untuk "{query}". Coba keyword lain.</p>
        </div>
      )}

      {query && results.length > 0 && (
        <div className="space-y-3">
          <p className="text-slate-400 text-sm">
            Menemukan <strong>{results.length}</strong> hasil untuk "{query}"
          </p>
          
          {results.map((result) => (
            <a
              key={result.id}
              href={`/${result.page}`}
              className="block rounded-[1rem] border border-slate-800/80 bg-slate-900/95 p-6 transition hover:border-cyan-500/50 hover:bg-slate-900/70"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-cyan-300 mb-2">
                    {result.title}
                  </h3>
                  <p className="text-slate-400 text-sm mb-3">
                    {result.description}
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    <span className="inline-block bg-slate-950/80 text-slate-300 text-xs px-2 py-1 rounded">
                      {result.category}
                    </span>
                    {result.keywords.slice(0, 3).map((kw) => (
                      <span key={kw} className="inline-block bg-slate-950/80 text-slate-400 text-xs px-2 py-1 rounded">
                        #{kw}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="text-cyan-300 text-2xl">→</div>
              </div>
            </a>
          ))}
        </div>
      )}

      {!query && (
        <div className="space-y-6">
          <div className="rounded-[1rem] border border-slate-800/80 bg-slate-900/95 p-6">
            <h3 className="text-lg font-semibold text-white mb-4">💡 Popular Searches</h3>
            <div className="flex flex-wrap gap-2">
              {['datastore', 'humanoid', 'remoteevent', 'performance', 'ui', 'animation', 'error', 'security'].map((tag) => (
                <button
                  key={tag}
                  onClick={() => setQuery(tag)}
                  className="px-3 py-2 rounded-lg bg-slate-950/80 text-slate-300 hover:text-cyan-300 transition text-sm"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          <div className="rounded-[1rem] border border-cyan-500/30 bg-cyan-500/10 p-6">
            <h3 className="text-lg font-semibold text-cyan-300 mb-3">📖 Featured Articles</h3>
            <div className="space-y-2 text-slate-300 text-sm">
              <p>✓ <strong>Beginner?</strong> Mulai dengan Dasar-Dasar Luau dan Client-Server Communication</p>
              <p>✓ <strong>Optimize game?</strong> Lihat Performance Optimization dan Memory Management</p>
              <p>✓ <strong>Save player data?</strong> Pelajari DataStore System dengan error handling</p>
              <p>✓ <strong>Secure game?</strong> Baca Security & Anti-Cheat untuk prevent exploits</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
