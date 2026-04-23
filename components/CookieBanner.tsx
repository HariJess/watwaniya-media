"use client";

import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { X, Cookie, ShieldCheck, BarChart2 } from "lucide-react";

// Déclarations globales
declare global {
  interface Window {
    fbq: any;
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

// Types
interface ConsentState {
  necessary: boolean;
  analytics: boolean;
}

const COOKIE_KEY = "cookie_consent";

export default function CookieBanner() {
  const [visible, setVisible] = useState<boolean>(false);
  const [showDetails, setShowDetails] = useState<boolean>(false);
  const [consent, setConsent] = useState<ConsentState>({
    necessary: true,
    analytics: false
  });

  useEffect(() => {
    const saved = Cookies.get(COOKIE_KEY);
    if (!saved) {
      const timer = setTimeout(() => setVisible(true), 800);
      return () => clearTimeout(timer);
    } else {
      try {
        const parsed = JSON.parse(saved) as ConsentState;
        applyConsentPreferences(parsed);
      } catch (e) {
        console.error("Erreur parsing cookie:", e);
      }
    }
  }, []);

  const applyConsentPreferences = (value: ConsentState): void => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("consent", "update", {
        analytics_storage: value.analytics ? "granted" : "denied",
      });
    }
    
    if (typeof window !== "undefined" && window.fbq) {
      if (value.analytics) {
        window.fbq("consent", "grant");
      } else {
        window.fbq("consent", "revoke");
      }
    }
    
    localStorage.setItem("cookie_consent", JSON.stringify(value));
  };

  const saveConsent = (value: ConsentState): void => {
    Cookies.set(COOKIE_KEY, JSON.stringify(value), {
      expires: 365,
      path: "/",
      sameSite: "lax",
    });
    setVisible(false);
    applyConsentPreferences(value);
  };

  const acceptAll = (): void => {
    saveConsent({ necessary: true, analytics: true });
  };

  const rejectAll = (): void => {
    saveConsent({ necessary: true, analytics: false });
  };

  const saveCustom = (): void => {
    saveConsent(consent);
    setShowDetails(false);
  };

  const toggle = (key: "analytics"): void => {
    setConsent((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  if (!visible) return null;

  return (
    <>
      {/* Backdrop flou */}
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300" />

      {/* Banner */}
      <div className="fixed bottom-0 left-0 right-0 z-50 animate-slide-up">
        <div className="mx-auto max-w-5xl m-4 rounded-2xl bg-[#111111] border border-[#2a2a2a] shadow-[0_-8px_40px_rgba(0,0,0,0.6)] overflow-hidden">
          {/* Barre accent top */}
          <div className="h-[3px] w-full bg-gradient-to-r from-[#e84e1b] via-[#ff6b3d] to-transparent" />

          <div className="p-6 sm:p-8">
            {/* Header */}
            <div className="flex items-start justify-between gap-4 mb-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#e84e1b]/10 border border-[#e84e1b]/20 flex items-center justify-center shrink-0">
                  <Cookie size={18} className="text-[#e84e1b]" />
                </div>
                <div>
                  <h2 className="text-white font-bold text-base leading-tight">
                    Gestion des cookies
                  </h2>
                  <p className="text-gray-500 text-xs mt-0.5">
                    Conformité RGPD — Votre choix est respecté
                  </p>
                </div>
              </div>
              <button
                onClick={rejectAll}
                className="text-gray-600 hover:text-gray-400 transition-colors mt-0.5 shrink-0"
                aria-label="Fermer"
              >
                <X size={18} />
              </button>
            </div>

            {/* Description */}
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Nous utilisons des cookies pour améliorer votre expérience, analyser notre trafic
              et personnaliser nos contenus. Vous pouvez accepter tout, refuser ou personnaliser
              vos préférences ci-dessous.{" "}
              <a href="/politique-cookies" className="text-[#e84e1b] hover:underline">
                En savoir plus
              </a>
            </p>

            {/* Panneau détails dépliable */}
            {showDetails && (
              <div className="mb-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* Nécessaires */}
                <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <ShieldCheck size={14} className="text-[#e84e1b]" />
                      <span className="text-white text-xs font-bold">Nécessaires</span>
                    </div>
                    <div className="w-9 h-5 bg-[#e84e1b] rounded-full relative cursor-not-allowed opacity-60">
                      <div className="w-3.5 h-3.5 bg-white rounded-full absolute right-0.5 top-0.5 shadow" />
                    </div>
                  </div>
                  <p className="text-gray-500 text-[11px] leading-relaxed">
                    Indispensables au fonctionnement du site. Ne peuvent pas être désactivés.
                  </p>
                </div>

                {/* Analytiques */}
                <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <BarChart2 size={14} className="text-[#e84e1b]" />
                      <span className="text-white text-xs font-bold">Analytiques</span>
                    </div>
                    <button
                      onClick={() => toggle("analytics")}
                      className={`w-9 h-5 rounded-full relative transition-colors duration-300 ${
                        consent.analytics ? "bg-[#e84e1b]" : "bg-[#333]"
                      }`}
                      aria-label="Toggle analytiques"
                    >
                      <div
                        className={`w-3.5 h-3.5 bg-white rounded-full absolute top-0.5 shadow transition-all duration-300 ${
                          consent.analytics ? "right-0.5" : "left-0.5"
                        }`}
                      />
                    </button>
                  </div>
                  <p className="text-gray-500 text-[11px] leading-relaxed">
                    Nous aident à comprendre comment vous utilisez le site.
                  </p>
                </div>
              </div>
            )}

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                onClick={() => setShowDetails((v) => !v)}
                className="text-gray-400 hover:text-white text-xs font-medium underline underline-offset-2 transition-colors text-left sm:mr-auto"
              >
                {showDetails ? "Masquer les détails" : "Personnaliser"}
              </button>

              {showDetails && (
                <button
                  onClick={saveCustom}
                  className="px-5 py-2.5 rounded-lg border border-[#3a3a3a] text-gray-300 hover:text-white hover:border-[#555] text-xs font-bold transition-all duration-200"
                >
                  Sauvegarder mes choix
                </button>
              )}

              <button
                onClick={rejectAll}
                className="px-5 py-2.5 rounded-lg border border-[#3a3a3a] text-gray-300 hover:text-white hover:border-[#555] text-xs font-bold transition-all duration-200"
              >
                Refuser tout
              </button>

              <button
                onClick={acceptAll}
                className="px-6 py-2.5 rounded-lg bg-[#e84e1b] hover:bg-[#d63f0f] text-white text-xs font-bold transition-colors duration-200 shadow-[0_4px_20px_rgba(232,78,27,0.3)]"
              >
                Accepter tout
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes slide-up {
          from { transform: translateY(100%); opacity: 0; }
          to   { transform: translateY(0);    opacity: 1; }
        }
        .animate-slide-up {
          animation: slide-up 0.4s cubic-bezier(0.16, 1, 0.3, 1) both;
        }
      `}</style>
    </>
  );
}