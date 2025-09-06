import React, { useState, useEffect } from 'react';
import { Heart, Sparkles, Star, Crown, Shield } from 'lucide-react';

function App() {
  const [currentRule, setCurrentRule] = useState(0);
  const [showHearts, setShowHearts] = useState(false);

  const rules = [
    "No me gusta que tengas más amigos aparte de los que ya algo he sabido. No más amigos ni amiguitos.",
    "No reaccionar a fotos de amig@s.",
    "No subir, etiquetar o mencionar a amig@s en publicaciones de cualquier red social.",
    "Si un amig@ que ya tiene tiempo sin comunicación vuelve a buscarnos, contarlo el uno al otro.",
    "Si alguien gusta o demuestra intenciones que no son, debemos decirlo y eliminarlo de nuestras vidas.",
    "No abrazar a nuestr@s amig@s.",
    "Decir si invitan a salir y no salir con amig@s; informar con quién estarás o qué harás.",
    "Nadie más puede tener nuestros celulares, solamente Yuritzy y Oscar. con la excepción de salo y yamis",
    "Si hay problemas o enojos, hay que hablar y solucionarlo el mismo día.",
    "Compartir cuáles son nuestras redes sociales será siempre por confianza y para sentirnos tranquil@s.",
    "No compartir publicaciones, memes ni ningún tipo de contenido con amig@s.",
    "Cuando no nos agrade algún amig@, decir lo que sentimos y alejarnos de esa amistad.",
    "Prohibido usar ropa corta (shorts, faldas) en espacios públicos de cualquier tipo.",
    "Prohibido publicar fotos nuestras en redes sociales, excepto si son de los dos juntos o aprobadas por ambos.",
    "Nada de apodos ni aceptar que amig@s nos digan apodos. Solo hablar por el nombre (sin diminutivos).",
    "Debes comer antes de cualquier actividad física (entrenamiento, box, gym), así como en desayuno, almuerzo y cena.",
    "Desayunar antes de ir a la universidad y cumplir con las demás comidas en su tiempo correspondiente.",
    "No chatear con amig@s.",
    "No se puede hacer ni recibir llamadas de amig@s en general, con excepción de familiares y Esme, hasta que hagamos llamada.",
    "Siempre avisar cuando lleguemos a casa o a cualquier lugar, para estar tranquil@s.",
    "Dedicar al menos un momento al día para hablar, aunque estemos ocupados.",
    "No dejar en visto ni ignorar mensajes; siempre responder aunque sea con algo breve.",
    "Avisar siempre si vamos a salir de viaje o a un lugar diferente del habitual.",
    "Cuando haya celos o incomodidad, hablarlo de inmediato sin ocultar nada.",
    "Priorizar tiempo juntos antes que tiempo con otras personas.",
    "No usar excusas para ocultar cosas, siempre hablar con sinceridad.",
    "No usar emojis con nadie ni registrar a nadie con emojis en el celular."
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setShowHearts(prev => !prev);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const FloatingHeart = ({ delay }: { delay: number }) => (
    <div 
      className={`absolute animate-bounce text-pink-400 text-2xl transition-all duration-1000 ${showHearts ? 'opacity-100' : 'opacity-0'}`}
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${delay}ms`,
        animationDuration: '3s'
      }}
    >
      💕
    </div>
  );

  const SparkleEffect = ({ delay }: { delay: number }) => (
    <div 
      className="absolute animate-pulse text-yellow-300 text-xl"
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${delay}ms`,
        animationDuration: '2s'
      }}
    >
      ✨
    </div>
  );

  return (
    <div className="min-h-screen relative overflow-hidden" style={{
      background: 'radial-gradient(ellipse at center, #ff1493 0%, #8b008b 25%, #4b0082 50%, #2e0033 75%, #000000 100%), linear-gradient(45deg, #000000 0%, #ff1493 25%, #000000 50%, #8b008b 75%, #000000 100%)',
      backgroundSize: '200% 200%, 300% 300%',
      animation: 'fluidBackground 12s ease-in-out infinite'
    }}>
      {/* Floating Hearts */}
      {[...Array(15)].map((_, i) => (
        <FloatingHeart key={i} delay={i * 200} />
      ))}
      
      {/* Sparkle Effects */}
      {[...Array(10)].map((_, i) => (
        <SparkleEffect key={i} delay={i * 300} />
      ))}

      {/* Header */}
      <div className="relative z-10 text-center py-8">
        <div className="flex justify-center items-center mb-4 space-x-4">
          <Crown className="text-yellow-400 w-8 h-8 animate-pulse" />
          <h1 className="text-4xl md:text-6xl font-bold text-white animate-pulse">
            📜 Reglas de la Relación
          </h1>
          <Crown className="text-yellow-400 w-8 h-8 animate-pulse" />
        </div>
        
        <div className="flex justify-center items-center space-x-8 mb-8">
          <div className="text-center">
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mb-2 animate-bounce">
              <img 
                src="/Imagen de WhatsApp 2025-09-06 a las 00.43.59_37264b21.jpg" 
                alt="Snoopy Barcelona" 
                className="w-20 h-20 rounded-full object-cover"
              />
            </div>
            <h2 className="text-2xl font-bold text-pink-300">Oscar</h2>
          </div>
          
          <div className="flex flex-col items-center">
            <Heart className="text-red-500 w-16 h-16 animate-pulse mb-2" />
            <div className="text-pink-300 text-xl">💕 & 💕</div>
          </div>
          
          <div className="text-center">
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mb-2 animate-bounce" style={{ animationDelay: '0.5s' }}>
              <img 
                src="/Imagen de WhatsApp 2025-09-06 a las 00.47.51_d31d39ee.jpg" 
                alt="Snoopy Doctora" 
                className="w-20 h-20 rounded-full object-cover"
              />
            </div>
            <h2 className="text-2xl font-bold text-pink-300">Yuritzy</h2>
          </div>
        </div>
      </div>

      {/* Rules Container */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 pb-8">
        <div className="bg-black/70 backdrop-blur-sm rounded-3xl p-8 border-4 border-pink-500 shadow-2xl">
          {/* Rule Navigation */}
          <div className="flex justify-center items-center mb-6 space-x-4">
            <button 
              onClick={() => setCurrentRule(Math.max(0, currentRule - 1))}
              className="bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-110"
              disabled={currentRule === 0}
            >
              ← Anterior
            </button>
            
            <div className="bg-pink-500 text-white px-6 py-2 rounded-full font-bold">
              Regla {currentRule + 1} de {rules.length}
            </div>
            
            <button 
              onClick={() => setCurrentRule(Math.min(rules.length - 1, currentRule + 1))}
              className="bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-110"
              disabled={currentRule === rules.length - 1}
            >
              Siguiente →
            </button>
          </div>

          {/* Current Rule Display */}
          <div className="bg-gradient-to-r from-pink-900/50 to-purple-900/50 rounded-2xl p-6 mb-6 border-2 border-pink-400">
            <div className="flex items-start space-x-4">
              <Shield className="text-pink-400 w-8 h-8 flex-shrink-0 mt-1" />
              <p className="text-white text-lg leading-relaxed font-medium">
                {rules[currentRule]}
              </p>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-gray-700 rounded-full h-3 mb-6">
            <div 
              className="bg-gradient-to-r from-pink-500 to-purple-500 h-3 rounded-full transition-all duration-500"
              style={{ width: `${((currentRule + 1) / rules.length) * 100}%` }}
            ></div>
          </div>

          {/* Rules Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {rules.map((rule, index) => (
              <button
                key={index}
                onClick={() => setCurrentRule(index)}
                className={`p-4 rounded-xl border-2 transition-all duration-300 transform hover:scale-105 ${
                  currentRule === index 
                    ? 'bg-pink-600 border-pink-400 text-white' 
                    : 'bg-black/50 border-gray-600 text-gray-300 hover:border-pink-400'
                }`}
              >
                <div className="flex items-center space-x-2">
                  <Star className="w-4 h-4" />
                  <span className="font-semibold">Regla {index + 1}</span>
                </div>
                <p className="text-sm mt-2 line-clamp-3">
                  {rule.substring(0, 80)}...
                </p>
              </button>
            ))}
          </div>
        </div>

        {/* Golden Rule */}
        <div className="mt-8 bg-gradient-to-r from-yellow-600 to-yellow-400 rounded-3xl p-8 border-4 border-yellow-300 shadow-2xl text-center">
          <div className="flex justify-center items-center mb-4">
            <Sparkles className="text-yellow-800 w-8 h-8 animate-spin mr-3" />
            <h3 className="text-3xl font-bold text-yellow-900">🌟 Regla de Oro (#28)</h3>
            <Sparkles className="text-yellow-800 w-8 h-8 animate-spin ml-3" />
          </div>
          <p className="text-2xl font-bold text-yellow-900 animate-pulse">
            Amarnos por siempre 💗🤍
          </p>
          <div className="flex justify-center space-x-4 mt-4 text-4xl">
            <span className="animate-bounce">💕</span>
            <span className="animate-bounce" style={{ animationDelay: '0.2s' }}>💖</span>
            <span className="animate-bounce" style={{ animationDelay: '0.4s' }}>💝</span>
            <span className="animate-bounce" style={{ animationDelay: '0.6s' }}>💗</span>
            <span className="animate-bounce" style={{ animationDelay: '0.8s' }}>💓</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fluidBackground {
          0% { background-position: 0% 50%; }
          25% { background-position: 100% 0%; }
          50% { background-position: 100% 100%; }
          75% { background-position: 0% 100%; }
          100% { background-position: 0% 50%; }
        }
        
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}

export default App;