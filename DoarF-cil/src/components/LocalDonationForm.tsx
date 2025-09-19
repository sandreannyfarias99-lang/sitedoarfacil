"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

interface DonationData {
  category: string;
  title: string;
  description: string;
  condition: string;
  quantity: string;
  pickupLocation: string;
  pickupAddress: string;
  availableDays: string[];
  availableTimes: string[];
  contactPhone: string;
  notes: string;
  images: File[];
}

const categories = [
  { id: 'roupas', name: 'Roupas e Calçados', icon: '👕' },
  { id: 'alimentos', name: 'Alimentos Não Perecíveis', icon: '🥫' },
  { id: 'higiene', name: 'Produtos de Higiene', icon: '🧴' },
  { id: 'material-escolar', name: 'Material Escolar', icon: '📚' },
  { id: 'brinquedos', name: 'Brinquedos', icon: '🧸' },
  { id: 'eletronicos', name: 'Eletrônicos', icon: '📱' },
  { id: 'moveis', name: 'Móveis', icon: '🪑' },
  { id: 'livros', name: 'Livros', icon: '📖' },
  { id: 'baby', name: 'Itens para Bebê', icon: '🍼' },
  { id: 'casa', name: 'Utensílios Domésticos', icon: '🏠' },
  { id: 'outros', name: 'Outros', icon: '📦' }
];

const daysOfWeek = [
  { id: 'seg', name: 'Segunda' },
  { id: 'ter', name: 'Terça' },
  { id: 'qua', name: 'Quarta' },
  { id: 'qui', name: 'Quinta' },
  { id: 'sex', name: 'Sexta' },
  { id: 'sab', name: 'Sábado' },
  { id: 'dom', name: 'Domingo' }
];

const timeSlots = [
  { id: 'manha', name: 'Manhã (8h-12h)' },
  { id: 'tarde', name: 'Tarde (12h-18h)' },
  { id: 'noite', name: 'Noite (18h-22h)' },
  { id: 'flexivel', name: 'Horário Flexível' }
];

export default function LocalDonationForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [donationData, setDonationData] = useState<DonationData>({
    category: '',
    title: '',
    description: '',
    condition: '',
    quantity: '',
    pickupLocation: '',
    pickupAddress: '',
    availableDays: [],
    availableTimes: [],
    contactPhone: '',
    notes: '',
    images: []
  });

  const totalSteps = 3;

  const handleInputChange = (field: keyof DonationData, value: string | string[] | File[]) => {
    setDonationData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleArrayToggle = (field: 'availableDays' | 'availableTimes', item: string) => {
    const currentArray = donationData[field];
    const newArray = currentArray.includes(item)
      ? currentArray.filter(i => i !== item)
      : [...currentArray, item];
    
    handleInputChange(field, newArray);
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Doação cadastrada com sucesso! Em breve você receberá contatos de pessoas interessadas.');
    console.log('Donation Data:', donationData);
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="w-8 h-8 bg-violet-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
                Sobre o Item
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label htmlFor="category">Categoria *</Label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-3">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      type="button"
                      onClick={() => handleInputChange('category', category.id)}
                      className={`p-4 rounded-lg border text-sm font-medium transition-all text-center ${
                        donationData.category === category.id
                          ? 'bg-violet-100 border-violet-300 text-violet-700'
                          : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      <div className="text-2xl mb-2">{category.icon}</div>
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <Label htmlFor="title">Título da Doação *</Label>
                <Input
                  id="title"
                  placeholder="Ex: Roupas de inverno tamanho M"
                  value={donationData.title}
                  onChange={(e) => handleInputChange('title', e.target.value)}
                  className="mt-2"
                  maxLength={100}
                />
              </div>

              <div>
                <Label htmlFor="description">Descrição Detalhada *</Label>
                <Textarea
                  id="description"
                  placeholder="Descreva os itens em detalhes: tamanhos, cores, estado, etc..."
                  value={donationData.description}
                  onChange={(e) => handleInputChange('description', e.target.value)}
                  className="mt-2"
                  rows={4}
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="condition">Estado de Conservação *</Label>
                  <select
                    id="condition"
                    value={donationData.condition}
                    onChange={(e) => handleInputChange('condition', e.target.value)}
                    className="mt-2 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                  >
                    <option value="">Selecione o estado</option>
                    <option value="novo">Novo - Nunca usado</option>
                    <option value="otimo">Ótimo - Usado poucas vezes</option>
                    <option value="bom">Bom - Sinais leves de uso</option>
                    <option value="regular">Regular - Usado mas funcional</option>
                  </select>
                </div>

                <div>
                  <Label htmlFor="quantity">Quantidade *</Label>
                  <Input
                    id="quantity"
                    placeholder="Ex: 5 peças, 2 sacolas, 10kg"
                    value={donationData.quantity}
                    onChange={(e) => handleInputChange('quantity', e.target.value)}
                    className="mt-2"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        );

      case 2:
        return (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="w-8 h-8 bg-violet-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
                Local e Horário de Retirada
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label htmlFor="pickupLocation">Local de Retirada *</Label>
                <select
                  id="pickupLocation"
                  value={donationData.pickupLocation}
                  onChange={(e) => handleInputChange('pickupLocation', e.target.value)}
                  className="mt-2 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                >
                  <option value="">Escolha um local</option>
                  <option value="casa">Em casa</option>
                  <option value="trabalho">Local de trabalho</option>
                  <option value="portaria">Portaria do prédio</option>
                  <option value="escola">Escola/Universidade</option>
                  <option value="igreja">Igreja</option>
                  <option value="comercio">Estabelecimento comercial</option>
                  <option value="outro">Outro local público</option>
                </select>
              </div>

              <div>
                <Label htmlFor="pickupAddress">Endereço de Retirada *</Label>
                <Input
                  id="pickupAddress"
                  placeholder="Rua, número, ponto de referência"
                  value={donationData.pickupAddress}
                  onChange={(e) => handleInputChange('pickupAddress', e.target.value)}
                  className="mt-2"
                />
              </div>

              <div>
                <Label>Dias Disponíveis para Retirada *</Label>
                <div className="grid grid-cols-4 md:grid-cols-7 gap-2 mt-3">
                  {daysOfWeek.map((day) => (
                    <button
                      key={day.id}
                      type="button"
                      onClick={() => handleArrayToggle('availableDays', day.id)}
                      className={`p-2 rounded text-sm font-medium transition-all ${
                        donationData.availableDays.includes(day.id)
                          ? 'bg-violet-600 text-white'
                          : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      {day.name}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <Label>Horários Disponíveis *</Label>
                <div className="grid grid-cols-2 gap-3 mt-3">
                  {timeSlots.map((time) => (
                    <button
                      key={time.id}
                      type="button"
                      onClick={() => handleArrayToggle('availableTimes', time.id)}
                      className={`p-3 rounded-lg text-sm font-medium transition-all ${
                        donationData.availableTimes.includes(time.id)
                          ? 'bg-orange-500 text-white'
                          : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      {time.name}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <Label htmlFor="contactPhone">Telefone para Contato *</Label>
                <Input
                  id="contactPhone"
                  placeholder="Seu WhatsApp para receber contatos"
                  value={donationData.contactPhone}
                  onChange={(e) => handleInputChange('contactPhone', e.target.value)}
                  className="mt-2"
                />
              </div>
            </CardContent>
          </Card>
        );

      case 3:
        return (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="w-8 h-8 bg-violet-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
                Finalização
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label htmlFor="images">Fotos dos Itens</Label>
                <input
                  id="images"
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={(e) => {
                    const files = Array.from(e.target.files || []) as File[];
                    handleInputChange('images', files);
                  }}
                  className="mt-2 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100"
                />
                <p className="text-xs text-gray-500 mt-2">
                  Adicione até 5 fotos dos itens. Fotos ajudam a atrair mais interessados.
                </p>
              </div>

              <div>
                <Label htmlFor="notes">Observações Adicionais</Label>
                <Textarea
                  id="notes"
                  placeholder="Informações extras, preferências para doação, etc..."
                  value={donationData.notes}
                  onChange={(e) => handleInputChange('notes', e.target.value)}
                  className="mt-2"
                  rows={3}
                />
              </div>

              <div className="bg-violet-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-violet-900 mb-4">Resumo da Doação</h3>
                <div className="space-y-2 text-sm">
                  <div><strong>Categoria:</strong> {categories.find(c => c.id === donationData.category)?.name || 'Não selecionada'}</div>
                  <div><strong>Título:</strong> {donationData.title || 'Não informado'}</div>
                  <div><strong>Quantidade:</strong> {donationData.quantity || 'Não informada'}</div>
                  <div><strong>Local:</strong> {donationData.pickupLocation || 'Não informado'}</div>
                  <div><strong>Dias:</strong> {donationData.availableDays.join(', ') || 'Não informado'}</div>
                  <div><strong>Horários:</strong> {donationData.availableTimes.join(', ') || 'Não informado'}</div>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                <h4 className="text-yellow-800 font-medium mb-2">📋 Próximos Passos</h4>
                <ul className="text-sm text-yellow-700 space-y-1">
                  <li>• Sua doação ficará visível no radar</li>
                  <li>• Pessoas interessadas entrarão em contato</li>
                  <li>• Você combina local e horário final</li>
                  <li>• Encontro em local público e seguro</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        );

      default:
        return null;
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          {Array.from({ length: totalSteps }, (_, i) => {
            const step = i + 1;
            const isActive = step === currentStep;
            const isCompleted = step < currentStep;
            
            return (
              <div key={step} className="flex items-center flex-1">
                <div className={`
                  w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold
                  ${isActive ? 'bg-violet-600 text-white' : 
                    isCompleted ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-600'}
                `}>
                  {isCompleted ? '✓' : step}
                </div>
                {step < totalSteps && (
                  <div className={`flex-1 h-1 mx-4 ${
                    step < currentStep ? 'bg-orange-500' : 'bg-gray-200'
                  }`} />
                )}
              </div>
            );
          })}
        </div>
        <div className="text-center">
          <span className="text-sm text-gray-600">
            Passo {currentStep} de {totalSteps}
          </span>
        </div>
      </div>

      {/* Form Content */}
      <form onSubmit={handleSubmit}>
        {renderStepContent()}

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-8">
          <Button
            type="button"
            variant="outline"
            onClick={prevStep}
            disabled={currentStep === 1}
            className="px-8"
          >
            Voltar
          </Button>

          <div className="space-x-4">
            {currentStep < totalSteps ? (
              <Button
                type="button"
                onClick={nextStep}
                className="bg-violet-600 hover:bg-violet-700 px-8"
              >
                Próximo Passo
              </Button>
            ) : (
              <Button
                type="submit"
                className="bg-orange-500 hover:bg-orange-600 px-8 font-semibold"
              >
                🚀 Cadastrar Doação
              </Button>
            )}
          </div>
        </div>
      </form>
    </div>
  );
}