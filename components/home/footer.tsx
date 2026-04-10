'use client'

import { Mail, MapPin, Phone } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="w-10 h-10 bg-white text-black flex items-center justify-center font-bold rounded mb-4">W</div>
            <p className="text-gray-400 text-sm">Watwaniya Média</p>
            <p className="text-gray-500 text-xs mt-2">Agence de communication digitale et production audiovisuelle</p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-bold mb-4">NAVIGATION</h4>
            <ul className="space-y-2">
              <li><a href="#accueil" className="text-gray-400 hover:text-white transition text-sm">Accueil</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition text-sm">Services</a></li>
              <li><a href="#realisations" className="text-gray-400 hover:text-white transition text-sm">Réalisations</a></li>
              <li><a href="#apropos" className="text-gray-400 hover:text-white transition text-sm">À Propos</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-4">SERVICES</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition text-sm">Production Audiovisuelle</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition text-sm">Création Digitale</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition text-sm">Stratégie Digital</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition text-sm">Animation & Motion</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold mb-4">CONTACT</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-gray-400 text-sm">
                <Phone size={16} className="text-orange-500" />
                <span>+256 611 2227</span>
              </li>
              <li className="flex items-start gap-2 text-gray-400 text-sm">
                <Mail size={16} className="text-orange-500 mt-0.5" />
                <span>contact@watwaniya.com</span>
              </li>
              <li className="flex items-start gap-2 text-gray-400 text-sm">
                <MapPin size={16} className="text-orange-500 mt-0.5" />
                <span>Kampala, Uganda</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © 2024 Watwaniya Média. Tous droits réservés | <a href="#" className="hover:text-white transition">Politique de confidentialité</a>
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-white transition">Twitter</a>
              <a href="#" className="text-gray-400 hover:text-white transition">LinkedIn</a>
              <a href="#" className="text-gray-400 hover:text-white transition">Instagram</a>
              <a href="#" className="text-gray-400 hover:text-white transition">Facebook</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
