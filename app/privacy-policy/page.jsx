"use client";

import Link from "next/link";
import { ArrowLeft, ShieldCheck } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-gray-950 text-white relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 pt-24 pb-16 sm:pt-32 sm:pb-24">
        {/* Back Button */}
        <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-primary transition-colors mb-6 sm:mb-10 group">
          <ArrowLeft size={18} className="transform group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-medium">Back to Home</span>
        </Link>

        {/* Header */}
        <div className="mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/20 text-primary px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold tracking-widest uppercase mb-4 border border-primary/30">
            <ShieldCheck size={14} />
            Legal Document
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-transparent bg-clip-text bg-gradient-to-r from-primary via-yellow-400 to-primary">
            Privacy Policy
          </h1>
          <p className="text-gray-400 text-xs sm:text-sm">Last updated: March 22, 2026</p>
        </div>

        {/* Content */}
        <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 sm:p-10 rounded-2xl sm:rounded-3xl shadow-xl space-y-6 sm:space-y-8 text-gray-300 text-sm sm:text-base leading-relaxed">
          
          <p>
            This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.
          </p>
          <p>
            We use Your Personal Data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy.
          </p>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">Interpretation and Definitions</h2>
            <h3 className="text-lg font-bold text-primary mb-2">Interpretation</h3>
            <p className="mb-4">
              The words whose initial letters are capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
            </p>
            <h3 className="text-lg font-bold text-primary mb-2">Definitions</h3>
            <p className="mb-2">For the purposes of this Privacy Policy:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Company</strong> (referred to as either "the Company", "We", "Us" or "Our") refers to Subhash Engineering, No.22, Keeriyagolla , Hali ela..</li>
              <li><strong>Cookies</strong> are small files placed on Your Device by a website.</li>
              <li><strong>Country</strong> refers to: Sri Lanka</li>
              <li><strong>Device</strong> means any device that can access the Service.</li>
              <li><strong>Personal Data</strong> is any information that relates to an identified or identifiable individual.</li>
              <li><strong>Service</strong> refers to the Website.</li>
              <li><strong>Website</strong> refers to Subhash Engineering, accessible from https://subhashengineering.vercel.app/.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">Collecting and Using Your Personal Data</h2>
            <h3 className="text-lg font-bold text-primary mb-2">Types of Data Collected</h3>
            <h4 className="font-bold text-white mb-1">Personal Data</h4>
            <p className="mb-4">
              While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You (Usage Data automatically collected).
            </p>
            <h4 className="font-bold text-white mb-1">Usage Data</h4>
            <p className="mb-4">
              Usage Data is collected automatically when using the Service, including IP addresses, browser types, page visits, time spent, and diagnostic logs.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">Disclosure of Your Personal Data</h2>
            <p className="mb-2">We may disclose Your Personal Data in good faith believing that such action is necessary to:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Comply with a legal obligation</li>
              <li>Protect and defend the rights or property of the Company</li>
              <li>Prevent or investigate possible wrongdoing</li>
              <li>Protect the personal safety of Users or the public</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">Contact Us</h2>
            <p className="mb-2">If you have any questions about this Privacy Policy, You can contact us:</p>
            <ul className="space-y-1">
              <li>📧 Email: <a href="mailto:manojprabhath17@gmail.com" className="text-primary hover:underline">manojprabhath17@gmail.com</a></li>
              <li>📞 Phone: <a href="tel:+94767705308" className="text-primary hover:underline">076 7705 308</a></li>
            </ul>
          </section>

        </div>
      </div>
    </div>
  );
}
