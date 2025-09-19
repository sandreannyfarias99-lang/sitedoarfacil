"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <nav className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-violet-600">
                💜 Doar Fácil
              </h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a 
                href="#inicio" 
                className="text-gray-700 hover:text-violet-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Início
              </a>
              <a 
                href="#campanhas" 
                className="text-gray-700 hover:text-violet-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Campanhas
              </a>
              <a 
                href="#como-funciona" 
                className="text-gray-700 hover:text-violet-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Como Funciona
              </a>
              <a 
                href="/sobre" 
                className="text-gray-700 hover:text-violet-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Sobre
              </a>
              <a 
                href="/contato" 
                className="text-gray-700 hover:text-violet-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Contato
              </a>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="/radar">
              <Button variant="outline" size="sm" className="border-violet-300 text-violet-600 hover:bg-violet-50">
                🌍 Radar
              </Button>
            </a>
            <a href="/cadastro">
              <Button variant="outline" size="sm">
                Cadastrar-se
              </Button>
            </a>
            <a href="/criar-campanha">
              <Button size="sm" className="bg-orange-500 hover:bg-orange-600">
                Criar Campanha
              </Button>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="bg-gray-50 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-violet-500"
              aria-expanded="false"
            >
              <span className="sr-only">Abrir menu principal</span>
              <span className="text-xl">{!isMenuOpen ? '☰' : '✕'}</span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-100">
              <a href="#inicio" className="text-gray-700 hover:text-violet-600 block px-3 py-2 text-base font-medium" onClick={() => setIsMenuOpen(false)}>
                Início
              </a>
              <a href="#campanhas" className="text-gray-700 hover:text-violet-600 block px-3 py-2 text-base font-medium" onClick={() => setIsMenuOpen(false)}>
                Campanhas
              </a>
              <a href="#como-funciona" className="text-gray-700 hover:text-violet-600 block px-3 py-2 text-base font-medium" onClick={() => setIsMenuOpen(false)}>
                Como Funciona
              </a>
              <a href="/sobre" className="text-gray-700 hover:text-violet-600 block px-3 py-2 text-base font-medium" onClick={() => setIsMenuOpen(false)}>
                Sobre
              </a>
              <a href="/contato" className="text-gray-700 hover:text-violet-600 block px-3 py-2 text-base font-medium" onClick={() => setIsMenuOpen(false)}>
                Contato
              </a>
              <div className="pt-4 pb-3 border-t border-gray-200">
                <div className="flex flex-col space-y-2 px-3">
                  <a href="/radar">
                    <Button variant="outline" size="sm" className="w-full border-violet-300 text-violet-600">
                      🌍 Radar
                    </Button>
                  </a>
                  <a href="/cadastro">
                    <Button variant="outline" size="sm" className="w-full">
                      Cadastrar-se
                    </Button>
                  </a>
                  <a href="/criar-campanha">
                    <Button size="sm" className="w-full bg-orange-500 hover:bg-orange-600">
                      Criar Campanha
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}