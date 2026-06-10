export type Page = 'home' | 'free-asset' | 'systems' | 'tutorials' | 'search' | 'guide';

export const navigation = [
  { name: 'Home', href: '/home', page: 'home' as const },
  { name: 'Free Asset', href: '/free-asset', page: 'free-asset' as const },
  { name: 'Systems', href: '/systems', page: 'systems' as const },
  { name: 'Tutorials', href: '/tutorials', page: 'tutorials' as const },
  { name: 'Guide', href: '/guide', page: 'guide' as const },
  { name: 'Search', href: '/search', page: 'search' as const },
] as const;

export function getPageFromPath(): Page {
  if (typeof window === 'undefined') {
    return 'home';
  }

  const hash = window.location.hash.replace('#', '').toLowerCase();
  if (hash && navigation.some((item) => item.page === hash)) {
    return hash as Page;
  }

  const path = window.location.pathname.toLowerCase().replace(/^\/+/g, '').replace(/\/+$/g, '');
  if (!path) {
    return 'home';
  }

  return navigation.some((item) => item.page === path) ? (path as Page) : 'home';
}
