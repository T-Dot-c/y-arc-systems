import { motion } from 'motion/react';
import { Clock, User, Calendar, ArrowRight } from 'lucide-react';

interface FeaturedPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  imageUrl: string;
}

export default function BlogLegacyFeatured({ post }: { post: FeaturedPost }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="mb-24 group cursor-pointer"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 bg-white rounded-3xl overflow-hidden border border-outline-variant/30 shadow-xl shadow-primary/5 hover:shadow-2xl hover:shadow-secondary/10 transition-all duration-500">
        {/* Image Side */}
        <div className="relative h-[400px] lg:h-auto overflow-hidden bg-gradient-to-br from-secondary/10 to-primary/10 flex items-center justify-center">
          <motion.img
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.7 }}
            src={post.imageUrl}
            alt={post.title}
            className="absolute inset-0 w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>

        {/* Content Side */}
        <div className="p-12 lg:p-16 flex flex-col justify-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

          <div className="flex items-center gap-4 mb-6">
            <span className="px-3 py-1 bg-secondary text-white text-[10px] font-black uppercase tracking-widest rounded-md">
              {post.category}
            </span>
            <span className="text-xs font-bold text-outline uppercase tracking-wider flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {post.readTime}
            </span>
          </div>

          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-primary mb-6 group-hover:text-secondary transition-colors line-clamp-3">
            {post.title}
          </h2>

          <p className="text-outline text-base leading-relaxed mb-8 line-clamp-3">
            {post.excerpt}
          </p>

          <div className="mt-auto flex items-center justify-between pt-8 border-t border-outline-variant/30">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-surface border border-outline-variant/50 flex items-center justify-center text-secondary">
                <User className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-bold text-primary">{post.author}</p>
                <p className="text-xs font-medium text-outline flex items-center gap-1">
                  <Calendar className="w-3 h-3" /> {post.date}
                </p>
              </div>
            </div>

            <div className="w-12 h-12 rounded-full bg-surface flex items-center justify-center group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
              <ArrowRight className="w-5 h-5" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
