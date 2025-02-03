import React from 'react';
import { Check } from "lucide-react";

const PrivacyPolicy: React.FC = () => {
    return (
        <div className='content-container mb-24 px-3'>
            <h1 className="text-4xl font-semibold mb-6 mt-8">Privacy Policy</h1>
            <p className='text-base peer-last:mb-0 text-gray-600'>
                At Power Peptides LLC, we are committed to protecting the privacy and personal information of our visitors and customers. This privacy policy outlines how we collect, use, and safeguard your information when you visit our website or make a purchase.
            </p>

            <section className="my-6">
                <h2 className="my-4 text-2xl font-medium leading-[2rem] tracking-tight">1. Information We Collect</h2>
                <h3 className="py-2 text-xl font-medium tracking-tight">1.1 Personal Information</h3>
                <p className='text-base peer-last:mb-0 text-gray-600'>
                    When you place an order with Power Peptides, we collect personal information such as your name, email address, postal address, telephone number, purchasing records, and shopping patterns. This information is used to process and ship your orders and to contact you regarding your order if necessary.
                </p>

                <h3 className="py-2 text-xl font-medium tracking-tight">1.2 Log Files and Cookies</h3>
                <p className='text-base peer-last:mb-0 text-gray-600'>
                    Like many other websites, Power Peptides uses log files and cookies to analyze trends, administer the site, track user movement, and gather demographic information. This data includes IP addresses, browser types, ISPs, referring/exit pages, and the number of clicks. This information is not linked to any personally identifiable information.
                </p>
                <p className='text-base peer-last:mb-0 text-gray-600'>
                    You can choose to disable cookies through your browser settings. However, this may affect your experience on our website. More detailed information about cookie management can be found on your browser's respective websites.
                </p>

                <h3 className="py-2 text-xl font-medium tracking-tight">1.3 Aggregate Site Statistics</h3>
                <p className='text-base peer-last:mb-0 text-gray-600'>
                    We collect aggregate data about our website traffic, sales, and related site information. This data does not include any personally identifying information and is used for marketing, sales reporting, and improving our website's design and functionality.
                </p>
            </section>

            <section className="mt-6">
                <h2 className="my-4 text-2xl font-medium leading-[2rem] tracking-tight">2. How We Use Your Information</h2>
                <h3 className="py-2 text-xl font-medium tracking-tight">2.1 Order Processing and Customer Service</h3>
                <p className='text-base peer-last:mb-0 text-gray-600'>
                    We use your personal information to process and ship your orders and to provide customer service. We may contact you via email or telephone if we have questions or information about your order.
                </p>

                <h3 className="py-2 text-xl font-medium tracking-tight">2.2 Marketing and Promotions</h3>
                <p className='text-base peer-last:mb-0 text-gray-600'>
                    If you have provided your email address, we may send you newsletters, promotions, or information about new products and services. You can opt out of these communications at any time by following the unsubscribe instructions in the email or contacting us at <a href="mailto:help@powerpeptides.com" className="text-[#008080]">help@powerpeptides.com</a>.
                </p>

                <h3 className="py-2 text-xl font-medium tracking-tight">2.3 Third-Party Disclosure</h3>
                <p className='text-base peer-last:mb-0 text-gray-600'>
                    We do not sell, rent, or loan your personal information to any third parties without your permission. We may disclose your information if required by law, in connection with legal proceedings, or to establish, exercise, or defend our legal rights.
                </p>

                <h3 className="py-2 text-xl font-medium tracking-tight">2.4 Data Retention</h3>
                <p className='text-base peer-last:mb-0 text-gray-600'>
                    We retain your personal information for as long as necessary to fulfill the purposes outlined in this privacy policy, unless a longer retention period is required or permitted by law. We will securely destroy or anonymize your personal information when it is no longer needed for the purposes described in this policy.
                </p>
            </section>

            <section className="mt-6">
                <h2 className="my-4 text-2xl font-medium leading-[2rem] tracking-tight">3. SMS/Text Messaging Service</h2>
                <h3 className="py-2 text-xl font-medium tracking-tight">3.1 Opting In</h3>
                <p className='text-base peer-last:mb-0 text-gray-600'>
                    By consenting to Power Peptides' SMS/text messaging service, you agree to receive recurring messages from us through your wireless provider to the mobile number you provided, even if your number is on a Do Not Call list. Message frequency may vary, and message and data rates may apply.
                </p>

                <h3 className="py-2 text-xl font-medium tracking-tight">3.2 Opting Out</h3>
                <p className='text-base peer-last:mb-0 text-gray-600'>
                    You can opt out of the SMS/text messaging service at any time by texting STOP to the number provided in the messages or by contacting us at <a href="mailto:help@powerpeptides.com">help@powerpeptides.com</a>. You will receive a one-time opt-out confirmation message, and no further messages will be sent unless initiated by you.
                </p>
            </section>

            <section className="mt-6">
                <h2 className="my-4 text-2xl font-medium leading-[2rem] tracking-tight">4. Security and Encryption</h2>
                <h3 className="py-2 text-xl font-medium tracking-tight">4.1 Data Security Measures</h3>
                <p className='text-base peer-last:mb-0 text-gray-600'>
                    Power Peptides employs industry-leading security measures to protect customer data. We utilize open-source and self-hosted software to provide a secure website and shopping experience for our clients. All personal data is stored on Power Peptides' cloud provider, ensuring enhanced protection. We continuously update our software to maintain the highest level of security for customer data.
                </p>
                <h3 className="py-2 text-xl font-medium tracking-tight">4.2 Encryption</h3>
                <p className='text-base peer-last:mb-0 text-gray-600'>
                Power Peptides uses industry-standard encryption technologies when transferring and receiving sensitive data, such as credit card and banking information. We are committed to maintaining the security of your personal information and meeting or exceeding all online shopping security standards. We regularly monitor our systems for possible vulnerabilities and attacks to ensure the security of your information.
                </p>
                <h3 className="py-2 text-xl font-medium tracking-tight">4.3 Credit Card Processing</h3>
                <p className='text-base peer-last:mb-0 text-gray-600'>
                Your credit card information is processed via a PCI-DSS compliant vault. We may retain encrypted credit card data in the PCI-DSS compliant vault as long as you opt in to save your payment method for future use. We do not have access to your full credit card details. This ensures the highest level of security for your sensitive payment information.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="my-4 text-2xl font-medium leading-[2rem] tracking-tight">5. Third-Party Service Providers</h2>
                <p className="text-base peer-last:mb-0 text-gray-600">
                    Power Peptides works with trusted third-party service providers to facilitate various aspects of our business operations. These providers include:
                </p>
                
            <div className="space-y-4">
                <div className='text-base text-gray-600'>
                    Order Fulfillment:
                </div>
                <div className="space-y-2">
                    {[
                    { name: "FedEx", url: "https://www.fedex.com/en-us/trust-center/global-privacy-policy.html" },
                    { name: "UPS", url: "https://www.ups.com/us/en/support/shipping-support/legal-terms-conditions/privacy-notice.page" },
                    { name: "USPS", url: "https://about.usps.com/who/legal/privacy-policy/welcome.htm" },
                    { name: "DHL", url: "https://www.dhl.com/discover/en-global/privacy" }
                    ].map((item, index) => (
                    <div key={index} className='flex items-center text-base text-gray-600'>
                        <Check className='text-[#008080] mr-2' />
                        <span className="text-gray-600 mr-2">{item.name}</span>
                        <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-[#008080]">
                        {item.url}
                        </a>
                    </div>
                    ))}
                </div>

                <div className='text-base text-gray-600'>
                 Analytics:
                </div>
                <div className="space-y-2">
                    {[
                    { name: "Google Analytics", url: "https://policies.google.com/privacy" },
                    { name: "Segment", url: "https://www.twilio.com/en-us/legal/privacy" }
                    ].map((item, index) => (
                    <div key={index} className='flex items-center text-base text-gray-600'>
                        <Check className='text-[#008080] mr-2' />
                        <span className="text-gray-600 mr-2">{item.name}</span>
                        <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-[#008080]">
                        {item.url}
                        </a>
                    </div>
                    ))}
                </div>

                <div className='text-base text-gray-600'>
                Email:
                </div>
                <div className='flex items-center text-base text-gray-600'>
                    <Check className='text-[#008080] mr-2' />
                    <span className="text-gray-600 mr-2">SendGrid</span>
                    <a href="https://sendgrid.com/en-us/policies/security" target="_blank" rel="noopener noreferrer" className="text-[#008080]">
                    https://sendgrid.com/en-us/policies/security
                    </a>
                </div>

                <div className='text-base text-gray-600'>
                CDN:
                </div>
                <div className='flex items-center text-base text-gray-600'>
                    <Check className='text-[#008080] mr-2' />
                    <span className="text-gray-600 mr-2">Cloudflare</span>
                    <a href="https://www.cloudflare.com/en-gb/privacypolicy/" target="_blank" rel="noopener noreferrer" className="text-[#008080]">
                    https://www.cloudflare.com/en-gb/privacypolicy/
                    </a>
                </div>
                </div>
            </section>

            <section className="mb-8">
                <h2 className="my-4 text-2xl font-medium leading-[2rem] tracking-tight">6. Data Breach Notification</h2>
                <p className='text-base peer-last:mb-0 text-gray-600'>
                    In the event of a data breach, Power Peptides will promptly notify affected customers via email. We will provide information about the scope of the breach and the actions taken to remediate the situation. We strive to prevent such incidents by continuously updating our software and implementing robust internal security measures.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="my-4 text-2xl font-medium leading-[2rem] tracking-tight">7. Customer Support</h2>
                <p className='text-base peer-last:mb-0 text-gray-600'>
                    Power Peptides maintains an in-house customer support team and does not outsource communications with our customers. This ensures the security of your data and the quality of the services we provide.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="my-4 text-2xl font-medium leading-[2rem] tracking-tight">8. GDPR Compliance Notice</h2>
                <h3 className="py-2 text-xl font-medium tracking-tight">8.1 Personal Information Collection and Use</h3>
                <p className='text-base peer-last:mb-0 text-gray-600'>
                    Any information entered into text fields on the Power Peptides website will be collected for internal use, except where noted otherwise in this notice. This information is used to create customer profiles, facilitate checkout, enable quick logins, and remember information for future orders and visits. You may change this information through your account settings at any time. If you delete your account, Power Peptides may retain certain information for future use unless instructed otherwise.
                    <br/>
                    Power Peptides uses customer relationship management tools (CRMs) for internal communication and order processing. CRMs do not receive a copy of your customer profile except as needed to manage and access customer profiles. CRMs are considered third parties under GDPR.
                    <br/>
                    Passwords created for your account are not known to Power Peptides. Your password data is encrypted and stored in our own database. We do not share this data with anyone.
                    <br/>
                    Shipping information entered during the order process is communicated to shipping services (Shipping Services) for order fulfillment. Shipping Services are considered third parties under GDPR.
                    <br/>
                    Payment information is collected in encrypted form and passed to merchant services (Merchant Services Providers) for payment processing. Merchant Services Providers only receive information necessary to verify authorized payments. Power Peptides may retain encrypted credit card data in a PCI-DSS compliant vault if you opt in to save your payment method for future use. Merchant Services Providers are considered third parties under GDPR.
                    <br/>
                    Power Peptides uses cookies to remember selections and inputs made within the website. Cookies are provided by web hosts (Web Hosts), which are considered third parties under GDPR.
                </p>
                <h3 className="py-2 text-xl font-medium tracking-tight">8.2 Non-Personal Information Collection</h3>
                <p className='text-base peer-last:mb-0 text-gray-600'>
                    Power Peptides collects non-personal information such as user location based on IP address, website usage data, and demographic information. This information is collected in an anonymized form and provided to data analytics providers (Data Analytics Providers) for tracking engagement, geographic origin, and user headcount. Data Analytics Providers are considered third parties under GDPR.
                </p>
                <h3 className="py-2 text-xl font-medium tracking-tight">8.3 Right to be Forgotten</h3>
                <p className='text-base peer-last:mb-0 text-gray-600'>
                   Under GDPR, you have the right to instruct Power Peptides to delete any and all information collected about you. To exercise this right, please contact us at <span className='text-[#008080]'>help@powerpeptides.com.</span>
                </p>
            </section>

            <section className="mb-8">
                <h2 className="my-4 text-2xl font-medium leading-[2rem] tracking-tight">9. CCPA Compliance Notice for California Residents</h2>
                <h3 className="py-2 text-xl font-medium tracking-tight">9.1 Personal Information Collection and Use</h3>
                <p className='text-base peer-last:mb-0 text-gray-600'>
                    Under the California Consumer Privacy Act (CCPA), California residents have the right to request disclosure of the categories and specific pieces of personal information collected about them, the sources of that information, the business purposes for collecting the information, and the categories of third parties with whom the information is shared.
                    <br/>
                    California residents also have the right to request the deletion of their personal information, subject to certain exceptions. To exercise these rights, please contact us at <span className='text-[#008080]'>help@powerpeptides.com.</span>
                </p>
                <h3 className="py-2 text-xl font-medium tracking-tight">9.2 No Sale of Personal Information</h3>
                <p className='text-base peer-last:mb-0 text-gray-600'>
                    Power Peptides does not sell personal information to third parties, as defined under the CCPA.
                </p>

                <section>
             <h3 className="py-2 text-xl font-medium tracking-tight">9.3 Non-Discrimination</h3>
             <p className='text-base peer-last:mb-0 text-gray-600'>California residents have the right not to receive discriminatory treatment for exercising their privacy rights under the CCPA. Power Peptides will not discriminate against you for exercising your CCPA rights.</p>
              </section>

<section>
  <div className='text-[#008080] mt-4'>
  <span className="flex flex-row"><Check/>&nbsp;&nbsp;<h3 className="text-base text-gray-600 peer-last:mb-0">International Data Transfers</h3></span>
  </div>
  <ul className="mt-4 text-gray-600">
    <p>Power Peptides is based in the United States and may process, store, and transfer personal information in and to the U.S. and other countries, some of which may have less protective data protection laws than the region in which you reside. By providing your personal information, you consent to the transfer, storage, and processing of your information in and to the U.S. and other countries.</p>
  </ul>
</section>

<section>
<div className='text-[#008080] mt-4'>
  <span className="flex flex-row"><Check/>&nbsp;&nbsp;<h3 className="text-base text-gray-600 peer-last:mb-0">Your Rights and Choices</h3></span>
  </div>
  <ul className="mt-4 text-gray-600">
    <p>In addition to the rights outlined in the GDPR and CCPA sections above, you may have additional rights depending on your location. These may include the right to access, correct, update, or request deletion of your personal information. You may also have the right to object to or restrict the processing of your personal information, and to data portability. To exercise these rights or to learn more about the specific rights available to you, please contact us at <a href="mailto:help@powerpeptides.com" className="text-[#008080]">help@powerpeptides.com</a>.</p> 
  </ul>
</section>

<section>
<div className='text-[#008080] mt-4'>
  <span className="flex flex-row"><Check/>&nbsp;&nbsp;<h3 className="text-base text-gray-600 peer-last:mb-0">Privacy by Design</h3></span>
  </div>
  <ul className="mt-4 text-gray-600">
    <p>Power Peptides is committed to incorporating privacy considerations into the design and development of its products, services, and systems. We strive to implement appropriate technical and organizational measures to protect customer data and maintain the highest standards of privacy and security.</p> 
  </ul>
</section>

<section>
<div className='text-[#008080] mt-4'>
  <span className="flex flex-row"><Check/>&nbsp;&nbsp;<h3 className="text-base text-gray-600 peer-last:mb-0">Regular Policy Review</h3></span>
  </div>
  <ul className="mt-4 text-gray-600">
    <p>This privacy policy is regularly reviewed and updated to ensure it remains current and aligned with evolving privacy regulations and best practices. We encourage you to periodically review this policy for any changes.</p> 
  </ul>
</section>

<section>
<div className='text-[#008080] mt-4'>
  <span className="flex flex-row"><Check/>&nbsp;&nbsp;<h3 className="text-base text-gray-600 peer-last:mb-0">Privacy Training for Employees</h3></span>
  </div>
  <ul className="mt-4 text-gray-600">
    <p>Power Peptides provides regular privacy and security training to its employees to ensure they understand and adhere to the company's privacy practices. We foster a culture of privacy awareness and emphasize the importance of protecting customer data.</p> 
  </ul>
</section>

<section>
<div className='text-[#008080] mt-4'>
  <span className="flex flex-row"><Check/>&nbsp;&nbsp;<h3 className="text-base text-gray-600 peer-last:mb-0">Changes to the Privacy Policy</h3></span>
  </div>
  <ul className="mt-4 text-gray-600">
    <p>We reserve the right to update or modify this privacy policy at any time. Any changes will be posted on this page, and the revised policy will be effective immediately upon posting.</p> 
  </ul>
</section>

            </section>
            <section className="mb-8">
                <h2 className="my-4 text-2xl font-medium leading-[2rem] tracking-tight">10. Contact Us</h2>
                <p className='text-base peer-last:mb-0 text-gray-600'>
                If you have any questions or concerns about our privacy policy or the treatment of your personal information, please contact us at:
                </p>
                <p className="text-gray-600">
                    Power Peptides LLC<br />
                    1034 E Brandon Blvd Suite 280<br />
                    Brandon, FL 33511<br />
                    USA
                </p>
                <span className='text-gray-600'>Email: <a href="mailto:help@powerpeptides.com" className="text-[#008080]">help@powerpeptides.com</a></span>
            </section>
        </div>
    );
};

export default PrivacyPolicy;
