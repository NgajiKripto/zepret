import { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'motion/react';
import './TrueFocus.css';

// Showcase Gallery Component with Motion Effects
const ShowcaseCard = ({ image, name, style, delay }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50, scale: 0.9 },
        visible: { 
          opacity: 1, 
          y: 0, 
          scale: 1,
          transition: { 
            duration: 0.6, 
            delay: delay,
            type: "spring",
            stiffness: 100
          }
        }
      }}
      whileHover={{ 
        y: -10, 
        scale: 1.05,
        transition: { duration: 0.3 }
      }}
      className="showcase-card relative group cursor-pointer overflow-hidden rounded-2xl border border-white/10 shadow-2xl"
      style={style}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10 opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
      
      <motion.img
        src={image}
        alt={`Hasil Zepret ${name}`}
        className="w-full h-full object-cover"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.5 }}
      />
      
      <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileHover={{ opacity: 1, y: 0 }}
          className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
        >
          <p className="text-primary font-bold text-lg font-headline">{name}</p>
          <div className="flex items-center gap-2 mt-2">
            <span className="material-symbols-outlined text-tertiary text-sm">verified</span>
            <span className="text-zinc-300 text-sm font-body">#ZepretFam</span>
          </div>
        </motion.div>
      </div>
      
      {/* Hover Glow Effect */}
      <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" 
           style={{ mixBlendMode: 'overlay' }} />
    </motion.div>
  );
};

export const ResultsShowcase = () => {
  const showcaseData = [
    {
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&h=800&fit=crop",
      name: "@sarah_zepret",
      style: { gridRow: 'span 2' }
    },
    {
      image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&h=600&fit=crop",
      name: "@kevin_style"
    },
    {
      image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600&h=600&fit=crop",
      name: "@luna_vibes"
    },
    {
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600&h=600&fit=crop",
      name: "@arya_photo"
    },
    {
      image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=600&h=800&fit=crop",
      name: "@dinda_aesthetic",
      style: { gridRow: 'span 2' }
    },
    {
      image: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=600&h=600&fit=crop",
      name: "@rizky_frame"
    }
  ];

  return (
    <section className="py-32 px-6 max-w-7xl mx-auto relative">
      {/* Background Glow */}
      <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[700px] bg-primary-container/10 blur-[150px] rounded-full" />
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border border-white/10 text-primary font-label text-sm font-semibold tracking-wider uppercase mb-6">
          <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>photo_camera</span>
          Community Gallery
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-headline font-extrabold text-white mb-6">
          Hasil <span className="text-transparent bg-clip-text bg-gradient-to-br from-primary to-primary-container">Zepret</span> Teman Kita
        </h2>
        <p className="text-on-surface-variant max-w-2xl mx-auto text-lg md:text-xl">
          Lihat bagaimana Gen Z lainnya mengekspresikan gaya mereka dengan Zepret. Dari aesthetic sampai futuristic, semua ada di sini!
        </p>
      </motion.div>

      {/* Masonry Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]">
        {showcaseData.map((item, index) => (
          <ShowcaseCard
            key={index}
            image={item.image}
            name={item.name}
            style={item.style}
            delay={index * 0.1}
          />
        ))}
      </div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-center mt-16"
      >
        <p className="text-zinc-400 mb-6 font-body">Mau foto kamu muncul di sini?</p>
        <button className="bg-gradient-to-br from-primary to-primary-container px-10 py-5 rounded-xl text-on-primary-fixed font-bold text-lg shadow-[0_15px_35px_rgba(255,90,143,0.3)] hover:scale-105 transition-all duration-300 flex items-center gap-2 mx-auto">
          <span className="material-symbols-outlined">add_a_photo</span>
          Upload Hasil Zepret Kamu
        </button>
      </motion.div>

      {/* Floating Stats */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="absolute -bottom-10 -right-10 lg:right-20 glass-panel px-8 py-6 rounded-2xl border border-white/10 shadow-2xl z-20"
      >
        <div className="flex items-center gap-4">
          <div className="text-4xl font-black text-primary font-headline">10K+</div>
          <div className="text-zinc-400 font-body text-sm">Foto sudah<br/>di-Zepret!</div>
        </div>
      </motion.div>
    </section>
  );
};
