import React, { useState } from 'react';
//import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Clock, Wrench } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';


const Scan: React.FC = () => {
  const { language } = useLanguage();



  // State for email input and message display
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  
  // Replace this URL with your deployed Google Apps Script web app URL
  const webAppUrl = 'https://script.google.com/macros/s/AKfycbxXDnbekMSvvcVtQhrZmS3WvQZkli299wlNJtLRE0Gkyn6dM88KP0WeEY14_DB2ydMfHA/exec';

  const handleNotifyClick = () => {
    if (!email) {
      setMessage('Please enter a valid email.');
      return;
    }

    fetch(webAppUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === 'success') {
          setMessage('Thank you! Your email has been recorded.');
          setEmail('');
        } else {
          setMessage('Oops! Something went wrong.');
        }
      })
      .catch(() => {
        setMessage('Network error. Please try again.');
      });
  };




  return (
    <div className="min-h-screen bg-[#FAFAFA] py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="bg-[#CE93D8] p-4 rounded-full w-fit mx-auto mb-6">
            <FileText className="h-12 w-12 text-white" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#333333] mb-6">
            {language === 'en' ? 'Document Scanner' : 'دستاویز اسکینر'}
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
            {language === 'en' ? 'Advanced Document Analysis Coming Soon!' : 'ایڈوانس دستاویز تجزیہ جلد آ رہا ہے!'}
          </h3>
          
          <p className="text-xl text-[#333333] mb-8 leading-relaxed max-w-3xl mx-auto">
            {language === 'en' 
              ? 'Our AI-powered document scanner will help you understand your Nikah Nama, employment contracts, and other legal documents. Discover your rights in simple language and get actionable insights.'
              : 'ہمارا اے آئی پاور دستاویز اسکینر آپ کو اپنے نکاح نامہ، ملازمت کے معاہدے، اور دیگر قانونی دستاویزات سمجھنے میں مدد کرے گا۔ آسان زبان میں اپنے حقوق دریافت کریں اور قابل عمل بصیرت حاصل کریں۔'
            }
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="p-6 bg-[#FAFAFA] rounded-xl">
              <div className="bg-[#F06292] p-3 rounded-full w-fit mx-auto mb-4">
                <FileText className="h-6 w-6 text-white" />
              </div>
              <h4 className="font-bold text-[#333333] mb-2">
                {language === 'en' ? 'Nikah Nama Analysis' : 'نکاح نامہ تجزیہ'}
              </h4>
              <p className="text-sm text-[#333333]">
                {language === 'en' 
                  ? 'Understand your matrimonial rights and missing clauses'
                  : 'اپنے ازدواجی حقوق اور غائب شقوں کو سمجھیں'
                }
              </p>
            </div>
            
            <div className="p-6 bg-[#FAFAFA] rounded-xl">
              <div className="bg-[#CE93D8] p-3 rounded-full w-fit mx-auto mb-4">
                <FileText className="h-6 w-6 text-white" />
              </div>
              <h4 className="font-bold text-[#333333] mb-2">
                {language === 'en' ? 'Contract Review' : 'معاہدے کا جائزہ'}
              </h4>
              <p className="text-sm text-[#333333]">
                {language === 'en' 
                  ? 'Analyze employment contracts and legal agreements'
                  : 'ملازمت کے معاہدے اور قانونی معاہدوں کا تجزیہ کریں'
                }
              </p>
            </div>
            
            <div className="p-6 bg-[#FAFAFA] rounded-xl">
              <div className="bg-[#66BB6A] p-3 rounded-full w-fit mx-auto mb-4">
                <FileText className="h-6 w-6 text-white" />
              </div>
              <h4 className="font-bold text-[#333333] mb-2">
                {language === 'en' ? 'Simple Explanations' : 'آسان وضاحت'}
              </h4>
              <p className="text-sm text-[#333333]">
                {language === 'en' 
                  ? 'Get complex legal terms explained in Urdu and English'
                  : 'پیچیدہ قانونی اصطلاحات کو اردو اور انگریزی میں سمجھیں'
                }
              </p>
            </div>
          </div>

          <div className="p-6 bg-gradient-to-r from-[#F06292] to-[#CE93D8] rounded-xl text-white">
            <h4 className="text-xl font-bold mb-3">
              {language === 'en' ? 'Need Document Help Right Now?' : 'ابھی دستاویز کی مدد چاہیے؟'}
            </h4>
            <p className="mb-4">
              {language === 'en' 
                ? 'While we\'re building our document scanner, you can ask our AI assistant about your legal documents and rights.'
                : 'جب تک ہم اپنا دستاویز اسکینر بنا رہے ہیں، آپ اپنے قانونی دستاویزات اور حقوق کے بارے میں ہمارے اے آئی اسسٹنٹ سے پوچھ سکتے ہیں۔'
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={() => window.location.href = '/chat'}
                className="bg-white text-[#F06292] px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                {language === 'en' ? 'Ask AI Assistant' : 'اے آئی سے پوچھیں'}
              </button>
              <button
                onClick={() => window.location.href = '/rights'}
                className="bg-[#FFCA28] text-[#333333] px-6 py-2 rounded-lg font-semibold hover:bg-[#FFC107] transition-colors"
              >
                {language === 'en' ? 'Learn Your Rights' : 'اپنے حقوق جانیں'}
              </button>
            </div>
          </div>
        </motion.div>

        {/* Features Preview */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-8 bg-white rounded-2xl shadow-lg p-8"
        >
          <h4 className="text-2xl font-bold text-[#333333] mb-6 text-center">
            {language === 'en' ? 'What You Can Expect' : 'آپ کیا توقع کر سکتے ہیں'}
          </h4>
          
          <div className="space-y-4">
            <div className="flex items-start gap-4 p-4 bg-[#FAFAFA] rounded-lg">
              <div className="bg-[#F06292] p-2 rounded-full">
                <FileText className="h-4 w-4 text-white" />
              </div>
              <div>
                <h5 className="font-semibold text-[#333333] mb-1">
                  {language === 'en' ? 'Upload & Scan' : 'اپ لوڈ اور اسکین'}
                </h5>
                <p className="text-sm text-[#333333]">
                  {language === 'en' 
                    ? 'Simply upload photos or PDFs of your legal documents'
                    : 'بس اپنے قانونی دستاویزات کی تصاویر یا پی ڈی ایف اپ لوڈ کریں'
                  }
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-4 bg-[#FAFAFA] rounded-lg">
              <div className="bg-[#CE93D8] p-2 rounded-full">
                <FileText className="h-4 w-4 text-white" />
              </div>
              <div>
                <h5 className="font-semibold text-[#333333] mb-1">
                  {language === 'en' ? 'AI Analysis' : 'اے آئی تجزیہ'}
                </h5>
                <p className="text-sm text-[#333333]">
                  {language === 'en' 
                    ? 'Our AI will identify your rights and highlight missing clauses'
                    : 'ہمارا اے آئی آپ کے حقوق کی شناخت کرے گا اور غائب شقوں کو اجاگر کرے گا'
                  }
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-4 bg-[#FAFAFA] rounded-lg">
              <div className="bg-[#66BB6A] p-2 rounded-full">
                <FileText className="h-4 w-4 text-white" />
              </div>
              <div>
                <h5 className="font-semibold text-[#333333] mb-1">
                  {language === 'en' ? 'Get Recommendations' : 'تجاویز حاصل کریں'}
                </h5>
                <p className="text-sm text-[#333333]">
                  {language === 'en' 
                    ? 'Receive actionable advice and next steps to protect your rights'
                    : 'اپنے حقوق کی حفاظت کے لیے قابل عمل مشورے اور اگلے قدم حاصل کریں'
                  }
                </p>
              </div>
            </div>
          </div>

          
              
      
          {/* Notification section with email input and button */}
          <div className="mt-6 text-center">
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder={
                  language === 'en'
                    ? 'Get notified when scanner is ready'
                    : 'اسکینر تیار ہونے پر اطلاع حاصل کریں'
                }
                className="flex-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F06292] focus:border-transparent outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                className="bg-[#F06292] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#E91E63] transition-colors"
                onClick={handleNotifyClick}
              >
                {language === 'en' ? 'Notify Me' : 'مجھے اطلاع دیں'}
              </button>
            </div>
            {message && <p className="mt-4 text-sm text-gray-700">{message}</p>}
          </div>
        </motion.div>
      </div>
    </div>

          
    //     </motion.div>
    //   </div>
    // </div>
  );
};

export default Scan;