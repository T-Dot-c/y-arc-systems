import { Search } from 'lucide-react';

interface BlogFilterBarProps {
  categories: string[];
  activeCategory: string;
  setActiveCategory: (category: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export default function BlogFilterBar({
  categories,
  activeCategory,
  setActiveCategory,
  searchQuery,
  setSearchQuery
}: BlogFilterBarProps) {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
      {/* Categories */}
      <div className="flex flex-wrap items-center gap-2 bg-white p-2 rounded-2xl border border-outline-variant/30 shadow-sm">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
              activeCategory === category
                ? 'bg-primary text-white shadow-md'
                : 'text-outline hover:bg-surface hover:text-primary'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Search */}
      <div className="relative w-full md:w-auto">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-outline" />
        <input
          type="text"
          placeholder="Search articles..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full md:w-[300px] bg-white border border-outline-variant/30 rounded-2xl py-3 pl-11 pr-4 text-sm font-medium text-primary placeholder:text-outline/50 outline-none focus:border-secondary focus:ring-4 focus:ring-secondary/10 transition-all"
        />
      </div>
    </div>
  );
}
