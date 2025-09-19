import Header from '@/components/Header'
import Footer from '@/components/Footer'
import RadarMap from '@/components/RadarMap'

export const metadata = {
  title: 'Radar de Doações - Doar Fácil',
  description: 'Encontre doadores e beneficiários próximos a você. Sistema de radar em tempo real para conectar pessoas.',
}

export default function RadarPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-violet-50 via-white to-orange-50 py-16 lg:py-20">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-4 py-2 rounded-full mb-6">
              🌍 Radar de Proximidade
            </div>
            <h1 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
              Encontre <span className="text-violet-600">Doações</span> e <span className="text-orange-600">Necessidades</span> Próximas
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Similar ao Uber, nosso radar mostra em tempo real pessoas próximas que estão 
              doando ou precisando de itens. Conecte-se diretamente e faça a diferença!
            </p>
          </div>
        </div>
      </section>

      {/* Radar Section */}
      <section className="py-16">
        <RadarMap />
      </section>

      <Footer />
    </main>
  )
}