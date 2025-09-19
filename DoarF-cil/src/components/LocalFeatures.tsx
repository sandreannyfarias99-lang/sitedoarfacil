"use client";

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function LocalFeatures() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-orange-50 via-white to-violet-50">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-orange-100 text-orange-800 text-sm font-semibold px-4 py-2 rounded-full mb-4">
            🌍 Doações Locais
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Conecte-se com Sua <span className="text-orange-600">Comunidade</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Além das campanhas online, oferecemos um sistema revolucionário de doações locais. 
            Conecte-se diretamente com pessoas da sua região que precisam de ajuda.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <Card className="hover:shadow-xl transition-all duration-300 border-2 hover:border-orange-200">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🌍</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Radar de Proximidade</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Similar ao Uber, nosso radar mostra em tempo real pessoas próximas 
                que estão doando ou precisando de itens específicos.
              </p>
              <a href="/radar">
                <Button className="bg-orange-500 hover:bg-orange-600 w-full">
                  Ver Radar
                </Button>
              </a>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300 border-2 hover:border-violet-200">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-violet-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">📦</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Doações Simples</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Doe roupas, alimentos, livros, produtos de higiene e muito mais. 
                Processo simples em 3 etapas com local de retirada flexível.
              </p>
              <a href="/doacoes-locais">
                <Button className="bg-violet-600 hover:bg-violet-700 w-full">
                  Doar Itens
                </Button>
              </a>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300 border-2 hover:border-green-200">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🤝</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Conexão Direta</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Conecte-se diretamente com doadores e beneficiários via WhatsApp. 
                Encontros seguros em locais públicos da sua região.
              </p>
              <a href="/cadastro">
                <Button className="bg-green-600 hover:bg-green-700 w-full">
                  Cadastrar-se
                </Button>
              </a>
            </CardContent>
          </Card>
        </div>

        {/* Categories */}
        <div className="bg-white rounded-3xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Categorias de Itens Mais Doados
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { icon: '👕', name: 'Roupas', count: '2.1K' },
              { icon: '🥫', name: 'Alimentos', count: '1.8K' },
              { icon: '📚', name: 'Livros', count: '950' },
              { icon: '🧴', name: 'Higiene', count: '1.2K' },
              { icon: '🧸', name: 'Brinquedos', count: '680' },
              { icon: '📱', name: 'Eletrônicos', count: '420' }
            ].map((category, index) => (
              <div key={index} className="text-center p-4 rounded-xl hover:bg-gray-50 transition-colors">
                <div className="text-3xl mb-2">{category.icon}</div>
                <div className="font-semibold text-gray-900 text-sm">{category.name}</div>
                <div className="text-xs text-gray-500">{category.count} itens</div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Comece a Fazer a Diferença Hoje
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Seja através de campanhas online ou doações locais, sua contribuição 
            pode transformar vidas na sua comunidade.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/criar-campanha">
              <Button size="lg" className="bg-violet-600 hover:bg-violet-700 px-8">
                🚀 Criar Campanha Online
              </Button>
            </a>
            <a href="/doacoes-locais">
              <Button variant="outline" size="lg" className="border-orange-500 text-orange-600 hover:bg-orange-50 px-8">
                📦 Doar Itens Localmente
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}