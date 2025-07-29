import React from 'react';
import { motion } from 'framer-motion';
import { Users, Clock, Wrench } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Lawyers: React.FC = () => {
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
          <div className="bg-[#66BB6A] p-4 rounded-full w-fit mx-auto mb-6">
            <Users className="h-12 w-12 text-white" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#333333] mb-6">
            {language === 'en' ? 'Find a Lawyer' : 'وکیل تلاش کریں'}
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
            {language === 'en' ? 'We\'re Building Something Amazing!' : 'ہم کچھ شاندار بنا رہے ہیں!'}
          </h3>
          
          <p className="text-xl text-[#333333] mb-8 leading-relaxed max-w-3xl mx-auto">
            {language === 'en' 
              ? 'Our lawyer directory feature is currently under development. Soon you\'ll be able to connect with verified female lawyers who understand your needs and offer services at discounted rates.'
              : 'ہمارا وکیل ڈائرکٹری فیچر فی الوقت تیاری کے مراحل میں ہے۔ جلد آپ تصدیق شدہ خاتون وکیلوں سے رابطہ کر سکیں گے جو آپ کی ضروریات سمجھتی ہیں اور کم نرخوں پر خدمات فراہم کرتی ہیں۔'
            }
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="p-6 bg-[#FAFAFA] rounded-xl">
              <div className="bg-[#F06292] p-3 rounded-full w-fit mx-auto mb-4">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h4 className="font-bold text-[#333333] mb-2">
                {language === 'en' ? 'Verified Lawyers' : 'تصدیق شدہ وکیل'}
              </h4>
              <p className="text-sm text-[#333333]">
                {language === 'en' 
                  ? 'Connect with qualified legal professionals'
                  : 'قابل قانونی پیشہ ور افراد سے رابطہ کریں'
                }
              </p>
            </div>
            
            <div className="p-6 bg-[#FAFAFA] rounded-xl">
              <div className="bg-[#CE93D8] p-3 rounded-full w-fit mx-auto mb-4">
                <Clock className="h-6 w-6 text-white" />
              </div>
              <h4 className="font-bold text-[#333333] mb-2">
                {language === 'en' ? 'Easy Booking' : 'آسان بکنگ'}
              </h4>
              <p className="text-sm text-[#333333]">
                {language === 'en' 
                  ? 'Schedule consultations at your convenience'
                  : 'اپنی سہولت کے مطابق مشاورت کا وقت مقرر کریں'
                }
              </p>
            </div>
            
            <div className="p-6 bg-[#FAFAFA] rounded-xl">
              <div className="bg-[#66BB6A] p-3 rounded-full w-fit mx-auto mb-4">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h4 className="font-bold text-[#333333] mb-2">
                {language === 'en' ? 'Discounted Rates' : 'کم نرخ'}
              </h4>
              <p className="text-sm text-[#333333]">
                {language === 'en' 
                  ? 'Access legal help at affordable prices'
                  : 'سستی قیمتوں پر قانونی مدد حاصل کریں'
                }
              </p>
            </div>
          </div>

          <div className="p-6 bg-gradient-to-r from-[#F06292] to-[#CE93D8] rounded-xl text-white">
            <h4 className="text-xl font-bold mb-3">
              {language === 'en' ? 'Need Legal Help Right Now?' : 'ابھی قانونی مدد کی ضرورت؟'}
            </h4>
            <p className="mb-4">
              {language === 'en' 
                ? 'While we\'re building our lawyer directory, you can still get help through our AI assistant or emergency contacts.'
                : 'جب تک ہم اپنی وکیل ڈائرکٹری بنا رہے ہیں، آپ اب بھی ہمارے اے آئی اسسٹنٹ یا ایمرجنسی رابطوں کے ذریعے مدد حاصل کر سکتے ہیں۔'
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={() => window.location.href = '/chat'}
                className="bg-white text-[#F06292] px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                {language === 'en' ? 'Chat with AI' : 'اے آئی سے بات کریں'}
              </button>
              <button
                onClick={() => window.location.href = '/emergency'}
                className="bg-[#FFCA28] text-[#333333] px-6 py-2 rounded-lg font-semibold hover:bg-[#FFC107] transition-colors"
              >
                {language === 'en' ? 'Emergency Help' : 'ایمرجنسی مدد'}
              </button>
            </div>
          </div>
        </motion.div>

        {/* Notification Signup */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-8 bg-white rounded-2xl shadow-lg p-8 text-center"
        >
          <h4 className="text-2xl font-bold text-[#333333] mb-4">
            {language === 'en' ? 'Get Notified When It\'s Ready' : 'تیار ہونے پر اطلاع حاصل کریں'}
          </h4>
          <p className="text-[#333333] mb-6">
            {language === 'en' 
              ? 'Be the first to know when our lawyer directory goes live!'
              : 'جب ہماری وکیل ڈائرکٹری لائیو ہو تو سب سے پہلے جانیں!'
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder={language === 'en' ? 'Your email address' : 'آپ کا ای میل ایڈریس'}
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

export default Lawyers;