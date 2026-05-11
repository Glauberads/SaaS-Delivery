export function Footer() {
  return (
    <footer className="py-12 bg-background border-t border-white/10">
      <div className="container mx-auto px-6 text-center text-text-muted">
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center text-primary font-bold text-sm">
            VD
          </div>
          <span className="font-bold text-lg text-white">VIP Delivery</span>
        </div>
        <p className="mb-4 text-sm">
          © {new Date().getFullYear()} VIP Delivery. Todos os direitos reservados.
        </p>
        <div className="flex items-center justify-center gap-6 text-sm">
          <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
          <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
        </div>
      </div>
    </footer>
  )
}
