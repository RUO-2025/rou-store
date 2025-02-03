"use client"

import { useState } from "react";

const faqs = [
  {
    question: "What sets Power Peptides apart from other peptide suppliers?",
    answer:
      "Power Peptides stands at the forefront of peptide research and development through our commitment to exceptional quality and scientific innovation. Our advanced proprietary processes deliver industry-leading purity and consistency. Through strategic partnerships with internationally recognized research chemical manufacturers, we provide premium-grade products while maintaining competitive pricing.",
  },
  {
    question: "How do I know Power Peptides’ products are of the highest quality?",
    answer:
      "Our peptides are manufactured under rigorous quality control protocols that exceed industry standards. Each product undergoes comprehensive analytical characterization through both in-house and independent third-party laboratories, utilizing state-of-the-art techniques including NMR, FTIR, Polarimetry, HPLC, and LC-MS analysis. Complete certificates of analysis are readily accessible on our website for each product.",
  },
  {
    question: "What is Power Peptides’ shipping policy?",
    answer:
      "We offer various shipping options, including FREE US ground shipping on orders over $200.00 (Grand Total), USPS Priority, FedEx 2 Day, FedEx Overnight, FedEx Overnight with Signature Required, and FedEx Saturday Delivery for orders placed on Fridays before 11am CST. Orders placed and processed before 11am CST Monday through Friday typically ship the same business day.",
  },
  {
    question: "Does Power Peptides ship internationally?",
    answer:
      "Yes, we accept orders from around the globe and strive to ensure successful delivery. Please refer to our Shipping Policy for full terms.",
  },
  {
    question: "What is Power Peptides’ return policy?",
    answer:
      "To maintain the integrity of our research-grade products, we do not accept product returns. In the rare event of shipping damage or incorrect items, please submit photographic evidence to help@powerpeptides.com within 7 days of delivery.",
  },
  {
    question: "How do I track my order from Power Peptides?",
    answer:
      "When you place your order, you'll receive an email with the tracking number once your order has shipped. We recommend registering an account during checkout for easy order tracking, updating account information, and accessing past orders.",
  },
  {
    question: "How do I store my peptides to maintain their quality and effectiveness?",
    answer:
      "Optimal storage conditions are essential for maintaining peptide integrity. Lyophilized (freeze-dried) peptides demonstrate enhanced stability and extended shelf life when stored in a cool, dry environment protected from direct light exposure. For reconstituted peptides, storage at 2-8°C away from light is required to maintain molecular stability.",
  },
  {
    question: "Can I use peptides for human consumption or personal use?",
    answer:
      "No, the peptides supplied by Power Peptides are strictly for research purposes only and are not intended for human consumption, diagnostic, therapeutic, or other personal uses. It is crucial to comply with local laws and regulations regarding the use of research chemicals.",
  },
  {
    question: "What is the purity of Power Peptides' products?",
    answer:
      "Our single molecule product purity standard is ≥98% by HPLC and many of our products test ≥99%. Some products are standardized to a specific purity or have a more nuanced definition involving multiple active components",
  },
  {
    question: "What form do your peptides arrive in?",
    answer:
      "Our peptide vials are in lyophilized powder form. They are contained in glass crimp-top vials with flip-off caps.",
  },
  {
    question: "What is my product's shelf life?",
    answer:
      "Your product will have an expiry date shown on the label. This date pertains to the form that you have received it in.",
  },
  {
    question: "Do you sell X product?",
    answer:
      "Use our website's search feature in the main navbar menu to determine if we sell a product. Look for the magnifying glass icon. Please email help@powerpeptides.com if you are looking for a product we don't currently stock.",
  },
  {
    question: "What if I have a question that isn't addressed in the FAQs?",
    answer:
      "Our dedicated customer support team is here to help. If you have any questions or concerns not covered in the FAQs, please don't hesitate to contact us at help@powerpeptides.com. We value your feedback and respond to all inquiries promptly, usually within 4 hours.",
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 ">Frequently Asked Questions (FAQs)</h1>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b pb-2">
            <button
              className="flex justify-between w-full text-left text-lg font-semibold py-2"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <span>{openIndex === index ? "-" : "+"}</span>
            </button>
            {openIndex === index && <p className="mt-2 text-gray-700">{faq.answer}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}