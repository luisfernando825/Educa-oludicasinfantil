/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
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
import { VSLPlayer } from './components/VSLPlayer';
import { TopBar } from './components/TopBar';
import { PricingCountdown } from './components/PricingCountdown';

import { SectionTitle } from './components/SectionTitle';

// Lazy load below-the-fold components
import { lazy, Suspense } from 'react';
const ProblemItem = lazy(() => import('./components/ProblemItem').then(m => ({ default: m.ProblemItem })));
const BonusCard = lazy(() => import('./components/BonusCard').then(m => ({ default: m.BonusCard })));
const TestimonialCarousel = lazy(() => import('./components/TestimonialCarousel').then(m => ({ default: m.TestimonialCarousel })));
const MaterialsShowcase = lazy(() => import('./components/MaterialsShowcase').then(m => ({ default: m.MaterialsShowcase })));
const DevelopmentSlider = lazy(() => import('./components/DevelopmentSlider').then(m => ({ default: m.DevelopmentSlider })));

const COLORS = {
  orange: '#FF5A1F',
  darkBlue: '#0F172A',
  yellow: '#FACC15',
  white: '#FFFFFF',
};

export default function App() {
  const [showUpsellModal, setShowUpsellModal] = useState(false);

  useEffect(() => {
    // Show upsell modal when user tries to leave (exit intent)
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        setShowUpsellModal(true);
        window.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
    window.addEventListener('mouseleave', handleMouseLeave);
    return () => window.removeEventListener('mouseleave', handleMouseLeave);
  }, []);

  const scrollToPlans = () => {
    document.getElementById('planos')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-orange-100 selection:text-orange-900">
      {/* Upsell Modal */}
      {showUpsellModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 transition-opacity duration-300">
          <div 
            onClick={(e) => { e.stopPropagation(); setShowUpsellModal(false); }}
            className="absolute inset-0 bg-slate-900/90"
          />
          <div 
            className="relative bg-white w-full max-w-md rounded-[2.5rem] shadow-2xl border-4 border-[#FF5A1F] transform transition-all duration-300 scale-100 opacity-100"
          >
              {/* Top Badge */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-700 text-white px-6 py-2 rounded-full text-xs font-black tracking-wider uppercase flex items-center gap-2 shadow-lg whitespace-nowrap z-10">
                ⭐ OFERTA EXCLUSIVA DE SAÍDA
              </div>

              {/* Close Button */}
              <div 
                role="button"
                tabIndex={0}
                onClick={(e) => { e.stopPropagation(); setShowUpsellModal(false); }}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); e.stopPropagation(); setShowUpsellModal(false); } }}
                className="absolute top-4 right-6 text-slate-500 hover:text-slate-700 transition-colors z-10 cursor-pointer"
                aria-label="Fechar"
              >
                <X className="w-6 h-6" />
              </div>
              
              <div className="p-8 md:p-10 text-center">
                <p className="text-blue-700 font-bold text-sm mb-2 flex items-center justify-center gap-2">
                  ⌛ Espere! Não perca essa oportunidade
                </p>
                
                <h3 className="text-3xl font-black text-blue-700 mb-1">Plano Completo</h3>
                <p className="text-slate-600 text-[10px] font-black tracking-[0.2em] uppercase mb-4">HOJE POR APENAS</p>
                
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

                <a 
                  onClick={(e) => e.stopPropagation()}
                  href="https://pay.wiapy.com/wVVy1eaE8Q"
                  className="w-full py-2.5 rounded-2xl bg-gradient-to-r from-[#1ED760] to-[#19C356] text-white font-black text-base shadow-[0_15px_30px_-10px_rgba(30,215,96,0.4)] hover:shadow-[0_20px_40px_-12px_rgba(30,215,96,0.5)] transition-all transform hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-3 group mb-4 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer" />
                  <span className="relative z-10">QUERO MEU PLANO</span>
                  <span className="text-xl relative z-10 animate-bounce-slow">🔥</span>
                </a>
                
                <p className="text-center text-slate-600 text-xs font-bold mb-6 flex items-center justify-center gap-2">
                  <Zap className="w-3 h-3 text-orange-600" />
                  Entrega via WhatsApp
                </p>
                
                <div 
                  role="button"
                  tabIndex={0}
                  onClick={(e) => { e.stopPropagation(); setShowUpsellModal(false); }}
                  onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); e.stopPropagation(); setShowUpsellModal(false); } }}
                  className="text-slate-600 text-xs font-bold hover:text-slate-800 transition-colors underline decoration-2 underline-offset-4 cursor-pointer"
                >
                  Não, obrigado. Quero apenas o plano simples.
                </div>
              </div>
            </div>
          </div>
        )}

      {/* Top Bar */}
      <TopBar />

      {/* Hero Section */}
      <header className="relative pt-12 pb-24 overflow-hidden">
        {/* Simplified background for performance */}
        <div className="absolute inset-0 -z-10 bg-slate-50" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div>
            <h1 className="text-4xl md:text-7xl font-black text-[#0F172A] leading-[1.1] mb-8 tracking-tighter px-2">
              <span className="relative inline-block">
                <span className="relative z-10 text-[#FF5A1F]">+3000</span>
              </span>
              {" "}Atividades Prontas para <span className="text-[#FF5A1F]">Transformar</span> sua Sala em Minutos
            </h1>

            <VSLPlayer />

            <p className="text-xl md:text-3xl text-slate-600 mb-12 leading-relaxed max-w-3xl mx-auto font-medium px-4">
              Menos planejamento. Mais controle e atenção na sua sala.
            </p>
            
            <div className="flex flex-col items-center gap-3 mb-8 px-4">
              <div 
                role="button"
                tabIndex={0}
                onClick={(e) => { e.stopPropagation(); scrollToPlans(); }}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); e.stopPropagation(); scrollToPlans(); } }}
                className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white text-base font-black px-6 py-3 rounded-2xl shadow-lg transition-all transform hover:scale-[1.02] flex items-center justify-center gap-2 group w-full sm:w-auto cursor-pointer"
              >
                <span className="relative z-10">QUERO ACESSAR AGORA</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </div>
              <p className="text-xs text-slate-500 font-bold flex items-center gap-1">
                <Clock className="w-3 h-3" />
                ACESSO LIBERADO IMEDIATAMENTE
              </p>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-slate-600 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                Garantia de 7 dias
              </div>
            </div>

            <div className="mt-8 max-w-[180px] mx-auto relative group">
              {/* Soft orange glow behind the mockup - simplified for performance */}
              <div className="absolute inset-0 bg-orange-100 rounded-full -z-10 transform scale-110" />
              
              <img 
                src="https://i.imgur.com/VKCgs8s.webp" 
                alt="Mockup principal do Kit Educar Lúdico" 
                className="w-full h-auto shadow-xl rounded-lg relative z-10"
                referrerPolicy="no-referrer"
                width="180"
                height="250"
                loading="lazy"
                decoding="async"
              />
            </div>

            {/* Minimalist Info Cards */}
            <div className="mt-12 grid grid-cols-2 gap-4 max-w-sm mx-auto">
              <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm flex flex-col items-center text-center">
                <div className="w-10 h-10 bg-orange-50 rounded-xl flex items-center justify-center mb-3">
                  <BookOpen className="w-5 h-5 text-orange-700" />
                </div>
                <h4 className="text-sm font-black text-slate-900 leading-tight mb-1">Material completo em PDF</h4>
                <p className="text-[10px] text-slate-600 leading-tight">Mais de 180 páginas de conteúdo prático</p>
              </div>
              <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm flex flex-col items-center text-center">
                <div className="w-10 h-10 bg-orange-50 rounded-xl flex items-center justify-center mb-3">
                  <Download className="w-5 h-5 text-orange-700" />
                </div>
                <h4 className="text-sm font-black text-slate-900 leading-tight mb-1">Pronto para imprimir</h4>
                <p className="text-[10px] text-slate-600 leading-tight">Formato A4 otimizado para impressão</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Benefits Section */}
      <Suspense fallback={<div className="py-24 text-center">Carregando benefícios...</div>}>
        <DevelopmentSlider />
      </Suspense>

      {/* Materials Showcase Section */}
      <Suspense fallback={<div className="py-24 text-center">Carregando materiais...</div>}>
        <MaterialsShowcase />
      </Suspense>

      {/* Bonuses Section */}
      <Suspense fallback={<div className="py-24 text-center">Carregando bônus...</div>}>
        <section className="py-24 bg-orange-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-orange-700 font-bold tracking-widest uppercase text-sm">Presentes Exclusivos</span>
              <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mt-4">
                Leve Estes 6 Bônus <span className="text-[#FF5A1F]">Totalmente Grátis</span>
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <BonusCard number={1} title="+100 Ideias Criativas" originalPrice="R$ 47,00" image="https://i.imgur.com/a5vYGx9.webp" />
              <BonusCard number={2} title="+80 Dinâmicas sem Material" originalPrice="R$ 39,00" image="https://i.imgur.com/TlTATSL.webp" />
              <BonusCard number={3} title="+30 Rotinas Prontas" originalPrice="R$ 29,00" image="https://i.imgur.com/KAEttqc.webp" />
              <BonusCard number={4} title="+25 Atividades para Acalmar" originalPrice="R$ 35,00" image="https://i.imgur.com/mH5oDGs.webp" />
              <BonusCard number={5} title="Guia Controle de Turma" originalPrice="R$ 49,00" image="https://i.imgur.com/M4y9Hw4.webp" />
              <BonusCard number={6} title="Plano Semanal Pronto" originalPrice="R$ 57,00" image="https://i.imgur.com/m4eSsLK.webp" />
            </div>
          </div>
        </section>
      </Suspense>

      <Suspense fallback={<div className="py-24 text-center">Carregando planos...</div>}>
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
                  <PricingCountdown />
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center items-center max-w-lg mx-auto">
              {/* Premium Plan (Featured - Redesigned) */}
              <div className="bg-white p-1 rounded-[2.5rem] border-[6px] border-[#FF5A1F] relative z-20 flex flex-col h-full shadow-xl w-full">
                {/* Header Badge */}
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-blue-700 text-white px-8 py-2 rounded-full text-xs font-black tracking-widest uppercase flex items-center gap-2 shadow-lg whitespace-nowrap">
                  <Star className="w-3 h-3 fill-white" />
                  MAIS POPULAR ENTRE LÍDERES
                  <Star className="w-3 h-3 fill-white" />
                </div>

                <div className="p-8 flex flex-col h-full">
                  <div className="text-center mb-6">
                    <h3 className="text-3xl font-black text-blue-700 mb-4">PLANO COMPLETO</h3>
                    <div className="inline-block bg-blue-50 text-blue-700 px-6 py-1 rounded-lg text-sm font-black tracking-widest uppercase mb-4">
                      HOJE POR APENAS
                    </div>
                    <div className="flex flex-col items-center justify-center">
                      <span className="text-slate-400 font-bold text-xl line-through decoration-red-500 decoration-2 mb-1">De R$ 67,00</span>
                      <span className="text-slate-400 font-bold text-3xl line-through decoration-red-500 decoration-2 mb-1">Por R$ 12,90</span>
                      <div className="flex items-start justify-center gap-1">
                        <span className="text-xl font-bold text-green-600 mt-2">R$</span>
                        <span className="text-7xl font-black text-green-600 tracking-tighter">9,90</span>
                      </div>
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

                  <a 
                    onClick={(e) => e.stopPropagation()}
                    href="https://pay.wiapy.com/wVVy1eaE8Q"
                    className="w-full py-2.5 rounded-2xl bg-gradient-to-r from-[#1ED760] to-[#19C356] text-white font-black text-base shadow-[0_15px_30px_-10px_rgba(30,215,96,0.4)] hover:shadow-[0_20px_40px_-12px_rgba(30,215,96,0.5)] transition-all transform hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2 group mb-4 relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer" />
                    <span className="relative z-10">QUERO MEU PLANO</span>
                    <span className="text-xl relative z-10 animate-bounce-slow">🔥</span>
                  </a>

                  {/* Progress Bar */}
                  <div className="w-full mb-6 px-1">
                    <div className="flex justify-between items-center text-xs font-bold text-slate-700 mb-1.5">
                      <span className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                        Vagas completadas
                      </span>
                      <span className="text-red-600 font-black">78%</span>
                    </div>
                    <div className="w-full bg-slate-100 rounded-full h-2.5 border border-slate-200 overflow-hidden">
                      <div 
                        className="bg-gradient-to-r from-red-500 to-red-400 h-full rounded-full relative" 
                        style={{ width: '78%' }}
                      >
                        <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                      </div>
                    </div>
                  </div>

                  <p className="text-center text-slate-600 text-sm font-bold flex items-center justify-center gap-2 mb-6">
                    <Zap className="w-4 h-4 text-orange-600" />
                    Entrega via WhatsApp
                  </p>
                </div>
              </div>
              
              <p className="mt-6 text-slate-400 text-xs font-medium tracking-wide text-center">
                Os R$ 9,90 são apenas para cobrir custos de servidor
              </p>
            </div>
          </div>
        </section>
      </Suspense>

      {/* Testimonials Section */}
      <Suspense fallback={<div className="py-24 text-center">Carregando depoimentos...</div>}>
        <section className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionTitle>Quem usa, aprova!</SectionTitle>
            <TestimonialCarousel />
          </div>
        </section>
      </Suspense>

      {/* Guarantee Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-4">
          <div className="relative">
            {/* Background Decorative Elements */}
            <div className="absolute -left-20 -top-20 w-64 h-64 bg-blue-500/5 rounded-full pointer-events-none" />
            <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-orange-500/5 rounded-full pointer-events-none" />

            <div className="bg-white rounded-[4rem] p-10 md:p-20 border border-slate-100 relative z-10 text-center max-w-4xl mx-auto shadow-[0_32px_64px_-15px_rgba(255,90,31,0.25)]">
              <div className="flex justify-center mb-8">
                <img 
                  src="https://i.imgur.com/Buwole5.webp" 
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
          <p className="text-xl text-slate-300 mb-12">
            Não deixe para amanhã a tranquilidade e o engajamento que você pode ter agora.
          </p>
          <a 
            onClick={(e) => e.stopPropagation()}
            href="https://pay.wiapy.com/wVVy1eaE8Q"
            className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-base font-black px-6 py-3 rounded-2xl shadow-[0_15px_30px_-10px_rgba(37,99,235,0.3)] hover:shadow-[0_20px_40px_-12px_rgba(37,99,235,0.4)] transition-all transform hover:scale-[1.02] mb-4 inline-flex items-center justify-center gap-3 group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-shimmer" />
            <span className="relative z-10">QUERO MEU PLANO</span>
            <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform relative z-10" />
          </a>
          <p className="text-slate-300 text-sm font-bold mb-8 flex items-center justify-center gap-2">
            <Zap className="w-4 h-4 text-orange-600" />
            Entrega via WhatsApp
          </p>
          <p className="mt-8 text-slate-300 text-sm">
            Acesso imediato após a confirmação do pagamento.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-100 text-center text-slate-600 text-sm">
        <p>&copy; 2026 Kit Educar Lúdico. Todos os direitos reservados.</p>
      </footer>

      <style>{`
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
        .animate-shimmer {
          animation: shimmer 2.5s infinite;
        }
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
