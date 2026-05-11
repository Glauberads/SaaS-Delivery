import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export function CTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/10"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            Comece a vender seu <br />
            <span className="text-primary">próprio SaaS hoje.</span>
          </h2>
          <p className="text-xl text-text-muted mb-12 max-w-2xl mx-auto">
            O mercado de delivery cresce todos os dias. Os restaurantes precisam de tecnologia. Você tem a solução. Junte-se a nós.
          </p>
          
          <button className="px-10 py-5 bg-primary hover:bg-primary/90 text-white rounded-xl font-bold text-lg flex items-center justify-center gap-3 mx-auto transition-all hover:scale-105 shadow-2xl shadow-primary/30">
            Quero minha licença
            <ArrowRight className="w-6 h-6" />
          </button>
        </motion.div>
      </div>
    </section>
  )
}
