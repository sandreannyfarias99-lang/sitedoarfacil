import Header from '@/components/Header'
import Footer from '@/components/Footer'
import SignUpForm from '@/components/SignUpForm'

export const metadata = {
  title: 'Cadastro - Doar Fácil',
  description: 'Cadastre-se como doador ou beneficiário. Comece a transformar vidas através da solidariedade.',
}

export default function SignUpPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-violet-50 via-white to-orange-50 py-16 lg:py-20">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-block bg-violet-100 text-violet-800 text-sm font-semibold px-4 py-2 rounded-full mb-6">
              🤝 Junte-se à nossa comunidade
            </div>
            <h1 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
              Comece sua Jornada de <span className="text-violet-600">Solidariedade</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Cadastre-se como doador para ajudar causas importantes ou como beneficiário 
              para receber apoio da nossa comunidade. É rápido, gratuito e seguro.
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-6">
          <SignUpForm />
        </div>
      </section>

      <Footer />
    </main>
  )
}
