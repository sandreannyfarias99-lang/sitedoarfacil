"use client";

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

interface CampaignCardProps {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  raised: number;
  goal: number;
  donors: number;
  daysLeft: number;
  category: string;
}

export default function CampaignCard({
  title,
  description,
  imageUrl,
  raised,
  goal,
  donors,
  daysLeft,
  category
}: CampaignCardProps) {
  const progressPercentage = Math.min((raised / goal) * 100, 100);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(amount);
  };

  return (
    <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group bg-white border border-gray-200">
      <CardHeader className="p-0">
        <div className="relative overflow-hidden">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-4 left-4">
            <span className="inline-block bg-white/90 backdrop-blur-sm text-violet-700 text-xs font-semibold px-3 py-1 rounded-full">
              {category}
            </span>
          </div>
          {daysLeft <= 7 && daysLeft > 0 && (
            <div className="absolute top-4 right-4">
              <span className="inline-block bg-red-500/90 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full">
                {daysLeft} dias restantes
              </span>
            </div>
          )}
        </div>
      </CardHeader>

      <CardContent className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2 leading-tight">
          {title}
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed">
          {description}
        </p>

        {/* Progress Section */}
        <div className="space-y-3">
          <div className="flex justify-between items-center text-sm">
            <span className="font-semibold text-gray-900">
              {formatCurrency(raised)}
            </span>
            <span className="text-gray-600">
              {progressPercentage.toFixed(0)}% da meta
            </span>
          </div>
          
          <Progress 
            value={progressPercentage} 
            className="h-2 bg-gray-200"
          />
          
          <div className="flex justify-between items-center text-xs text-gray-600">
            <span>Meta: {formatCurrency(goal)}</span>
            <span>{donors} doadores</span>
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-6 pt-0">
        <div className="w-full space-y-3">
          <Button 
            className="w-full bg-violet-600 hover:bg-violet-700 text-white font-semibold py-2.5 rounded-lg transition-colors"
          >
            Doar Agora
          </Button>
          <Button 
            variant="outline" 
            className="w-full border border-gray-300 hover:border-orange-500 text-gray-700 hover:text-orange-600 py-2.5 rounded-lg transition-colors"
          >
            Ver Detalhes
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}