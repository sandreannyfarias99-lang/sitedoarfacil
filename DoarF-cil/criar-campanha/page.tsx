import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CreateCampaignForm from '@/components/CreateCampaignForm'

export const metadata = {
  title: 'Criar Campanha - Doar Fácil',
  description: 'Crie sua campanha de doação e arrecade fundos para sua causa. Processo simples e seguro.',
}

export default function CreateCampaignPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-violet-50 via-white to-orange-50 py-16 lg:py-20">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-block bg-violet-100 text-violet-800 text-sm font-semibold px-4 py-2 rounded-full mb-6">
              🚀 Transforme sua causa em realidade
            </div>
            <h1 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
              Crie Sua Campanha de <span className="text-violet-600">Doação</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Em poucos minutos, você pode lançar sua campanha e começar a receber doações 
              de pessoas que acreditam na sua causa. É grátis e fácil!
            </p>
            
            {/* Benefits */}
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-violet-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">🆓</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">100% Gratuito</h3>
                <p className="text-sm text-gray-600">Não cobramos taxas para criar sua campanha</p>
              </div>
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">🔒</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Seguro</h3>
                <p className="text-sm text-gray-600">Pagamentos protegidos e dados criptografados</p>
              </div>
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-violet-200 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">📈</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Acompanhamento</h3>
                <p className="text-sm text-gray-600">Dashboard completo para gerenciar sua campanha</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-6">
          <CreateCampaignForm />
        </div>
      </section>

      <Footer />
    </main>
  )
}