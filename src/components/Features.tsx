import { motion } from 'framer-motion'
import { Smartphone, LayoutDashboard, Calculator, Settings } from 'lucide-react'

const features = [
  {
    icon: <Smartphone className="w-8 h-8 text-primary" />,
    title: "Cardápio Digital / App",
    description: "Seu cliente terá um cardápio digital moderno, rápido e otimizado para conversão no celular."
  },
  {
    icon: <LayoutDashboard className="w-8 h-8 text-primary" />,
    title: "Dashboard de Gestão",
    description: "Painel completo para o dono do restaurante acompanhar pedidos, relatórios e métricas."
  },
  {
    icon: <Calculator className="w-8 h-8 text-primary" />,
    title: "PDV Integrado",
    description: "Ponto de venda fácil de usar para pedidos no balcão e gestão de caixa."
  },
  {
    icon: <Settings className="w-8 h-8 text-primary" />,
    title: "Gestão Operacional",
    description: "Controle de estoque, motoboys, rotas de entrega e cupons de desconto."
  }
]

export function Features() {
  return (
    <section className="py-24 bg-[#08080C] relative">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Seu cliente recebe tecnologia. <br className="hidden md:block" />
            <span className="text-primary">Você recebe recorrência.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-16">
          <div className="order-2 md:order-1">
            {/* Interface Mockup */}
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full"></div>
              <div className="relative bg-[#1A1A24] rounded-2xl border border-white/10 shadow-2xl overflow-hidden aspect-square md:aspect-[4/3] flex flex-col">
                {/* Header Mockup */}
                <div className="h-14 border-b border-white/10 flex items-center px-6 gap-4 bg-white/5">
                  <div className="w-8 h-8 rounded bg-primary/20 flex items-center justify-center">
                    <div className="w-4 h-4 rounded-sm bg-primary"></div>
                  </div>
                  <div className="h-4 w-32 bg-white/10 rounded"></div>
                </div>
                {/* Body Mockup */}
                <div className="flex-1 p-6 flex gap-6">
                  {/* Sidebar */}
                  <div className="w-48 hidden lg:flex flex-col gap-4">
                    {[1, 2, 3, 4, 5].map(i => (
                      <div key={i} className="h-8 bg-white/5 rounded w-full"></div>
                    ))}
                  </div>
                  {/* Content */}
                  <div className="flex-1 flex flex-col gap-6">
                    <div className="flex gap-4">
                      <div className="flex-1 h-24 bg-white/5 rounded-xl border border-white/5 p-4 flex flex-col justify-between">
                        <div className="w-8 h-8 rounded-full bg-green-500/20"></div>
                        <div className="h-4 w-16 bg-white/20 rounded"></div>
                      </div>
                      <div className="flex-1 h-24 bg-white/5 rounded-xl border border-white/5 p-4 flex flex-col justify-between">
                        <div className="w-8 h-8 rounded-full bg-blue-500/20"></div>
                        <div className="h-4 w-24 bg-white/20 rounded"></div>
                      </div>
                    </div>
                    <div className="flex-1 bg-white/5 rounded-xl border border-white/5 relative overflow-hidden">
                       <div className="absolute top-4 left-4 right-4 h-8 bg-white/10 rounded"></div>
                       <div className="absolute top-16 left-4 right-4 bottom-4 bg-white/5 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="space-y-4"
              >
                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold">{feature.title}</h3>
                <p className="text-text-muted leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
