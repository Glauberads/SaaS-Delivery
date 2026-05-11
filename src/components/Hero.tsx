import { motion } from 'framer-motion'
import { ArrowRight, Play, CheckCircle2 } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-text-muted text-sm font-medium mb-8">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              Lançamento Oficial
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-8"
          >
            Transforme software em <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-red-500">
              renda recorrente.
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-text-muted mb-10 max-w-2xl mx-auto"
          >
            Revenda o VIP Delivery com sua marca e construa uma operação escalável vendendo tecnologia para negócios locais.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button className="w-full sm:w-auto px-8 py-4 bg-primary hover:bg-primary/90 text-white rounded-lg font-semibold flex items-center justify-center gap-2 transition-all">
              Quero revender
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 text-white rounded-lg font-semibold flex items-center justify-center gap-2 border border-white/10 transition-all">
              <Play className="w-5 h-5" />
              Ver demonstração
            </button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto"
          >
            {[
              { label: '+50 clientes ativos' },
              { label: 'R$30.000 MRR' },
              { label: '100% White Label' }
            ].map((stat, i) => (
              <div key={i} className="flex items-center justify-center gap-2 text-text-muted">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span className="font-medium">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Dashboard Mockup - Placeholder with CSS for premium feel */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-20 relative mx-auto max-w-5xl"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10 rounded-xl"></div>
          <div className="aspect-video bg-white/5 border border-white/10 rounded-xl shadow-2xl shadow-primary/20 overflow-hidden relative">
            <div className="absolute top-0 w-full h-10 bg-white/5 border-b border-white/10 flex items-center px-4 gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
            </div>
            <div className="p-8 pt-16 h-full flex flex-col gap-6">
              <div className="flex justify-between items-center">
                <div className="h-8 w-48 bg-white/10 rounded"></div>
                <div className="h-10 w-32 bg-primary/20 rounded"></div>
              </div>
              <div className="grid grid-cols-3 gap-6">
                {[1, 2, 3].map(i => (
                  <div key={i} className="h-32 bg-white/5 rounded-lg border border-white/5"></div>
                ))}
              </div>
              <div className="flex-1 bg-white/5 rounded-lg border border-white/5"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
