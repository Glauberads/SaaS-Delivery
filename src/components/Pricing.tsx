import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'

const plans = [
  {
    name: "STARTER",
    price: "497",
    description: "Para quem está começando agora",
    features: [
      "Até 10 clientes",
      "Sistema White Label",
      "Painel Administrativo",
      "Suporte via Email"
    ],
    highlight: false
  },
  {
    name: "PRO",
    price: "997",
    description: "O plano mais escolhido para escalar",
    features: [
      "Clientes Ilimitados",
      "Sistema White Label",
      "Painel Administrativo",
      "Suporte Prioritário WhatsApp",
      "Treinamento de Vendas",
      "Domínio Personalizado"
    ],
    highlight: true
  },
  {
    name: "AGENCY",
    price: "1.497",
    description: "Para agências estruturadas",
    features: [
      "Tudo do plano PRO",
      "Gerente de Conta",
      "API de Integração",
      "Múltiplos Usuários Admin",
      "Setup Guiado"
    ],
    highlight: false
  }
]

export function Pricing() {
  return (
    <section className="py-24 bg-background relative" id="pricing">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-primary/10 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Escolha seu plano e comece hoje
          </motion.h2>
          <p className="text-xl text-text-muted">
            Investimento que se paga com apenas 2 ou 3 clientes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`rounded-3xl p-8 relative ${
                plan.highlight 
                  ? 'bg-gradient-to-b from-primary/20 to-[#1A1A24] border-primary border-2 scale-105' 
                  : 'bg-white/5 border border-white/10'
              }`}
            >
              {plan.highlight && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider">
                  Mais Popular
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <p className="text-text-muted text-sm min-h-[40px]">{plan.description}</p>
              </div>

              <div className="mb-8">
                <span className="text-sm font-medium text-text-muted">R$</span>
                <span className="text-5xl font-bold mx-1">{plan.price}</span>
                <span className="text-text-muted">/mês</span>
              </div>

              <button className={`w-full py-4 rounded-xl font-bold mb-8 transition-all ${
                plan.highlight 
                  ? 'bg-primary hover:bg-primary/90 text-white' 
                  : 'bg-white/10 hover:bg-white/20 text-white'
              }`}>
                Assinar {plan.name}
              </button>

              <ul className="space-y-4">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-text-muted">
                    <CheckCircle2 className={`w-5 h-5 flex-shrink-0 ${plan.highlight ? 'text-primary' : 'text-white/30'}`} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
