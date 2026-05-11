import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const testimonials = [
  {
    name: "Carlos M.",
    role: "Ex-gestor de tráfego",
    content: "Eu tinha 15 clientes de tráfego e trabalhava 14 horas por dia. Hoje tenho 30 restaurantes usando meu software e trabalho 4 horas. O jogo virou.",
    mrr: "R$ 6.200"
  },
  {
    name: "Amanda R.",
    role: "Agência Digital",
    content: "Adicionamos o VIP Delivery como upsell para nossos clientes de social media. A retenção da agência dobrou porque agora eles dependem do nosso sistema para vender.",
    mrr: "R$ 12.500"
  },
  {
    name: "Roberto F.",
    role: "Infoprodutor",
    content: "Sempre sofri com a montanha russa de lançamentos. Vender SaaS me deu a paz mental de ter dinheiro caindo na conta todo mês.",
    mrr: "R$ 21.000"
  }
]

export function SocialProof() {
  return (
    <section className="py-24 bg-[#08080C] relative border-y border-white/5">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Quem já está <span className="text-primary">lucrando</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-3xl p-8"
            >
              <div className="flex items-center gap-2 mb-6">
                {[1, 2, 3, 4, 5].map(star => (
                  <Star key={star} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              <p className="text-lg text-text-main mb-8 leading-relaxed italic">
                "{testimonial.content}"
              </p>
              <div className="flex items-center justify-between border-t border-white/10 pt-6">
                <div>
                  <h4 className="font-bold text-white">{testimonial.name}</h4>
                  <p className="text-sm text-text-muted">{testimonial.role}</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-text-muted uppercase tracking-wider">MRR Atual</p>
                  <p className="font-bold text-primary">{testimonial.mrr}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
