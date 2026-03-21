/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, memo, type ReactNode } from 'react';
import { 
  CheckCircle2, 
  Clock, 
  Users, 
  Smile, 
  Zap, 
  Star, 
  ShieldCheck, 
  ArrowRight, 
  Gift, 
  AlertCircle,
  ChevronDown,
  ChevronUp,
  Download,
  BookOpen,
  MousePointer2,
  X,
  Check
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const COLORS = {
  orange: '#FF5A1F',
  darkBlue: '#0F172A',
  yellow: '#FACC15',
  white: '#FFFFFF',
};

const SectionTitle = ({ children, light = false }: { children: ReactNode; light?: boolean }) => (
  <h2 className={`text-3xl md:text-4xl font-bold text-center mb-12 ${light ? 'text-white' : 'text-slate-900'}`}>
    {children}
  </h2>
);

const BenefitCard = memo(({ icon: Icon, title, description }: { icon: any; title: string; description: string }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="bg-white p-8 rounded-2xl border border-slate-100 flex flex-col items-center text-center shadow-[0_10px_30px_-10px_rgba(255,90,31,0.3)]"
  >
    <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center mb-6">
      <Icon className="w-8 h-8 text-[#FF5A1F]" />
    </div>
    <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
    <p className="text-slate-600 leading-relaxed">{description}</p>
  </motion.div>
));
BenefitCard.displayName = 'BenefitCard';

const ProblemItem = ({ title, description }: { title: string; description: string }) => (
  <div className="flex gap-4 items-start">
    <div className="mt-1">
      <AlertCircle className="w-6 h-6 text-red-500" />
    </div>
    <div>
      <h4 className="text-lg font-bold text-slate-900">{title}</h4>
      <p className="text-slate-600">{description}</p>
    </div>
  </div>
);

const BonusCard = memo(({ number, title, originalPrice, image }: { number: number; title: string; originalPrice: string; image: string }) => (
  <div className="bg-white p-6 rounded-xl border-2 border-dashed border-orange-200 relative overflow-hidden shadow-[0_10px_25px_-10px_rgba(255,90,31,0.2)] flex flex-col items-center text-center group">
    <div className="absolute top-0 right-0 bg-green-700 text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg uppercase tracking-wider z-10">
      Grátis Hoje
    </div>
    
    <div className="w-full aspect-square mb-4 flex items-center justify-center bg-slate-50 rounded-lg overflow-hidden relative">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
        referrerPolicy="no-referrer"
        loading="lazy"
        width="300"
        height="300"
      />
      <div className="absolute top-2 left-2 text-orange-800/20 font-black text-xl opacity-20">#{number}</div>
    </div>
    
    <h3 className="text-lg font-bold text-slate-900 mb-4 h-14 flex items-center justify-center leading-tight">{title}</h3>
    
    <div className="mt-auto w-full pt-4 border-t border-slate-50">
      <p className="text-slate-500 text-sm line-through decoration-red-600/50">Valor original: {originalPrice}</p>
      <p className="text-green-600 font-black text-2xl">R$ 0,00</p>
    </div>
  </div>
));
BonusCard.displayName = 'BonusCard';

const TestimonialCard = memo(({ name, role, text, image }: { name: string; role: string; text: string; image: string }) => (
  <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 shadow-[0_10px_30px_-10px_rgba(255,90,31,0.2)]">
    <div className="flex gap-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
      ))}
    </div>
    <p className="text-slate-700 italic mb-6">"{text}"</p>
    <div className="flex items-center gap-4">
      <img src={image} alt={name} className="w-12 h-12 rounded-full object-cover" referrerPolicy="no-referrer" loading="lazy" width="48" height="48" />
      <div>
        <h5 className="font-bold text-slate-900">{name}</h5>
        <p className="text-sm text-slate-500">{role}</p>
      </div>
    </div>
  </div>
));
TestimonialCard.displayName = 'TestimonialCard';

const VSLPlayer = memo(() => (
  <div className="relative w-full max-w-md md:max-w-2xl mx-auto rounded-[2rem] shadow-2xl overflow-hidden mb-8 border-4 border-white bg-slate-900 aspect-[9/16]">
    <div dangerouslySetInnerHTML={{
      __html: `<lt-v2 v="fd06ccd4-50ba-460b-93b0-5f2dad01538d" ar="9:16" p="ph=8&pi=s&sc=0&pc=dd6808"></lt-v2>`
    }} />
  </div>
));

export default function App() {
  const [timeLeft, setTimeLeft] = useState(15 * 60); // 15 minutes countdown
  const [showUpsellModal, setShowUpsellModal] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const scrollToPlans = () => {
    document.getElementById('planos')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-orange-100 selection:text-orange-900">
      {/* Upsell Modal */}
      <AnimatePresence>
        {showUpsellModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowUpsellModal(false)}
              className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative bg-white w-full max-w-md rounded-[2.5rem] shadow-2xl border-4 border-[#FF5A1F]"
            >
              {/* Top Badge */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-700 text-white px-6 py-2 rounded-full text-xs font-black tracking-wider uppercase flex items-center gap-2 shadow-lg whitespace-nowrap z-10">
                ⭐ OFERTA EXCLUSIVA DE SAÍDA
              </div>

              {/* Close Button */}
              <button 
                onClick={() => setShowUpsellModal(false)}
                className="absolute top-4 right-6 text-slate-500 hover:text-slate-700 transition-colors z-10"
                aria-label="Fechar"
              >
                <X className="w-6 h-6" />
              </button>
              
              <div className="p-8 md:p-10 text-center">
                <p className="text-blue-700 font-bold text-sm mb-2 flex items-center justify-center gap-2">
                  ⌛ Espere! Não perca essa oportunidade
                </p>
                
                <h3 className="text-3xl font-black text-blue-700 mb-1">Plano Completo</h3>
                <p className="text-slate-500 text-[10px] font-black tracking-[0.2em] uppercase mb-4">HOJE POR APENAS</p>
                
                <div className="flex items-start justify-center gap-1 mb-6">
                  <span className="text-xl font-bold text-purple-700 mt-2">R$</span>
                  <span className="text-7xl font-black text-purple-700 tracking-tighter drop-shadow-sm">19,90</span>
                </div>

                <ul className="space-y-3 mb-8 text-left max-w-[240px] mx-auto">
                  {[
                    "+3000 Atividades Lúdicas",
                    "Acesso vitalício e imediato",
                    "Todos os bônus inclusos",
                    "Suporte via e-mail"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-700 font-bold text-sm">
                      <div className="w-5 h-5 rounded-full border-2 border-blue-600 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-blue-600 stroke-[4]" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Bonus Box */}
                <div className="bg-white rounded-2xl border-2 border-[#FF5A1F] p-5 mb-8 relative">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-700 text-white px-4 py-1 rounded-lg text-[10px] font-black tracking-wider uppercase flex items-center gap-2 shadow-md whitespace-nowrap">
                    🎁 BÔNUS INCLUSOS
                  </div>
                  <ul className="space-y-2 mt-2 text-left">
                    {[
                      "+100 Ideias Criativas",
                      "+80 Dinâmicas sem Material",
                      "Guia Controle de Turma",
                      "Plano Semanal Pronto"
                    ].map((bonus, i) => (
                      <li key={i} className="flex items-center gap-3 text-slate-700 text-xs font-bold">
                        <Gift className="w-4 h-4 text-orange-600" />
                        {bonus}
                      </li>
                    ))}
                  </ul>
                </div>

                <button 
                  onClick={() => window.location.href = 'https://pay.wiapy.com/wVVy1eaE8Q'}
                  className="w-full py-5 rounded-2xl bg-[#1ED760] text-slate-900 font-black text-xl shadow-[0_10px_20px_-5px_rgba(30,215,96,0.5)] hover:bg-[#19C356] transition-all transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2 mb-4"
                >
                  <span>QUERO MEU ACESSO AGORA</span>
                  <span className="text-2xl">🔥</span>
                </button>
                
                <p className="text-center text-slate-600 text-xs font-bold mb-6 flex items-center justify-center gap-2">
                  <Zap className="w-3 h-3 text-orange-600" />
                  Entrega via WhatsApp
                </p>
                
                <button 
                  onClick={() => setShowUpsellModal(false)}
                  className="text-slate-600 text-xs font-bold hover:text-slate-800 transition-colors underline decoration-2 underline-offset-4"
                >
                  Não, obrigado. Quero apenas o plano simples.
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Top Bar */}
      <div className="bg-orange-700 text-white py-2 px-4 text-center text-sm font-bold tracking-wide">
        OFERTA POR TEMPO LIMITADO: {formatTime(timeLeft)} RESTANTES
      </div>

      {/* Hero Section */}
      <header className="relative pt-12 pb-24 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-5">
          <div className="absolute top-20 left-10 w-64 h-64 bg-orange-500 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-orange-50 text-orange-700 px-4 py-1 rounded-full text-sm font-bold mb-6 border border-orange-100">
              <Zap className="w-4 h-4 fill-current" />
              ACESSO IMEDIATO AO MATERIAL
            </div>
            
            <h1 className="text-4xl md:text-6xl font-black text-[#0F172A] leading-tight mb-8 tracking-tight">
              <span className="relative inline-block">
                <span className="relative z-10 text-[#FF5A1F]">+3000</span>
                <div className="absolute -bottom-1 left-0 w-full h-3 bg-orange-100 -z-10 rounded-full" />
              </span>
              {" "}Atividades Prontas para <span className="text-[#FF5A1F]">Transformar</span> sua Sala em Minutos
            </h1>

            {/* VSL Player */}
            <VSLPlayer />

            <p className="text-xl md:text-2xl text-slate-600 mb-12 leading-relaxed max-w-3xl mx-auto font-medium">
              Menos planejamento. Mais controle e atenção na sua sala.
            </p>
            
            <div className="flex flex-col items-center gap-4 mb-10">
              <button 
                onClick={scrollToPlans}
                className="bg-blue-700 hover:bg-blue-800 text-white text-lg md:text-xl font-black px-8 py-4 rounded-2xl shadow-2xl shadow-blue-900/20 transition-all transform hover:scale-105 flex items-center justify-center gap-3 group w-full sm:w-auto"
              >
                QUERO ACESSAR AGORA
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </button>
              <p className="text-sm text-slate-600 font-bold flex items-center gap-2">
                <Clock className="w-4 h-4" />
                ACESSO LIBERADO IMEDIATAMENTE
              </p>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-slate-500 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                Garantia de 7 dias
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ 
                opacity: 1, 
                scale: [1, 1.03, 1] 
              }}
              transition={{ 
                opacity: { delay: 0.4, duration: 0.8 },
                scale: { 
                  duration: 3, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }
              }}
              className="mt-8 max-w-[180px] mx-auto relative group"
            >
              {/* Soft orange glow behind the mockup */}
              <div className="absolute inset-0 bg-orange-400/20 rounded-full blur-[80px] -z-10 transform scale-110" />
              
              <img 
                src="https://i.imgur.com/YOAt61G.png" 
                alt="Mockup do Kit Educar Lúdico" 
                className="w-full h-auto drop-shadow-[0_25px_25px_rgba(0,0,0,0.15)] relative z-10"
                referrerPolicy="no-referrer"
                width="180"
                height="250"
                fetchPriority="high"
              />
            </motion.div>

            {/* Minimalist Info Cards */}
            <div className="mt-12 grid grid-cols-2 gap-4 max-w-sm mx-auto">
              <div className="bg-white/80 backdrop-blur-sm p-4 rounded-2xl border border-slate-100 shadow-sm flex flex-col items-center text-center">
                <div className="w-10 h-10 bg-orange-50 rounded-xl flex items-center justify-center mb-3">
                  <BookOpen className="w-5 h-5 text-orange-700" />
                </div>
                <h4 className="text-sm font-black text-slate-900 leading-tight mb-1">Material completo em PDF</h4>
                <p className="text-[10px] text-slate-500 leading-tight">Mais de 180 páginas de conteúdo prático</p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm p-4 rounded-2xl border border-slate-100 shadow-sm flex flex-col items-center text-center">
                <div className="w-10 h-10 bg-orange-50 rounded-xl flex items-center justify-center mb-3">
                  <Download className="w-5 h-5 text-orange-700" />
                </div>
                <h4 className="text-sm font-black text-slate-900 leading-tight mb-1">Pronto para imprimir</h4>
                <p className="text-[10px] text-slate-500 leading-tight">Formato A4 otimizado para impressão</p>
              </div>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Benefits Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle>Por que este é o material que você precisa?</SectionTitle>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <BenefitCard 
              icon={Clock}
              title="Economia de Tempo"
              description="Nunca mais perca horas no Pinterest procurando atividades que talvez não funcionem."
            />
            <BenefitCard 
              icon={Users}
              title="Turma Engajada"
              description="Transforme a bagunça em aprendizado com dinâmicas que capturam a atenção."
            />
            <BenefitCard 
              icon={Smile}
              title="Menos Estresse"
              description="Tenha sempre uma 'carta na manga' para momentos de agitação ou transição."
            />
            <BenefitCard 
              icon={Zap}
              title="Sem Materiais Caros"
              description="90% das dinâmicas usam apenas o corpo, voz ou materiais simples que você já tem."
            />
          </div>
        </div>
      </section>

      {/* Materials Showcase Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle>Alguns materiais que você irá receber</SectionTitle>
        </div>
          
        <div className="relative mt-8">
          {/* Gradient masks for smooth fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
          
          <motion.div 
            className="flex gap-6 w-max py-8 px-6"
            animate={{ x: ["0%", "-50%"] }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 40,
                  ease: "linear",
                },
              }}
            >
              {[
                "https://i.imgur.com/JQOal4s.png",
                "https://i.imgur.com/A3r6wX0.png",
                "https://i.imgur.com/yM5I7LT.png",
                "https://i.imgur.com/xTF8pTf.png",
                "https://i.imgur.com/1s4lj4w.png",
                "https://i.imgur.com/xD4B8M9.png",
                "https://i.imgur.com/HXwtksq.png",
                "https://i.imgur.com/JQOal4s.png",
                "https://i.imgur.com/A3r6wX0.png",
                "https://i.imgur.com/yM5I7LT.png",
                "https://i.imgur.com/xTF8pTf.png",
                "https://i.imgur.com/1s4lj4w.png",
                "https://i.imgur.com/xD4B8M9.png",
                "https://i.imgur.com/HXwtksq.png",
              ].map((src, index) => (
                <div key={index} className="w-64 md:w-80 aspect-[3/4] bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-100 flex-shrink-0 group hover:scale-105 transition-transform duration-500">
                  <img 
                    src={src} 
                    alt={`Material ${index}`} 
                    className="w-full h-full object-contain p-4"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    width="320"
                    height="426"
                  />
                </div>
              ))}
            </motion.div>
          </div>
      </section>

      {/* Bonuses Section */}
      <section className="py-24 bg-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-orange-700 font-bold tracking-widest uppercase text-sm">Presentes Exclusivos</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mt-4">
              Leve Estes 6 Bônus <span className="text-[#FF5A1F]">Totalmente Grátis</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <BonusCard number={1} title="+100 Ideias Criativas" originalPrice="R$ 47,00" image="https://i.imgur.com/i5VfQO8.png" />
            <BonusCard number={2} title="+80 Dinâmicas sem Material" originalPrice="R$ 39,00" image="https://i.imgur.com/soE8VT9.png" />
            <BonusCard number={3} title="+30 Rotinas Prontas" originalPrice="R$ 29,00" image="https://i.imgur.com/2gucGh7.png" />
            <BonusCard number={4} title="+25 Atividades para Acalmar" originalPrice="R$ 35,00" image="https://i.imgur.com/qnjelbC.png" />
            <BonusCard number={5} title="Guia Controle de Turma" originalPrice="R$ 49,00" image="https://i.imgur.com/rY66jQ6.png" />
            <BonusCard number={6} title="Plano Semanal Pronto" originalPrice="R$ 57,00" image="https://i.imgur.com/1oqQ1A2.png" />
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section id="planos" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle>Escolha o Melhor Plano para Você</SectionTitle>
          
          <div className="flex justify-center mb-12">
            <div className="bg-[#FF5A1F] rounded-3xl p-6 md:p-8 shadow-2xl max-w-md w-full relative overflow-hidden">
              <div className="absolute inset-0 bg-white/10 opacity-50" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
              <div className="relative z-10">
                <div className="flex items-center justify-center gap-2 mb-6 text-white font-black tracking-widest uppercase text-sm md:text-base">
                  <span className="text-xl">⏰</span>
                  OFERTA ENCERRA EM BREVE
                </div>
                <div className="flex justify-center items-center gap-2 md:gap-4">
                  <div className="bg-orange-700/50 backdrop-blur-sm rounded-2xl p-3 md:p-4 w-20 md:w-24 flex flex-col items-center justify-center border border-orange-400/30 shadow-inner">
                    <span className="text-4xl md:text-5xl font-black text-white tracking-tighter" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.2)' }}>00</span>
                    <span className="text-[10px] md:text-xs font-bold text-orange-200 mt-1 uppercase tracking-wider">Horas</span>
                  </div>
                  <div className="text-3xl md:text-4xl font-black text-white/80 animate-pulse">:</div>
                  <div className="bg-orange-700/50 backdrop-blur-sm rounded-2xl p-3 md:p-4 w-20 md:w-24 flex flex-col items-center justify-center border border-orange-400/30 shadow-inner">
                    <span className="text-4xl md:text-5xl font-black text-white tracking-tighter" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.2)' }}>{Math.floor(timeLeft / 60).toString().padStart(2, '0')}</span>
                    <span className="text-[10px] md:text-xs font-bold text-orange-200 mt-1 uppercase tracking-wider">Min</span>
                  </div>
                  <div className="text-3xl md:text-4xl font-black text-white/80 animate-pulse">:</div>
                  <div className="bg-orange-700/50 backdrop-blur-sm rounded-2xl p-3 md:p-4 w-20 md:w-24 flex flex-col items-center justify-center border border-orange-400/30 shadow-inner">
                    <span className="text-4xl md:text-5xl font-black text-white tracking-tighter" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.2)' }}>{(timeLeft % 60).toString().padStart(2, '0')}</span>
                    <span className="text-[10px] md:text-xs font-bold text-orange-200 mt-1 uppercase tracking-wider">Seg</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center max-w-lg mx-auto">
            {/* Premium Plan (Featured - Redesigned) */}
            <div className="bg-white p-1 rounded-[2.5rem] border-[6px] border-[#FF5A1F] relative z-20 flex flex-col h-full shadow-[0_30px_60px_-12px_rgba(255,90,31,0.3)] w-full">
              {/* Header Badge */}
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-blue-700 text-white px-8 py-2 rounded-full text-xs font-black tracking-widest uppercase flex items-center gap-2 shadow-lg whitespace-nowrap">
                <Star className="w-3 h-3 fill-white" />
                MAIS POPULAR ENTRE LÍDERES
                <Star className="w-3 h-3 fill-white" />
              </div>

              <div className="p-8 flex flex-col h-full">
                <div className="text-center mb-6">
                  <h3 className="text-3xl font-black text-blue-700 mb-4">PLANO COMPLETO</h3>
                  <div className="inline-block bg-blue-50 text-blue-700 px-6 py-1 rounded-lg text-sm font-black tracking-widest uppercase mb-6">
                    HOJE POR APENAS
                  </div>
                  <div className="flex items-start justify-center gap-1">
                    <span className="text-xl font-bold text-blue-700 mt-2">R$</span>
                    <span className="text-7xl font-black text-blue-700 tracking-tighter">12,90</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  <li className="flex items-center gap-3 text-slate-700 font-bold">
                    <CheckCircle2 className="w-6 h-6 text-blue-700" />
                    +3000 Atividades Lúdicas
                  </li>
                  <li className="flex items-center gap-3 text-slate-700 font-bold">
                    <CheckCircle2 className="w-6 h-6 text-blue-700" />
                    Acesso imediato e vitalício
                  </li>
                  <li className="flex items-center gap-3 text-slate-700 font-bold">
                    <CheckCircle2 className="w-6 h-6 text-blue-700" />
                    Material organizado
                  </li>
                  <li className="flex items-center gap-3 text-slate-700 font-bold">
                    <CheckCircle2 className="w-6 h-6 text-blue-700" />
                    Suporte via e-mail
                  </li>
                </ul>

                {/* Bonus Box */}
                <div className="bg-blue-50 rounded-3xl border-2 border-[#FF5A1F] p-6 mb-8 relative">
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-700 text-white px-4 py-1 rounded-xl text-[10px] font-black tracking-wider uppercase flex items-center gap-2 shadow-md whitespace-nowrap">
                    🎁 +6 BÔNUS EXCLUSIVOS HOJE
                  </div>
                  <ul className="space-y-3 mt-2">
                    {[
                      "+100 Ideias Criativas",
                      "+80 Dinâmicas sem Material",
                      "+30 Rotinas Prontas",
                      "+25 Atividades para Acalmar",
                      "Guia Controle de Turma",
                      "Plano Semanal Pronto"
                    ].map((bonus, i) => (
                      <li key={i} className="flex items-center gap-3 text-slate-700 text-sm font-bold">
                        <Gift className="w-4 h-4 text-orange-600" />
                        {bonus}
                      </li>
                    ))}
                  </ul>
                </div>

                <button 
                  onClick={() => window.location.href = 'https://pay.wiapy.com/wVVy1eaE8Q'}
                  className="w-full py-5 rounded-2xl bg-[#1ED760] text-slate-900 font-black text-xl shadow-[0_10px_20px_-5px_rgba(30,215,96,0.5)] hover:bg-[#19C356] transition-all transform hover:scale-105 active:scale-95 flex flex-col items-center justify-center gap-1 group mb-4"
                >
                  <span>QUERO MEU ACESSO AGORA</span>
                  <span className="text-2xl">🔥</span>
                </button>

                <p className="text-center text-slate-600 text-sm font-bold flex items-center justify-center gap-2 mb-6">
                  <Zap className="w-4 h-4 text-orange-600" />
                  Entrega via WhatsApp
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle>Quem usa, aprova!</SectionTitle>
          <div className="grid md:grid-cols-3 gap-8">
            <TestimonialCard 
              name="Ana Paula"
              role="Professora de Ed. Infantil"
              text="Minha sala era um caos antes desse material. As atividades de transição salvaram meus dias. Agora as crianças engajam de verdade!"
              image="https://picsum.photos/seed/teacher1/100/100"
            />
            <TestimonialCard 
              name="Mariana Silva"
              role="Mãe e Educadora"
              text="O material é riquíssimo e muito fácil de aplicar. Não precisa de nada caro, só criatividade e o guia na mão. Recomendo muito!"
              image="https://picsum.photos/seed/teacher2/100/100"
            />
            <TestimonialCard 
              name="Ricardo Gomes"
              role="Coordenador Pedagógico"
              text="Implementamos o kit em toda a escola e o feedback das professoras foi imediato. Menos estresse e mais aprendizado lúdico."
              image="https://picsum.photos/seed/teacher3/100/100"
            />
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-4">
          <div className="relative">
            {/* Background Decorative Elements */}
            <div className="absolute -left-20 -top-20 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl" />
            <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl" />

            <div className="bg-white rounded-[4rem] p-10 md:p-20 border border-slate-100 relative z-10 text-center max-w-4xl mx-auto shadow-[0_32px_64px_-15px_rgba(255,90,31,0.25)]">
              <div className="flex justify-center mb-8">
                <img 
                  src="https://i.imgur.com/Buwole5.png" 
                  alt="Selo de Garantia 7 Dias" 
                  className="w-32 md:w-40 h-auto drop-shadow-xl"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  width="160"
                  height="160"
                />
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 leading-[1.1]">
                Você tem 7 dias para testar <span className="text-blue-600">sem riscos.</span>
              </h2>
              <p className="text-xl text-slate-600 mb-0 leading-relaxed font-medium">
                Teste o material por 7 dias. Se não ficar satisfeita, devolvemos 100% do seu dinheiro. Sem perguntas e sem burocracia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-[#0F172A] text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-8">
            Transforme sua sala de aula ainda hoje
          </h2>
          <p className="text-xl text-slate-400 mb-12">
            Não deixe para amanhã a tranquilidade e o engajamento que você pode ter agora.
          </p>
          <button 
            onClick={() => window.location.href = 'https://pay.wiapy.com/wVVy1eaE8Q'}
            className="bg-blue-600 hover:bg-blue-700 text-white text-xl font-black px-8 py-4 rounded-2xl shadow-2xl shadow-blue-500/20 transition-all transform hover:scale-105 mb-4"
          >
            QUERO MEU ACESSO AGORA
          </button>
          <p className="text-slate-400 text-sm font-bold mb-8 flex items-center justify-center gap-2">
            <Zap className="w-4 h-4 text-orange-600" />
            Entrega via WhatsApp
          </p>
          <p className="mt-8 text-slate-400 text-sm">
            Acesso imediato após a confirmação do pagamento.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-100 text-center text-slate-500 text-sm">
        <p>&copy; 2026 Kit Educar Lúdico. Todos os direitos reservados.</p>
      </footer>

      <style>{`
        @keyframes pulse-slow {
          0%, 100% { transform: scale(1); box-shadow: 0 10px 25px -5px rgba(59, 130, 246, 0.4); }
          50% { transform: scale(1.02); box-shadow: 0 20px 35px -5px rgba(59, 130, 246, 0.6); }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0) rotate(12deg); }
          50% { transform: translateY(-10px) rotate(12deg); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 3s infinite ease-in-out;
        }
        .animate-bounce-slow {
          animation: bounce-slow 4s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
}
