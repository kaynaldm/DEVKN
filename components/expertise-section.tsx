"use client"

import { useState, useEffect } from 'react'
import Image from 'next/image'
import {
  ArrowUpRight,
  ChevronDown,
  Brain,
  Globe,
  Cloud,
  MessageSquareCode,
  CreditCard,
  Network,
  ShieldCheck,
  Layers,
  Share2,
  Database,
  Workflow,
  Smartphone,
  BarChart3,
  TrendingUp,
  Zap,
  CheckCircle2,
  Sparkles,
  MessageCircle,
  Info,
  Lightbulb,
  Stethoscope,
  ShoppingBag,
  Home,
  Receipt,
  Utensils,
  GraduationCap,
  Target,
  Truck,
  Calculator,
  Coins,
  Scale,
  Dumbbell,
  Send,
  Wrench,
  Search,
  BookOpen,
  Ticket,
  Headphones,
  FileText,
  Calendar,
  Radar,
} from 'lucide-react'
import bgImage from '@/imagem de fundo.png'

function SystemIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="8" y="12" width="36" height="24" rx="2" />
      <path d="M26 36v6" />
      <path d="M14 42h24" />
      <path d="M14 18h16" />
      <path d="M14 24h24" />
      <path d="M14 30h10" />
      <ellipse cx="48" cy="30" rx="10" ry="4" />
      <path d="M38 30v12c0 2.2 4.5 4 10 4s10-1.8 10-4V30" />
      <path d="M38 36c0 2.2 4.5 4 10 4s10-1.8 10-4" />
    </svg>
  )
}

function BotWorkflowIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="24" y="24" width="16" height="16" rx="3" />
      <path d="M29 30v2" />
      <path d="M35 30v2" />
      <path d="M30 36h4" />
      <path d="M32 24v-6" />
      <circle cx="32" cy="16" r="2" />
      <rect x="8" y="8" width="12" height="12" rx="2" />
      <path d="M20 14h8" />
      <rect x="44" y="8" width="12" height="12" rx="2" />
      <path d="M44 14h-8" />
      <rect x="8" y="44" width="12" height="12" rx="2" />
      <path d="M20 50h8v-10" />
      <rect x="44" y="44" width="12" height="12" rx="2" />
      <path d="M44 50h-8v-10" />
    </svg>
  )
}

function InventoryIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M32 12L12 22v20l20 10 20-10V22L32 12z" />
      <path d="M12 22l20 10 20-10" />
      <path d="M32 32v20" />
      <circle cx="48" cy="48" r="10" fill="hsl(var(--background))" />
      <circle cx="48" cy="48" r="10" />
      <path d="M55 55l5 5" />
      <path d="M48 43v10" />
      <path d="M45 46h6" />
      <path d="M45 50h6" />
      <path d="M48 45c-2 0-3 .7-3 2s1.5 2 3 2 3 .7 3 2-1 2-3 2" />
    </svg>
  )
}

type Service = {
  id: string
  title: string
  description: string
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>
  cta: string
  simpleSummary: string
  overview: string
  deliverables: string[]
  businessImpact: string
}

const services: Service[] = [
  {
    id: '01',
    title: 'Inteligência Artificial & Agentes Autônomos',
    description:
      'Cérebros digitais e assistentes inteligentes treinados com os dados da sua empresa para atender clientes, analisar dados e tomar decisões em segundos.',
    icon: Brain,
    cta: 'Implementar Inteligência Artificial',
    simpleSummary:
      'Criamos um "cérebro inteligente" treinado com as informações da sua empresa. Ele responde dúvidas de clientes no mesmo segundo, analisa contratos, lê notas fiscais e resolve dúvidas complexas como se fosse o seu melhor funcionário.',
    overview:
      'Implementação prática de Inteligência Artificial conectada aos manuais, tabelas e regras do seu próprio negócio, sem inventar respostas.',
    deliverables: [
      'Assistente de IA personalizado com as regras e tom de voz da sua marca',
      'Leitura e resumo automático de documentos, PDFs, contratos e comprovantes',
      'Integração direta com o WhatsApp ou painel de atendimento da empresa',
      'Respostas precisas e seguras sem vazamento de dados confidenciais',
    ],
    businessImpact:
      'Respostas imediatas para qualquer dúvida e tarefas que demoravam dias resolvidas em poucos segundos.',
  },
  {
    id: '02',
    title: 'Chatbots & Atendimento WhatsApp',
    description:
      'Atendentes virtuais no WhatsApp oficial que respondem instantaneamente, tiram dúvidas, enviam cardápios/orçamentos e fecham agendamentos no piloto automático.',
    icon: MessageSquareCode,
    cta: 'Criar Atendente WhatsApp',
    simpleSummary:
      'Um atendente virtual que atende seus clientes no WhatsApp a qualquer hora do dia ou da madrugada. Ele conversa educadamente, envia cardápios ou orçamentos, tira dúvidas e fecha agendamentos sozinho sem deixar ninguém no vácuo.',
    overview:
      'Automação completa do atendimento via WhatsApp para receber leads, filtrar curiosos e encaminhar clientes prontos para compra diretamente para você.',
    deliverables: [
      'Atendente robô com respostas personalizadas para o WhatsApp oficial da empresa',
      'Agendamento automático com verificação de datas e horários livres',
      'Envio automático de localização, fotos de produtos e chave Pix',
      'Opção para transferir a conversa para um atendente humano a qualquer instante',
    ],
    businessImpact:
      'Fim da perda de clientes por demora na resposta: cada pessoa é atendida em menos de 3 segundos.',
  },
  {
    id: '03',
    title: 'Automação & RPAs (Robôs de Produtividade)',
    description:
      'Robôs que executam todo o trabalho repetitivo e burocrático da sua equipe (planilhas, relatórios, notas e e-mails), trabalhando 24h sem cansar e com zero erros.',
    icon: BotWorkflowIcon,
    cta: 'Descobrir Automações',
    simpleSummary:
      'Colocamos robôs para fazer todo o trabalho chato e repetitivo da sua equipe (como preencher planilhas, baixar relatórios, emitir notas e mandar mensagens). O robô não cansa, não erra e trabalha 24 horas por dia.',
    overview:
      'Criação de robôs de software que imitam ações humanas no computador em alta velocidade, executando rotinas diárias com 100% de precisão.',
    deliverables: [
      'Robôs que baixam, preenchem e organizam relatórios automaticamente',
      'Sincronização automática entre planilhas, sistemas internos e e-mails',
      'Avisos automáticos no WhatsApp ou e-mail quando qualquer tarefa for finalizada',
      'Painel para acompanhar quantas horas de trabalho manual foram economizadas',
    ],
    businessImpact:
      'Sua equipe economiza até 90% do tempo de tarefas manuais e foca apenas em vender e atender bem os clientes.',
  },
  {
    id: '04',
    title: 'Gestão Inteligente & ERP Sob Medida',
    description:
      'Painéis e sistemas exclusivos para controle total de vendas, estoque, fluxo de caixa e clientes em um só lugar, acessível de qualquer celular ou computador.',
    icon: InventoryIcon,
    cta: 'Solicitar Demonstração',
    simpleSummary:
      'Um painel exclusivo onde você controla vendas, estoque, fluxo de caixa e clientes em um só lugar. Adeus papelada e planilhas confusas: você vê o lucro real da sua empresa na palma da mão pelo celular ou computador.',
    overview:
      'Sistema central de gestão feito sob medida para a sua empresa, com foco em facilidade de uso para você saber exatamente de onde vem e para onde vai cada centavo.',
    deliverables: [
      'Controle financeiro com entradas, saídas, faturamento e lucro líquido em tempo real',
      'Gestão de estoque inteligente que avisa quando produtos estão perto de acabar',
      'Acesso seguro com senhas individuais para funcionários e níveis de permissão',
      'Relatórios gerenciais automáticos em PDF e Excel para prestação de contas',
    ],
    businessImpact:
      'Controle absoluto do seu dinheiro e clareza total sobre quais produtos ou serviços dão mais lucro.',
  },
  {
    id: '05',
    title: 'Aplicativos Mobile (Android & iOS)',
    description:
      'Aplicativos modernos e rápidos para smartphone com o nome e as cores da sua marca, com notificações na tela dos clientes e vendas em 1 clique.',
    icon: Smartphone,
    cta: 'Desenvolver Aplicativo',
    simpleSummary:
      'Criamos o aplicativo próprio da sua marca para celular (Android e iPhone). Seus clientes podem baixar, ver seus produtos, fazer pedidos e receber avisos de promoções na tela de bloqueio do celular.',
    overview:
      'Desenvolvimento de aplicativos modernos, bonitos e leves que funcionam perfeitamente em qualquer modelo de smartphone.',
    deliverables: [
      'Aplicativo exclusivo com o nome, logo e cores da sua empresa',
      'Disparo de notificações na tela do celular dos clientes para anunciar novidades e promoções',
      'Funciona mesmo se a internet do cliente estiver fraca ou cair momentaneamente',
      'Publicação nas lojas Google Play e Apple App Store ou instalação direta pela web',
    ],
    businessImpact:
      'Sua marca 24 horas por dia no bolso do seu cliente, incentivando compras repetidas com muito mais facilidade.',
  },
  {
    id: '06',
    title: 'Dashboards de BI & Métricas em Tempo Real',
    description:
      'Gráficos visuais e intuitivos que mostram em tempo real quanto você faturou, seus custos e o lucro real da empresa, eliminando decisões no achismo.',
    icon: BarChart3,
    cta: 'Criar Dashboard Executivo',
    simpleSummary:
      'Uma tela bonita e fácil de entender com gráficos que mostram a saúde real da sua empresa: quanto entrou hoje, quanto saiu, qual vendedor vendeu mais e onde estão os maiores custos. Chega de tomar decisões no escuro ou no achismo.',
    overview:
      'Transformação de números confusos e planilhas emboladas em gráficos visuais e claros para você comandar sua empresa com segurança.',
    deliverables: [
      'Gráficos atualizados na hora com faturamento, despesas e lucro',
      'Filtros por dia, semana, mês, vendedor ou categoria de produto',
      'Visualização perfeita tanto no computador quanto na tela do smartphone',
      'Metas visuais com alerta se a empresa estiver abaixo do esperado no mês',
    ],
    businessImpact:
      'Decisões certeiras baseadas na realidade do caixa, cortando desperdícios e aumentando o lucro.',
  },
  {
    id: '07',
    title: 'Gateways de Pagamento & Checkout de Alta Conversão',
    description:
      'Telas de pagamento ultra-rápidas no Pix e cartão de crédito, com baixa automática, cobranças recorrentes e split entre sócios ou vendedores.',
    icon: CreditCard,
    cta: 'Integrar Checkout Seguro',
    simpleSummary:
      'Uma tela de pagamento simples e rápida para seu cliente pagar sem dificuldade no Pix ou cartão de crédito. O cliente paga em 1 clique, o dinheiro cai na sua conta e o sistema libera o pedido ou acesso na mesma hora.',
    overview:
      'Integração com meios de pagamento seguros (Pix, Cartão, Boleto) com baixa automática para você não precisar checar comprovantes manualmente.',
    deliverables: [
      'Geração de Pix com QR Code e Copia e Cola com confirmação instantânea',
      'Cobrança automática de mensalidades no cartão sem você precisar cobrar o cliente todo mês',
      'Divisão automática de pagamentos (se precisar pagar comissões para sócios ou vendedores)',
      'Notificações no WhatsApp do cliente confirmando o pagamento do pedido',
    ],
    businessImpact:
      'Menos desistências no pagamento e fim da conferência manual de comprovantes falsos.',
  },
  {
    id: '08',
    title: 'Automação para Marketing & Redes Sociais',
    description:
      'Sistemas inteligentes para corte de vídeos, agendamento de posts e publicação simultânea no Instagram, TikTok, YouTube e Facebook.',
    icon: Share2,
    cta: 'Automatizar Redes Sociais',
    simpleSummary:
      'Robôs que criam posts, editam vídeos e publicam sozinhos no Instagram, TikTok, YouTube e Facebook nos melhores horários. Você mantém suas redes sempre cheias de conteúdo novo sem precisar perder horas do dia postando.',
    overview:
      'Ferramenta exclusiva para agendamento, corte de vídeos e postagem sincronizada nas principais redes sociais de forma 100% automática.',
    deliverables: [
      'Publicação automática e simultânea em várias redes com 1 único clique',
      'Corte de vídeos longos em formato de Shorts/Reels/TikToks com legendas automáticas',
      'Agendamento de posts para o mês inteiro sem precisar entrar nas redes todo dia',
      'Painel simples mostrando quais vídeos deram mais visualizações e engajamento',
    ],
    businessImpact:
      'Presença constante nas redes sociais, atraindo mais público e clientes com quase zero esforço diário.',
  },
  {
    id: '09',
    title: 'Web Scraping & Espionagem de Mercado',
    description:
      'Robôs que coletam automaticamente preços, produtos e estratégias dos seus concorrentes na web para você ajustar suas ofertas e lucrar mais.',
    icon: Globe,
    cta: 'Automatizar Extração',
    simpleSummary:
      'Robôs que navegam na internet coletando dados valiosos para o seu negócio, como preços dos concorrentes, novos produtos lançados ou contatos de possíveis clientes, entregando tudo mastigado em uma planilha.',
    overview:
      'Captura automática de informações de sites e plataformas públicas na web, funcionando sem pausas para você sempre sair na frente da concorrência.',
    deliverables: [
      'Robôs que monitoram sites e extraem tabelas de preços e produtos diariamente',
      'Contorno automático de bloqueios e telas de verificação na internet',
      'Planilhas ou bancos de dados atualizados automaticamente com os dados colhidos',
      'Alertas no celular quando um concorrente abaixar ou aumentar preços',
    ],
    businessImpact:
      'Saber exatamente como o mercado está precificando para ajustar suas ofertas e lucrar mais rápido.',
  },
  {
    id: '10',
    title: 'Plataformas SaaS (Sistemas por Assinatura)',
    description:
      'Desenvolvimento completo de softwares que você pode vender por assinatura mensal para outras empresas, criando uma renda recorrente e previsível.',
    icon: Layers,
    cta: 'Criar Plataforma SaaS',
    simpleSummary:
      'Criamos um sistema completo para você vender por assinatura mensal para outras pessoas ou empresas (igual a Netflix ou Spotify). Os clientes pagam todo mês para usar o seu software e o dinheiro entra direto na sua conta.',
    overview:
      'Desenvolvimento de produtos digitais no modelo de assinatura mensal, com cobrança automática e áreas separadas e seguras para cada assinante.',
    deliverables: [
      'Área exclusiva para cada empresa assinante gerenciar seus próprios usuários',
      'Planos de assinatura com cobrança automática mensal ou anual',
      'Painel para você acompanhar quantos clientes estão pagando e quanto você fatura por mês',
      'Cadastro e ativação automática assim que o novo cliente passa o cartão',
    ],
    businessImpact:
      'Criação de um novo negócio digital escalável com faturamento recorrente e previsível todos os meses.',
  },
  {
    id: '11',
    title: 'Motores de Recomendação & Aumento de Vendas',
    description:
      'Algoritmos que sugerem os produtos ideais para cada cliente (igual a Amazon) e identificam clientes em risco de sumir antes de você perder a venda.',
    icon: TrendingUp,
    cta: 'Aplicar Recomendações',
    simpleSummary:
      'Um sistema inteligente que descobre o que cada cliente gosta de comprar e sugere produtos parecidos para ele (igual a Amazon faz). Ele também avisa você quando um cliente antigo está prestes a sumir para você entrar em contato antes de perdê-lo.',
    overview:
      'Uso inteligente do histórico de compras para aumentar o valor de cada venda e manter os clientes comprando com frequência.',
    deliverables: [
      'Sugestão automática de produtos adicionais no momento da compra (aumentando o valor do pedido)',
      'Previsão de quanto você vai vender no próximo mês para não comprar estoque em excesso',
      'Lista automática de clientes que precisam ser contatados para não serem perdidos',
      'Testes comprovando o aumento real nas vendas gerado pelas recomendações',
    ],
    businessImpact:
      'Aumento imediato no valor gasto por cada cliente e fidelização ativa da sua carteira.',
  },
  {
    id: '12',
    title: 'Otimização Extrema de Velocidade Web',
    description:
      'Deixamos seu site tão rápido que ele abre no mesmo milissegundo em que é clicado, melhorando o posicionamento no Google e evitando perda de vendas.',
    icon: Zap,
    cta: 'Acelerar Meu Site',
    simpleSummary:
      'Deixamos seu site tão rápido que ele abre no mesmo instante em que a pessoa clica. Sites rápidos passam muito mais confiança, aparecem nas primeiras posições do Google e não deixam o cliente desistir da compra por causa de lentidão.',
    overview:
      'Reforma técnica profunda para eliminar lentidão em sites e páginas de vendas, aumentando a velocidade e as conversões.',
    deliverables: [
      'Carregamento do site em menos de 1 segundo mesmo no 4G do celular',
      'Imagens leves e compactadas sem perder nenhuma qualidade visual',
      'Ajustes técnicos para o seu site subir no ranking de buscas do Google',
      'Nota alta comprovada no teste oficial de velocidade do Google (Lighthouse)',
    ],
    businessImpact:
      'Mais visitantes chegando pelo Google e muito mais vendas concluídas sem perda de clientes por lentidão.',
  },
  {
    id: '13',
    title: 'Orquestração de Workflows & Webhooks',
    description:
      'Conexão entre todas as ferramentas que você usa (WhatsApp, planilhas, ERP e e-mail) para que uma ação atualize todas as outras automaticamente.',
    icon: Workflow,
    cta: 'Conectar Ferramentas',
    simpleSummary:
      'Conectamos todas as ferramentas que sua empresa usa (como WhatsApp, e-mail, planilha, maquininha de cartão e sistema de vendas) para que elas funcionem como uma orquestra afinada, sem você precisar passar recados de um sistema para o outro.',
    overview:
      'Integração total entre ferramentas do dia a dia para que toda a sua operação ande no piloto automático.',
    deliverables: [
      'Disparo automático de mensagens ou notas assim que um evento acontece',
      'Sincronização em tempo real entre plataformas sem perder nenhum dado',
      'Tentativa automática de reenvio caso a internet ou algum sistema caia temporariamente',
      'Avisos imediatos no seu WhatsApp quando algo importante acontecer na empresa',
    ],
    businessImpact:
      'Processos da empresa acontecendo no automático, com zero retrabalho e menos funcionários ocupados com burocracia.',
  },
  {
    id: '14',
    title: 'Segurança da Informação & Blindagem Digital',
    description:
      'Proteção técnica completa contra hackers, invasões, roubo de senhas e vazamento de dados de clientes, deixando seu sistema 100% seguro e dentro da LGPD.',
    icon: ShieldCheck,
    cta: 'Blindar Aplicação',
    simpleSummary:
      'Blindamos o seu site e os dados dos seus clientes contra golpistas, invasores e vazamentos. Sua empresa fica protegida contra dores de cabeça jurídicas e multas da Lei Geral de Proteção de Dados (LGPD).',
    overview:
      'Inspeção detalhada de segurança e aplicação de travas de proteção para garantir que somente pessoas autorizadas acessem as informações da sua empresa.',
    deliverables: [
      'Bloqueio contra tentativas de invasão e roubo de senhas',
      'Criptografia de ponta a ponta para proteger dados de cartão e documentos de clientes',
      'Controle rigoroso de quem pode ver ou alterar informações confidenciais',
      'Relatório de segurança simples comprovando que o sistema está blindado',
    ],
    businessImpact:
      'Tranquilidade absoluta sabendo que o seu negócio está protegido contra golpes e vazamentos de dados.',
  },
  {
    id: '15',
    title: 'Infraestrutura Cloud & DevOps Serverless',
    description:
      'Hospedagem de alta tecnologia nos servidores da Amazon e Google, garantindo que seu sistema nunca caia e gaste apenas o estritamente necessário.',
    icon: Cloud,
    cta: 'Otimizar Hospedagem',
    simpleSummary:
      'Hospedamos o seu site ou sistema nos servidores mais modernos do mundo (Amazon e Google). Seu sistema nunca cai, abre super rápido em qualquer celular e você não gasta dinheiro à toa com servidores caros.',
    overview:
      'Configuração profissional de servidores em nuvem para que sua empresa tenha a mesma estabilidade e velocidade das maiores empresas de tecnologia.',
    deliverables: [
      'Hospedagem segura com proteção contra quedas e lentidão',
      'Sistema de backup automático diário para proteger seus dados contra perdas',
      'Certificados de segurança SSL (o cadeado verde no navegador) inclusos',
      'Otimização da conta de nuvem para pagar somente pelo que realmente utilizar',
    ],
    businessImpact:
      'Seu sistema disponível 24 horas por dia, 7 dias por semana, sem sustos ou faturas abusivas no fim do mês.',
  },
  {
    id: '16',
    title: 'Microsserviços & Conexão de APIs',
    description:
      'Serviços independentes e ultra-rápidos que permitem plugar novos aplicativos e ferramentas parceiras sem precisar refazer o código principal.',
    icon: Network,
    cta: 'Construir Microsserviços',
    simpleSummary:
      'Fazemos seus diferentes programas e sistemas conversarem entre si. Por exemplo: quando você faz uma venda, o sistema atualiza o estoque sozinho, emite a nota fiscal e já avisa a transportadora sem ninguém precisar digitar nada duas vezes.',
    overview:
      'Conexão inteligente entre diferentes plataformas para que todas as informações circulem sozinhas e em tempo real pela sua empresa.',
    deliverables: [
      'Conexão segura entre sistemas antigos, sites e aplicativos mobile',
      'Troca de dados automática em menos de um segundo',
      'Manual passo a passo para que qualquer programador futuro consiga conectar novas ferramentas',
      'Garantia de que nenhuma informação ou pedido se perca no caminho',
    ],
    businessImpact:
      'Fim do trabalho duplo de digitar a mesma informação em dois ou três sistemas diferentes.',
  },
  {
    id: '17',
    title: 'Engenharia de Dados & Aceleração de Banco',
    description:
      'Ajuste fino em bancos de dados lentos ou travando, organizando índices e memória rápida para que relatórios e telas abram na mesma hora.',
    icon: Database,
    cta: 'Acelerar Banco de Dados',
    simpleSummary:
      'Se o seu sistema está lento, travando ou demorando uma eternidade para abrir relatórios e telas, nós organizamos as gavetas digitais dele para deixá-lo até 10 vezes mais rápido na mesma hora.',
    overview:
      'Limpeza e aceleração do banco de dados da sua empresa, garantindo que buscas por clientes ou relatórios abram em milissegundos.',
    deliverables: [
      'Diagnóstico de onde o sistema está travando e por que está demorando para carregar',
      'Reorganização e aceleração de buscas e relatórios pesados',
      'Memória rápida para entregar dados frequentes de forma instantânea',
      'Cópias de segurança automáticas para nunca perder nenhum dado antigo',
    ],
    businessImpact:
      'Sistemas e telas abrindo imediatamente, sem filas ou reclamações de lentidão por parte da equipe.',
  },
  {
    id: '18',
    title: 'Engenharia de Sistemas High-End',
    description:
      'Arquiteturas escaláveis e APIs de alta performance, projetadas para suportar o crescimento da sua operação sem gargalos tecnológicos.',
    icon: SystemIcon,
    cta: 'Consultar Arquitetura',
    simpleSummary:
      'Criamos um sistema exclusivo e profissional feito especialmente para o seu negócio. Ele não trava, aguenta milhares de pessoas usando ao mesmo tempo e está pronto para sua empresa crescer sem precisar refazer tudo do zero depois.',
    overview:
      'Desenvolvimento de software profissional focado em velocidade, estabilidade e capacidade de suportar grandes volumes de acessos com segurança.',
    deliverables: [
      'Sistema web completo, rápido e adaptado para celular e computador',
      'Banco de dados organizado para suportar milhares de cadastros sem lentidão',
      'Estrutura preparada para atualizações contínuas sem tirar o sistema do ar',
      'Treinamento e documentação clara para você e sua equipe usarem com facilidade',
    ],
    businessImpact:
      'Fim dos travamentos, segurança para expandir as vendas e zero dor de cabeça com tecnologia frágil.',
  },
  {
    id: '19',
    title: 'Sistema para Clínicas & Consultórios Médicos',
    description:
      'Agendamento online, prontuário eletrônico seguro, confirmação automática de consultas no WhatsApp e gestão financeira da clínica.',
    icon: Stethoscope,
    cta: 'Conhecer Sistema de Clínica',
    simpleSummary:
      'Chega de pacientes faltando: o sistema envia confirmações automáticas no WhatsApp e organiza a agenda dos médicos, prontuários dos pacientes e pagamentos em um só lugar.',
    overview:
      'Solução completa para clínicas e consultórios eliminarem a papelada e organizarem consultas com prontuário digital e histórico clínico.',
    deliverables: [
      'Agendamento online integrado com a agenda do médico ou especialista',
      'Confirmação e lembretes automáticos no WhatsApp do paciente',
      'Prontuário eletrônico seguro em conformidade com o CFM e LGPD',
      'Controle financeiro de consultas particulares e convênios',
    ],
    businessImpact:
      'Redução de até 80% nas faltas de pacientes e prontuários acessíveis com segurança de qualquer lugar.',
  },
  {
    id: '20',
    title: 'Plataforma E-commerce & Lojas Virtuais Exclusivas',
    description:
      'Loja virtual rápida e profissional com cálculo de frete automático (Correios/Melhor Envio), Pix com baixa instantânea e gestão de pedidos.',
    icon: ShoppingBag,
    cta: 'Criar Minha Loja Virtual',
    simpleSummary:
      'Sua própria loja na internet sem pagar comissões para terceiros. O cliente escolhe o produto, calcula o frete, paga no Pix ou cartão e o pedido cai no seu painel para envio.',
    overview:
      'Desenvolvimento de lojas virtuais de alta velocidade desenhadas para converter visitantes em compradores em poucos segundos.',
    deliverables: [
      'Catálogo de produtos com fotos em alta resolução e variações (cor/tamanho)',
      'Cálculo de frete em tempo real integrado a Correios e transportadoras',
      'Checkout em 1 etapa com Pix dinâmico e cartão de crédito',
      'Painel de controle de estoque, pedidos e etiquetas de envio',
    ],
    businessImpact:
      'Vendas online 24h por dia direto para o seu caixa, sem intermediários comendo sua margem de lucro.',
  },
  {
    id: '21',
    title: 'Sistema para Imobiliárias & Corretores',
    description:
      'Catálogo de imóveis com fotos em alta resolução, busca inteligente por bairro/preço, captação automática de leads e integração com portais.',
    icon: Home,
    cta: 'Conhecer Sistema Imobiliário',
    simpleSummary:
      'Um portal elegante para seus imóveis onde clientes encontram a casa ou apartamento dos sonhos em segundos e já caem no WhatsApp do corretor responsável pelo imóvel.',
    overview:
      'Plataforma para imobiliárias e corretores autônomos gerenciarem carteiras de imóveis para venda e locação com alta conversão.',
    deliverables: [
      'Site imobiliário moderno com filtros de busca avançados (bairro, valor, dormitórios)',
      'Página detalhada de cada imóvel com fotos, mapa e botão direto de WhatsApp',
      'Integração de feed automático com portais imobiliários e redes sociais',
      'Painel de captação de novos proprietários e gestão de contratos',
    ],
    businessImpact:
      'Captação contínua de compradores e inquilinos com apresentação impecável e profissional dos imóveis.',
  },
  {
    id: '22',
    title: 'Automação de Emissão de Notas Fiscais (NF-e / NFS-e)',
    description:
      'Emissão automática de notas fiscais de produtos ou serviços integradas com a SEFAZ e prefeituras, sem intervenção humana.',
    icon: Receipt,
    cta: 'Automatizar Notas Fiscais',
    simpleSummary:
      'Seus clientes compram e a nota fiscal é emitida e enviada por e-mail no mesmo minuto, sem ninguém precisar abrir o site da prefeitura para preencher tudo na mão.',
    overview:
      'Integração direta com órgãos fiscais para autorização, geração de XML/PDF e disparo automático de notas fiscais.',
    deliverables: [
      'Emissão automática a cada venda aprovada no cartão ou Pix',
      'Integração com prefeituras (NFS-e) e Receita Estadual (NF-e/NFC-e)',
      'Envio automático do XML e PDF da nota fiscal para o cliente',
      'Cancelamento e cartas de correção direto pelo painel de controle',
    ],
    businessImpact:
      'Economia de dezenas de horas de trabalho do setor financeiro e fim dos erros no preenchimento de impostos.',
  },
  {
    id: '23',
    title: 'Gestão para Restaurantes & Delivery sem Taxas',
    description:
      'Cardápio digital interativo com QR Code, pedidos diretos no WhatsApp sem taxas abusivas de aplicativos e comanda digital para cozinha.',
    icon: Utensils,
    cta: 'Criar Delivery Próprio',
    simpleSummary:
      'Chega de pagar comissões pesadas para aplicativos de comida: seus clientes pedem pelo seu próprio cardápio digital, o pedido imprime na cozinha e você fica com 100% do lucro.',
    overview:
      'Sistema completo de pedidos para restaurantes, pizzarias, hamburguerias e lanchonetes com cardápio dinâmico e gestão de entregas.',
    deliverables: [
      'Cardápio digital bonito para celular com fotos, adicionais e combos',
      'Pedidos enviados com endereço e total calculados direto no WhatsApp',
      'Painel de impressão de comandas para a cozinha ou copa',
      'Controle de bairros de entrega com taxas de frete personalizadas',
    ],
    businessImpact:
      'Aumento imediato do lucro líquido ao eliminar intermediários de entrega em pedidos de clientes fiéis.',
  },
  {
    id: '24',
    title: 'Plataforma EAD & Cursos Online (Área de Membros)',
    description:
      'Área de membros para hospedagem de cursos, streaming de aulas protegido contra downloads ilegais, emissão de certificados e quiz.',
    icon: GraduationCap,
    cta: 'Criar Plataforma EAD',
    simpleSummary:
      'Sua própria escola online ou área de membros protegida. Os alunos compram, recebem o acesso no e-mail, assistem às aulas em qualquer dispositivo e recebem certificado automático.',
    overview:
      'Plataforma para infoprodutores, professores e empresas treinarem equipes e alunos com segurança contra pirataria.',
    deliverables: [
      'Ambiente de alunos moderno estilo streaming com módulos e aulas',
      'Proteção contra gravação de tela e downloads não autorizados',
      'Emissão de certificados digitais automáticos ao concluir o curso',
      'Controle de progresso individual e suporte a comentários nas aulas',
    ],
    businessImpact:
      'Profissionalismo total para seus treinamentos e proteção do seu patrimônio intelectual contra pirataria.',
  },
  {
    id: '25',
    title: 'Sistema de Agendamento para Salões & Estética',
    description:
      'Controle de procedimentos, pacotes de sessões, fidelidade, comissões de profissionais e lembretes automáticos no WhatsApp.',
    icon: Sparkles,
    cta: 'Conhecer Sistema de Estética',
    simpleSummary:
      'Clientes agendam manicure, cabelo ou procedimentos pelo celular 24h por dia. O sistema calcula a comissão dos profissionais e avisa a cliente antes do horário para ela não faltar.',
    overview:
      'Gestão sob medida para clínicas de estética, spas e salões de beleza com foco em retenção e aumento de frequência das clientes.',
    deliverables: [
      'Agendamento online sem conflito de horários entre profissionais',
      'Controle de pacotes (ex: 10 sessões de drenagem) com contagem automática',
      'Cálculo de comissão por serviço executado para cada profissional',
      'Disparo de lembretes no WhatsApp para reduzir faltas em até 70%',
    ],
    businessImpact:
      'Agenda sempre cheia, redução drástica de faltas e controle financeiro transparente da equipe.',
  },
  {
    id: '26',
    title: 'CRM de Vendas & Gestão de Funil de Leads',
    description:
      'Pipeline Kanban de vendas, histórico completo de conversas, lembretes de retorno e métricas de desempenho de cada vendedor.',
    icon: Target,
    cta: 'Estruturar CRM de Vendas',
    simpleSummary:
      'Seus vendedores nunca mais vão esquecer de responder ou ligar para um cliente. Você acompanha em qual etapa cada negociação está e sabe exatamente quanto vai faturar no mês.',
    overview:
      'Organização visual e estratégica do processo comercial para transformar mais orçamentos em vendas fechadas.',
    deliverables: [
      'Funil de vendas visual (Novo lead, Contato feito, Proposta enviada, Fechado)',
      'Histórico de mensagens e anotações gravadas em cada cliente',
      'Lembretes de retorno para não deixar propostas esfriarem',
      'Dashboard com taxa de conversão e faturamento por vendedor',
    ],
    businessImpact:
      'Aumento imediato na taxa de fechamento de propostas ao eliminar o esquecimento comercial.',
  },
  {
    id: '27',
    title: 'Sistema de Gestão de Frotas & Rastreamento',
    description:
      'Monitoramento de veículos via GPS, controle de gastos com combustível, manutenções preventivas e pontuação de motoristas.',
    icon: Truck,
    cta: 'Controlar Minha Frota',
    simpleSummary:
      'Acompanhe no mapa onde seus veículos estão agora, controle o consumo de combustível e receba alertas automáticos quando for hora de trocar óleo ou pneus.',
    overview:
      'Controle operacional e financeiro de veículos, motos e caminhões para empresas de logística, transporte e serviços externos.',
    deliverables: [
      'Painel com mapa ao vivo de localização e rotas percorridas',
      'Controle de abastecimento, média de km por litro e custos operacionais',
      'Agenda de manutenção preventiva com alertas de quilometragem',
      'Histórico de multas, revisões e documentação de cada motorista',
    ],
    businessImpact:
      'Redução de até 30% nos custos de combustível e manutenção de veículos da empresa.',
  },
  {
    id: '28',
    title: 'Automação Contábil & Conciliação Bancária',
    description:
      'Leitura de extratos bancários (OFX/PDF), cruzamento automático com contas a pagar/receber e conciliação financeira sem erros.',
    icon: Calculator,
    cta: 'Automatizar Conciliação',
    simpleSummary:
      'Suba o extrato do seu banco e o sistema bate na mesma hora com as notas fiscais e vendas, encontrando onde está faltando dinheiro sem você passar horas conferindo linha por linha.',
    overview:
      'Solução para empresas e escritórios contábeis eliminarem o trabalho manual de bater contas bancárias com notas fiscais.',
    deliverables: [
      'Importação de extratos de qualquer banco brasileiro (Itaú, Bradesco, Inter, Nubank)',
      'Identificação automática de pagamentos de clientes e despesas com fornecedores',
      'Apontamento de divergências de valores ou pagamentos duplicados',
      'Exportação de relatórios prontos para a contabilidade',
    ],
    businessImpact:
      'Fechamento do mês em minutos com precisão contábil e zero tempo perdido em planilhas manuais.',
  },
  {
    id: '29',
    title: 'Plataforma de Afiliados & Gestão de Comissões',
    description:
      'Painel para recrutamento de parceiros e influenciadores, rastreamento de cliques com cookies avançados e pagamento de comissões.',
    icon: Coins,
    cta: 'Criar Programa de Afiliados',
    simpleSummary:
      'Crie seu próprio exército de vendedores na internet. Pessoas divulgam seus produtos usando links personalizados e recebem comissão automática a cada venda realizada.',
    overview:
      'Infraestrutura completa para você lançar seu programa de afiliados próprio sem depender de plataformas que cobram taxas abusivas.',
    deliverables: [
      'Links rastreáveis exclusivos para cada afiliado e influenciador',
      'Painel onde o afiliado acompanha cliques, vendas e saldo a receber',
      'Cálculo e pagamento automático de comissões via Pix',
      'Controle de regras (comissão no primeiro clique, último clique ou recorrente)',
    ],
    businessImpact:
      'Multiplicação de vendas através de parceiros que só ganham se você vender primeiro.',
  },
  {
    id: '30',
    title: 'Sistema para Escritórios de Advocacia & Jurídico',
    description:
      'Acompanhamento automático de processos nos tribunais (PJe, Projudi), controle de prazos fatais, clientes e gestão de honorários.',
    icon: Scale,
    cta: 'Conhecer Sistema Jurídico',
    simpleSummary:
      'O sistema avisa você no WhatsApp assim que sai uma nova movimentação nos seus processos, impedindo a perda de prazos e organizando os honorários de cada caso.',
    overview:
      'Gestão processual e financeira construída sob medida para bancas de advocacia e advogados autônomos.',
    deliverables: [
      'Robô que monitora diários oficiais e avisa sobre novas publicações',
      'Controle rigoroso de prazos com calendário visual de audiências',
      'Cadastro de clientes com upload seguro de documentos e procurações',
      'Gestão de honorários contratuais e sucumbenciais com controle de parcelas',
    ],
    businessImpact:
      'Segurança absoluta contra perda de prazos processuais e organização financeira do escritório.',
  },
  {
    id: '31',
    title: 'Sistema para Academias & Estúdios Fitness',
    description:
      'Integração com catraca de acesso, ficha de treino personalizada no celular do aluno e controle de planos recorrentes.',
    icon: Dumbbell,
    cta: 'Conhecer Sistema para Academia',
    simpleSummary:
      'Alunos passam na catraca e acessam o treino do dia no celular. O sistema cobra a mensalidade automaticamente no cartão todo mês para você nunca mais ter calote.',
    overview:
      'Gestão completa para academias, boxes de crossfit e estúdios de pilates com foco em retenção e cobrança automática.',
    deliverables: [
      'Liberação de catracas físicas ou biométricas sincronizadas com a mensalidade',
      'Ficha de treinos digital com vídeos demonstrativos de exercícios',
      'Cobrança recorrente no cartão de crédito sem ocupar o limite do aluno',
      'Relatório de frequência e aviso automático para alunos que pararam de frequentar',
    ],
    businessImpact:
      'Eliminação da inadimplência com cobrança no cartão e retenção ativa de alunos antes do cancelamento.',
  },
  {
    id: '32',
    title: 'Automação de Disparo em Massa no WhatsApp',
    description:
      'Envio inteligente de mensagens segmentadas para base de clientes com rotação de números, personalização e proteção anti-bloqueio.',
    icon: Send,
    cta: 'Ativar Disparos no WhatsApp',
    simpleSummary:
      'Divulgue suas promoções e novidades para milhares de clientes no WhatsApp chamando cada um pelo nome, com intervalos inteligentes para proteger seu número.',
    overview:
      'Ferramenta para envio de campanhas promocionais e reativação de clientes inativos no WhatsApp de forma segura e profissional.',
    deliverables: [
      'Envio de mensagens personalizadas com o primeiro nome de cada cliente',
      'Temporizador e intervalos dinâmicos para respeitar as diretrizes da Meta',
      'Importação de planilhas de contatos e segmentação por tags de interesse',
      'Relatório de mensagens entregues, lidas e respostas recebidas',
    ],
    businessImpact:
      'Explosão de vendas em datas comemorativas reativando clientes antigos que já compraram de você.',
  },
  {
    id: '33',
    title: 'Sistema para Oficinas Mecânicas & Auto Centers',
    description:
      'Ordens de serviço digitais com fotos do veículo, controle de peças e estoque, checklist de entrada e aprovação de orçamento no WhatsApp.',
    icon: Wrench,
    cta: 'Conhecer Sistema de Oficina',
    simpleSummary:
      'Faça a vistoria do carro pelo celular com fotos, mande o orçamento detalhado no WhatsApp do cliente com 1 clique para aprovar e controle as peças gastas.',
    overview:
      'Gestão ágil para oficinas mecânicas, funilarias e centros automotivos modernizarem o atendimento e passarem mais confiança.',
    deliverables: [
      'Ordem de Serviço (OS) com fotos do veículo e checklist de avarias na entrada',
      'Envio de orçamento com botão para o cliente aprovar direto no WhatsApp',
      'Baixa automática das peças usadas no estoque e cálculo de mão de obra',
      'Lembrete automático para o cliente quando o veículo estiver pronto para retirada',
    ],
    businessImpact:
      'Muito mais orçamentos aprovados devido à transparência com fotos e histórico do carro.',
  },
  {
    id: '34',
    title: 'Motor de Busca Inteligente (ElasticSearch)',
    description:
      'Busca instantânea de produtos e documentos com autocorreção de erros de digitação, sinônimos e relevância por popularidade.',
    icon: Search,
    cta: 'Turbinar Busca Interna',
    simpleSummary:
      'Mesmo se o cliente digitar o nome do produto errado (como "tênis niki"), a busca entende na hora e mostra o produto certo em menos de 10 milissegundos.',
    overview:
      'Motor de busca corporativo para sites de e-commerce e portais de conteúdo que precisam responder pesquisas instantaneamente.',
    deliverables: [
      'Resultados exibidos em milissegundos mesmo com milhões de itens cadastrados',
      'Tolerância a erros ortográficos e acentuação incorreta (fuzzy search)',
      'Filtros inteligentes por categoria, preço, marca e disponibilidade',
      'Relatório das palavras mais pesquisadas para identificar demandas dos clientes',
    ],
    businessImpact:
      'Aumento de até 40% na conversão de vendas geradas pelo campo de pesquisa da sua loja.',
  },
  {
    id: '35',
    title: 'Sistema para Escolas & Cursos Presenciais',
    description:
      'Diário de classe eletrônico, boletim de notas, controle de faltas, comunicação com pais e emissão de boletos escolares.',
    icon: BookOpen,
    cta: 'Conhecer Sistema Escolar',
    simpleSummary:
      'Professores lançam notas e faltas pelo celular, e os pais acompanham o desempenho do filho e pagam as mensalidades sem precisar ir até a secretaria.',
    overview:
      'Software escolar completo para colégios, cursos preparatórios e escolas de idiomas gerenciarem área pedagógica e financeira.',
    deliverables: [
      'Portal do aluno e dos pais para consulta de notas, faltas e avisos da escola',
      'Diário eletrônico para professores lançarem conteúdos e avaliações',
      'Emissão automática de mensalidades via boleto ou Pix com código de barras',
      'Canal de comunicados oficiais e recados urgentes enviados no celular dos pais',
    ],
    businessImpact:
      'Redução do trabalho burocrático da secretaria e diminuição da inadimplência escolar com avisos automáticos.',
  },
  {
    id: '36',
    title: 'Plataforma de Rifas & Campanhas Online',
    description:
      'Sistema de números da sorte com escolha manual ou aleatória, baixa instantânea via Pix Copia e Cola e conferência com Loteria Federal.',
    icon: Ticket,
    cta: 'Criar Plataforma de Rifas',
    simpleSummary:
      'Venda números da sorte na internet com liberação instantânea no Pix. O comprador paga no celular e o número dele é reservado na mesma hora sem risco de números duplicados.',
    overview:
      'Plataforma de alta capacidade para sorteios e campanhas beneficentes que suporta milhares de acessos simultâneos sem travar.',
    deliverables: [
      'Escolha de bilhetes com gerador de números aleatórios ("cotas premiadas")',
      'Pagamento automático no Pix com confirmação em menos de 2 segundos',
      'Ranking visual dos maiores compradores ("top compradores") para estimular vendas',
      'Sorteio auditável integrado à extração da Loteria Federal',
    ],
    businessImpact:
      'Capacidade de vender centenas de milhares de cotas em poucas horas sem lentidão ou erros no Pix.',
  },
  {
    id: '37',
    title: 'Sistema de Helpdesk & Chamados de Suporte',
    description:
      'Centralização de atendimentos vindos de e-mail, site e WhatsApp em uma tela unificada com níveis de urgência e fila de técnicos.',
    icon: Headphones,
    cta: 'Organizar Meu Suporte',
    simpleSummary:
      'Nenhum pedido de ajuda de cliente se perde. Todas as mensagens viram tíquetes organizados com prazo para responder e você sabe quem da equipe está atendendo cada caso.',
    overview:
      'Estrutura profissional de suporte ao cliente para empresas de tecnologia, assistência técnica e prestadores de serviços.',
    deliverables: [
      'Painel único reunindo chamados abertos por WhatsApp, e-mail e formulário',
      'Definição de prazos de atendimento (SLA) com alertas para casos atrasados',
      'Respostas pré-prontas para dúvidas frequentes acelerando o atendimento em 5x',
      'Pesquisa automática de satisfação do cliente após a resolução do chamado',
    ],
    businessImpact:
      'Atendimento ao cliente impecável e ágil, melhorando a pontuação e confiança da sua marca no mercado.',
  },
  {
    id: '38',
    title: 'Automação de Contratos & Assinatura Digital',
    description:
      'Preenchimento dinâmico de minutas de contratos com dados de clientes e envio automático para assinatura eletrônica com validade jurídica.',
    icon: FileText,
    cta: 'Automatizar Contratos',
    simpleSummary:
      'Você fecha o negócio e o contrato já sai preenchido com os dados do cliente e vai para o celular dele assinar com o dedo em 1 minuto, com total validade jurídica.',
    overview:
      'Eliminação da burocracia de imprimir papéis e reconhecer firma, acelerando o fechamento de novos clientes.',
    deliverables: [
      'Geração automática de contratos em PDF a partir de templates personalizados',
      'Envio do link de assinatura por WhatsApp ou e-mail com 1 clique',
      'Assinatura com registro de IP, data, hora e geolocalização válida juridicamente',
      'Armazenamento seguro de todos os contratos assinados na nuvem',
    ],
    businessImpact:
      'Fechamento de contratos na mesma hora da negociação, sem deixar o cliente esfriar pensando ou adiando.',
  },
  {
    id: '39',
    title: 'Gestão de Eventos & Venda de Ingressos',
    description:
      'Venda de lotes de ingressos online, geração de ingressos com QR Code nominal e aplicativo de validação e portaria ultrarrápido.',
    icon: Calendar,
    cta: 'Conhecer Sistema de Eventos',
    simpleSummary:
      'Venda ingressos para seus shows, workshops ou festas na internet. O comprador recebe o ingresso no WhatsApp e na entrada do evento você valida o QR Code em 1 segundo.',
    overview:
      'Plataforma própria de bilheteria para produtores de eventos, igrejas e conferências sem pagar comissões altas para plataformas externas.',
    deliverables: [
      'Página exclusiva de venda do evento com contagem regressiva e lotes automáticos',
      'Ingresso digital com QR Code anticópia enviado no WhatsApp e e-mail',
      'Aplicativo de portaria para escanear ingressos com a câmera do celular',
      'Relatório de público presente em tempo real e faturamento de bilheteria',
    ],
    businessImpact:
      'Portaria sem filas, controle antifraude de ingressos e lucro total da bilheteria na sua conta.',
  },
  {
    id: '40',
    title: 'Radar de Inteligência Competitiva & Alertas',
    description:
      'Monitoramento contínuo da concorrência e do mercado com alertas instantâneos no WhatsApp sobre mudanças de preço, lançamentos e campanhas.',
    icon: Radar,
    cta: 'Ativar Radar Competitivo',
    simpleSummary:
      'Um radar automático que vigia os seus principais concorrentes todos os dias. Se alguém baixar o preço ou lançar um produto novo, você recebe um aviso no celular na mesma hora.',
    overview:
      'Plataforma de inteligência de mercado que acompanha movimentos de concorrentes na internet para você tomar decisões antes deles.',
    deliverables: [
      'Vigilância automatizada de sites, redes sociais e anúncios dos concorrentes',
      'Notificações no WhatsApp quando houver alteração de preços ou promoções',
      'Relatório semanal com análise de estratégias do mercado e tendências',
      'Painel visual comparativo de posicionamento da sua empresa x concorrentes',
    ],
    businessImpact:
      'Nunca ser pego de surpresa pelo mercado e liderar com ofertas sempre mais inteligentes e lucrativas.',
  },
]

export function ExpertiseSection() {
  const [visibleCount, setVisibleCount] = useState(5)
  const [selectedService, setSelectedService] = useState<Service | null>(null)

  const visibleServices = services.slice(0, visibleCount)
  const hasMore = visibleCount < services.length

  // Travar o scroll da página enquanto o modal estiver aberto
  useEffect(() => {
    if (selectedService) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedService(null)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = 'unset'
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [selectedService])

  return (
    <section id="expertise" className="relative py-32 md:py-48 overflow-hidden bg-background">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={bgImage}
          alt="Plano de Fundo"
          fill
          className="object-cover object-center opacity-30"
        />
        <div className="absolute inset-0 bg-background/70"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background"></div>
      </div>

      <div className="relative w-full px-6 md:px-12 lg:px-20 xl:px-32 z-10">
        <div className="flex flex-col gap-16 lg:flex-row lg:items-start lg:gap-24">
          
          {/* Esquerda: Sticky Header & Illustration */}
          <div className="lg:sticky lg:top-32 lg:w-[40%] flex flex-col">
            <span className="text-[10px] font-semibold tracking-[0.2em] text-primary uppercase mb-6 block">
              Nossas Soluções
            </span>
            <h2 className="text-balance text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.1]">
              Tecnologia que <br/> transforma ideias <br/> <span className="text-primary">em resultados.</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-slate-400 max-w-md">
              Soluções digitais <span className="text-white font-medium">inteligentes</span> e automação prática para otimizar processos, reduzir custos e acelerar o crescimento do seu negócio.
            </p>
          </div>

          {/* Direita: Módulos de Serviço (Cards) */}
          <div className="flex flex-col gap-4 sm:gap-8 lg:w-[60%]">
            <style>{`
              @keyframes btn-oscillate-exp {
                0%, 100% {
                  border-color: rgba(34, 211, 238, 0.5);
                  background-color: rgba(34, 211, 238, 0.12);
                  box-shadow: inset 0 0 10px rgba(34, 211, 238, 0.35);
                  color: #e0f2fe;
                }
                50% {
                  border-color: rgba(0, 123, 255, 0.85);
                  background-color: rgba(0, 123, 255, 0.32);
                  box-shadow: inset 0 0 14px rgba(0, 123, 255, 0.55);
                  color: #ffffff;
                }
              }
              @keyframes icon-pulse-exp {
                0%, 100% {
                  color: #22d3ee;
                }
                50% {
                  color: #60a5fa;
                }
              }
              .animate-oscillate-exp {
                animation: btn-oscillate-exp 2.2s ease-in-out infinite;
              }
              .animate-icon-pulse-exp {
                animation: icon-pulse-exp 2.2s ease-in-out infinite;
              }
            `}</style>
            {visibleServices.map((service) => {
              const Icon = service.icon
              const whatsappUrl = `https://wa.me/5592974005948?text=${encodeURIComponent(
                `Olá! Tenho interesse na solução "${service.title}". Como podemos implementar isso no meu negócio?`
              )}`

              return (
                <div
                  key={service.id}
                  className="group relative flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 rounded-2xl border border-border/50 bg-card/60 p-5 sm:p-8 hover:bg-card/90 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 overflow-hidden"
                >
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/0 to-primary/[0.04] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Top Bar no Mobile: ID na esquerda + Ícone compacto na direita */}
                  <div className="flex sm:hidden items-center justify-between w-full z-10">
                    <span className="text-[11px] font-bold text-primary bg-primary/10 border border-primary/25 px-2.5 py-1 rounded-md">
                      {service.id}
                    </span>
                    <div className="flex items-center justify-center w-10 h-10 rounded-xl border border-border/60 bg-primary/5 group-hover:border-primary/40 group-hover:bg-primary/10 transition-colors">
                      <Icon className="h-5 w-5 text-primary" strokeWidth={1.75} aria-hidden="true" />
                    </div>
                  </div>

                  {/* ID + Linha divisória vertical (Apenas Desktop) */}
                  <div className="hidden sm:flex flex-col items-center gap-4 mt-1 z-10">
                    <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded">
                      {service.id}
                    </span>
                    <div className="w-px h-20 bg-border/80 group-hover:bg-primary/20 transition-colors duration-500"></div>
                  </div>
                  
                  {/* Conteúdo de Texto e Ações */}
                  <div className="flex flex-col gap-2 sm:gap-3 flex-1 z-10 w-full">
                    <h3 className="text-base sm:text-xl font-bold tracking-tight text-white leading-snug">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm leading-relaxed text-slate-400">
                      {service.description}
                    </p>

                    {/* Botões de Ação: Saber Mais + WhatsApp */}
                    <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-1 sm:pt-2">
                      <button
                        type="button"
                        onClick={() => setSelectedService(service)}
                        className="animate-oscillate-exp overflow-hidden inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border font-medium text-xs transition-transform duration-300 hover:scale-105 active:scale-95"
                      >
                        <Info className="animate-icon-pulse-exp h-3.5 w-3.5 shrink-0" />
                        <span>Saber mais</span>
                      </button>

                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-primary hover:text-white transition-colors duration-300 group/link"
                      >
                        <span>{service.cta}</span>
                        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                      </a>
                    </div>
                  </div>
                  
                  {/* Ícone Redondo Grande (Apenas Desktop) */}
                  <div className="hidden sm:flex shrink-0 z-10 self-center">
                    <div className="flex items-center justify-center w-20 h-20 lg:w-24 lg:h-24 rounded-full border border-border/50 bg-background/50 group-hover:border-primary/50 group-hover:bg-primary/5 transition-all duration-500">
                      <Icon className="h-10 w-10 lg:h-12 lg:w-12 text-primary/80 group-hover:text-primary transition-colors duration-500" strokeWidth={1.5} aria-hidden="true" />
                    </div>
                  </div>
                </div>
              )
            })}

            {/* Botão de Expandir / Recolher */}
            <div className="pt-4 flex flex-col items-center sm:items-start gap-3">
              <button
                type="button"
                onClick={() => {
                  if (hasMore) {
                    setVisibleCount((prev) => Math.min(prev + 5, services.length))
                  } else {
                    setVisibleCount(5)
                  }
                }}
                className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-xl border border-primary/40 bg-primary/10 hover:bg-primary/20 hover:border-primary text-white font-semibold text-xs tracking-wider uppercase transition-all duration-300 hover:shadow-lg hover:shadow-primary/15 active:scale-[0.98]"
              >
                <span>
                  {hasMore ? 'Mostrar mais' : 'Mostrar menos'}
                </span>
                <ChevronDown
                  className={`w-4 h-4 text-primary transition-transform duration-300 ${
                    !hasMore ? 'rotate-180' : 'group-hover:translate-y-0.5'
                  }`}
                />
              </button>
            </div>

          </div>
          
        </div>
      </div>

      {/* Modal Interativo com Detalhes da Solução */}
      {selectedService && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 animate-in fade-in duration-300"
        >
          {/* Backdrop com desfoque */}
          <div
            onClick={() => setSelectedService(null)}
            className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
          />

          {/* Conteúdo do Modal */}
          <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl border border-primary/30 bg-[#091522] p-6 sm:p-8 shadow-2xl z-10 animate-in zoom-in-95 duration-200">

            {/* Cabeçalho do Modal */}
            <div className="flex items-start gap-4 pr-10 mb-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-primary/40 bg-primary/10 text-primary">
                {(() => {
                  const ModalIcon = selectedService.icon
                  return <ModalIcon className="h-6 w-6" strokeWidth={1.75} />
                })()}
              </div>
              <div>
                <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-0.5 rounded uppercase tracking-wider">
                  Solução #{selectedService.id}
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-white mt-1.5 tracking-tight">
                  {selectedService.title}
                </h3>
              </div>
            </div>

            {/* Destaque Principal: Resumo Prático para o Cliente */}
            <div className="rounded-xl border border-primary/40 bg-primary/10 p-4 sm:p-5 flex items-start gap-3.5 mb-6">
              <Lightbulb className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-primary mb-1">
                  Resumo prático (o que isso faz pelo seu negócio)
                </h4>
                <p className="text-sm sm:text-base text-slate-100 leading-relaxed font-medium">
                  {selectedService.simpleSummary}
                </p>
              </div>
            </div>

            {/* Detalhes Adicionais */}
            <div className="space-y-6 text-sm text-slate-300">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Como funciona na prática
                </h4>
                <p className="leading-relaxed text-slate-300 text-sm sm:text-base">
                  {selectedService.overview}
                </p>
              </div>

              {/* O que você recebe pronto */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                  O que você recebe pronto
                </h4>
                <ul className="space-y-2.5">
                  {selectedService.deliverables.map((item, index) => (
                    <li key={index} className="flex items-start gap-2.5">
                      <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span className="text-slate-300 leading-normal">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Impacto no Negócio */}
              <div className="rounded-xl border border-primary/25 bg-primary/[0.08] p-4 flex items-start gap-3">
                <Sparkles className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <h5 className="text-xs font-bold uppercase tracking-wider text-primary mb-1">
                    Resultado no seu bolso e na sua operação
                  </h5>
                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-medium">
                    {selectedService.businessImpact}
                  </p>
                </div>
              </div>
            </div>

            {/* Rodapé com Botão WhatsApp */}
            <div className="mt-8 pt-6 border-t border-border/60 flex flex-col sm:flex-row items-center justify-between gap-4">
              <button
                type="button"
                onClick={() => setSelectedService(null)}
                className="w-full sm:w-auto px-5 py-2.5 rounded-lg border border-border hover:bg-white/5 text-xs font-medium text-slate-400 hover:text-white transition-colors"
              >
                Voltar às soluções
              </button>

              <a
                href={`https://wa.me/5592974005948?text=${encodeURIComponent(
                  `Olá Kaynã! Vi a solução "${selectedService.title}" no seu portfólio e gostaria de entender como podemos implementar no meu projeto.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg bg-primary hover:bg-primary/90 text-primary-foreground text-xs font-bold uppercase tracking-wider transition-all shadow-lg shadow-primary/20 hover:scale-[1.02]"
              >
                <MessageCircle className="h-4 w-4" />
                <span>Conversar no WhatsApp</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>

          </div>
        </div>
      )}
    </section>
  )
}
