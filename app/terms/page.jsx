"use client";

import Link from "next/link";
import { ArrowLeft, Scale } from "lucide-react";

export default function TermsAndConditions() {
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
            <Scale size={14} />
            Legal Agreement
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-transparent bg-clip-text bg-gradient-to-r from-primary via-yellow-400 to-primary">
            Terms and Conditions
          </h1>
          <p className="text-gray-400 text-xs sm:text-sm">Last updated: March 22, 2026</p>
        </div>

        {/* Content */}
        <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 sm:p-10 rounded-2xl sm:rounded-3xl shadow-xl space-y-6 sm:space-y-8 text-gray-300 text-sm sm:text-base leading-relaxed">
          
          <p>
            Please read these terms and conditions carefully before using Our Service.
          </p>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">Interpretation and Definitions</h2>
            <h3 className="text-lg font-bold text-primary mb-2">Interpretation</h3>
            <p className="mb-4">
              The words whose initial letters are capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
            </p>
            <h3 className="text-lg font-bold text-primary mb-2">Definitions</h3>
            <p className="mb-2">For the purposes of these Terms and Conditions:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Company</strong> (referred to as either "the Company", "We", "Us" or "Our") refers to Subhash Engineering, No.22, Keeriyagolla , Hali ela..</li>
              <li><strong>Country</strong> refers to: Sri Lanka</li>
              <li><strong>Device</strong> means any device that can access the Service.</li>
              <li><strong>Service</strong> refers to the Website.</li>
              <li><strong>Terms and Conditions</strong> (also referred to as "Terms") mean these Terms and Conditions which govern Your access to and use of the Service.</li>
              <li><strong>Website</strong> refers to Subhash Engineering, accessible from https://subhashengineering.vercel.app/</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">Acknowledgment</h2>
            <p className="mb-4">
              These are the Terms and Conditions governing the use of this Service and the agreement between You and the Company. They set out the rights and obligations of all users.
            </p>
            <p className="mb-4">
              By accessing or using the Service You agree to be bound by these Terms and Conditions. If You disagree with any part then You may not access the Service.
            </p>
            <p>
              You represent that you are over the age of 18. The Company does not permit those under 18 to use the Service.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by applicable law, in no event shall the Company or its suppliers be liable for any special, incidental, indirect, or consequential damages whatsoever (including, but not limited to, damages for loss of profits, data or other information).
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">Governing Law</h2>
            <p>
              The laws of the Country, excluding its conflicts of law rules, shall govern these Terms and Your use of the Service.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">Contact Us</h2>
            <p className="mb-2">If you have any questions about these Terms and Conditions, You can contact us:</p>
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
