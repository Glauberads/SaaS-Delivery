import { LogOut, Users } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export function AdminLeads() {
  const navigate = useNavigate()

  const handleLogout = () => {
    // TODO: Add Supabase sign out logic here
    navigate('/admin/login')
  }

  return (
    <div className="min-h-screen bg-background text-text-main flex flex-col">
      {/* Topbar */}
      <header className="h-16 border-b border-white/10 bg-[#08080C] flex items-center justify-between px-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-primary rounded flex items-center justify-center font-bold text-white text-sm">
            VD
          </div>
          <span className="font-bold tracking-wide">Painel Admin</span>
        </div>
        
        <button 
          onClick={handleLogout}
          className="flex items-center gap-2 text-sm text-text-muted hover:text-white transition-colors"
        >
          <LogOut className="w-4 h-4" />
          Sair
        </button>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-2xl font-bold text-white mb-1">Gestão de Leads</h1>
              <p className="text-sm text-text-muted">Acompanhe as conversões do tráfego pago.</p>
            </div>
            
            <div className="flex gap-4">
              <div className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                  <Users className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-text-muted">Leads Totais</p>
                  <p className="text-xl font-bold text-white">0</p>
                </div>
              </div>
            </div>
          </div>

          {/* Placeholder Table */}
          <div className="bg-[#111118] border border-white/10 rounded-2xl overflow-hidden">
            <div className="p-6 text-center text-text-muted py-20">
              <Users className="w-12 h-12 mx-auto mb-4 opacity-20" />
              <p>O módulo de leads será integrado com o banco de dados em breve.</p>
              <p className="text-sm mt-2">Estrutura preparada: Nome, WhatsApp, E-mail, Origem UTM e Status.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
