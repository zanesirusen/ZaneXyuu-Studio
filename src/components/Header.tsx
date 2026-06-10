import { useState } from 'react';
import { navigation, type Page } from '../data/navigation';

interface HeaderProps {
  page: Page;
  onNavigate: (href: string) => void;
}

export default function Header({ page, onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-8">
        <a
          href="/home"
          className="text-xl font-semibold text-white"
          onClick={(event) => {
            event.preventDefault();
            onNavigate('/home');
          }}
        >
          ZaneXyuu Studio
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 md:flex">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(event) => {
                event.preventDefault();
                onNavigate(item.href);
              }}
              className={`text-sm font-medium transition ${page === item.page ? 'text-white' : 'text-slate-300 hover:text-white'}`}
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Desktop CTA Button */}
        <a
          href="https://discord.gg/kVbh6bKvfd"
          target="_blank"
          rel="noreferrer"
          className="hidden rounded-full bg-cyan-500 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400 md:inline-block"
        >
          Join Discord
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden flex flex-col gap-1.5"
          aria-label="Toggle menu"
        >
          <div className="h-1 w-6 bg-white rounded transition"></div>
          <div className="h-1 w-6 bg-white rounded transition"></div>
          <div className="h-1 w-6 bg-white rounded transition"></div>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-800/80 bg-slate-900/95 px-6 py-4">
          <nav className="flex flex-col gap-3">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(event) => {
                  event.preventDefault();
                  setMobileMenuOpen(false);
                  onNavigate(item.href);
                }}
                className={`text-sm font-medium transition ${page === item.page ? 'text-cyan-300' : 'text-slate-300 hover:text-white'}`}
              >
                {item.name}
              </a>
            ))}
            <a
              href="https://discord.com"
              target="_blank"
              rel="noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 rounded-full bg-cyan-500 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400 text-center"
            >
              Join Discord
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
