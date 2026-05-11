import { motion } from 'framer-motion'
import { Calculator } from 'lucide-react'

export function BusinessModel() {
  return (
    <section className="py-24 bg-background relative border-y border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 w-full">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#111118] border border-white/10 rounded-3xl p-8 md:p-12"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                  <Calculator className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Projeção de Lucros</h3>
              </div>

              <div className="space-y-8">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm text-text-muted">
                    <span>Você vende por</span>
                    <span>Plano Base</span>
                  </div>
                  <div className="text-4xl font-bold text-white">
                    R$ 197<span className="text-xl text-text-muted font-normal">/mês</span>
                  </div>
                </div>

                <div className="h-px w-full bg-white/10"></div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-white/5 rounded-xl">
                    <span className="text-text-muted">10 clientes</span>
                    <span className="font-bold text-xl">R$ 1.970/mês</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-primary/10 border border-primary/20 rounded-xl relative overflow-hidden">
                    <div className="absolute inset-0 bg-primary/5"></div>
                    <span className="text-primary font-medium relative z-10">50 clientes</span>
                    <span className="font-bold text-2xl text-primary relative z-10">R$ 9.850/mês</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-white/5 rounded-xl">
                    <span className="text-text-muted">100 clientes</span>
                    <span className="font-bold text-xl">R$ 19.700/mês</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Matemática simples. <br />
              <span className="text-primary">Ganhos previsíveis.</span>
            </h2>
            <p className="text-xl text-text-muted mb-8">
              Você define o seu preço. O dinheiro dos seus clientes vai direto para a sua conta. Sem intermediários, sem comissões escondidas.
            </p>
            <ul className="space-y-4 text-lg text-text-muted">
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-primary"></span>
                Pagamentos via PIX ou Cartão direto para você
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-primary"></span>
                Contratos de fidelidade opcionais
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-primary"></span>
                Taxa de churn historicamente baixa no mercado
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
