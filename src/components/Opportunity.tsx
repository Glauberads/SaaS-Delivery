import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'

const benefits = [
  "Sua própria marca (White Label)",
  "Mensalidades 100% suas",
  "Sem precisar programar",
  "Suporte técnico incluso",
  "Atualizações gratuitas",
  "Treinamento de vendas"
]

export function Opportunity() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/5 clip-path-slant"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Venda um software pronto. <br/>
              <span className="text-primary">Lucre todos os meses.</span>
            </h2>
            <p className="text-xl text-text-muted mb-10">
              Imagine ter o seu próprio sistema de delivery rodando. Você só foca em vender para os restaurantes, nós cuidamos de toda a tecnologia pesada por trás.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                  <span className="font-medium text-lg">{benefit}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-red-500/20 blur-3xl rounded-full"></div>
            <div className="relative bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-sm">
              <div className="space-y-6">
                <div className="flex items-center gap-4 border-b border-white/10 pb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-red-600 flex items-center justify-center text-2xl font-bold">
                    VD
                  </div>
                  <div>
                    <h4 className="text-xl font-bold">VIP Delivery Setup</h4>
                    <p className="text-text-muted">Licença White Label Ativa</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-text-muted">Status do Sistema</span>
                    <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-medium">Online</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-text-muted">Lojas Ativas</span>
                    <span className="font-bold">48/50</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-text-muted">MRR Estimado</span>
                    <span className="font-bold text-primary">R$ 9.456,00</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
