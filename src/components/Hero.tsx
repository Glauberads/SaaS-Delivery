import { motion } from 'framer-motion'
import { Play, CheckCircle2, TrendingUp, Users, DollarSign, Activity, Bell } from 'lucide-react'
import { AreaChart, Area, ResponsiveContainer } from 'recharts'

// Dados simulados para o gráfico do mockup
const mockChartData = [
  { value: 1200 }, { value: 1800 }, { value: 1500 }, { value: 2400 }, 
  { value: 2100 }, { value: 3200 }, { value: 2900 }, { value: 4100 }, 
  { value: 3800 }, { value: 5400 }, { value: 5100 }, { value: 8470 }
]

// Timeline events
const mockTimeline = [
  { id: 1, title: 'Nova assinatura ativa', time: 'Agora', icon: DollarSign, color: 'text-emerald-400', bg: 'bg-emerald-400/10' },
  { id: 2, title: 'Pagamento aprovado', time: 'Há 2 min', icon: CheckCircle2, color: 'text-blue-400', bg: 'bg-blue-400/10' },
  { id: 3, title: 'Novo lead capturado', time: 'Há 5 min', icon: Users, color: 'text-purple-400', bg: 'bg-purple-400/10' },
  { id: 4, title: 'Cliente entrou na plataforma', time: 'Há 12 min', icon: Activity, color: 'text-primary', bg: 'bg-primary/10' }
]

export function Hero() {
  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex flex-col items-center pt-32 pb-20 overflow-hidden">
      {/* Premium Background Effects */}
      <div className="absolute inset-0 bg-[#0B0B0F]"></div>
      
      {/* Red Glow Core */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/20 blur-[150px] rounded-full pointer-events-none"></div>
      
      {/* Subtle secondary glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[300px] bg-red-900/10 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center">
        
        {/* Texts & CTAs */}
        <div className="text-center max-w-5xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-4 mb-8"
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_10px_rgba(234,29,44,0.8)]"></span>
              AO VIVO
            </span>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white text-xs font-semibold uppercase tracking-wider">
              Lançamento Oficial
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-8 leading-[1.1] text-white"
          >
            Transforme tecnologia <br className="hidden md:block" /> em uma <span className="text-transparent bg-clip-text bg-gradient-to-b from-primary to-red-600 drop-shadow-sm">máquina de faturamento.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl text-text-muted mb-12 max-w-3xl mx-auto font-medium"
          >
            Agências, gestores e infoprodutores já estão criando operações que geram de R$5 mil a R$30 mil por mês revendendo tecnologia. Pare de vender serviços. <strong className="text-white">Comece a vender receita recorrente.</strong>
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-5"
          >
            <button 
              onClick={scrollToPricing}
              className="group relative w-full sm:w-auto px-10 py-5 bg-primary text-white rounded-xl font-bold text-lg flex items-center justify-center gap-3 overflow-hidden transition-all shadow-[0_0_40px_rgba(234,29,44,0.3)] hover:shadow-[0_0_60px_rgba(234,29,44,0.5)] hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
              <span className="relative z-10 flex items-center gap-2">
                🔥 QUERO MINHA OPERAÇÃO AGORA
              </span>
            </button>
            
            <button className="w-full sm:w-auto px-8 py-5 bg-white/5 hover:bg-white/10 text-white rounded-xl font-semibold text-lg flex items-center justify-center gap-2 border border-white/10 transition-all backdrop-blur-sm">
              <Play className="w-5 h-5" />
              VER DEMONSTRAÇÃO AO VIVO
            </button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 max-w-3xl mx-auto"
          >
            {[
              { label: '+50 Parceiros Ativos' },
              { label: '+R$30.000 em MRR' },
              { label: '100% White Label' }
            ].map((stat, i) => (
              <div key={i} className="flex items-center justify-center gap-2 text-text-muted text-sm font-semibold uppercase tracking-wide">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span className="text-white/80">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Realistic SaaS Dashboard Mockup */}
        <motion.div 
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="mt-24 w-full max-w-6xl relative"
        >
          {/* Subtle reflection on top */}
          <div className="absolute -inset-1 bg-gradient-to-b from-white/10 to-transparent rounded-2xl blur-sm opacity-50"></div>
          
          <div className="relative bg-[#111118]/90 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden ring-1 ring-white/5">
            
            {/* Mockup Header */}
            <div className="h-14 border-b border-white/5 bg-white/[0.02] flex items-center justify-between px-6">
              <div className="flex items-center gap-4">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                </div>
                <div className="w-px h-4 bg-white/10 mx-2"></div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-primary rounded bg-opacity-20 flex items-center justify-center">
                    <span className="text-[10px] font-bold text-primary">VD</span>
                  </div>
                  <span className="text-sm font-semibold text-white/90">VIP Delivery Admin</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></div>
                  <span className="text-[10px] font-semibold text-emerald-400 uppercase tracking-wider">Sistema Online</span>
                </div>
                <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                  <Bell className="w-4 h-4 text-text-muted" />
                </div>
              </div>
            </div>

            {/* Mockup Body */}
            <div className="p-6 md:p-8 grid grid-cols-1 lg:grid-cols-4 gap-6">
              
              {/* Metrics Row */}
              <div className="lg:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { title: 'Leads Hoje', value: '127', icon: Users, color: 'text-blue-400', bg: 'bg-blue-400/10' },
                  { title: 'MRR Mensal', value: 'R$8.470', icon: DollarSign, color: 'text-emerald-400', bg: 'bg-emerald-400/10' },
                  { title: 'Clientes Ativos', value: '43', icon: Activity, color: 'text-primary', bg: 'bg-primary/10' },
                  { title: 'Conversão', value: '18.4%', icon: TrendingUp, color: 'text-purple-400', bg: 'bg-purple-400/10' }
                ].map((metric, i) => (
                  <div key={i} className="bg-white/5 border border-white/5 rounded-xl p-4 flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-medium text-text-muted uppercase tracking-wider">{metric.title}</span>
                      <div className={`w-8 h-8 rounded-lg ${metric.bg} flex items-center justify-center`}>
                        <metric.icon className={`w-4 h-4 ${metric.color}`} />
                      </div>
                    </div>
                    <span className="text-2xl font-bold text-white">{metric.value}</span>
                  </div>
                ))}
              </div>

              {/* Chart Area */}
              <div className="lg:col-span-3 bg-white/5 border border-white/5 rounded-xl p-6 flex flex-col h-[300px]">
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <h3 className="font-bold text-white mb-1">Crescimento de Receita (MRR)</h3>
                    <p className="text-xs text-text-muted">Desempenho dos últimos 12 meses</p>
                  </div>
                  <div className="px-3 py-1 bg-white/10 rounded text-xs font-medium text-white">Este Ano</div>
                </div>
                <div className="flex-1 w-full relative">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={mockChartData}>
                      <defs>
                        <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#EA1D2C" stopOpacity={0.3}/>
                          <stop offset="95%" stopColor="#EA1D2C" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <Area type="monotone" dataKey="value" stroke="#EA1D2C" strokeWidth={3} fillOpacity={1} fill="url(#colorValue)" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Timeline Area */}
              <div className="lg:col-span-1 bg-white/5 border border-white/5 rounded-xl p-6 flex flex-col h-[300px] overflow-hidden relative">
                <h3 className="font-bold text-white mb-6 sticky top-0 bg-[#15151e] z-10 -mt-2 pt-2">Atividade em Tempo Real</h3>
                
                {/* Fade out bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#15151e] to-transparent z-10 pointer-events-none rounded-b-xl"></div>

                <div className="flex-1 flex flex-col gap-5 relative z-0">
                  {mockTimeline.map((item, i) => (
                    <motion.div 
                      key={item.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8 + (i * 0.2), duration: 0.5 }}
                      className="flex gap-3 items-start"
                    >
                      <div className={`w-8 h-8 rounded-full ${item.bg} flex items-center justify-center shrink-0 mt-0.5`}>
                        <item.icon className={`w-4 h-4 ${item.color}`} />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-sm font-semibold text-white/90 leading-tight">{item.title}</span>
                        <span className="text-xs text-text-muted mt-0.5">{item.time}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
