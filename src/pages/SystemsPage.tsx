export default function SystemsPage() {
  return (
    <div className="space-y-8 animate-page-content">
      <header className="rounded-[1.25rem] border border-slate-800/90 bg-slate-950/95 p-8">
        <h2 className="text-2xl font-semibold text-white">Sistem Inti Roblox Studio — Panduan Komprehensif</h2>
        <p className="mt-3 text-slate-400">Penjelasan mendalam tentang arsitektur Roblox Studio, dari scripting hingga optimasi performa dan penyimpanan data. Cocok untuk pemula hingga developer menengah.</p>
      </header>

      {/* BEGINNER'S OVERVIEW SECTION */}
      <section className="rounded-[1rem] border border-blue-500/30 bg-blue-500/10 p-6">
        <h3 className="text-xl font-semibold text-blue-300 mb-4">🚀 Panduan Pemula — Apa itu Roblox Studio?</h3>
        <div className="space-y-4">
          <div className="rounded-lg bg-slate-950/80 p-4 border border-slate-700/50">
            <p className="text-sm font-semibold text-white mb-2">Apa itu Roblox Studio?</p>
            <p className="text-slate-300 text-sm">
              Roblox Studio adalah editor tempat kamu membuat game. Setiap game Roblox terdiri dari:
            </p>
            <ul className="mt-2 list-disc pl-5 text-slate-300 text-sm space-y-1">
              <li><strong>Workspace:</strong> Tempat semua 3D objects (models, terrain, parts) hidup.</li>
              <li><strong>Scripts:</strong> Code yang menjalankan game logic (damage, spawning, events).</li>
              <li><strong>Server:</strong> Komputer Roblox yang menjalankan ServerScripts. Authoritative (aman dari cheating).</li>
              <li><strong>Client:</strong> Perangkat pemain yang menjalankan LocalScripts. Bisa dimanipulasi, jangan trust.</li>
              <li><strong>Services:</strong> Built-in systems seperti Players, DataStore, TweenService, UserInputService.</li>
            </ul>
          </div>

          <div className="rounded-lg bg-slate-950/80 p-4 border border-slate-700/50">
            <p className="text-sm font-semibold text-white mb-2">Alur Bermain Game</p>
            <p className="text-slate-300 text-sm mb-2">
              Saat pemain join game:
            </p>
            <ol className="list-decimal pl-5 text-slate-300 text-sm space-y-1">
              <li>Server menerima PlayerAdded event, spawn character.</li>
              <li>Server menjalankan ServerScripts, LocalScripts di client juga jalan.</li>
              <li>Client melihat 3D dan mengirim input (movement, clicks) ke server via RemoteEvent.</li>
              <li>Server validate input, update game state, dan replicate perubahan ke semua clients.</li>
              <li>Saat player leave, server cleanup data dan save ke DataStore.</li>
            </ol>
          </div>

          <div className="rounded-lg bg-slate-950/80 p-4 border border-slate-700/50">
            <p className="text-sm font-semibold text-white mb-2">Folder Structure (Explorer Window)</p>
            <pre className="text-xs text-slate-200 overflow-x-auto whitespace-pre-wrap break-words">
{`Workspace
├── Terrain (landscape, mountains, water)
├── Characters (player models)
└── Props (objects in game)

ServerScriptService
└── GameManager (main server scripts)

ServerStorage
└── Data (hidden from clients)

ReplicatedStorage
└── RemoteEvents (client-server communication)

StarterPlayer
├── StarterPlayerScripts (run for all players)
└── StarterCharacterScripts (run when character spawns)

StarterGui
└── Buttons, Labels, etc (UI that players see)`}
            </pre>
          </div>
        </div>
      </section>

      {/* SCRIPTING SECTION */}
      <section className="rounded-[1rem] border border-slate-800/80 bg-slate-900/95 p-6">
        <h3 className="text-xl font-semibold text-cyan-300 mb-4">Scripting & Luau — Bahasa Utama Roblox</h3>
        
        <div className="space-y-4">
          <div className="rounded-lg bg-slate-950/80 p-4 border border-slate-700/50">
            <h4 className="text-sm font-semibold text-white mb-2">Apa itu Luau?</h4>
            <p className="text-slate-300 text-sm">
              Luau adalah bahasa dinamis berbasis Lua yang dioptimalkan khusus untuk Roblox. Berbeda dengan Lua standar, Luau menawarkan:
            </p>
            <ul className="mt-2 list-disc pl-5 text-slate-300 text-sm space-y-1">
              <li><strong>Type checking</strong> — Optional, tetapi membantu menangkap error di development time.</li>
              <li><strong>Better performance</strong> — JIT compiler dan optimasi runtime yang lebih baik.</li>
              <li><strong>Richer standard library</strong> — Built-in untuk networking, math, tables, strings, bits.</li>
              <li><strong>Yield & Coroutines</strong> — Dukungan native untuk async/await-like patterns.</li>
            </ul>
          </div>

          <div className="rounded-lg bg-slate-950/80 p-4 border border-slate-700/50">
            <h4 className="text-sm font-semibold text-white mb-2">Client-Server Architecture (Sangat Penting untuk Keamanan)</h4>
            <p className="text-slate-300 text-sm mb-2">
              <strong>Prinsip emas:</strong> Jangan percayai client. Server adalah source of truth untuk semua logika yang penting.
            </p>
            <div className="space-y-2 text-sm text-slate-300">
              <div className="border-l-2 border-cyan-500/50 pl-3">
                <p><strong>LocalScripts (Client-side)</strong></p>
                <p className="text-xs mt-1">Berjalan hanya di perangkat pemain. Gunakan untuk: UI, input handling, efek visual lokal, animasi. Pemain bisa modifikasi atau membaca code ini.</p>
              </div>
              <div className="border-l-2 border-emerald-500/50 pl-3">
                <p><strong>ServerScripts</strong></p>
                <p className="text-xs mt-1">Berjalan di server Roblox. Gunakan untuk: validasi data, game logic, damage calculations, security checks, DataStore operations. Aman dari manipulasi.</p>
              </div>
              <div className="border-l-2 border-violet-500/50 pl-3">
                <p><strong>Communication: RemoteEvent vs RemoteFunction</strong></p>
                <p className="text-xs mt-1"><strong>RemoteEvent:</strong> One-way fire-and-forget (contoh: "pemain shoot"). <strong>RemoteFunction:</strong> Two-way dengan return value (contoh: query durability item).</p>
              </div>
            </div>
          </div>

          <div className="rounded-lg bg-slate-950/80 p-4 border border-slate-700/50">
            <h4 className="text-sm font-semibold text-white mb-2">Best Practices Scripting</h4>
            <ul className="text-slate-300 text-sm space-y-1 list-disc pl-5">
              <li><strong>Always validate on server</strong> — Jangan pernah trust input dari client.</li>
              <li><strong>Use ModuleScripts</strong> — Pisahkan logic ke modules untuk reuse dan maintainability.</li>
              <li><strong>Sanitize remote calls</strong> — Check type, range, dan frequency dari request client.</li>
              <li><strong>Use debounce/throttle</strong> — Cegah spam remote calls dari client yang grief atau exploit.</li>
              <li><strong>Return errors to client gracefully</strong> — Jangan expose server-side errors, kirim error code generic.</li>
              <li><strong>Use :FindFirstChild() safely</strong> — Object bisa dihapus anytime; cek existence sebelum pakai.</li>
              <li><strong>Be careful with infinite loops</strong> — Loop yang tidak berhenti bisa freeze server/client.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* PERFORMANCE SECTION */}
      <section className="rounded-[1rem] border border-slate-800/80 bg-slate-900/95 p-6">
        <h3 className="text-xl font-semibold text-yellow-300 mb-4">Performance Optimization — Render & Simulation</h3>
        
        <div className="space-y-4">
          <div className="rounded-lg bg-slate-950/80 p-4 border border-slate-700/50">
            <h4 className="text-sm font-semibold text-white mb-2">Memahami Performance Bottlenecks</h4>
            <p className="text-slate-300 text-sm mb-2">Performance game terbatas oleh tiga faktor utama:</p>
            <div className="space-y-2 text-sm">
              <div className="bg-slate-900/50 rounded p-2">
                <p className="text-white font-semibold">📊 CPU (Server Logic)</p>
                <p className="text-slate-400">Update game state, physics, AI, networking. Heavy computation bisa menyebabkan lag untuk semua pemain.</p>
              </div>
              <div className="bg-slate-900/50 rounded p-2">
                <p className="text-white font-semibold">🎨 GPU (Client Rendering)</p>
                <p className="text-slate-400">Draw Calls, Meshes, Textures, Shadows. Jumlah Part yang visible dan kompleksitas material mempengaruhi FPS.</p>
              </div>
              <div className="bg-slate-900/50 rounded p-2">
                <p className="text-white font-semibold">📡 Network (Bandwidth)</p>
                <p className="text-slate-400">RemoteEvent calls, property updates, streaming data. Terlalu banyak network traffic bisa menyebabkan lag dan timeout.</p>
              </div>
            </div>
          </div>

          <div className="rounded-lg bg-slate-950/80 p-4 border border-slate-700/50">
            <h4 className="text-sm font-semibold text-white mb-2">Draw Calls & Part Optimization</h4>
            <p className="text-slate-300 text-sm mb-2">
              <strong>Draw Call:</strong> Satu instruksi GPU untuk render. Terlalu banyak draw calls = FPS drops.
            </p>
            <ul className="text-slate-300 text-sm space-y-1 list-disc pl-5">
              <li><strong>Mesh Parts vs Parts:</strong> Gunakan Mesh untuk geometry kompleks (lebih efficient). Hindari banyak individual Parts untuk shape yang sama.</li>
              <li><strong>Union/Negate:</strong> Bisa reduce Part count, tetapi lebih expensive untuk render. Gunakan sparingly.</li>
              <li><strong>Textures:</strong> High-resolution texture = lebih banyak memory. Compress atau atlasing untuk multiple objects.</li>
              <li><strong>Shadows:</strong> Shadows yang expensive untuk render. Disable untuk detail kecil atau far objects.</li>
              <li><strong>Transparency:</strong> Transparent materials expensive karena perlu depth sorting. Minimize usage.</li>
            </ul>
          </div>

          <div className="rounded-lg bg-slate-950/80 p-4 border border-slate-700/50">
            <h4 className="text-sm font-semibold text-white mb-2">LOD (Level of Detail) & Streaming</h4>
            <p className="text-slate-300 text-sm mb-2">
              Untuk game besar, jangan load semua asset sekaligus. Gunakan LOD dan streaming:
            </p>
            <ul className="text-slate-300 text-sm space-y-1 list-disc pl-5">
              <li><strong>LOD:</strong> High-poly mesh untuk dekat, low-poly untuk jauh. Switch berdasarkan distance ke camera.</li>
              <li><strong>Streaming:</strong> Load terrain/objects hanya di radius player. Unload saat jauh.</li>
              <li><strong>Instance pooling:</strong> Reuse objects daripada create/destroy terus-menerus.</li>
              <li><strong>Deferred loading:</strong> Delay load non-critical assets sampai needed.</li>
            </ul>
          </div>

          <div className="rounded-lg bg-slate-950/80 p-4 border border-slate-700/50">
            <h4 className="text-sm font-semibold text-white mb-2">CPU Optimization — Server Logic</h4>
            <ul className="text-slate-300 text-sm space-y-1 list-disc pl-5">
              <li><strong>Reduce update frequency:</strong> Tidak semua thing perlu update every frame. Gunakan custom intervals.</li>
              <li><strong>Avoid expensive operations in loop:</strong> Cache results, gunakan tables bukan repeated searches.</li>
              <li><strong>Use coroutines/spawn:</strong> Pindahkan heavy computation ke background atau spread over frames.</li>
              <li><strong>Profile regularly:</strong> Gunakan Roblox Studio profiler untuk identify bottlenecks.</li>
              <li><strong>Physics optimization:</strong> Disable physics untuk object yang static. Gunakan CanCollide=false jika tidak needed.</li>
            </ul>
          </div>

          <div className="rounded-lg bg-slate-950/80 p-4 border border-slate-700/50">
            <h4 className="text-sm font-semibold text-white mb-2">Network Optimization</h4>
            <ul className="text-slate-300 text-sm space-y-1 list-disc pl-5">
              <li><strong>Batch updates:</strong> Kirim multiple values dalam satu RemoteEvent daripada separate calls.</li>
              <li><strong>Compression:</strong> Encode data efficiently (contoh: position as float32 instead of string).</li>
              <li><strong>Delta compression:</strong> Hanya kirim data yang berubah, bukan full state.</li>
              <li><strong>Rate limit:</strong> Cap frequency RemoteEvent firing ke reasonable level.</li>
              <li><strong>Server replication:</strong> Use built-in property replication (NetworkReplicator) jika possible, lebih efficient dari RemoteEvents.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* DATASTORE SECTION */}
      <section className="rounded-[1rem] border border-slate-800/80 bg-slate-900/95 p-6">
        <h3 className="text-xl font-semibold text-emerald-300 mb-4">DataStore — Persistent Data & Databases</h3>
        
        <div className="space-y-4">
          <div className="rounded-lg bg-slate-950/80 p-4 border border-slate-700/50">
            <h4 className="text-sm font-semibold text-white mb-2">Apa itu DataStore?</h4>
            <p className="text-slate-300 text-sm">
              DataStore adalah sistem penyimpanan data persistent di cloud yang dikelola Roblox. Semua data pemain (coins, level, inventory) tersimpan di DataStore dan persist across game sessions.
            </p>
          </div>

          <div className="rounded-lg bg-slate-950/80 p-4 border border-slate-700/50">
            <h4 className="text-sm font-semibold text-white mb-2">Jenis-Jenis DataStore</h4>
            <div className="space-y-2 text-sm text-slate-300">
              <div className="bg-slate-900/50 rounded p-2">
                <p className="text-white font-semibold">📦 Standard DataStore</p>
                <p className="text-slate-400">Key-value store untuk player data. Syntax: DataStore:GetAsync(key), DataStore:SetAsync(key, value).</p>
              </div>
              <div className="bg-slate-900/50 rounded p-2">
                <p className="text-white font-semibold">🏆 OrderedDataStore</p>
                <p className="text-slate-400">Sorted by value untuk leaderboards. Syntax: OrderedDataStore:GetRankAsync(value).</p>
              </div>
              <div className="bg-slate-900/50 rounded p-2">
                <p className="text-white font-semibold">📝 DataStore2 (Community)</p>
                <p className="text-slate-400">Popular community wrapper yang adds auto-save, caching, dan better error handling.</p>
              </div>
            </div>
          </div>

          <div className="rounded-lg bg-slate-950/80 p-4 border border-slate-700/50">
            <h4 className="text-sm font-semibold text-white mb-2">Rate Limits & Quotas</h4>
            <p className="text-slate-300 text-sm mb-2">
              Roblox memiliki rate limits untuk mencegah abuse dan ensure fair distribution server resources:
            </p>
            <ul className="text-slate-300 text-sm space-y-1 list-disc pl-5">
              <li><strong>Free games:</strong> ~60 read requests per minute per player, ~60 write requests per minute per player.</li>
              <li><strong>Premium games:</strong> Higher limits based on subscription tier.</li>
              <li><strong>Throttling:</strong> Jika exceed limit, requests bakal error. Perlu retry dengan backoff.</li>
              <li><strong>Size limit:</strong> Max 4MB per DataStore key. Simpan data efficient, gunakan compression jika perlu.</li>
            </ul>
          </div>

          <div className="rounded-lg bg-slate-950/80 p-4 border border-slate-700/50">
            <h4 className="text-sm font-semibold text-white mb-2">Error Handling & Retry Logic</h4>
            <p className="text-slate-300 text-sm mb-2">
              DataStore calls bisa fail (network error, timeout, rate limit). Perlu robust error handling:
            </p>
            <ul className="text-slate-300 text-sm space-y-1 list-disc pl-5">
              <li><strong>Exponential backoff:</strong> Jika fail, wait sebelum retry. Increasing wait times: 1s, 2s, 4s, 8s, etc.</li>
              <li><strong>Max retry attempts:</strong> Jangan retry infinite; set limit (contoh: 5 attempts).</li>
              <li><strong>Graceful degradation:</strong> Jika DataStore fail, gunakan in-memory cache atau default values.</li>
              <li><strong>Log errors:</strong> Track failed operations untuk debugging dan monitoring.</li>
            </ul>
          </div>

          <div className="rounded-lg bg-slate-950/80 p-4 border border-slate-700/50">
            <h4 className="text-sm font-semibold text-white mb-2">UpdateAsync vs SetAsync vs Transactions</h4>
            <p className="text-slate-300 text-sm mb-2">
              Bedanya penting untuk data consistency:
            </p>
            <div className="space-y-2 text-sm text-slate-300">
              <div className="bg-slate-900/50 rounded p-2">
                <p className="text-white font-semibold">SetAsync</p>
                <p className="text-slate-400">Simple: overwrite seluruh value. Gunakan untuk data yang independent.</p>
              </div>
              <div className="bg-slate-900/50 rounded p-2">
                <p className="text-white font-semibold">UpdateAsync</p>
                <p className="text-slate-400">Atomic update: fetch, modify, write. Gunakan untuk increment counters atau update nested fields.</p>
              </div>
              <div className="bg-slate-900/50 rounded p-2">
                <p className="text-white font-semibold">Transactions</p>
                <p className="text-slate-400">Multiple keys atomically. Gunakan untuk dependent operations (contoh: subtract coins + add item).</p>
              </div>
            </div>
          </div>

          <div className="rounded-lg bg-slate-950/80 p-4 border border-slate-700/50">
            <h4 className="text-sm font-semibold text-white mb-2">Data Structure Best Practices</h4>
            <ul className="text-slate-300 text-sm space-y-1 list-disc pl-5">
              <li><strong>Normalize data:</strong> Tidak simpan redundant info. Simpan IDs dan references, bukan copy data.</li>
              <li><strong>Versioning:</strong> Include version number di saved data untuk handle migration jika structure berubah.</li>
              <li><strong>Encryption:</strong> Untuk sensitive data (passwords, tokens), encrypt sebelum save.</li>
              <li><strong>Archiving:</strong> Jangan simpan terlalu banyak history. Archive old data atau truncate.</li>
              <li><strong>Backup strategy:</strong> Regular backup of critical DataStore data jika critical.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* NETWORKING SECTION */}
      <section className="rounded-[1rem] border border-slate-800/80 bg-slate-900/95 p-6">
        <h3 className="text-xl font-semibold text-violet-300 mb-4">Networking & Replication</h3>
        
        <div className="space-y-4">
          <p className="text-slate-300 text-sm">
            Roblox engine automatically handles replication of property changes dari server ke client. Perlu understand bagaimana ini bekerja untuk optimize:
          </p>

          <div className="rounded-lg bg-slate-950/80 p-4 border border-slate-700/50">
            <h4 className="text-sm font-semibold text-white mb-2">Automatic Replication</h4>
            <ul className="text-slate-300 text-sm space-y-1 list-disc pl-5">
              <li>Saat property di server berubah (contoh: Part.Position), change di-replicate ke semua connected clients.</li>
              <li>Tidak perlu manual RemoteEvent untuk simple property changes.</li>
              <li>Replication efficient tetapi perlu batasi frequency untuk performance.</li>
            </ul>
          </div>

          <div className="rounded-lg bg-slate-950/80 p-4 border border-slate-700/50">
            <h4 className="text-sm font-semibold text-white mb-2">RemoteEvent vs Manual Replication</h4>
            <p className="text-slate-300 text-sm mb-2">
              Gunakan RemoteEvent untuk: Custom events, non-property data, controlled frequency, security-critical logic.
            </p>
            <p className="text-slate-300 text-sm">
              Gunakan automatic replication untuk: Position, Rotation, Part properties yang frequently update.
            </p>
          </div>

          <div className="rounded-lg bg-slate-950/80 p-4 border border-slate-700/50">
            <h4 className="text-sm font-semibold text-white mb-2">Client Prediction & Server Reconciliation</h4>
            <p className="text-slate-300 text-sm mb-2">
              Untuk responsive gameplay, predict movement di client, validate di server:
            </p>
            <ul className="text-slate-300 text-sm space-y-1 list-disc pl-5">
              <li><strong>Client:</strong> Move character immediately berdasarkan input, kirim update ke server.</li>
              <li><strong>Server:</strong> Validate movement, update authoritative state, replicate back ke clients.</li>
              <li><strong>Correction:</strong> Jika client prediction wrong, server sends correction dan client snap back.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* MEMORY & RESOURCES SECTION */}
      <section className="rounded-[1rem] border border-slate-800/80 bg-slate-900/95 p-6">
        <h3 className="text-xl font-semibold text-rose-300 mb-4">Memory Management & Resource Cleanup</h3>
        
        <div className="space-y-4">
          <div className="rounded-lg bg-slate-950/80 p-4 border border-slate-700/50">
            <h4 className="text-sm font-semibold text-white mb-2">Memory Leaks — Common Issues</h4>
            <ul className="text-slate-300 text-sm space-y-1 list-disc pl-5">
              <li><strong>Forgot to disconnect signals:</strong> Signal:Connect() perlu disconnect saat tidak needed lagi.</li>
              <li><strong>Keeping references to destroyed objects:</strong> Hindari variables yang hold references ke instance yg sudah destroyed.</li>
              <li><strong>Large tables in global scope:</strong> Global tables accumulate data dan tidak garbage collected.</li>
              <li><strong>Callbacks that hold context:</strong> Closures yang capture big objects retain memory.</li>
            </ul>
          </div>

          <div className="rounded-lg bg-slate-950/80 p-4 border border-slate-700/50">
            <h4 className="text-sm font-semibold text-white mb-2">Best Practices untuk Memory</h4>
            <ul className="text-slate-300 text-sm space-y-1 list-disc pl-5">
              <li><strong>Use :Destroy() properly:</strong> Cleanup objects yg tidak needed, bukan hanya hide.</li>
              <li><strong>Disconnect connections:</strong> Store reference ke connection, disconnect saat done.</li>
              <li><strong>Clear large tables:</strong> Set items to nil jika sudah done dengan mereka.</li>
              <li><strong>Load assets on demand:</strong> Jangan load semua assets di startup, load saat diperlukan.</li>
              <li><strong>Monitor memory usage:</strong> Check game stats di client untuk track memory consumption.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* SECURITY SECTION */}
      <section className="rounded-[1rem] border border-slate-800/80 bg-slate-900/95 p-6">
        <h3 className="text-xl font-semibold text-red-300 mb-4">Security — Protection dari Exploits</h3>
        
        <div className="space-y-4">
          <div className="rounded-lg bg-slate-950/80 p-4 border border-slate-700/50">
            <h4 className="text-sm font-semibold text-white mb-2">Client-Server Trust Model</h4>
            <p className="text-slate-300 text-sm mb-2">
              <strong>Golden rule:</strong> Never trust client. Semua logical decisions harus made di server.
            </p>
            <ul className="text-slate-300 text-sm space-y-1 list-disc pl-5">
              <li>Client bisa modify LocalScripts, variables, dan behavior dengan exploits.</li>
              <li>Server adalah satu-satunya source of truth.</li>
              <li>Validate setiap client request di server sebelum execute.</li>
            </ul>
          </div>

          <div className="rounded-lg bg-slate-950/80 p-4 border border-slate-700/50">
            <h4 className="text-sm font-semibold text-white mb-2">Common Exploit Vectors & Mitigation</h4>
            <div className="space-y-2 text-sm text-slate-300">
              <div className="bg-slate-900/50 rounded p-2">
                <p className="text-white font-semibold">Teleport Exploit</p>
                <p className="text-slate-400"><strong>Mitigation:</strong> Validate position changes. Jika movement tidak realistic, reject.</p>
              </div>
              <div className="bg-slate-900/50 rounded p-2">
                <p className="text-white font-semibold">Damage Bypass</p>
                <p className="text-slate-400"><strong>Mitigation:</strong> Damage calculation di server, jangan trust client damage value.</p>
              </div>
              <div className="bg-slate-900/50 rounded p-2">
                <p className="text-white font-semibold">Infinite Money</p>
                <p className="text-slate-400"><strong>Mitigation:</strong> Currency transactions di server dengan validation.</p>
              </div>
              <div className="bg-slate-900/50 rounded p-2">
                <p className="text-white font-semibold">Speed Hack</p>
                <p className="text-slate-400"><strong>Mitigation:</strong> Limit velocity di server, detect unrealistic speeds.</p>
              </div>
            </div>
          </div>

          <div className="rounded-lg bg-slate-950/80 p-4 border border-slate-700/50">
            <h4 className="text-sm font-semibold text-white mb-2">Input Validation Checklist</h4>
            <ul className="text-slate-300 text-sm space-y-1 list-disc pl-5">
              <li>Type check — Verify argument types sebelum use.</li>
              <li>Range check — Damage tidak boleh negative atau absurdly high.</li>
              <li>Rate limit — Jangan allow terlalu banyak requests dalam waktu singkat.</li>
              <li>Permission check — Verify player punya permission untuk action (ownership, role, etc).</li>
              <li>Cooldown — Enforce cooldowns untuk powerful actions di server.</li>
              <li>Anti-cheat telemetry — Log suspicious behavior untuk analysis dan banning.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* BEST PRACTICES SUMMARY */}
      <section className="rounded-[1rem] border border-cyan-500/30 bg-cyan-500/10 p-6">
        <h3 className="text-lg font-semibold text-cyan-300 mb-4">✅ Checklist Best Practices</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="text-sm text-slate-300">
            <p className="font-semibold text-white mb-2">Scripting</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Validate server-side</li>
              <li>Separate concerns</li>
              <li>Use ModuleScripts</li>
              <li>Document functions</li>
            </ul>
          </div>
          <div className="text-sm text-slate-300">
            <p className="font-semibold text-white mb-2">Performance</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Profile regularly</li>
              <li>Optimize draw calls</li>
              <li>Cache computations</li>
              <li>Stream assets</li>
            </ul>
          </div>
          <div className="text-sm text-slate-300">
            <p className="font-semibold text-white mb-2">DataStore</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Handle errors</li>
              <li>Version data</li>
              <li>Respect rate limits</li>
              <li>Backup critical data</li>
            </ul>
          </div>
          <div className="text-sm text-slate-300">
            <p className="font-semibold text-white mb-2">Security</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Never trust client</li>
              <li>Rate limit requests</li>
              <li>Log suspicious activity</li>
              <li>Test with exploiters</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
