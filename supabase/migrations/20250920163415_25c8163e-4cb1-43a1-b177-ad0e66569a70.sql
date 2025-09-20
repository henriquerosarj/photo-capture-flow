-- Corrigir função update_updated_at_column com search_path
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$;

-- Verificar se há tabelas sem políticas e adicionar políticas básicas para a tabela meuprojetocrm
CREATE POLICY "Permitir acesso completo para tabela meuprojetocrm" 
ON public.meuprojetocrm 
FOR ALL 
USING (true);