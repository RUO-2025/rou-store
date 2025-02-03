import React from 'react';
import { Mail } from 'lucide-react';
import Image from 'next/image';

const Footer = () => {
  const peptideLinks = [
    { name: 'Endocrinology', href: '#' },
    { name: 'Energy Support', href: '#' },
    { name: 'Immunomodulators', href: '#' },
    { name: 'Longevity', href: '#' },
    { name: 'Miscellaneous', href: '#' },
    { name: 'Nootropics', href: '#' }
  ];

  const supportLinks = [
    { name: 'Contact Us', href: '/contact' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Your Account', href: '/account' }
  ];

  const companyLinks = [
    { name: 'About Us', href: '/why-us' }
  ];

  const policyLinks = [
    { name: 'Shipping & Returns', href: '/shipping-and-returns' },
    { name: 'Terms & Conditions', href: '/terms-and-conditions' },
    { name: 'Privacy Policy', href: '/privacy-policy' }
  ];

  return (
    <footer className="bg-[#002B54] text-white">
      {/* Newsletter Section */}
      <div className="max-w-[1440px] mx-auto px-4 py-12">
        <div className="bg-[#183F63] rounded-lg p-8 mb-16">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <h2 className="text-xl mb-2">Subscribe to our newsletter</h2>
              <p className="text-sm text-gray-300">Receive weekly updates with the newest insights, trends, and tools, straight to your email.</p>
            </div>
                          <div className="flex w-full md:w-auto gap-2">
              <div className="relative flex-grow md:flex-grow-0">
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600" size={18} />
                  <input
                    type="email"
                    placeholder="johndoe@email.com"
                    className="w-full md:w-48 pl-10 pr-4 py-2 rounded-xl text-gray-900 outline-none focus:outline-none text-sm placeholder:text-gray-600 placeholder:text-sm"
                  />
                </div>
              </div>
              <button className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 rounded-xl whitespace-nowrap text-sm">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Navigation Columns */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-16">
          <div>
            <Image src="/power_peptide_logo_small.png" alt="Logo" height={110} width={110} className="mb-6" />
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <p className="mb-4">+1 (813)-803-1233</p>
            <div >
              <p>Email:</p>
              <p>help@powerpeptides.com</p>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Peptides</h3>
            <ul className="space-y-2">
              {peptideLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-300 hover:text-white">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              {supportLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-300 hover:text-white">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-300 hover:text-white">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Policies</h3>
            <ul className="space-y-2">
              {policyLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-300 hover:text-white">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="flex justify-end items-start">
            <div className="w-24 h-24">
              <Image src="/lab_certified.png" alt="Lab Tested" height={100} width={100} className="rounded-full" />
            </div>
          </div>
        </div>

        {/* Divider and Disclaimer */}
        <div className="border-t-2 border-[#335576] pt-8 mb-8">
          <div className="text-xs text-[#CCD5DD]">
            All products on this site are intended for research and development purposes only and are not meant for human consumption of any kind. The statements made within this website have not been evaluated by the U.S. Food and Drug Administration (FDA). Neither the statements nor the products offered by this company are intended to diagnose, treat, cure, or prevent any disease.
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t-2 border-[#335576]">
          <div className="text-xs text-[#CCD5DD]">
            © 2024, Power Peptides™. All Rights Reserved.<br />
            1034 E Brandon Blvd Suite 280, Brandon, FL 33511
          </div>
          <div className="flex gap-2 mt-2">
            <img 
              src="/payment_modes.png" 
              alt="Payment Methods" 
              className="h-10"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;