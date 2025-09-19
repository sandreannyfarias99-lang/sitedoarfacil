"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

interface CampaignData {
  title: string;
  description: string;
  category: string;
  goal: string;
  deadline: string;
  location: string;
  creatorName: string;
  creatorEmail: string;
  creatorPhone: string;
  story: string;
  beneficiaries: string;
  howFundsWillBeUsed: string;
  images: File[];
}

const categories = [
  { value: 'saude', label: 'Saúde' },
  { value: 'educacao', label: 'Educação' },
  { value: 'alimentacao', label: 'Alimentação' },
  { value: 'meio-ambiente', label: 'Meio Ambiente' },
  { value: 'assistencia-social', label: 'Assistência Social' },
  { value: 'capacitacao', label: 'Capacitação' },
  { value: 'animais', label: 'Proteção Animal' },
  { value: 'emergencia', label: 'Emergência' },
  { value: 'cultura', label: 'Arte e Cultura' },
  { value: 'esporte', label: 'Esporte' },
  { value: 'outro', label: 'Outro' }
];

export default function CreateCampaignForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [campaignData, setCampaignData] = useState<CampaignData>({
    title: '',
    description: '',
    category: '',
    goal: '',
    deadline: '',
    location: '',
    creatorName: '',
    creatorEmail: '',
    creatorPhone: '',
    story: '',
    beneficiaries: '',
    howFundsWillBeUsed: '',
    images: []
  });

  const totalSteps = 4;

  const handleInputChange = (field: keyof CampaignData, value: string | File[]) => {
    setCampaignData(prev => ({
      ...prev,
      [field]: value
    }));
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
    alert('Campanha criada com sucesso! Em breve você receberá um email de confirmação.');
    console.log('Campaign Data:', campaignData);
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="w-8 h-8 bg-violet-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
                Informações Básicas
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label htmlFor="title">Título da Campanha *</Label>
                <Input
                  id="title"
                  placeholder="Ex: Ajude Maria a vencer o câncer"
                  value={campaignData.title}
                  onChange={(e) => handleInputChange('title', e.target.value)}
                  className="mt-2"
                  maxLength={100}
                />
                <p className="text-xs text-gray-500 mt-1">{campaignData.title.length}/100 caracteres</p>
              </div>

              <div>
                <Label htmlFor="description">Resumo da Campanha *</Label>
                <Textarea
                  id="description"
                  placeholder="Descreva brevemente sua campanha em poucas palavras..."
                  value={campaignData.description}
                  onChange={(e) => handleInputChange('description', e.target.value)}
                  className="mt-2"
                  rows={3}
                  maxLength={200}
                />
                <p className="text-xs text-gray-500 mt-1">{campaignData.description.length}/200 caracteres</p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="category">Categoria *</Label>
                  <select
                    id="category"
                    value={campaignData.category}
                    onChange={(e) => handleInputChange('category', e.target.value)}
                    className="mt-2 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                  >
                    <option value="">Selecione uma categoria</option>
                    {categories.map((category) => (
                      <option key={category.value} value={category.value}>
                        {category.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <Label htmlFor="location">Localização</Label>
                  <Input
                    id="location"
                    placeholder="Ex: São Paulo, SP"
                    value={campaignData.location}
                    onChange={(e) => handleInputChange('location', e.target.value)}
                    className="mt-2"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="goal">Meta de Arrecadação (R$) *</Label>
                  <Input
                    id="goal"
                    type="number"
                    placeholder="0"
                    value={campaignData.goal}
                    onChange={(e) => handleInputChange('goal', e.target.value)}
                    className="mt-2"
                    min="1"
                  />
                </div>

                <div>
                  <Label htmlFor="deadline">Data Limite</Label>
                  <Input
                    id="deadline"
                    type="date"
                    value={campaignData.deadline}
                    onChange={(e) => handleInputChange('deadline', e.target.value)}
                    className="mt-2"
                    min={new Date().toISOString().split('T')[0]}
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
                Sua História
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label htmlFor="story">Conte sua história *</Label>
                <Textarea
                  id="story"
                  placeholder="Conte de forma detalhada sobre sua causa, por que ela é importante e como as doações irão ajudar..."
                  value={campaignData.story}
                  onChange={(e) => handleInputChange('story', e.target.value)}
                  className="mt-2"
                  rows={6}
                  maxLength={2000}
                />
                <p className="text-xs text-gray-500 mt-1">{campaignData.story.length}/2000 caracteres</p>
              </div>

              <div>
                <Label htmlFor="beneficiaries">Quem será beneficiado? *</Label>
                <Textarea
                  id="beneficiaries"
                  placeholder="Descreva quem são as pessoas que serão ajudadas com esta campanha..."
                  value={campaignData.beneficiaries}
                  onChange={(e) => handleInputChange('beneficiaries', e.target.value)}
                  className="mt-2"
                  rows={3}
                  maxLength={500}
                />
                <p className="text-xs text-gray-500 mt-1">{campaignData.beneficiaries.length}/500 caracteres</p>
              </div>

              <div>
                <Label htmlFor="howFundsWillBeUsed">Como os fundos serão utilizados? *</Label>
                <Textarea
                  id="howFundsWillBeUsed"
                  placeholder="Ex: R$ 5.000 para medicamentos, R$ 10.000 para cirurgia, R$ 2.000 para transporte..."
                  value={campaignData.howFundsWillBeUsed}
                  onChange={(e) => handleInputChange('howFundsWillBeUsed', e.target.value)}
                  className="mt-2"
                  rows={4}
                  maxLength={800}
                />
                <p className="text-xs text-gray-500 mt-1">{campaignData.howFundsWillBeUsed.length}/800 caracteres</p>
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
                Suas Informações
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label htmlFor="creatorName">Seu Nome Completo *</Label>
                <Input
                  id="creatorName"
                  placeholder="Nome que aparecerá na campanha"
                  value={campaignData.creatorName}
                  onChange={(e) => handleInputChange('creatorName', e.target.value)}
                  className="mt-2"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="creatorEmail">Email *</Label>
                  <Input
                    id="creatorEmail"
                    type="email"
                    placeholder="seu@email.com"
                    value={campaignData.creatorEmail}
                    onChange={(e) => handleInputChange('creatorEmail', e.target.value)}
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="creatorPhone">Telefone/WhatsApp</Label>
                  <Input
                    id="creatorPhone"
                    placeholder="(11) 99999-9999"
                    value={campaignData.creatorPhone}
                    onChange={(e) => handleInputChange('creatorPhone', e.target.value)}
                    className="mt-2"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="images">Fotos da Campanha</Label>
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
                  Adicione até 5 fotos (JPG, PNG, máx. 2MB cada). Fotos ajudam sua campanha a receber mais doações.
                </p>
              </div>
            </CardContent>
          </Card>
        );

      case 4:
        return (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="w-8 h-8 bg-violet-600 text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
                Revisão e Confirmação
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-violet-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-violet-900 mb-4">Preview da sua Campanha</h3>
                
                <div className="space-y-4">
                  <div>
                    <span className="font-medium text-violet-800">Título:</span>
                    <p className="text-violet-700">{campaignData.title || 'Não informado'}</p>
                  </div>
                  
                  <div>
                    <span className="font-medium text-violet-800">Categoria:</span>
                    <p className="text-violet-700">{categories.find(c => c.value === campaignData.category)?.label || 'Não selecionada'}</p>
                  </div>
                  
                  <div>
                    <span className="font-medium text-violet-800">Meta:</span>
                    <p className="text-violet-700">R$ {campaignData.goal ? Number(campaignData.goal).toLocaleString('pt-BR') : '0'}</p>
                  </div>
                  
                  <div>
                    <span className="font-medium text-violet-800">Criador:</span>
                    <p className="text-violet-700">{campaignData.creatorName || 'Não informado'}</p>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                <h4 className="text-yellow-800 font-medium mb-2">📋 Próximos Passos</h4>
                <ul className="text-sm text-yellow-700 space-y-1">
                  <li>• Sua campanha será analisada em até 24h</li>
                  <li>• Você receberá um email de confirmação</li>
                  <li>• Após aprovação, sua campanha ficará ativa</li>
                  <li>• Você poderá acompanhar as doações pelo dashboard</li>
                </ul>
              </div>

              <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                <input 
                  type="checkbox" 
                  id="terms" 
                  className="mt-1 h-4 w-4 text-violet-600 rounded border-gray-300 focus:ring-violet-500" 
                  required 
                />
                <label htmlFor="terms" className="text-sm text-gray-700">
                  Eu li e concordo com os <a href="/termos" className="text-violet-600 hover:underline">Termos de Uso</a> e 
                  a <a href="/privacidade" className="text-violet-600 hover:underline">Política de Privacidade</a>. 
                  Confirmo que todas as informações fornecidas são verdadeiras.
                </label>
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
                🚀 Criar Campanha
              </Button>
            )}
          </div>
        </div>
      </form>
    </div>
  );
}
