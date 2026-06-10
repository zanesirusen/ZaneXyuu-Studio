import { useEffect, useMemo, useState } from 'react';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import FreeAssetPage from './pages/FreeAssetPage';
import SystemsPage from './pages/SystemsPage';
import TutorialsPage from './pages/TutorialsPage';
import SearchPage from './pages/SearchPage';
import StudioGuidePage from './pages/StudioGuidePage';
import { navigation, getPageFromPath, type Page } from './data/navigation';
import { freeAssets } from './data/freeAssets';

function App() {
  const [page, setPage] = useState<Page>(getPageFromPath());

  useEffect(() => {
    const onLocationChange = () => setPage(getPageFromPath());
    const currentPath = window.location.pathname.toLowerCase().replace(/^\/+/g, '').replace(/\/+$/g, '');

    if (!currentPath || !navigation.some((item) => item.page === currentPath)) {
      window.history.replaceState({}, '', '/home');
      setPage('home');
    }

    window.addEventListener('popstate', onLocationChange);
    return () => window.removeEventListener('popstate', onLocationChange);
  }, []);

  const navigateTo = (href: string) => {
    window.history.pushState({}, '', href);
    setPage(getPageFromPath());
  };

  const pageTitle = useMemo(() => {
    const item = navigation.find((item) => item.page === page);
    return item?.name ?? 'Home';
  }, [page]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Header page={page} onNavigate={navigateTo} />

      <main className="px-6 py-10 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="page-transition rounded-[2rem] border border-slate-800/90 bg-slate-900/95 p-8 shadow-soft sm:p-12">
            <div className="mb-8 flex flex-col gap-4 border-b border-slate-800/80 pb-6">
              <span className="inline-flex rounded-full bg-cyan-500/15 px-4 py-1 text-sm font-semibold text-cyan-300 ring-1 ring-cyan-500/20 animate-fade-in">
                {pageTitle} Page
              </span>
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl animate-slide-in-left">
                {pageTitle} ZaneXyuu Studio
              </h1>
              <p className="max-w-3xl text-lg leading-8 text-slate-400 animate-fade-in delay-fade-100">
                {page === 'home'
                  ? 'Mulai dari halaman utama dengan desain profesional, animasi halus, dan navigasi yang jelas ke asset dan komunitas.'
                  : page === 'free-asset'
                  ? 'ZaneXyuu Studio menyediakan berbagai file RBXM dan asset gratis untuk membantu kamu dalam pengembangan Roblox.'
                  : page === 'systems'
                  ? 'Pelajari cara kerja sistem inti Roblox Studio: scripting, performance optimization, dan data persistence dengan DataStore.'
                  : page === 'tutorials'
                  ? 'Tutorial praktis dengan contoh code Luau siap pakai untuk client-server communication, DataStore, ModuleScript, dan coroutines.'
                  : page === 'guide'
                  ? 'Panduan Studio yang komprehensif: tips, keyboard shortcuts, debugging techniques, dan best practices untuk development Roblox.'
                  : 'Gabung ke komunitas Discord kami untuk update asset, dukungan, dan kolaborasi real-time.'}
              </p>
            </div>

            {page === 'home' && <HomePage />}
            {page === 'free-asset' && <FreeAssetPage freeAssets={freeAssets} />}
            {page === 'systems' && <SystemsPage />}
            {page === 'tutorials' && <TutorialsPage />}
            {page === 'search' && <SearchPage />}
            {page === 'guide' && <StudioGuidePage />}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
