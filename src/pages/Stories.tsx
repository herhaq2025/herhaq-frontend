import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Clock, Wrench } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Stories: React.FC = () => {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-[#FAFAFA] py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="bg-[#FF9800] p-4 rounded-full w-fit mx-auto mb-6">
            <Heart className="h-12 w-12 text-white" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#333333] mb-6">
            {language === 'en' ? 'Stories of Empowerment' : 'بااختیاری کی کہانیاں'}
          </h1>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#F06292] mb-6">
            {language === 'en' ? 'Coming Soon' : 'جلد آ رہا ہے'}
          </h2>
        </motion.div>

        {/* Coming Soon Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-lg p-8 text-center"
        >
          <div className="bg-[#FFCA28] p-4 rounded-full w-fit mx-auto mb-6">
            <Wrench className="h-12 w-12 text-white" />
          </div>
          
          <h3 className="text-3xl font-bold text-[#333333] mb-6">
            {language === 'en' ? 'Inspiring Stories Coming Soon!' : 'حوصلہ افزا کہانیاں جلد آ رہی ہیں!'}
          </h3>
          
          <p className="text-xl text-[#333333] mb-8 leading-relaxed max-w-3xl mx-auto">
            {language === 'en' 
              ? 'We\'re creating a safe space where women can share their journeys of discovering their rights and taking action. Read inspiring stories and share your own experiences anonymously.'
              : 'ہم ایک محفوظ جگہ بنا رہے ہیں جہاں خواتین اپنے حقوق دریافت کرنے اور کارروائی کرنے کے سفر کو شیئر کر سکیں۔ حوصلہ افزا کہانیاں پڑھیں اور گمنام طور پر اپنے تجربات شیئر کریں۔'
            }
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="p-6 bg-[#FAFAFA] rounded-xl">
              <div className="bg-[#F06292] p-3 rounded-full w-fit mx-auto mb-4">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <h4 className="font-bold text-[#333333] mb-2">
                {language === 'en' ? 'Real Stories' : 'حقیقی کہانیاں'}
              </h4>
              <p className="text-sm text-[#333333]">
                {language === 'en' 
                  ? 'Read authentic experiences from women who found their strength'
                  : 'ان خواتین کے مستند تجربات پڑھیں جنہوں نے اپنی طاقت پائی'
                }
              </p>
            </div>
            
            <div className="p-6 bg-[#FAFAFA] rounded-xl">
              <div className="bg-[#CE93D8] p-3 rounded-full w-fit mx-auto mb-4">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <h4 className="font-bold text-[#333333] mb-2">
                {language === 'en' ? 'Anonymous Sharing' : 'گمنام اشتراک'}
              </h4>
              <p className="text-sm text-[#333333]">
                {language === 'en' 
                  ? 'Share your story safely and inspire others'
                  : 'اپنی کہانی محفوظ طریقے سے شیئر کریں اور دوسروں کو متاثر کریں'
                }
              </p>
            </div>
            
            <div className="p-6 bg-[#FAFAFA] rounded-xl">
              <div className="bg-[#66BB6A] p-3 rounded-full w-fit mx-auto mb-4">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <h4 className="font-bold text-[#333333] mb-2">
                {language === 'en' ? 'Community Support' : 'کمیونٹی سپورٹ'}
              </h4>
              <p className="text-sm text-[#333333]">
                {language === 'en' 
                  ? 'Connect with others who understand your journey'
                  : 'ان لوگوں سے جڑیں جو آپ کے سفر کو سمجھتے ہیں'
                }
              </p>
            </div>
          </div>

          <div className="p-6 bg-gradient-to-r from-[#F06292] to-[#CE93D8] rounded-xl text-white">
            <h4 className="text-xl font-bold mb-3">
              {language === 'en' ? 'Need Support Right Now?' : 'ابھی سپورٹ کی ضرورت؟'}
            </h4>
            <p className="mb-4">
              {language === 'en' 
                ? 'While we\'re building our stories platform, you can get immediate help through our AI assistant or emergency system.'
                : 'جب تک ہم اپنا کہانیوں کا پلیٹ فارم بنا رہے ہیں، آپ ہمارے اے آئی اسسٹنٹ یا ایمرجنسی سسٹم کے ذریعے فوری مدد حاصل کر سکتے ہیں۔'
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={() => window.location.href = '/chat'}
                className="bg-white text-[#F06292] px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                {language === 'en' ? 'Talk to AI' : 'اے آئی سے بات کریں'}
              </button>
              <button
                onClick={() => window.location.href = '/rights'}
                className="bg-[#FFCA28] text-[#333333] px-6 py-2 rounded-lg font-semibold hover:bg-[#FFC107] transition-colors"
              >
                {language === 'en' ? 'Know Your Rights' : 'اپنے حقوق جانیں'}
              </button>
            </div>
          </div>
        </motion.div>

        {/* Inspiration Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-8 bg-white rounded-2xl shadow-lg p-8 text-center"
        >
          <h4 className="text-2xl font-bold text-[#333333] mb-4">
            {language === 'en' ? 'Your Voice Matters' : 'آپ کی آواز اہم ہے'}
          </h4>
          <p className="text-[#333333] mb-6 leading-relaxed">
            {language === 'en' 
              ? 'Every story shared helps another woman recognize her rights and find the courage to act. Together, we are building a community of empowered women.'
              : 'شیئر کی گئی ہر کہانی دوسری خاتون کو اپنے حقوق پہچاننے اور کارروائی کرنے کی ہمت دینے میں مدد کرتی ہے۔ مل کر، ہم بااختیار خواتین کی کمیونٹی بنا رہے ہیں۔'
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder={language === 'en' ? 'Get notified when stories go live' : 'کہانیاں لائیو ہونے پر اطلاع حاصل کریں'}
              className="flex-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F06292] focus:border-transparent outline-none"
            />
            <button className="bg-[#F06292] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#E91E63] transition-colors">
              {language === 'en' ? 'Notify Me' : 'مجھے اطلاع دیں'}
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Stories;