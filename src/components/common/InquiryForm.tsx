import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Send,
  MessageSquare,
  Phone,
  Calendar,
  Users,
  MapPin,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import { COMPANY_DETAILS, createWhatsAppLink } from "../../data/travelData";
import { InquiryFormData } from "../../types";

interface InquiryFormProps {
  initialDestination?: string;
  initialService?: string;
  className?: string;
  onSuccess?: () => void;
  title?: string;
  subtitle?: string;
}

export const InquiryForm: React.FC<InquiryFormProps> = ({
  initialDestination = "",
  initialService = "Tour Package",
  className = "",
  onSuccess,
  title = "Request a Tailored Travel Quotation",
  subtitle = "Share your travel aspirations. Our personal travel concierge will respond with personalized quotes, verified hotels, and seamless transport options.",
}) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState<InquiryFormData>({
    name: "",
    phone: "",
    whatsapp: "",
    destination: initialDestination,
    travelDate: "",
    travelers: "2 Adults",
    serviceType: initialService,
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [sameAsPhone, setSameAsPhone] = useState(true);

  const handlePhoneChange = (val: string) => {
    setFormData((prev) => ({
      ...prev,
      phone: val,
      whatsapp: sameAsPhone ? val : prev.whatsapp,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      sessionStorage.setItem("last_travel_inquiry", JSON.stringify(formData));
    } catch {}

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbwRVZYLPiTk7J_JqpQyLwnSEVC-FE8zn6hQPAzEkzVW5yhXmCyCAaFRK9fTFG_ITR-W/exec",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          mode: "no-cors",
          body: JSON.stringify(formData),
        },
      );

      // const result = await response.json();
      navigate("/thank-you");

      // if (result.success) {
      //   if (onSuccess) onSuccess();
      // } else {
      //   alert("Failed to submit inquiry.");
      // }
    } catch (error) {
      console.error("Submission Error:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      id="inquiry-form-card"
      className={`relative bg-white rounded-2xl border border-[#D4A017]/30 shadow-xl overflow-hidden ${className}`}
    >
      {/* Decorative Gold Header Bar */}
      <div className="h-1.5 w-full bg-gradient-to-r from-[#0B5CAD] via-[#D4A017] to-[#00A86B]" />

      <div className="p-6 sm:p-8 md:p-10">
        <div className="text-center max-w-xl mx-auto mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF7F0] border border-[#D4A017]/40 text-[#D4A017] text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#D4A017]" />
            Bespoke Concierge Assistance
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            {title}
          </h3>
          <p className="text-sm text-slate-600 mt-2">{subtitle}</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Full Name */}
            <div>
              <label className="block text-xs font-semibold tracking-wide text-slate-700 uppercase mb-1.5">
                Your Full Name <span className="text-[#C1122F]">*</span>
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Rajesh Sharma"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:border-[#D4A017] focus:ring-2 focus:ring-[#D4A017]/20 outline-none text-sm transition-all bg-[#FAF7F0]/30"
              />
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-xs font-semibold tracking-wide text-slate-700 uppercase mb-1.5">
                Calling Number <span className="text-[#C1122F]">*</span>
              </label>
              <div className="relative">
                <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                <input
                  type="tel"
                  inputMode="tel"
                  required
                  placeholder="e.g. 98765 43210"
                  value={formData.phone}
                  onChange={(e) => handlePhoneChange(e.target.value)}
                  className="w-full min-h-[44px] pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 focus:border-[#D4A017] focus:ring-2 focus:ring-[#D4A017]/20 outline-none text-sm transition-all bg-[#FAF7F0]/30"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* WhatsApp Number */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="text-xs font-semibold tracking-wide text-slate-700 uppercase">
                  WhatsApp Number <span className="text-[#C1122F]">*</span>
                </label>
                <button
                  type="button"
                  onClick={() => {
                    const next = !sameAsPhone;
                    setSameAsPhone(next);
                    if (next)
                      setFormData((prev) => ({
                        ...prev,
                        whatsapp: prev.phone,
                      }));
                  }}
                  className="text-[11px] text-[#0B5CAD] hover:underline cursor-pointer"
                >
                  {sameAsPhone ? "Same as calling" : "Use calling number"}
                </button>
              </div>
              <div className="relative">
                <MessageSquare className="w-4 h-4 text-[#00A86B] absolute left-3.5 top-3.5" />
                <input
                  type="tel"
                  inputMode="tel"
                  required
                  placeholder="e.g. +91 98765 43210"
                  value={formData.whatsapp}
                  onChange={(e) => {
                    setSameAsPhone(false);
                    setFormData({ ...formData, whatsapp: e.target.value });
                  }}
                  className="w-full min-h-[44px] pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 focus:border-[#00A86B] focus:ring-2 focus:ring-[#00A86B]/20 outline-none text-sm transition-all bg-[#FAF7F0]/30"
                />
              </div>
            </div>

            {/* Destination or Package */}
            <div>
              <label className="block text-xs font-semibold tracking-wide text-slate-700 uppercase mb-1.5">
                Destination or Service <span className="text-[#C1122F]">*</span>
              </label>
              <div className="relative">
                <MapPin className="w-4 h-4 text-[#C1122F] absolute left-3.5 top-3.5" />
                <input
                  type="text"
                  required
                  placeholder="e.g. Char Dham Yatra, Kashmir, Dubai"
                  value={formData.destination}
                  onChange={(e) =>
                    setFormData({ ...formData, destination: e.target.value })
                  }
                  className="w-full min-h-[44px] pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 focus:border-[#D4A017] focus:ring-2 focus:ring-[#D4A017]/20 outline-none text-sm transition-all bg-[#FAF7F0]/30"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Travel Date */}
            <div>
              <label className="block text-xs font-semibold tracking-wide text-slate-700 uppercase mb-1.5">
                Expected Travel Date / Month
              </label>
              <div className="relative">
                <Calendar className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                <input
                  type="date"
                  value={formData.travelDate}
                  min={new Date().toISOString().split("T")[0]}
                  onChange={(e) =>
                    setFormData({ ...formData, travelDate: e.target.value })
                  }
                  className="w-full min-h-[44px] pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 focus:border-[#D4A017] focus:ring-2 focus:ring-[#D4A017]/20 outline-none text-sm transition-all bg-[#FAF7F0]/30"
                />
              </div>
            </div>

            {/* Number of Travelers */}
            <div>
              <label className="block text-xs font-semibold tracking-wide text-slate-700 uppercase mb-1.5">
                Number of Travelers
              </label>
              <div className="relative">
                <Users className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                <input
                  type="text"
                  placeholder="e.g. 2 Adults, 1 Child"
                  value={formData.travelers}
                  onChange={(e) =>
                    setFormData({ ...formData, travelers: e.target.value })
                  }
                  className="w-full min-h-[44px] pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 focus:border-[#D4A017] focus:ring-2 focus:ring-[#D4A017]/20 outline-none text-sm transition-all bg-[#FAF7F0]/30"
                />
              </div>
            </div>
          </div>

          {/* Specific notes or preferences */}
          <div>
            <label className="block text-xs font-semibold tracking-wide text-slate-700 uppercase mb-1.5">
              Specific Requirements or Notes (Optional)
            </label>
            <textarea
              rows={3}
              placeholder="Tell us about hotel preferences (5-star, pure veg food, senior citizen assistance, private cab type, etc.)..."
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:border-[#D4A017] focus:ring-2 focus:ring-[#D4A017]/20 outline-none text-sm transition-all bg-[#FAF7F0]/30 resize-none"
            />
          </div>

          {/* Trust Guarantees */}
          <div className="flex flex-wrap items-center justify-between text-xs text-slate-500 py-1 border-t border-slate-100 gap-2">
            <span className="flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#00A86B]" /> 100% Free
              Consultation
            </span>
            <span className="flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#00A86B]" /> No Spam /
              No Bot Calls
            </span>
            <span className="flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#00A86B]" /> Direct
              WhatsApp Quote
            </span>
          </div>

          {/* Actions */}
          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <button
              type="submit"
              disabled={isSubmitting}
              id="submit-travel-inquiry-btn"
              className="flex-1 inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#0B5CAD] via-[#0B5CAD] to-[#084887] text-white font-medium text-sm shadow-md hover:shadow-lg transition-all transform active:scale-[0.99] cursor-pointer"
            >
              {isSubmitting ? (
                <span>Generating Your Request...</span>
              ) : (
                <>
                  <span>Send Inquiry</span>
                  <Send className="w-4 h-4" />
                </>
              )}
            </button>

            <a
              href={`tel:${COMPANY_DETAILS.phone}`}
              id="quick-call-inquiry-btn"
              className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl border-2 border-[#D4A017] text-[#D4A017] hover:bg-[#D4A017] hover:text-white font-medium text-sm transition-all cursor-pointer"
            >
              <Phone className="w-4 h-4" />
              <span>Call: {COMPANY_DETAILS.phoneDisplay}</span>
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};
