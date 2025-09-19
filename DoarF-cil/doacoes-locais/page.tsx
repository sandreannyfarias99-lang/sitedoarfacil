import Header from '@/components/Header'
import Footer from '@/components/Footer'
import LocalDonationForm from '@/components/LocalDonationForm'

export const metadata = {
  title: 'Doações Locais - Doar Fácil',
  description: 'Doe itens diretamente para pessoas da sua região. Roupas, alimentos, livros e muito mais.',
}

export default function LocalDonationsPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-violet-50 via-white to-orange-50 py-16 lg:py-20">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-block bg-orange-100 text-orange-800 text-sm font-semibold px-4 py-2 rounded-full mb-6">
              📦 Doações Locais
            </div>
            <h1 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
              Doe <span className="text-violet-600">Localmente</span> e Transforme Vidas
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Conecte-se diretamente com pessoas da sua região que precisam de ajuda. 
              Doe roupas, alimentos, livros e outros itens de forma simples e segura.
            </p>
            
            {/* Benefits */}
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-violet-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Rápido e Fácil</h3>
                <p className="text-sm text-gray-600">Cadastre seus itens em poucos minutos</p>
              </div>
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">📍</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Próximo a Você</h3>
                <p className="text-sm text-gray-600">Conecte com pessoas da sua região</p>
              </div>
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">🔒</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Seguro</h3>
                <p className="text-sm text-gray-600">Encontros em locais públicos seguros</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-6">
          <LocalDonationForm />
        </div>
      </section>

      <Footer />
    </main>
  )
}