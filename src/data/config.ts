import { Shield, Award, PenTool, Zap, Wrench, ThermometerSnowflake } from 'lucide-react';

export const config = {
  company: {
    name: "Thermo Ar",
    nameFull: "Thermo Ar Climatização BH",
    logo: "/imagens/logo_with_name-with-no-background.png", // Ex: "/imagens/logo.jpg"
    icon: "/imagens/logo_icon-with-no-background.png",
  },
  contact: {
    whatsapp: "5531998346990",
    whatsappMessage: "Olá, gostaria de saber mais informações",
    address: "Rua Aladim Correa de Faria, 1035 - Santa Cruz (Barreiro), Belo Horizonte - MG, 30644-210, Brasil",
  },
  social: {
    instagram: "https://www.instagram.com/thermoarclimatizacaobh/",
    facebook: "", 
  },
  colors: {
    primary: "#011bff", // blue-500
    primaryHover: "#0014cc", // blue-600
    primaryLight: "#ccd1ff", // blue-200
    primaryDark: "#000b80", // blue-700
    accent: "#ff6a01",
  },
  location: "Belo Horizonte e região metropolitana",
  hero: {
    headline: "O clima perfeito.<br />Sem dor de cabeça.",
    subheadline: "Instalação, manutenção e projetos de ar condicionado em Belo Horizonte e grande BH. Engenharia de ponta com acabamento impecável e respeito ao seu espaço.",
    ctaText: "Fale com um Engenheiro",
    stats: {
      rating: 4.8,
      reviewsCount: "50",
    },
    images: {
      background: "/imagens/hero_light_bg.png",
      avatars: [
        "https://i.pravatar.cc/100?img=11",
        "https://i.pravatar.cc/100?img=12",
        "https://i.pravatar.cc/100?img=13",
        "https://i.pravatar.cc/100?img=14",
        "https://i.pravatar.cc/100?img=15",
      ]
    }
  },
  about: {
    title: "A engenharia do conforto elevada ao mais alto nível.",
    description: "Na Thermo Ar Climatização BH, acreditamos que a climatização vai muito além de ajustar temperaturas — trata-se de arquitetar a qualidade de vida. Nossa prioridade é o acabamento impecável, o respeito à estética dos ambientes e a responsabilidade técnica.",
    stats: {
      projects: "+ de 14 anos",
      satisfaction: "Aprovado"
    },
    images: {
      main: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069&auto=format&fit=crop",
      secondary: "/imagens/image2_sobre.jpg"
    }
  },
  trustSignals: {
    certificate: "",
    yearsInMarket: "+ de 14 anos de mercado",
    partners: []
  },
  services: [
    {
      id: "projetos-residenciais",
      title: "Projetos Residenciais Premium",
      description: "Sistemas VRV/VRF e Multi Split embutidos. Climatização com tecnologia Inverter para máxima economia elétrica. Respeita a estética do seu ambiente.",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
      icon: "ThermometerSnowflake", // Will map to lucide-react in component
      iconColor: "text-blue-500", // Will be replaced by CSS vars if needed
      isLarge: true,
      features: []
    },
    {
      id: "manutencao",
      title: "Manutenção Preventiva",
      description: "Limpeza química profunda com laudo PMOC. Remove ácaros e resguarda a saúde respiratória da sua equipe ou família.",
      image: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?q=80&w=2070&auto=format&fit=crop",
      icon: "Wrench",
      iconColor: "text-orange-500",
      isLarge: false,
      features: []
    },
    {
      id: "instalacao-expressa",
      title: "Instalação Expressa",
      description: "Equipes uniformizadas, com protetores e aspirador de pó. Sua casa tão limpa quanto antes da nossa chegada.",
      image: "",
      icon: "Zap",
      iconColor: "text-yellow-400",
      isLarge: false,
      dark: true,
      features: [
        "Tubulação 100% cobre",
        "Vácuo no sistema",
        "Teste com Nitrogênio"
      ]
    },
    {
      id: "infraestrutura",
      title: "Infraestrutura na Obra",
      description: "Acompanhamento junto à engenharia e arquitetura para passagem de tubulação. Climatização planejada com zero quebra-quebra no futuro.",
      image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070&auto=format&fit=crop",
      icon: "PenTool",
      iconColor: "text-purple-500",
      isLarge: true,
      features: []
    }
  ],
  gallery: [
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1540959733333-6df814d480e6?q=80&w=1964&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1558227691-41ea78d1f631?q=80&w=2000&auto=format&fit=crop"
  ],
  testimonials: {
    aggregate: {
      rating: 4.8,
      count: "50",
      recommendation: "100%"
    },
    reviews: [
      {
        text: "Recomendo. Profissional pontual, educado e atencioso. O agendamento da visita foi rápido, a instalação foi muito bem feita, rápida e além disso sem sujeira, manteve o ambiente limpo. Preço justo.",
        author: "Daniela Gralha",
        role: "Cliente",
        avatar: "https://ui-avatars.com/api/?name=Daniela+Gralha&background=random",
        rating: 5,
      },
      {
        text: "Excelente profissional! Desde o primeiro contato foi super atencioso e tirou minhas dúvidas. Para instalação foi pontual e ágil. Acabou antes do horário previsto e sem deixar bagunça . A equipe de parabéns e garantiram um cliente!",
        author: "Philippe Lecoq",
        role: "Cliente",
        avatar: "https://ui-avatars.com/api/?name=Philippe+Lecoq&background=random",
        rating: 5,
      },
      {
        text: "A Thermoar nos atende, na Allugator Serviços Digitais, há bastante tempo. São excepcionalmente bons no que fazem. Só tenho a elogiar. #recomendo",
        author: "Adriane Aparecida de Oliveira",
        role: "Allugator Serviços Digitais",
        avatar: "https://ui-avatars.com/api/?name=Adriane+Aparecida+de+Oliveira&background=random",
        rating: 5,
      }
    ]
  },
  faq: [
    {
      q: "Vocês atendem projetos residenciais e corporativos?",
      a: "Sim, temos equipes especializadas tanto para instalações em residências de alto padrão quanto para grandes projetos corporativos e comerciais, incluindo sistemas VRF e dutados."
    },
    {
      q: "Emitem laudo PMOC para empresas?",
      a: "Sim. Realizamos a manutenção preventiva e corretiva com emissão de laudo PMOC (Plano de Manutenção, Operação e Controle), obrigatório por lei para ambientes públicos e coletivos."
    },
    {
      q: "Qual a garantia do serviço de instalação?",
      a: "Oferecemos 1 ano de garantia na nossa mão de obra de instalação, além da garantia do fabricante do equipamento (que pode chegar a 10 anos no compressor, dependendo da marca)."
    },
    {
      q: "Vocês fornecem os aparelhos ou apenas a mão de obra?",
      a: "Trabalhamos das duas formas. Podemos fornecer os equipamentos das melhores marcas do mercado com preços competitivos, ou realizar apenas a instalação caso você já tenha comprado o aparelho."
    }
  ],
  bottomCta: {
    headline: "Pronto para o clima ideal?",
    subheadline: "Agende uma visita técnica e receba um orçamento detalhado para o seu projeto.",
    buttonText: "Falar no WhatsApp"
  }
};
