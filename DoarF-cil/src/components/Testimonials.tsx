"use client";

import { Card, CardContent } from '@/components/ui/card';

const testimonials = [
  {
    id: 1,
    name: "Maria Santos",
    role: "Doadora há 2 anos",
    content: "Através do Doar Fácil consegui ajudar 12 campanhas diferentes. A transparência e as atualizações constantes me fazem ter total confiança na plataforma. É emocionante ver o impacto real das nossas doações.",
    avatar: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/3c96c659-312c-4aea-afe2-e4c0ba1a8212.png",
    rating: 5
  },
  {
    id: 2,
    name: "João Silva",
    role: "Criador de campanha",
    content: "Criei uma campanha para ajudar minha filha com o tratamento médico e o apoio foi incrível. A plataforma é fácil de usar e o suporte da equipe foi excepcional. Conseguimos 120% da nossa meta!",
    avatar: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/d60c6837-f96a-42f4-93e6-68e9812240c0.png",
    rating: 5
  },
  {
    id: 3,
    name: "Ana Costa",
    role: "Coordenadora de ONG",
    content: "Nossa ONG arrecadou mais de R$ 80 mil em 3 campanhas. A plataforma nos conectou com pessoas generosas de todo o Brasil. As ferramentas de gestão facilitaram muito nosso trabalho.",
    avatar: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/193ab518-a9eb-437a-ba5e-229da81389fa.png",
    rating: 5
  },
  {
    id: 4,
    name: "Carlos Mendes",
    role: "Doador mensal",
    content: "Faço doações mensais automáticas e amo receber as atualizações. Ver fotos das crianças que ajudo estudando me enche de alegria. É a forma mais fácil e segura de praticar a solidariedade.",
    avatar: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/da6cec23-71ef-4f81-b9e7-f1d216e13f5f.png",
    rating: 5
  },
  {
    id: 5,
    name: "Lucia Oliveira",
    role: "Beneficiária",
    content: "Minha família foi beneficiada por uma campanha de cestas básicas durante a pandemia. A dignidade e carinho com que fomos tratados nos deu forças para recomeçar. Hoje ajudo outros projetos.",
    avatar: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/b947abc0-6f05-4496-b22d-ae95bba7037e.png",
    rating: 5
  },
  {
    id: 6,
    name: "Roberto Lima",
    role: "Empresário doador",
    content: "Nossa empresa apoia várias campanhas através da plataforma. A transparência nos relatórios e a possibilidade de acompanhar cada projeto nos permite investir com responsabilidade social.",
    avatar: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/59719154-6e99-487f-8da3-d7ec422de3b7.png",
    rating: 5
  }
];

export default function Testimonials() {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`text-lg ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}>
        ★
      </span>
    ));
  };

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-orange-50 text-orange-600 text-sm font-semibold px-4 py-2 rounded-full mb-4">
            ⭐ Depoimentos
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Histórias que Inspiram
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Conheça as experiências de quem faz parte da nossa comunidade de doadores, 
            criadores de campanhas e beneficiários. Cada história é única e especial.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="border border-gray-200 hover:shadow-lg transition-shadow duration-300 bg-white">
              <CardContent className="p-6">
                {/* Stars */}
                <div className="flex mb-4">
                  {renderStars(testimonial.rating)}
                </div>

                {/* Testimonial Content */}
                <p className="text-gray-700 leading-relaxed mb-6 text-sm">
                  &ldquo;{testimonial.content}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center">
                  <img
                    src={testimonial.avatar}
                    alt={`Foto de ${testimonial.name}`}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-600 text-xs">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 pt-12 border-t border-gray-200">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              A Confiança de Milhares de Brasileiros
            </h3>
            <p className="text-gray-600">
              Nossa comunidade cresce a cada dia com pessoas que acreditam no poder da solidariedade
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-2xl lg:text-3xl font-bold text-orange-500 mb-2">4.9/5</div>
              <div className="text-gray-600 text-sm">Avaliação Média</div>
              <div className="flex justify-center mt-1">
                {renderStars(5)}
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl lg:text-3xl font-bold text-violet-600 mb-2">15.2K</div>
              <div className="text-gray-600 text-sm">Avaliações</div>
            </div>
            <div className="text-center">
              <div className="text-2xl lg:text-3xl font-bold text-orange-600 mb-2">98%</div>
              <div className="text-gray-600 text-sm">Recomendariam</div>
            </div>
            <div className="text-center">
              <div className="text-2xl lg:text-3xl font-bold text-violet-700 mb-2">24/7</div>
              <div className="text-gray-600 text-sm">Suporte Disponível</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}