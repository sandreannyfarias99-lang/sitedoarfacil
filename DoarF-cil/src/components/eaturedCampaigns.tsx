"use client";

import CampaignCard from './CampaignCard';

const featuredCampaigns = [
  {
    id: '1',
    title: 'Reconstrução da Escola Comunitária Vila Esperança',
    description: 'Ajude-nos a reconstruir a escola que atende 300 crianças da comunidade Vila Esperança, destruída pelas chuvas. Cada criança merece educação de qualidade.',
    imageUrl: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/416ace38-95ab-45b7-b5ac-e3ebfe73e64a.png',
    raised: 85000,
    goal: 120000,
    donors: 234,
    daysLeft: 15,
    category: 'Educação'
  },
  {
    id: '2',
    title: 'Alimentação para Famílias em Situação de Vulnerabilidade',
    description: 'Distribuição de cestas básicas e refeições prontas para 150 famílias que perderam a renda durante a pandemia. Juntos podemos acabar com a fome.',
    imageUrl: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/b3eb8c66-693f-4008-9a4c-52d487d62c36.png',
    raised: 45000,
    goal: 60000,
    donors: 189,
    daysLeft: 8,
    category: 'Alimentação'
  },
  {
    id: '3',
    title: 'Tratamento Oncológico para João - 8 anos',
    description: 'João é uma criança corajosa de 8 anos lutando contra o câncer. Sua família precisa de ajuda para custear o tratamento e dar a ele a chance de viver.',
    imageUrl: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/6252be09-06f5-4df3-8b9b-7cd9fc6a349c.png',
    raised: 125000,
    goal: 180000,
    donors: 567,
    daysLeft: 22,
    category: 'Saúde'
  },
  {
    id: '4',
    title: 'Projeto Horta Comunitária - Alimentação Sustentável',
    description: 'Criação de horta comunitária para produzir alimentos orgânicos e ensinar práticas sustentáveis para jovens da periferia. Plantando sementes de mudança.',
    imageUrl: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/43127e57-a1db-4e98-94d8-04b549773974.png',
    raised: 12000,
    goal: 25000,
    donors: 78,
    daysLeft: 30,
    category: 'Meio Ambiente'
  },
  {
    id: '5',
    title: 'Casa Lar para Idosos Abandonados',
    description: 'Reforma e manutenção de casa lar que abriga 20 idosos em situação de abandono. Eles merecem dignidade e carinho na terceira idade.',
    imageUrl: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/76169f7a-f239-4f81-b16d-1b74e8c885f1.png',
    raised: 67000,
    goal: 95000,
    donors: 145,
    daysLeft: 18,
    category: 'Assistência Social'
  },
  {
    id: '6',
    title: 'Capacitação Profissional para Jovens',
    description: 'Curso de capacitação em tecnologia e empreendedorismo para jovens de comunidades carentes, oferecendo oportunidades reais de trabalho e crescimento.',
    imageUrl: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/82f82c59-d765-4e40-942b-4e5cbe72dd5b.png',
    raised: 28000,
    goal: 40000,
    donors: 92,
    daysLeft: 25,
    category: 'Capacitação'
  }
];

export default function FeaturedCampaigns() {
  return (
    <section id="campanhas" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-violet-50 text-violet-600 text-sm font-semibold px-4 py-2 rounded-full mb-4">
            💝 Campanhas em Destaque
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Projetos que Transformam Vidas
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Conheça algumas das campanhas mais impactantes da nossa plataforma. 
            Cada doação faz a diferença e ajuda a construir um mundo melhor.
          </p>
        </div>

        {/* Campaigns Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredCampaigns.map((campaign) => (
            <CampaignCard
              key={campaign.id}
              {...campaign}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <button className="bg-violet-600 hover:bg-violet-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors shadow-lg hover:shadow-xl">
              Ver Todas as Campanhas
            </button>
            <a href="/criar-campanha">
              <button className="border-2 border-gray-300 hover:border-orange-500 text-gray-700 hover:text-orange-600 px-8 py-3 rounded-lg font-semibold transition-colors">
                Criar Minha Campanha
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
