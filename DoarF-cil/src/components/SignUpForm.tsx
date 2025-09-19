"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

interface SignUpData {
  userType: 'doador' | 'beneficiario' | '';
  name: string;
  email: string;
  phone: string;
  address: string;
  neighborhood: string;
  city: string;
  state: string;
  zipCode: string;
  bio: string;
  needs: string[];
  donations: string[];
}

const brazilianStates = [
  'AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 
  'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 
  'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'
];

const itemOptions = [
  'Roupas e Calçados', 'Alimentos', 'Produtos de Higiene', 'Material Escolar',
  'Brinquedos', 'Móveis', 'Eletrodomésticos', 'Livros', 'Medicamentos',
  'Itens para Bebê', 'Material de Construção', 'Outros'
];

export default function SignUpForm() {
  const [formData, setFormData] = useState<SignUpData>({
    userType: '',
    name: '',
    email: '',
    phone: '',
    address: '',
    neighborhood: '',
    city: '',
    state: '',
    zipCode: '',
    bio: '',
    needs: [],
    donations: []
  });

  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleInputChange = (field: keyof SignUpData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleItemToggle = (item: string) => {
    setSelectedItems(prev => 
      prev.includes(item) 
        ? prev.filter(i => i !== item)
        : [...prev, item]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    // Validações básicas
    if (!formData.userType) {
      setError('Por favor, selecione se você é doador ou beneficiário');
      return;
    }

    if (!formData.name || formData.name.length < 2) {
      setError('Por favor, digite seu nome completo');
      return;
    }

    if (!formData.email) {
      setError('Por favor, digite seu email');
      return;
    }

    setIsSubmitting(true);

    try {
      // Simular cadastro
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setSuccess('Cadastro realizado com sucesso! Bem-vindo(a) à nossa comunidade!');
      setFormData({
        userType: '',
        name: '',
        email: '',
        phone: '',
        address: '',
        neighborhood: '',
        city: '',
        state: '',
        zipCode: '',
        bio: '',
        needs: [],
        donations: []
      });
      setSelectedItems([]);
    } catch (err) {
      setError('Erro ao realizar cadastro. Tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* User Type Selection */}
      <div className="text-center mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Como você gostaria de participar?</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card 
            className={`cursor-pointer transition-all duration-300 hover:shadow-xl ${
              formData.userType === 'doador' ? 'ring-2 ring-violet-500 bg-violet-50' : 'hover:bg-gray-50'
            }`}
            onClick={() => handleInputChange('userType', 'doador')}
          >
            <CardContent className="p-8 text-center">
              <div className="w-20 h-20 bg-violet-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">💝</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Quero Doar</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Tenho itens, tempo ou recursos para compartilhar com quem precisa. 
                Quero fazer a diferença na vida de outras pessoas.
              </p>
              <div className="space-y-2 text-sm text-gray-500">
                <div>✓ Criar campanhas de arrecadação</div>
                <div>✓ Oferecer itens para doação</div>
                <div>✓ Conectar com beneficiários</div>
                <div>✓ Acompanhar impacto das doações</div>
              </div>
            </CardContent>
          </Card>

          <Card 
            className={`cursor-pointer transition-all duration-300 hover:shadow-xl ${
              formData.userType === 'beneficiario' ? 'ring-2 ring-orange-500 bg-orange-50' : 'hover:bg-gray-50'
            }`}
            onClick={() => handleInputChange('userType', 'beneficiario')}
          >
            <CardContent className="p-8 text-center">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">🙏</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Preciso de Ajuda</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Estou passando por dificuldades e preciso de apoio da comunidade. 
                Quero encontrar pessoas dispostas a ajudar.
              </p>
              <div className="space-y-2 text-sm text-gray-500">
                <div>✓ Buscar doações próximas</div>
                <div>✓ Conectar com doadores</div>
                <div>✓ Receber itens necessários</div>
                <div>✓ Participar de campanhas</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Registration Form */}
      {formData.userType && (
        <Card className="shadow-xl">
          <CardHeader>
            <CardTitle className="text-center">
              {formData.userType === 'doador' ? '💝 Cadastro de Doador' : '🙏 Cadastro de Beneficiário'}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Info */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Nome Completo *</Label>
                  <Input
                    id="name"
                    placeholder="Seu nome completo"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="mt-2"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="seu@email.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="mt-2"
                    required
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="phone">Telefone/WhatsApp</Label>
                <Input
                  id="phone"
                  placeholder="11999999999 (apenas números)"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className="mt-2"
                />
                <p className="text-xs text-gray-500 mt-1">
                  Digite apenas os números, sem parênteses ou traços
                </p>
              </div>

              {/* Address */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">Localização</h3>
                
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="zipCode">CEP</Label>
                    <Input
                      id="zipCode"
                      placeholder="00000-000 (opcional)"
                      value={formData.zipCode}
                      onChange={(e) => handleInputChange('zipCode', e.target.value)}
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="city">Cidade</Label>
                    <Input
                      id="city"
                      placeholder="Sua cidade"
                      value={formData.city}
                      onChange={(e) => handleInputChange('city', e.target.value)}
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="state">Estado</Label>
                    <select
                      id="state"
                      value={formData.state}
                      onChange={(e) => handleInputChange('state', e.target.value)}
                      className="mt-2 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                      <option value="">UF (opcional)</option>
                      {brazilianStates.map((state) => (
                        <option key={state} value={state}>
                          {state}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="neighborhood">Bairro</Label>
                  <Input
                    id="neighborhood"
                    placeholder="Seu bairro"
                    value={formData.neighborhood}
                    onChange={(e) => handleInputChange('neighborhood', e.target.value)}
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="address">Endereço Completo</Label>
                  <Input
                    id="address"
                    placeholder="Rua, número, complemento"
                    value={formData.address}
                    onChange={(e) => handleInputChange('address', e.target.value)}
                    className="mt-2"
                  />
                </div>
              </div>

              {/* Bio */}
              <div>
                <Label htmlFor="bio">Sobre Você</Label>
                <Textarea
                  id="bio"
                  placeholder={`Conte um pouco sobre ${formData.userType === 'doador' ? 'por que gosta de ajudar...' : 'sua situação atual...'}`}
                  value={formData.bio}
                  onChange={(e) => handleInputChange('bio', e.target.value)}
                  className="mt-2"
                  rows={3}
                />
              </div>

              {/* Categories */}
              <div>
                <Label>
                  {formData.userType === 'doador' ? 'Que tipo de itens você pode doar?' : 'Que tipo de ajuda você está procurando?'}
                </Label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-4">
                  {itemOptions.map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => handleItemToggle(item)}
                      className={`p-3 rounded-lg border text-sm font-medium transition-all ${
                        selectedItems.includes(item)
                          ? formData.userType === 'doador'
                            ? 'bg-violet-100 border-violet-300 text-violet-700'
                            : 'bg-orange-100 border-orange-300 text-orange-700'
                          : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>

              {/* Error/Success Messages */}
              {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                  {error}
                </div>
              )}
              
              {success && (
                <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg">
                  {success}
                </div>
              )}

              {/* Submit Button */}
              <div className="text-center">
                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className={`px-12 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all ${
                    formData.userType === 'doador'
                      ? 'bg-violet-600 hover:bg-violet-700'
                      : 'bg-orange-500 hover:bg-orange-600'
                  } disabled:opacity-50 disabled:cursor-not-allowed`}
                >
                  {isSubmitting ? (
                    <>
                      <span className="animate-spin mr-2">⏳</span>
                      Criando conta...
                    </>
                  ) : (
                    formData.userType === 'doador' ? '💝 Cadastrar como Doador' : '🙏 Cadastrar para Receber Ajuda'
                  )}
                </Button>
                
                <p className="text-gray-600 text-sm mt-4">
                  Ao se cadastrar, você concorda com nossos{' '}
                  <a href="/termos" className="text-violet-600 hover:underline">Termos de Uso</a> e{' '}
                  <a href="/privacidade" className="text-violet-600 hover:underline">Política de Privacidade</a>
                </p>
              </div>
            </form>
          </CardContent>
        </Card>
      )}
    </div>
  );
}