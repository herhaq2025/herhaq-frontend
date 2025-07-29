import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Phone, Mail, MessageCircle, Facebook, Twitter, Instagram } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { language } = useLanguage();

  return (
    <footer className="bg-[#333333] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            {/* <div className="flex items-center space-x-2">
              <div className="bg-[#F06292] p-2 rounded-lg">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold">Haq</span>
            </div> */}
            <div className="flex items-center space-x-2">
               <a href="/" className="block">
                  <img
                    src="images/logo.png"
                    alt="Haq Logo"
                    className="h-10 w-auto rounded-lg"
                   />
                </a>
             </div>

            <p className="text-gray-300 text-sm leading-relaxed">
              {language === 'en' 
                ? 'Empowering Pakistani women with AI-driven legal rights assistance. Know your rights, access justice, stay safe.'
                : 'پاکستانی خواتین کو اے آئی کے ذریعے قانونی حقوق میں مدد فراہم کرنا۔ اپنے حقوق جانیں، انصاف تک رسائی حاصل کریں، محفوظ رہیں۔'
              }
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#F06292]">
              {language === 'en' ? 'Quick Links' : 'فوری لنکس'}
            </h3>
            <ul className="space-y-2">
              <li><Link to="/chat" className="text-gray-300 hover:text-[#F06292] transition-colors">
                {language === 'en' ? 'AI Assistant' : 'اے آئی اسسٹنٹ'}
              </Link></li>
              <li><Link to="/scan" className="text-gray-300 hover:text-[#F06292] transition-colors">
                {language === 'en' ? 'Scan Documents' : 'دستاویزات اسکین'}
              </Link></li>
              <li><Link to="/emergency" className="text-gray-300 hover:text-[#F06292] transition-colors">
                {language === 'en' ? 'Emergency Help' : 'ایمرجنسی مدد'}
              </Link></li>
              <li><Link to="/rights" className="text-gray-300 hover:text-[#F06292] transition-colors">
                {language === 'en' ? 'Know Your Rights' : 'اپنے حقوق جانیں'}
              </Link></li>
              <li><Link to="/lawyers" className="text-gray-300 hover:text-[#F06292] transition-colors">
                {language === 'en' ? 'Find a Lawyer' : 'وکیل تلاش کریں'}
              </Link></li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#F06292]">
              {language === 'en' ? 'Support' : 'سپورٹ'}
            </h3>
            <ul className="space-y-2">
              <li><Link to="/contact" className="text-gray-300 hover:text-[#F06292] transition-colors">
                {language === 'en' ? 'Contact Us' : 'ہم سے رابطہ کریں'}
              </Link></li>
            </ul>
          </div>

          {/* Contact & Emergency */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#F06292]">
              {language === 'en' ? 'Emergency Contacts' : 'ایمرجنسی رابطے'}
            </h3>
            <div className="space-y-3">
              <a 
                href="tel:15" 
                className="flex items-center space-x-2 text-gray-300 hover:text-[#FFCA28] transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span>{language === 'en' ? 'Police: 15' : 'پولیس: 15'}</span>
              </a>
              <a 
                href="tel:1099" 
                className="flex items-center space-x-2 text-gray-300 hover:text-[#FFCA28] transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span>{language === 'en' ? 'Women Helpline: 1099' : 'خواتین ہیلپ لائن: 1099'}</span>
              </a>
              <a 
                href="https://wa.me/+923338505201" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-300 hover:text-[#66BB6A] transition-colors"
              >
                <MessageCircle className="h-4 w-4" />
                <span>{language === 'en' ? 'WhatsApp SOS' : 'واٹس ایپ ایس او ایس'}</span>
              </a>
              <a 
                href="mailto:herhaq2025@gmail.com" 
                className="flex items-center space-x-2 text-gray-300 hover:text-[#CE93D8] transition-colors"
              >
                <Mail className="h-4 w-4" />
                <span>herhaq2025@gmail.com</span>
              </a>
            </div>
          </div>
        </div>

        {/* <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              {language === 'en' 
                ? '© 2025 Haq Legal Rights Assistant. All rights reserved.'
                : '© 2025 حق قانونی حقوق اسسٹنٹ۔ تمام حقوق محفوظ ہیں۔'
              }
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-[#F06292] transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#F06292] transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#F06292] transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;