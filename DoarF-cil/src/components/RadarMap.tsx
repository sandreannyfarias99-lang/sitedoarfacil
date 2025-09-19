"use client";

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface RadarItem {
  id: string;
  userName: string;
  type: 'doacao' | 'necessidade';
  category: string;
  description: string;
  distance: number;
  location: string;
  createdAt: string;
  urgent: boolean;
  quantity?: string;
}

// Mock data simples - apenas frontend
const mockRadarItems: RadarItem[] = [
  {
    id: '1',
    userName: 'Maria Silva',
    type: 'doacao',
    category: 'roupas',
    description: 'Roupas de criança (2-6 anos), casacos e sapatos em bom estado',
    distance: 0.8,
    location: 'Centro',
    createdAt: '5 min atrás',
    urgent: false,
    quantity: '2 sacolas'
  },
  {
    id: '2',
    userName: 'João Santos',
    type: 'necessidade',
    category: 'alimentos',
    description: 'Procurando cestas básicas ou alimentos não perecíveis',
    distance: 1.2,
    location: 'Jardim das Flores',
    createdAt: '10 min atrás',
    urgent: true,
    quantity: 'Para família de 4 pessoas'
  },
  {
    id: '3',
    userName: 'Ana Costa',
    type: 'doacao',
    category: 'material-escolar',
    description: 'Cadernos, lápis, canetas e mochila escolar nova',
    distance: 2.1,
    location: 'Vila Nova',
    createdAt: '15 min atrás',
    urgent: false,
    quantity: '1 kit completo'
  },
  {
    id: '4',
    userName: 'Carlos Mendes',
    type: 'necessidade',
    category: 'higiene',
    description: 'Fraldas tamanho M e produtos de higiene infantil',
    distance: 0.5,
    location: 'Centro',
    createdAt: '2 min atrás',
    urgent: true,
    quantity: 'Para bebê de 8 meses'
  }
];

export default function RadarMap() {
  const [selectedFilter, setSelectedFilter] = useState('todos');
  const [viewMode, setViewMode] = useState<'doacoes' | 'necessidades' | 'todos'>('todos');
  const [radarItems, setRadarItems] = useState<RadarItem[]>(mockRadarItems);
  const [isScanning, setIsScanning] = useState(true);

  // Updates simulados
  useEffect(() => {
    const interval = setInterval(() => {
      setRadarItems(prev => 
        prev.map(item => ({
          ...item,
          createdAt: Math.random() > 0.7 ? 'agora mesmo' : item.createdAt
        }))
      );
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const filteredItems = radarItems.filter(item => {
    const categoryMatch = selectedFilter === 'todos' || item.category === selectedFilter;
    const typeMatch = viewMode === 'todos' || 
      (viewMode === 'doacoes' && item.type === 'doacao') ||
      (viewMode === 'necessidades' && item.type === 'necessidade');
    
    return categoryMatch && typeMatch;
  });

  const handleConnect = (item: RadarItem) => {
    alert(`Conectando com ${item.userName}! Em uma versão real, isso abriria um chat direto.`);
  };

  const toggleScanning = () => {
    setIsScanning(!isScanning);
  };

  return (
    <div className="container mx-auto px-4 lg:px-6">
      {/* Controls */}
      <div className="mb-8">
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            {/* Scanning Status */}
            <div className="flex items-center gap-4">
              <button
                onClick={toggleScanning}
                className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all ${
                  isScanning 
                    ? 'bg-green-100 text-green-700 hover:bg-green-200' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <div className={`w-3 h-3 rounded-full ${
                  isScanning ? 'bg-green-500 animate-pulse' : 'bg-gray-400'
                }`}></div>
                {isScanning ? 'Radar Ativo' : 'Radar Pausado'}
              </button>
              <span className="text-gray-600">
                {filteredItems.length} {filteredItems.length === 1 ? 'item encontrado' : 'itens encontrados'}
              </span>
            </div>

            {/* Filters */}
            <div className="flex flex-col sm:flex-row gap-4">
              <select 
                value={viewMode} 
                onChange={(e) => setViewMode(e.target.value as 'doacoes' | 'necessidades' | 'todos')}
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500"
              >
                <option value="todos">🔍 Tudo</option>
                <option value="doacoes">💝 Disponível para Doação</option>
                <option value="necessidades">🙏 Procurando Ajuda</option>
              </select>

              <select 
                value={selectedFilter} 
                onChange={(e) => setSelectedFilter(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500"
              >
                <option value="todos">🔍 Todos os Itens</option>
                <option value="roupas">👕 Roupas e Calçados</option>
                <option value="alimentos">🥫 Alimentos</option>
                <option value="higiene">🧴 Higiene</option>
                <option value="material-escolar">📚 Material Escolar</option>
                <option value="brinquedos">🧸 Brinquedos</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Radar Animation */}
      <div className="mb-8">
        <div className="relative bg-gradient-to-br from-violet-50 to-orange-50 rounded-3xl p-8 overflow-hidden">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">🌍 Radar de Proximidade</h2>
            <p className="text-gray-600">Pessoas e itens próximos a você</p>
          </div>
          
          {/* Radar Circles */}
          <div className="relative w-80 h-80 mx-auto mb-4">
            {isScanning && (
              <>
                <div className="absolute inset-0 border-2 border-violet-200 rounded-full animate-ping"></div>
                <div className="absolute inset-4 border-2 border-violet-300 rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
                <div className="absolute inset-8 border-2 border-violet-400 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
              </>
            )}
            
            {/* Center Point */}
            <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-violet-600 rounded-full transform -translate-x-1/2 -translate-y-1/2 z-10"></div>
            
            {/* Distance Markers */}
            <div className="absolute inset-12 border border-gray-300 rounded-full flex items-center justify-center">
              <span className="text-xs text-gray-500 bg-white px-2 py-1 rounded">1km</span>
            </div>
            <div className="absolute inset-20 border border-gray-300 rounded-full flex items-center justify-center">
              <span className="text-xs text-gray-500 bg-white px-2 py-1 rounded">2km</span>
            </div>
            
            {/* Sample Points */}
            <div className="absolute top-16 right-20 w-3 h-3 bg-orange-500 rounded-full animate-pulse" title="Doação próxima"></div>
            <div className="absolute bottom-20 left-16 w-3 h-3 bg-violet-500 rounded-full animate-pulse" title="Necessidade próxima"></div>
            <div className="absolute top-24 left-24 w-3 h-3 bg-orange-500 rounded-full animate-pulse" title="Doação próxima"></div>
          </div>
        </div>
      </div>

      {/* Items List */}
      <div className="grid lg:grid-cols-2 gap-6">
        {filteredItems.map((item) => (
          <Card key={item.id} className={`hover:shadow-lg transition-shadow ${
            item.urgent ? 'border-l-4 border-red-500' : ''
          }`}>
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                    item.type === 'doacao' 
                      ? 'bg-violet-100 text-violet-600' 
                      : 'bg-orange-100 text-orange-600'
                  }`}>
                    {item.type === 'doacao' ? '💝' : '🙏'}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{item.userName}</h3>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <span>📍 {item.location}</span>
                      <span>•</span>
                      <span>{item.distance}km</span>
                      {item.urgent && <Badge variant="destructive" className="text-xs">Urgente</Badge>}
                    </div>
                  </div>
                </div>
                <div className="text-right text-sm text-gray-500">
                  🕐 {item.createdAt}
                </div>
              </div>
            </CardHeader>
            
            <CardContent>
              <div className="space-y-4">
                <div>
                  <Badge variant="outline" className="mb-2">
                    {item.category === 'roupas' && '👕'} 
                    {item.category === 'alimentos' && '🥫'}
                    {item.category === 'material-escolar' && '📚'}
                    {item.category === 'higiene' && '🧴'}
                    {item.category === 'brinquedos' && '🧸'}
                    {' '}
                    {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                  </Badge>
                  <p className="text-gray-700">{item.description}</p>
                  {item.quantity && (
                    <p className="text-sm text-gray-600 mt-1">
                      <strong>Quantidade:</strong> {item.quantity}
                    </p>
                  )}
                </div>
                
                <div className="flex gap-3">
                  <Button
                    onClick={() => handleConnect(item)}
                    className={`flex-1 ${
                      item.type === 'doacao'
                        ? 'bg-violet-600 hover:bg-violet-700'
                        : 'bg-orange-500 hover:bg-orange-600'
                    }`}
                  >
                    {item.type === 'doacao' ? 'Quero Receber' : 'Posso Ajudar'}
                  </Button>
                  <Button variant="outline" size="sm">
                    Ver Perfil
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Empty State */}
      {filteredItems.length === 0 && (
        <div className="text-center py-16">
          <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-4xl">🔍</span>
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Nenhum item encontrado</h3>
          <p className="text-gray-600 mb-6">
            Tente ajustar os filtros ou aguarde novas oportunidades aparecerem no radar.
          </p>
          <Button 
            onClick={() => {
              setSelectedFilter('todos');
              setViewMode('todos');
            }}
            className="bg-violet-600 hover:bg-violet-700"
          >
            Limpar Filtros
          </Button>
        </div>
      )}
    </div>
  );
}