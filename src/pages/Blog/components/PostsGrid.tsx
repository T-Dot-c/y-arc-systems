import { motion } from 'motion/react';
import { Search, ArrowRight } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  gradient: string;
}

interface BlogPostsGridProps {
  posts: BlogPost[];
  searchQuery: string;
  activeCategory: string;
  onClearFilters: () => void;
}

export default function BlogPostsGrid({
  posts,
  searchQuery,
  activeCategory,
  onClearFilters
}: BlogPostsGridProps) {
  return (
    <motion.div
      layout
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24"
    >
      {posts.length > 0 ? (
        posts.map((post, idx) => (
          <motion.div
            layout
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3, delay: idx * 0.05 }}
            key={post.id}
            className="group cursor-pointer bg-white rounded-3xl overflow-hidden border border-outline-variant/30 shadow-sm hover:shadow-xl hover:shadow-secondary/10 transition-all duration-500 flex flex-col h-full"
          >
            {/* Thumbnail Area (Abstract Gradient Placeholder) */}
            <div className={`h-48 w-full bg-gradient-to-br ${post.gradient} relative overflow-hidden flex items-center justify-center p-6`}>
              <div className="absolute inset-0 bg-white/20 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              {/* Decorative Hexagon */}
              <div className="w-24 h-24 border border-white/30 rounded-2xl rotate-12 group-hover:rotate-45 group-hover:scale-110 transition-transform duration-700 ease-out" />

              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-white/90 backdrop-blur-md text-primary text-[10px] font-black uppercase tracking-widest rounded-md shadow-sm">
                  {post.category}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-8 flex flex-col flex-1 relative">
              <h3 className="text-xl font-bold tracking-tight text-primary mb-3 group-hover:text-secondary transition-colors line-clamp-2">
                {post.title}
              </h3>
              <p className="text-sm text-outline leading-relaxed mb-6 line-clamp-3 flex-1">
                {post.excerpt}
              </p>

              <div className="pt-6 border-t border-outline-variant/30 mt-auto flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="text-[11px] font-bold text-primary mb-1">{post.author}</span>
                  <span className="text-[10px] font-medium text-outline flex items-center gap-1">
                    {post.date} • {post.readTime}
                  </span>
                </div>
                <ArrowRight className="w-4 h-4 text-outline group-hover:text-secondary group-hover:translate-x-1 transition-all" />
              </div>
            </div>
          </motion.div>
        ))
      ) : (
        <div className="col-span-full py-20 text-center">
          <div className="w-16 h-16 bg-surface rounded-2xl flex items-center justify-center mx-auto mb-4 text-outline">
            <Search className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-bold text-primary mb-2">No articles found</h3>
          <p className="text-outline text-sm">We couldn't find any articles matching "{searchQuery}" in {activeCategory}.</p>
          <button
            onClick={onClearFilters}
            className="mt-6 px-6 py-2 bg-primary text-white text-xs font-bold uppercase tracking-widest rounded-full hover:bg-secondary transition-colors"
          >
            Clear Filters
          </button>
        </div>
      )}
    </motion.div>
  );
}
