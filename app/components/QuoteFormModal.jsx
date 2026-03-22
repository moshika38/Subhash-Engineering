'use client';

import { useState } from 'react';
import { X, Send } from 'lucide-react';

export default function QuoteFormModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'General Inquiry',
    message: ''
  });

  if (!isOpen) return null;

  const servicesList = [
    'General Inquiry',
    'Steel Structures',
    'Luxury Gates',
    'Grills & Hand Railings',
    'Roller Doors',
    'Roofing Works'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Construct WhatsApp message template
    const message = `*Quote Request - Subhash Engineering*%0A%0A`
      + `*Name:* ${formData.name}%0A`
      + `*Phone:* ${formData.phone}%0A`
      + `*Service:* ${formData.service}%0A`
      + `*Message:* ${formData.message}`;

    // Target Phone: 0767705308 (Format as 94767705308 without leading zero)
    const whatsappUrl = `https://wa.me/94767705308?text=${message}`;

    // Open in new tab
    window.open(whatsappUrl, '_blank');
    
    // Close modal
    onClose();
  };

  return (
  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm" onClick={onClose}>
      <div className="min-h-screen px-4 text-center">
        {/* Trick to center the modal content */}
        <span className="inline-block h-screen align-middle" aria-hidden="true">&#8203;</span>
        
        <div 
          className="inline-block w-full max-w-md my-8 overflow-hidden text-left align-middle transition-all transform bg-neutral-900 border border-neutral-800 rounded-2xl shadow-2xl p-6 sm:p-8 animate-scale-in relative"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button 
            className="absolute top-4 right-4 p-2 rounded-full bg-neutral-800 hover:bg-neutral-700 text-white transition-colors z-10"
            onClick={onClose}
          >
            <X size={20} />
          </button>

          {/* Header */}
          <div className="text-center mb-6">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Request a Quote</h3>
            <p className="text-neutral-400 text-sm">Fill the details below to request quote rates instantly via WhatsApp transfers.</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1">Your Name</label>
              <input 
                type="text" 
                name="name" 
                required 
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                className="w-full bg-neutral-800 border border-neutral-700 hover:border-primary/50 focus:border-primary rounded-xl px-4 py-3 text-white text-sm outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1">Contact Number</label>
              <input 
                type="tel" 
                name="phone" 
                required 
                value={formData.phone}
                onChange={handleChange}
                placeholder="07X XXX XXXX"
                className="w-full bg-neutral-800 border border-neutral-700 hover:border-primary/50 focus:border-primary rounded-xl px-4 py-3 text-white text-sm outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1">Service Required</label>
              <select 
                name="service" 
                value={formData.service}
                onChange={handleChange}
                className="w-full bg-neutral-800 border border-neutral-700 hover:border-primary/50 focus:border-primary rounded-xl px-4 py-3 text-white text-sm outline-none transition-colors cursor-pointer"
              >
                {servicesList.map((service) => (
                  <option key={service} value={service} className="bg-neutral-900">{service}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1">Additional Message</label>
              <textarea 
                name="message" 
                rows="3" 
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your requirements..."
                className="w-full bg-neutral-800 border border-neutral-700 hover:border-primary/50 focus:border-primary rounded-xl px-4 py-3 text-white text-sm outline-none transition-colors resize-none"
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="w-full bg-primary hover:bg-primary-hover text-white py-3 rounded-xl font-bold shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all duration-300 mt-2 flex items-center justify-center gap-2 cursor-pointer group"
            >
              <span>Send to WhatsApp</span>
              <Send size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
