"use client";

import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    <section id="inicio" className="bg-gradient-to-br from-violet-50 via-white to-orange-50 py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="mb-6">
              <span className="inline-block bg-violet-100 text-violet-800 text-sm font-semibold px-4 py-2 rounded-full mb-4">
                ✨ Transforme vidas através da solidariedade
              </span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Doe com <span className="text-violet-600">facilidade</span>,
              <br />
              <span className="text-orange-600">impacte</span> o mundo
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              A plataforma mais confiável para apoiar causas sociais, projetos comunitários 
              e iniciativas que fazem a diferença. Cada doação conta uma história de esperança.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-violet-600 hover:bg-violet-700 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all"
              >
                Explorar Campanhas
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-gray-300 hover:border-orange-500 px-8 py-4 text-lg font-semibold rounded-lg transition-all"
              >
                Como Funciona
              </Button>
            </div>
            
            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
              <div className="text-center lg:text-left">
                <div className="text-2xl lg:text-3xl font-bold text-violet-600 mb-1">R$ 2.5M+</div>
                <div className="text-sm text-gray-600">Arrecadado</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl lg:text-3xl font-bold text-orange-600 mb-1">15K+</div>
                <div className="text-sm text-gray-600">Doadores</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl lg:text-3xl font-bold text-violet-700 mb-1">500+</div>
                <div className="text-sm text-gray-600">Projetos</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/3decc274-e7cb-4b4c-a786-86886729a431.png"
                alt="Pessoas ajudando comunidade com cestas básicas e sorrisos genuínos"
                className="rounded-2xl shadow-2xl w-full h-auto object-cover"
              />
            </div>
            
            {/* Floating Cards */}
            <div className="absolute -top-4 -left-4 bg-white rounded-xl shadow-lg p-4 z-20 hidden lg:block">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-orange-500 rounded-full animate-pulse"></div>
                <div>
                  <div className="text-sm font-semibold text-gray-900">Doação realizada!</div>
                  <div className="text-xs text-gray-600">Maria F. doou R$ 50</div>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-lg p-4 z-20 hidden lg:block">
              <div className="text-center">
                <div className="text-2xl font-bold text-violet-600">98%</div>
                <div className="text-xs text-gray-600">Meta atingida</div>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                  <div className="bg-violet-600 h-2 rounded-full" style={{width: '98%'}}></div>
                </div>
              </div>
            </div>
            
            {/* Background decorations */}
            <div className="absolute -z-10 top-8 right-8 w-72 h-72 bg-violet-200 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
            <div className="absolute -z-10 bottom-8 left-8 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
          </div>
        </div>
      </div>
    </section>
  );
}