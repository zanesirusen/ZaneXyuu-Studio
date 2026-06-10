export default function StudioGuidePage() {
  return (
    <div className="space-y-8 animate-page-content">
      <header className="rounded-[1.25rem] border border-slate-800/90 bg-slate-950/95 p-8">
        <h2 className="text-2xl font-semibold text-white">Studio Guide — Tips & Best Practices</h2>
        <p className="mt-3 text-slate-400">Panduan lengkap untuk memaksimalkan produktivitas di Roblox Studio dengan tips, shortcut, dan best practices.</p>
      </header>

      {/* STUDIO INTERFACE SECTION */}
      <section className="rounded-[1rem] border border-slate-800/80 bg-slate-900/95 p-6">
        <h3 className="text-xl font-semibold text-cyan-300 mb-4">🎮 Memahami Studio Interface</h3>
        <div className="space-y-4">
          <div className="rounded-lg bg-slate-950/80 p-4 border border-slate-700/50">
            <p className="text-sm font-semibold text-white mb-2">Main Windows</p>
            <div className="space-y-2 text-slate-300 text-sm">
              <div className="border-l-2 border-cyan-500/50 pl-3">
                <p><strong>Explorer:</strong> Lihat seluruh hierarchy objects (Workspace, Scripts, GUI, dll). Klik object di Explorer untuk select di viewport.</p>
              </div>
              <div className="border-l-2 border-cyan-500/50 pl-3">
                <p><strong>Properties:</strong> Edit properties object yang selected (Position, Size, Color, CanCollide, dll). Double-click value untuk edit.</p>
              </div>
              <div className="border-l-2 border-cyan-500/50 pl-3">
                <p><strong>Output:</strong> Lihat print() output, error messages, dan warnings dari script. Very important untuk debugging!</p>
              </div>
              <div className="border-l-2 border-cyan-500/50 pl-3">
                <p><strong>Command Bar:</strong> Execute Luau commands saat playtesting. Berguna untuk quick testing tanpa edit script.</p>
              </div>
            </div>
          </div>

          <div className="rounded-lg bg-slate-950/80 p-4 border border-slate-700/50">
            <p className="text-sm font-semibold text-white mb-2">Views & Customization</p>
            <ul className="list-disc pl-5 text-slate-300 text-sm space-y-1">
              <li><strong>View tab:</strong> Toggle windows (Explorer, Properties, Output, Terrain) on/off.</li>
              <li><strong>Studio Settings:</strong> Customize theme, shortcuts, grid snap, auto-save interval.</li>
              <li><strong>Rendering:</strong> Toggle wireframe, highlight parts, show constraints untuk debugging.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* KEYBOARD SHORTCUTS SECTION */}
      <section className="rounded-[1rem] border border-slate-800/80 bg-slate-900/95 p-6">
        <h3 className="text-xl font-semibold text-yellow-300 mb-4">⌨️ Essential Keyboard Shortcuts</h3>
        <div className="space-y-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="rounded-lg bg-slate-950/80 p-3 border border-slate-700/50">
              <p className="text-xs font-semibold text-white mb-1">Building & Selection</p>
              <ul className="text-xs text-slate-300 space-y-0.5">
                <li><strong>Ctrl+D:</strong> Duplicate selected object</li>
                <li><strong>Delete:</strong> Delete selected</li>
                <li><strong>Ctrl+Z:</strong> Undo</li>
                <li><strong>Ctrl+Y:</strong> Redo</li>
                <li><strong>G:</strong> Toggle grid snap</li>
              </ul>
            </div>
            <div className="rounded-lg bg-slate-950/80 p-3 border border-slate-700/50">
              <p className="text-xs font-semibold text-white mb-1">Script & Testing</p>
              <ul className="text-xs text-slate-300 space-y-0.5">
                <li><strong>F5:</strong> Start playtesting</li>
                <li><strong>Shift+F5:</strong> Stop playtesting</li>
                <li><strong>Ctrl+Shift+P:</strong> Search commands (quick access)</li>
                <li><strong>Ctrl+F:</strong> Find in script</li>
                <li><strong>Ctrl+H:</strong> Find & replace</li>
              </ul>
            </div>
            <div className="rounded-lg bg-slate-950/80 p-3 border border-slate-700/50">
              <p className="text-xs font-semibold text-white mb-1">Studio Views</p>
              <ul className="text-xs text-slate-300 space-y-0.5">
                <li><strong>Ctrl+1:</strong> Toggle Explorer</li>
                <li><strong>Ctrl+2:</strong> Toggle Properties</li>
                <li><strong>Ctrl+3:</strong> Toggle Output</li>
                <li><strong>Alt+Tab:</strong> Switch windows</li>
              </ul>
            </div>
            <div className="rounded-lg bg-slate-950/80 p-3 border border-slate-700/50">
              <p className="text-xs font-semibold text-white mb-1">Viewport Navigation</p>
              <ul className="text-xs text-slate-300 space-y-0.5">
                <li><strong>Middle Mouse:</strong> Rotate camera</li>
                <li><strong>Scroll:</strong> Zoom in/out</li>
                <li><strong>Right Click:</strong> Pan camera</li>
                <li><strong>F:</strong> Focus selected object</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* WORKFLOW TIPS SECTION */}
      <section className="rounded-[1rem] border border-slate-800/80 bg-slate-900/95 p-6">
        <h3 className="text-xl font-semibold text-emerald-300 mb-4">⚡ Workflow & Productivity Tips</h3>
        <div className="space-y-4">
          <div className="rounded-lg bg-slate-950/80 p-4 border border-slate-700/50">
            <p className="text-sm font-semibold text-white mb-2">✓ Organize dengan Folders</p>
            <p className="text-slate-300 text-sm mb-2">Buat folder di Workspace untuk organize models (e.g., "Map", "Enemies", "Decorations"). Easier to manage large games.</p>
          </div>

          <div className="rounded-lg bg-slate-950/80 p-4 border border-slate-700/50">
            <p className="text-sm font-semibold text-white mb-2">✓ Use Collections untuk Quick Access</p>
            <p className="text-slate-300 text-sm mb-2">Buat Collection (View → Collections) untuk group related objects. Jadi bisa quick-select tanpa scroll Explorer.</p>
          </div>

          <div className="rounded-lg bg-slate-950/80 p-4 border border-slate-700/50">
            <p className="text-sm font-semibold text-white mb-2">✓ Naming Convention</p>
            <p className="text-slate-300 text-sm mb-2">
              Beri nama descriptive ke semua objects. Jangan pakai "Part", "Model1", etc. Use: <code className="bg-slate-950/60 px-1 rounded text-cyan-300">"Enemy_Goblin"</code>, <code className="bg-slate-950/60 px-1 rounded text-cyan-300">"Floor_Wood"</code>, <code className="bg-slate-950/60 px-1 rounded text-cyan-300">"Button_Spawn"</code>
            </p>
          </div>

          <div className="rounded-lg bg-slate-950/80 p-4 border border-slate-700/50">
            <p className="text-sm font-semibold text-white mb-2">✓ Enable Autosave</p>
            <p className="text-slate-300 text-sm mb-2">File → Settings → Autosave interval. Set to 5-10 menit agar tidak kehilangan progress saat crash.</p>
          </div>

          <div className="rounded-lg bg-slate-950/80 p-4 border border-slate-700/50">
            <p className="text-sm font-semibold text-white mb-2">✓ Use Team Create untuk Collaboration</p>
            <p className="text-slate-300 text-sm mb-2">Ajak developer lain edit game bareng real-time dengan Team Create feature. Tools → Team Create.</p>
          </div>

          <div className="rounded-lg bg-slate-950/80 p-4 border border-slate-700/50">
            <p className="text-sm font-semibold text-white mb-2">✓ Enable Script Analysis</p>
            <p className="text-slate-300 text-sm mb-2">Buka script editor → klik gear icon → Enable Script Analysis. Akan warn jika ada undefined variable atau syntax error before runtime.</p>
          </div>
        </div>
      </section>

      {/* DEBUGGING SECTION */}
      <section className="rounded-[1rem] border border-slate-800/80 bg-slate-900/95 p-6">
        <h3 className="text-xl font-semibold text-violet-300 mb-4">🐛 Debugging Techniques</h3>
        <div className="space-y-4">
          <div className="rounded-lg bg-slate-950/80 p-4 border border-slate-700/50">
            <p className="text-sm font-semibold text-white mb-2">1. Monitor Output Window Religiously</p>
            <p className="text-slate-300 text-sm">View → Output untuk lihat print() output dan error messages. Setiap error ada line number — click untuk go to script.</p>
          </div>

          <div className="rounded-lg bg-slate-950/80 p-4 border border-slate-700/50">
            <p className="text-sm font-semibold text-white mb-2">2. Strategic Prints untuk Trace Execution</p>
            <pre className="text-xs text-slate-200 bg-slate-950/60 p-2 rounded overflow-x-auto">
{`local function complexLogic()
  print("Step 1: Starting function")
  local result = someComputation()
  print("Step 2: Result = " .. result)
  if result > 0 then
    print("Step 3: Result is positive")
  end
  print("Step 4: Function complete")
end`}
            </pre>
          </div>

          <div className="rounded-lg bg-slate-950/80 p-4 border border-slate-700/50">
            <p className="text-sm font-semibold text-white mb-2">3. Use wait() untuk Slow-Motion Testing</p>
            <p className="text-slate-300 text-sm">Tambah wait(5) di awal script untuk pause 5 detik, beri waktu attach Debugger atau Monitor Output sebelum logic jalan.</p>
          </div>

          <div className="rounded-lg bg-slate-950/80 p-4 border border-slate-700/50">
            <p className="text-sm font-semibold text-white mb-2">4. Breakpoints & Debugger (Advanced)</p>
            <p className="text-slate-300 text-sm">Ctrl+Shift+P → "Debugger" untuk set breakpoints. Pause execution, inspect variables, step through code line-by-line.</p>
          </div>

          <div className="rounded-lg bg-slate-950/80 p-4 border border-slate-700/50">
            <p className="text-sm font-semibold text-white mb-2">5. Command Bar untuk Quick Testing</p>
            <p className="text-slate-300 text-sm">Saat playtesting, ketik di Command Bar: <code className="bg-slate-950/60 px-1 rounded text-cyan-300">game.Players:GetPlayers()[1].Character.Humanoid.Health = 0</code> untuk instantly kill player.</p>
          </div>
        </div>
      </section>

      {/* PERFORMANCE MONITORING SECTION */}
      <section className="rounded-[1rem] border border-slate-800/80 bg-slate-900/95 p-6">
        <h3 className="text-xl font-semibold text-rose-300 mb-4">📊 Performance Monitoring in Studio</h3>
        <div className="space-y-4">
          <div className="rounded-lg bg-slate-950/80 p-4 border border-slate-700/50">
            <p className="text-sm font-semibold text-white mb-2">Built-in Profiler</p>
            <p className="text-slate-300 text-sm mb-2">Saat playtesting, klik View → Stats atau press Ctrl+F3. Lihat:</p>
            <ul className="list-disc pl-5 text-slate-300 text-sm space-y-1">
              <li><strong>FPS:</strong> Frames per second (client rendering).</li>
              <li><strong>CPU:</strong> Server-side processing usage.</li>
              <li><strong>Memory:</strong> RAM consumption (watch for leaks).</li>
              <li><strong>Network:</strong> Data sent/received per second.</li>
            </ul>
          </div>

          <div className="rounded-lg bg-slate-950/80 p-4 border border-slate-700/50">
            <p className="text-sm font-semibold text-white mb-2">Monitoring Scripts Memory</p>
            <pre className="text-xs text-slate-200 bg-slate-950/60 p-2 rounded overflow-x-auto">
{`local memory = game:GetService("CollectionService")
local chunks = collectgarbage("count")
print("Memory: " .. chunks .. " KB")`}
            </pre>
          </div>

          <div className="rounded-lg bg-slate-950/80 p-4 border border-slate-700/50">
            <p className="text-sm font-semibold text-white mb-2">Part Count Warning</p>
            <p className="text-slate-300 text-sm">Terlalu banyak Part = lag. Studio akan warn jika Part count tinggi. Goal: keep under 10k Parts untuk average game.</p>
          </div>
        </div>
      </section>

      {/* PLUGINS & TOOLS SECTION */}
      <section className="rounded-[1rem] border border-slate-800/80 bg-slate-900/95 p-6">
        <h3 className="text-xl font-semibold text-indigo-300 mb-4">🛠️ Useful Plugins & Tools</h3>
        <div className="space-y-3">
          <div className="rounded-lg bg-slate-950/80 p-3 border border-slate-700/50">
            <p className="text-xs font-semibold text-white mb-1">Community Plugins (Search di Toolbox)</p>
            <ul className="text-xs text-slate-300 space-y-1">
              <li><strong>StudioPlus:</strong> Enhance Studio with useful features.</li>
              <li><strong>Rojo:</strong> Sync code dari external editor ke Studio (for advanced dev).</li>
              <li><strong>Tag Editor:</strong> Manage tags untuk object grouping.</li>
              <li><strong>Animation Editor:</strong> Advanced animation tools beyond basic.</li>
              <li><strong>Constraint Helper:</strong> Visualize physics constraints.</li>
            </ul>
          </div>

          <div className="rounded-lg bg-slate-950/80 p-3 border border-slate-700/50">
            <p className="text-xs font-semibold text-white mb-1">Built-in Tools</p>
            <ul className="text-xs text-slate-300 space-y-1">
              <li><strong>Terrain Editor:</strong> Tools → Terrain Editor untuk build landscape.</li>
              <li><strong>Color Picker:</strong> Easily pick colors dari object.</li>
              <li><strong>Grid & Snap:</strong> G key untuk toggle, set precision untuk building.</li>
              <li><strong>Material Manager:</strong> Manage textures & materials.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* COMMON MISTAKES SECTION */}
      <section className="rounded-[1rem] border border-red-500/30 bg-red-500/10 p-6">
        <h3 className="text-xl font-semibold text-red-300 mb-4">⚠️ Common Studio Mistakes</h3>
        <div className="space-y-2 text-slate-300 text-sm">
          <p><strong>❌ Tidak save sebelum testing:</strong> Saat playtesting, script changes tidak tersave. Test, exit play mode, then save.</p>
          <p><strong>❌ Scripts in wrong location:</strong> Server scripts harus di ServerScriptService, client scripts di StarterPlayer/StarterGui.</p>
          <p><strong>❌ Forgetting to disable Filtering Enabled:</strong> Untuk multiplayer, Workspace → FilteringEnabled harus ON (default). Jika OFF, semua client bisa manipulate game state.</p>
          <p><strong>❌ Not monitoring Output:</strong> Error messages di Output memberikan clue debugging. Always check!</p>
          <p><strong>❌ Creating too many Parts:</strong> Each Part = overhead. Use Mesh untuk complex geometry, union sparingly.</p>
          <p><strong>❌ Not using anchored correctly:</strong> Part yang tidak perlu physics harus Anchored. Jinak-jinak compute cost.</p>
        </div>
      </section>

      {/* QUICK REFERENCE SECTION */}
      <section className="rounded-[1rem] border border-cyan-500/30 bg-cyan-500/10 p-6">
        <h3 className="text-lg font-semibold text-cyan-300 mb-4">📌 Quick Reference Checklist</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="text-sm text-slate-300">
            <p className="font-semibold text-white mb-2">Before Publishing</p>
            <ul className="space-y-1 text-xs">
              <li>☐ Test multiplayer mode</li>
              <li>☐ Check Output for errors</li>
              <li>☐ Monitor FPS/performance</li>
              <li>☐ Validate user input on server</li>
              <li>☐ Test DataStore save/load</li>
            </ul>
          </div>
          <div className="text-sm text-slate-300">
            <p className="font-semibold text-white mb-2">Daily Development</p>
            <ul className="space-y-1 text-xs">
              <li>☐ Enable autosave</li>
              <li>☐ Use version control (Git)</li>
              <li>☐ Keep Output window open</li>
              <li>☐ Profile regularly</li>
              <li>☐ Use meaningful names</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
