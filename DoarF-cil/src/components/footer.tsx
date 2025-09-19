"use client";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 lg:px-6 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white mb-4">💜 Doar Fácil</h3>
              <p className="text-gray-400 leading-relaxed">
                A plataforma mais confiável para doações online do Brasil. 
                Conectamos corações generosos com causas que transformam vidas.
              </p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Facebook">
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                  <span className="text-lg">f</span>
                </div>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Instagram">
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors">
                  <span className="text-lg">@</span>
                </div>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Twitter">
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-400 transition-colors">
                  <span className="text-lg">T</span>
                </div>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="LinkedIn">
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                  <span className="text-lg">in</span>
                </div>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Links Rápidos</h4>
            <ul className="space-y-4">
              <li>
                <a href="#campanhas" className="text-gray-400 hover:text-white transition-colors">
                  Explorar Campanhas
                </a>
              </li>
              <li>
                <a href="#como-funciona" className="text-gray-400 hover:text-white transition-colors">
                  Como Funciona
                </a>
              </li>
              <li>
                <a href="/criar-campanha" className="text-gray-400 hover:text-white transition-colors">
                  Criar Campanha
                </a>
              </li>
              <li>
                <a href="/sobre" className="text-gray-400 hover:text-white transition-colors">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="/radar" className="text-gray-400 hover:text-white transition-colors">
                  Radar de Doações
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Suporte</h4>
            <ul className="space-y-4">
              <li>
                <a href="/ajuda" className="text-gray-400 hover:text-white transition-colors">
                  Central de Ajuda
                </a>
              </li>
              <li>
                <a href="/contato" className="text-gray-400 hover:text-white transition-colors">
                  Fale Conosco
                </a>
              </li>
              <li>
                <a href="/faq" className="text-gray-400 hover:text-white transition-colors">
                  Perguntas Frequentes
                </a>
              </li>
              <li>
                <a href="/termos" className="text-gray-400 hover:text-white transition-colors">
                  Termos de Uso
                </a>
              </li>
              <li>
                <a href="/privacidade" className="text-gray-400 hover:text-white transition-colors">
                  Política de Privacidade
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-orange-400 mr-3 mt-1">📧</span>
                <div>
                  <div className="text-gray-400">Email</div>
                  <a href="mailto:sandreannyfarias99@gmail.com" className="text-white hover:text-orange-400 transition-colors">
                    sandreannyfarias99@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-violet-400 mr-3 mt-1">📱</span>
                <div>
                  <div className="text-gray-400">WhatsApp</div>
                  <a href="tel:+559984105518" className="text-white hover:text-violet-400 transition-colors">
                    (99) 98410-5518
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-400 mr-3 mt-1">⏰</span>
                <div>
                  <div className="text-gray-400">Atendimento</div>
                  <div className="text-white">
                    Seg - Sex: 8h às 18h<br />
                    Sáb: 9h às 15h
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <div className="max-w-md mx-auto text-center">
            <h4 className="text-lg font-semibold text-white mb-4">
              Receba Nossas Novidades
            </h4>
            <p className="text-gray-400 mb-6">
              Seja o primeiro a saber sobre novas campanhas e histórias inspiradoras
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Seu melhor email"
                className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-violet-500 transition-colors"
              />
              <button className="bg-violet-600 hover:bg-violet-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                Inscrever-se
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 lg:px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <div className="mb-4 md:mb-0">
              © {currentYear} Doar Fácil. Desenvolvido por <strong>Sandreane Silva Almeida</strong> - Engenheira de Software. Todos os direitos reservados.
            </div>
            <div className="flex flex-wrap justify-center md:justify-end gap-6">
              <a href="/termos" className="hover:text-white transition-colors">
                Termos de Uso
              </a>
              <a href="/privacidade" className="hover:text-white transition-colors">
                Política de Privacidade
              </a>
              <a href="/contato" className="hover:text-white transition-colors">
                Fale Conosco
              </a>
              <a href="/ajuda" className="hover:text-white transition-colors">
                Central de Ajuda
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}