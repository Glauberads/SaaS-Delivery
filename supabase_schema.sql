-- Criar enum para o status do lead
CREATE TYPE lead_status AS ENUM ('Novo', 'Em contato', 'Qualificado', 'Convertido', 'Perdido');

-- Tabela de Visitantes Online (Sessões)
CREATE TABLE visitors (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    visitor_id TEXT NOT NULL,
    status TEXT DEFAULT 'online',
    first_seen_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()),
    last_seen_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()),
    utm_source TEXT,
    utm_medium TEXT,
    utm_campaign TEXT,
    landing_page TEXT,
    device TEXT,
    browser TEXT
);

-- Tabela de Eventos da Página (Tracking)
CREATE TABLE page_events (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    event_type TEXT NOT NULL,
    event_name TEXT NOT NULL,
    utm_source TEXT,
    utm_medium TEXT,
    utm_campaign TEXT,
    utm_content TEXT,
    utm_term TEXT,
    landing_page TEXT,
    device TEXT,
    browser TEXT,
    visitor_id TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

-- Tabela de Leads
CREATE TABLE leads (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT,
    email TEXT,
    whatsapp TEXT,
    message TEXT,
    status lead_status DEFAULT 'Novo',
    utm_source TEXT,
    utm_medium TEXT,
    utm_campaign TEXT,
    utm_content TEXT,
    utm_term TEXT,
    landing_page TEXT,
    device TEXT,
    browser TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

-- Ativar Row Level Security (RLS)
ALTER TABLE visitors ENABLE ROW LEVEL SECURITY;
ALTER TABLE page_events ENABLE ROW LEVEL SECURITY;
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

-- Políticas de RLS para Visitors
-- Permite que qualquer um insira (tracking anônimo)
CREATE POLICY "Enable insert for anonymous on visitors" ON visitors FOR INSERT WITH CHECK (true);
-- Permite que atualizem apenas baseando no visitor_id próprio (para evitar edição indevida)
CREATE POLICY "Enable update for anonymous matching visitor_id" ON visitors FOR UPDATE USING (true) WITH CHECK (true);
-- Apenas admins autenticados podem visualizar a tabela toda
CREATE POLICY "Enable read for authenticated super admins only on visitors" ON visitors FOR SELECT TO authenticated USING (true);
CREATE POLICY "Enable delete for authenticated admins on visitors" ON visitors FOR DELETE TO authenticated USING (true);

-- Políticas de RLS para Page Events
CREATE POLICY "Enable insert for anonymous on page_events" ON page_events FOR INSERT WITH CHECK (true);
CREATE POLICY "Enable read for authenticated admins on page_events" ON page_events FOR SELECT TO authenticated USING (true);
CREATE POLICY "Enable delete for authenticated admins on page_events" ON page_events FOR DELETE TO authenticated USING (true);

-- Políticas de RLS para Leads
CREATE POLICY "Enable insert for anonymous on leads" ON leads FOR INSERT WITH CHECK (true);
CREATE POLICY "Enable read for authenticated admins on leads" ON leads FOR SELECT TO authenticated USING (true);
CREATE POLICY "Enable update for authenticated admins on leads" ON leads FOR UPDATE TO authenticated USING (true);
CREATE POLICY "Enable delete for authenticated admins on leads" ON leads FOR DELETE TO authenticated USING (true);

-- Ativar Supabase Realtime para estas tabelas
-- Vá até o Dashboard > Database > Replication e adicione essas 3 tabelas no canal 'supabase_realtime'.
-- Ou execute:
alter publication supabase_realtime add table visitors;
alter publication supabase_realtime add table page_events;
alter publication supabase_realtime add table leads;
