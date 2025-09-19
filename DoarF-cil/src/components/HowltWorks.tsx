"use client";

const steps = [
  {
    step: "1",
    title: "Explore Campanhas",
    description: "Navegue por centenas de causas verificadas e encontre projetos que tocam seu coração. Filtre por categoria, localização ou urgência.",
    icon: "🔍"
  },
  {
    step: "2", 
    title: "Escolha Seu Valor",
    description: "Doe qualquer quantia, desde R$ 5. Cada contribuição é importante e faz diferença na vida de quem precisa. Você decide quanto pode ajudar.",
    icon: "💰"
  },
  {
    step: "3",
    title: "Pagamento Seguro",
    description: "Processo de doação 100% seguro com certificado SSL. Aceitamos cartão, PIX, boleto e transferência bancária. Seus dados estão protegidos.",
    icon: "🔒"
  },
  {
    step: "4",
    title: "Acompanhe o Impacto",
    description: "Receba atualizações sobre como sua doação está sendo usada. Veja fotos, relatórios e depoimentos dos beneficiados pelo projeto.",
    icon: "📈"
  }
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-orange-50 text-orange-600 text-sm font-semibold px-4 py-2 rounded-full mb-4">
            🌟 Como Funciona
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Doar é Mais Fácil do que Imagina
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Em apenas 4 passos simples, você pode transformar vidas e fazer parte de uma 
            comunidade que acredita no poder da solidariedade.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center group">
              {/* Step Number and Icon */}
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-white border-4 border-violet-100 rounded-full flex items-center justify-center mx-auto group-hover:border-violet-300 transition-colors shadow-lg">
                  <span className="text-2xl">{step.icon}</span>
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  {step.step}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-violet-600 transition-colors">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>

              {/* Connection Line (hidden on last item and mobile) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-1/2 transform translate-x-8 w-24 h-0.5 bg-gray-200"></div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 p-8 bg-gradient-to-r from-violet-50 to-orange-50 rounded-2xl">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Pronto para Começar?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Junte-se a milhares de pessoas que já descobriram como é gratificante 
            fazer a diferença na vida de quem mais precisa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-violet-600 hover:bg-violet-700 text-white px-8 py-3 rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl">
              Explorar Campanhas
            </button>
            <a href="/criar-campanha">
              <button className="border-2 border-orange-500 text-orange-600 hover:bg-orange-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all">
                Criar Campanha Grátis
              </button>
            </a>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-gray-200">
          <div className="text-center">
            <div className="text-3xl font-bold text-violet-600 mb-2">2.5M+</div>
            <div className="text-gray-600 text-sm">Reais Arrecadados</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">15K+</div>
            <div className="text-gray-600 text-sm">Doadores Ativos</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-violet-700 mb-2">500+</div>
            <div className="text-gray-600 text-sm">Projetos Apoiados</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-700 mb-2">98%</div>
            <div className="text-gray-600 text-sm">Taxa de Sucesso</div>
          </div>
        </div>
      </div>
    </section>
  );
}