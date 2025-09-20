-- Habilitar RLS nas tabelas que estão faltando
ALTER TABLE public.services ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.financial_records ENABLE ROW LEVEL SECURITY;

-- Políticas para services (públicas para todos visualizarem)
CREATE POLICY "Todos podem ver serviços" 
ON public.services 
FOR SELECT 
USING (true);

-- Políticas para financial_records
CREATE POLICY "Usuários podem ver seus próprios registros financeiros" 
ON public.financial_records 
FOR SELECT 
USING (
  EXISTS (
    SELECT 1 FROM public.sessions s 
    WHERE s.id = financial_records.session_id 
    AND s.user_id = auth.uid()
  )
  OR 
  EXISTS (
    SELECT 1 FROM public.clients c 
    WHERE c.id = financial_records.client_id 
    AND c.user_id = auth.uid()
  )
);

CREATE POLICY "Usuários podem criar seus próprios registros financeiros" 
ON public.financial_records 
FOR INSERT 
WITH CHECK (
  EXISTS (
    SELECT 1 FROM public.sessions s 
    WHERE s.id = financial_records.session_id 
    AND s.user_id = auth.uid()
  )
  OR 
  EXISTS (
    SELECT 1 FROM public.clients c 
    WHERE c.id = financial_records.client_id 
    AND c.user_id = auth.uid()
  )
);

CREATE POLICY "Usuários podem atualizar seus próprios registros financeiros" 
ON public.financial_records 
FOR UPDATE 
USING (
  EXISTS (
    SELECT 1 FROM public.sessions s 
    WHERE s.id = financial_records.session_id 
    AND s.user_id = auth.uid()
  )
  OR 
  EXISTS (
    SELECT 1 FROM public.clients c 
    WHERE c.id = financial_records.client_id 
    AND c.user_id = auth.uid()
  )
);

-- Corrigir função handle_new_user com search_path adequado
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER 
SET search_path = public
AS $$
BEGIN
  INSERT INTO public.profiles (user_id, nome)
  VALUES (NEW.id, NEW.raw_user_meta_data ->> 'nome');
  RETURN NEW;
END;
$$;