import { motion } from 'framer-motion'
import { TrendingDown, Users, Box, Target } from 'lucide-react'

const pains = [
  {
    icon: <Users className="w-6 h-6 text-primary" />,
    title: "Cliente entra e sai",
    description: "Você vende serviços pontuais e vive na roda dos ratos buscando novos clientes todo mês."
  },
  {
    icon: <TrendingDown className="w-6 h-6 text-primary" />,
    title: "Receita imprevisível",
    description: "Sem previsibilidade financeira, você nunca sabe quanto vai ganhar no próximo mês."
  },
  {
    icon: <Box className="w-6 h-6 text-primary" />,
    title: "Falta de produto próprio",
    description: "Você é apenas um prestador de serviço, construindo o sonho dos outros em vez do seu."
  },
  {
    icon: <Target className="w-6 h-6 text-primary" />,
    title: "Escalar parece impossível",
    description: "Para ganhar mais, você precisa trabalhar mais. Seu tempo é o seu limite."
  }
]

export function Pain() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Cansado de depender de serviços ou lançamentos?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-text-muted"
          >
            O modelo tradicional de agência ou prestação de serviço é exaustivo. Você troca tempo por dinheiro e não constrói equidade.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pains.map((pain, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 transition-colors group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {pain.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{pain.title}</h3>
              <p className="text-text-muted leading-relaxed">
                {pain.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
