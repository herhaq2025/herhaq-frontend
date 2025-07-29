import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Shield, Phone, LogOut, AlertTriangle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/', urdu: 'ہوم' },
    { name: 'AI Assistant', href: '/chat', urdu: 'اے آئی اسسٹنٹ' },
    { name: 'Scan Documents', href: '/scan', urdu: 'دستاویزات اسکین' },
    { name: 'Emergency', href: '/emergency', urdu: 'ایمرجنسی' },
    { name: 'Know Rights', href: '/rights', urdu: 'اپنے حقوق جانیں' },
    { name: 'Find Lawyer', href: '/lawyers', urdu: 'وکیل تلاش کریں' },
    //{ name: 'Stories', href: '/stories', urdu: 'کہانیاں' },
  ];

  const triggerEmergencyAlert = () => {
    // Get emergency contacts from localStorage
    const emergencyContacts = JSON.parse(localStorage.getItem('haq-emergency-contacts') || '[]');
    
    if (emergencyContacts.length === 0) {
      alert(language === 'en' 
        ? 'Please set up emergency contacts first by visiting the Emergency page.'
        : 'براہ کرم پہلے ایمرجنسی پیج پر جا کر ایمرجنسی رابطے سیٹ کریں۔'
      );
      return;
    }

    // Get current location if available
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const locationText = `Location: https://maps.google.com/maps?q=${position.coords.latitude},${position.coords.longitude}`;
          const alertMessage = `🚨 EMERGENCY ALERT 🚨%0A%0AI need immediate help!%0A%0A${locationText}%0A%0APlease contact me or authorities immediately.%0A%0ATime: ${new Date().toLocaleString()}`;
          
          // Send to each emergency contact
          emergencyContacts.forEach((contact: any) => {
            const whatsappUrl = `https://wa.me/${contact.phone.replace(/\D/g, '')}?text=${alertMessage}`;
            window.open(whatsappUrl, '_blank');
          });
        },
        () => {
          // If location fails, send without location
          const alertMessage = `🚨 EMERGENCY ALERT 🚨%0A%0AI need immediate help!%0A%0ALocation: Unable to determine%0A%0APlease contact me or authorities immediately.%0A%0ATime: ${new Date().toLocaleString()}`;
          
          emergencyContacts.forEach((contact: any) => {
            const whatsappUrl = `https://wa.me/${contact.phone.replace(/\D/g, '')}?text=${alertMessage}`;
            window.open(whatsappUrl, '_blank');
          });
        }
      );
    }
  };
  const quickExit = () => {
    // Redirect to Google and clear history
    window.location.replace('https://www.google.com');
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <a href="/" className="block">
                  <img
                    src="images/logo.png"
                    alt="Haq Logo"
                    className="h-10 w-auto rounded-lg"
                   />
                </a>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors hover:text-[#F06292] ${
                  location.pathname === item.href
                    ? 'text-[#F06292] border-b-2 border-[#F06292] pb-1'
                    : 'text-[#333333]'
                }`}
              >
                {language === 'en' ? item.name : item.urdu}
              </Link>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            {/* Language Toggle */}
            <button
              onClick={() => setLanguage(language === 'en' ? 'ur' : 'en')}
              className="text-sm px-3 py-1 border border-[#CE93D8] text-[#333333] rounded-md hover:bg-[#CE93D8] hover:text-white transition-colors"
            >
              {language === 'en' ? 'اردو' : 'English'}
            </button>

            {/* Emergency Alert */}
            <a
              onClick={triggerEmergencyAlert}
              className="bg-[#E53935] text-white p-2 rounded-lg hover:bg-[#D32F2F] transition-colors cursor-pointer"
              title={language === 'en' ? 'Send Emergency Alert' : 'ایمرجنسی الرٹ بھیجیں'}
            >
              <AlertTriangle className="h-5 w-5" />
            </a>

            {/* Quick Exit */}
            <button
              onClick={quickExit}
              className="bg-[#FFCA28] text-[#333333] p-2 rounded-lg hover:bg-[#FFC107] transition-colors"
              title={language === 'en' ? 'Quick Exit' : 'فوری باہر نکلیں'}
            >
              <LogOut className="h-5 w-5" />
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-[#333333]"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t"
          >
            <div className="px-4 py-2 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    location.pathname === item.href
                      ? 'text-[#F06292] bg-[#FAFAFA]'
                      : 'text-[#333333] hover:text-[#F06292] hover:bg-[#FAFAFA]'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {language === 'en' ? item.name : item.urdu}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;