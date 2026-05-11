import { motion } from 'framer-motion'

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 border-b border-white/10 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3"
        >
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center font-bold text-white text-xl">
            VD
          </div>
          <span className="font-bold text-xl tracking-wide">VIP Delivery</span>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="hidden md:flex items-center gap-8"
        >
          <a href="#pricing" className="text-sm font-medium text-text-muted hover:text-white transition-colors">
            Planos
          </a>
          <button className="px-6 py-2.5 bg-white/10 hover:bg-white/20 text-white rounded-lg font-semibold text-sm transition-all border border-white/5">
            Área de Membros
          </button>
        </motion.div>
      </div>
    </nav>
  )
}
