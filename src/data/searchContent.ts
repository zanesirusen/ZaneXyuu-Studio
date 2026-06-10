export interface SearchResult {
  id: string;
  title: string;
  category: string;
  description: string;
  page: string;
  keywords: string[];
}

export const searchableContent: SearchResult[] = [
  // Tutorials
  {
    id: "tut-basics",
    title: "Dasar-Dasar Luau",
    category: "Tutorials",
    description: "Print, variables, types, conditionals, loops dalam Luau",
    page: "tutorials",
    keywords: ["luau", "basic", "variables", "print", "loop", "conditional"],
  },
  {
    id: "tut-remoteevent",
    title: "Client-Server Communication",
    category: "Tutorials",
    description: "RemoteEvent untuk komunikasi aman antara client dan server",
    page: "tutorials",
    keywords: ["remoteevent", "client", "server", "communication", "fireevent"],
  },
  {
    id: "tut-datastore",
    title: "DataStore Save & Load",
    category: "Tutorials",
    description: "Menyimpan dan memuat data pemain dengan DataStore",
    page: "tutorials",
    keywords: ["datastore", "save", "load", "persistent", "data"],
  },
  {
    id: "tut-module",
    title: "ModuleScript untuk Code Reuse",
    category: "Tutorials",
    description: "Modularisasi kode dengan ModuleScript untuk reusability",
    page: "tutorials",
    keywords: ["modulescript", "reuse", "require", "function"],
  },
  {
    id: "tut-coroutines",
    title: "Coroutines untuk Async Work",
    category: "Tutorials",
    description: "Menjalankan pekerjaan asinkron tanpa freeze game",
    page: "tutorials",
    keywords: ["coroutines", "async", "spawn", "wait", "background"],
  },
  {
    id: "tut-events",
    title: "Events & Connections",
    category: "Tutorials",
    description: "Listen untuk changes dengan :Connect() dan :Wait()",
    page: "tutorials",
    keywords: ["events", "connect", "touched", "died", "playeradded", "signal"],
  },
  {
    id: "tut-humanoid",
    title: "Humanoid & Combat System",
    category: "Tutorials",
    description: "Damage, health, dan sistem pertarungan dengan Humanoid",
    page: "tutorials",
    keywords: ["humanoid", "damage", "health", "combat", "takedamage"],
  },
  {
    id: "tut-gui",
    title: "GUI/UI — TextButton & TextLabel",
    category: "Tutorials",
    description: "Membuat interface dengan button, label, dan input handling",
    page: "tutorials",
    keywords: ["gui", "ui", "textbutton", "textlabel", "input", "userinput"],
  },
  {
    id: "tut-animations",
    title: "Animations & Tweens",
    category: "Tutorials",
    description: "Smooth motion dengan TweenService",
    page: "tutorials",
    keywords: ["animation", "tween", "tweenservice", "motion", "smooth"],
  },
  {
    id: "tut-raycasting",
    title: "Raycasting — Detection",
    category: "Tutorials",
    description: "Detect collisions dan line of sight dengan raycast",
    page: "tutorials",
    keywords: ["raycast", "detection", "collision", "raycasting", "sight"],
  },
  {
    id: "tut-tables",
    title: "Tables & Data Structures",
    category: "Tutorials",
    description: "Array, dictionary, dan loops untuk organize data",
    page: "tutorials",
    keywords: ["table", "array", "dictionary", "ipairs", "pairs"],
  },
  {
    id: "tut-errors",
    title: "Error Handling & Debugging",
    category: "Tutorials",
    description: "Catch errors dengan pcall dan debugging techniques",
    page: "tutorials",
    keywords: ["error", "debugging", "pcall", "assert", "debug"],
  },
  
  // Systems
  {
    id: "sys-scripting",
    title: "Scripting & Luau Architecture",
    category: "Systems",
    description: "Client-server architecture, RemoteEvent, security best practices",
    page: "systems",
    keywords: ["scripting", "luau", "client", "server", "architecture"],
  },
  {
    id: "sys-performance",
    title: "Performance Optimization",
    category: "Systems",
    description: "Draw calls, LOD, streaming, CPU optimization, network optimization",
    page: "systems",
    keywords: ["performance", "optimization", "fps", "lag", "cpu", "gpu"],
  },
  {
    id: "sys-datastore",
    title: "DataStore System",
    category: "Systems",
    description: "Persistent data, rate limits, error handling, data structure",
    page: "systems",
    keywords: ["datastore", "database", "persistent", "rate limit"],
  },
  {
    id: "sys-networking",
    title: "Networking & Replication",
    category: "Systems",
    description: "Automatic replication, RemoteEvent, client prediction",
    page: "systems",
    keywords: ["networking", "replication", "network", "bandwidth"],
  },
  {
    id: "sys-memory",
    title: "Memory Management",
    category: "Systems",
    description: "Memory leaks, resource cleanup, garbage collection",
    page: "systems",
    keywords: ["memory", "leak", "cleanup", "disconnect"],
  },
  {
    id: "sys-security",
    title: "Security & Anti-Cheat",
    category: "Systems",
    description: "Client-server trust, exploit prevention, input validation",
    page: "systems",
    keywords: ["security", "exploit", "cheat", "validation", "anticheat"],
  },
];

export function searchContent(query: string): SearchResult[] {
  const lowerQuery = query.toLowerCase().trim();
  if (!lowerQuery) return [];

  return searchableContent.filter((item) => {
    const titleMatch = item.title.toLowerCase().includes(lowerQuery);
    const descMatch = item.description.toLowerCase().includes(lowerQuery);
    const keywordMatch = item.keywords.some((kw) => kw.includes(lowerQuery));

    return titleMatch || descMatch || keywordMatch;
  });
}
