import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { X, Settings, Cookie } from 'lucide-react';

interface CookieConsentProps {
  onAcceptAll: () => void;
  onAcceptNecessary: () => void;
  onSavePreferences: (preferences: { necessary: boolean; analytics: boolean }) => void;
}

const CookieConsentModern: React.FC<CookieConsentProps> = ({
  onAcceptAll,
  onAcceptNecessary,
  onSavePreferences,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
  });

  useEffect(() => {
    // Check if user has already given consent
    const hasConsent = localStorage.getItem('cookie-consent');
    if (!hasConsent) {
      setIsVisible(true);
    }
  }, []);

  const handleAcceptAll = () => {
    setPreferences({ necessary: true, analytics: true });
    onAcceptAll();
    localStorage.setItem('cookie-consent', 'all');
    setIsVisible(false);
  };

  const handleAcceptNecessary = () => {
    setPreferences({ necessary: true, analytics: false });
    onAcceptNecessary();
    localStorage.setItem('cookie-consent', 'necessary');
    setIsVisible(false);
  };

  const handleSavePreferences = () => {
    onSavePreferences(preferences);
    localStorage.setItem('cookie-consent', JSON.stringify(preferences));
    setIsVisible(false);
    setShowPreferences(false);
  };

  const handleShowPreferences = () => {
    setShowPreferences(true);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
      <Card className="max-w-md w-full mx-auto shadow-2xl border-0 bg-white">
        {!showPreferences ? (
          <>
            <CardHeader className="text-center pb-4">
              <div className="flex items-center justify-center mb-2">
                <Cookie className="h-8 w-8 text-[#EE2D2E] mr-2" />
                <CardTitle className="text-xl font-bold text-gray-900">
                  Utilizamos cookies 🍪
                </CardTitle>
              </div>
              <CardDescription className="text-sm text-gray-600 leading-relaxed">
                Utilizamos cookies para mejorar su experiencia y analizar el uso del sitio. 
                Puede gestionar sus preferencias en cualquier momento.
              </CardDescription>
            </CardHeader>
            <CardFooter className="flex flex-col gap-3 pt-2">
              <div className="flex flex-col sm:flex-row gap-2 w-full">
                <Button
                  onClick={handleAcceptAll}
                  className="flex-1 bg-[#EE2D2E] hover:bg-[#D11B1C] text-white font-medium h-11"
                >
                  Aceptar todas
                </Button>
                <Button
                  onClick={handleAcceptNecessary}
                  variant="outline"
                  className="flex-1 h-11 font-medium"
                >
                  Solo necesarias
                </Button>
              </div>
              <Button
                onClick={handleShowPreferences}
                variant="ghost"
                className="text-sm text-gray-500 hover:text-gray-700 h-8"
              >
                <Settings className="h-4 w-4 mr-1" />
                Personalizar
              </Button>
              <div className="flex items-center justify-center gap-2 text-xs text-gray-400 mt-2">
                <a href="/privacy" className="hover:text-[#EE2D2E] underline">
                  Política de privacidad
                </a>
                <span>•</span>
                <a href="/terms" className="hover:text-[#EE2D2E] underline">
                  Términos de uso
                </a>
              </div>
            </CardFooter>
          </>
        ) : (
          <>
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg font-bold text-gray-900">
                  Preferencias de cookies
                </CardTitle>
                <Button
                  onClick={() => setShowPreferences(false)}
                  variant="ghost"
                  size="sm"
                  className="h-8 w-8 p-0"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
              <CardDescription className="text-sm text-gray-600">
                Elija qué tipos de cookies desea permitir. Puede cambiar estas configuraciones en cualquier momento.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-medium text-gray-900">Cookies necesarias</span>
                    <Badge variant="secondary" className="text-xs">
                      Siempre activas
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-600">
                    Esenciales para el funcionamiento básico del sitio web.
                  </p>
                </div>
                <Switch
                  checked={preferences.necessary}
                  disabled
                  className="data-[state=checked]:bg-[#EE2D2E]"
                />
              </div>
              
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-medium text-gray-900">Cookies de análisis</span>
                  </div>
                  <p className="text-sm text-gray-600">
                    Nos ayudan a entender cómo usa el sitio para mejorarlo.
                  </p>
                </div>
                <Switch
                  checked={preferences.analytics}
                  onCheckedChange={(checked) =>
                    setPreferences(prev => ({ ...prev, analytics: checked }))
                  }
                  className="data-[state=checked]:bg-[#EE2D2E]"
                />
              </div>
            </CardContent>
            <CardFooter className="flex flex-col gap-3 pt-2">
              <div className="flex flex-col sm:flex-row gap-2 w-full">
                <Button
                  onClick={handleAcceptAll}
                  className="flex-1 bg-[#EE2D2E] hover:bg-[#D11B1C] text-white font-medium h-11"
                >
                  Aceptar todas
                </Button>
                <Button
                  onClick={handleAcceptNecessary}
                  variant="outline"
                  className="flex-1 h-11 font-medium"
                >
                  Solo necesarias
                </Button>
              </div>
              <Button
                onClick={handleSavePreferences}
                className="w-full bg-gray-900 hover:bg-gray-800 text-white font-medium h-11"
              >
                Guardar preferencias
              </Button>
            </CardFooter>
          </>
        )}
      </Card>
    </div>
  );
};

export default CookieConsentModern;
