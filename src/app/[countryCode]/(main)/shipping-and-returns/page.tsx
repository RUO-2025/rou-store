import React from "react";
import { Check } from "lucide-react"

const ShippingAndReturns = () => {
    return (
        <div className="content-container mb-24 px-3">
            <h1 className="mb-6 mt-8 text-4xl font-medium capitalize tracking-tight">Shipping And Returns</h1>

            <section className="mb-6">
                <h2 className="my-4 text-2xl font-medium leading-[2rem] tracking-tight">1. Shipping Options</h2>
                <p className="text-base text-gray-600 peer-last:mb-0">Power Peptides offers a variety of shipping methods to ensure your order arrives when you need it.</p>
                <ul className="my-3 text-[#008080]">
                <span className="flex flex-row"><Check/>&nbsp;&nbsp;<li className="relative mb-2 list-item flex-nowrap gap-x-2 text-gray-600 last-of-type:mb-0 lg:flex-wrap ">FREE FedEx 2Day shipping on orders over $200.00 and FREE Overnight shipping for orders over $500.00 (total amount before shipping).</li></span>
                <span className="flex flex-row"><Check/>&nbsp;&nbsp;<li className="relative mb-2 list-item flex-nowrap gap-x-2 text-gray-600 last-of-type:mb-0 lg:flex-wrap ">Orders placed and processed before 12pm CST Monday through Friday typically ship the same business day, while orders placed after 12pm CST, on weekends, or holidays ship the following business day..</li></span>
                </ul>
            </section>

            <section className="mb-6">
                <h2 className="my-4 text-2xl font-medium leading-[2rem] tracking-tight">2. International Orders & Mail Forwarding</h2>
                <p className="text-base text-gray-600 peer-last:mb-0">We happily accept orders from around the globe and strive to ensure successful delivery. Please note that when using a mail forwarding service, we cannot guarantee delivery to the forwarded address, as it is beyond our control.
                 <br/>
                    *Import Tax Disclaimer: For Customers Outside the United States*
                 <br/>
                    Please be aware that deliveries to countries outside the United States may incur additional charges for import duties and related fees. These charges are not included in our pricing and are not covered by our company.
                 <br/>
                    If the shipping company or customs authorities require payment of customs taxes or duty fees, you, as the recipient, will be responsible for paying these amounts.
                 <br/>
                    We recommend familiarizing yourself with your country's import regulations and potential additional costs before placing an order</p>
            </section>

            <section className="mb-6">
                <h2 className="my-4 text-2xl font-medium leading-[2rem] tracking-tight">3. Product Availability & Shipping Restrictions</h2>
                <p className="text-base text-gray-600 peer-last:mb-0">Some products may have shipping restrictions or be unavailable for shipping to certain destinations. Please refer to the product listings for USA shipping restrictions.</p>
            </section>

            <section className="mb-6">
                <h2 className="my-4 text-2xl font-medium leading-[2rem] tracking-tight">4. Order Tracking</h2>
                <p className="text-base text-gray-600 peer-last:mb-0">When you place your order, you'll receive an email once your order is shipped, along with its tracking number.
                <br/>
                    For your convenience, we recommend registering an account during checkout. This allows you to easily track your order status, update account information, and access past orders. Alternatively, you may check out as a guest.</p>
            </section>

            <section className="mb-6">
                <h2 className="my-4 text-2xl font-medium leading-[2rem] tracking-tight">5. Delayed Shipments</h2>
                <p className="text-base text-gray-600 peer-last:mb-0">Please be aware that packages may experience delays over 25% of the time due to factors beyond our control. Unfortunately, we cannot offer refunds for shipping costs in these instances.</p>
            </section>

            <section className="mb-6">
                <h2 className="my-4 text-2xl font-medium leading-[2rem] tracking-tight">6. Cancellations</h2>
                <p className="text-base text-gray-600 peer-last:mb-0">If you wish to cancel an order, please email us at help@powerpeptides.com before the order has shipped. Once the order has shipped, cancellations are no longer possible.</p>
            </section>

            <section className="mb-6">
                <h2 className="my-4 text-2xl font-medium leading-[2rem] tracking-tight">7. Returns & Replacements Policy</h2>
                <p className="text-base text-gray-600 peer-last:mb-0">To maintain our high quality standards and due to the perishable nature of our products, we are unable to accept returns. However, in the unlikely event of receiving missing, incorrect, or damaged items, please follow the instructions below.
                <br/>
                    At Power Peptides, we are committed to delivering top-quality products and exceptional customer service. If you encounter any issues with your order, our dedicated support team is here to help. Contact us at <span className="text-[#008080]">help@powerpeptides.com</span>, and we will work diligently to resolve your concerns as quickly as possible.</p>
            </section>

            <section className="mb-6">
                <h2 className="my-4 text-2xl font-medium leading-[2rem] tracking-tight">8. Undelivered Packages</h2>
                <p className="text-base text-gray-600 peer-last:mb-0">If the courier reports your package as delivered, but you have not received it, please follow these steps:</p>
                <ul className="my-3 text-[#008080]">
                <span className="flex flex-row"><Check/>&nbsp;&nbsp;<li className="relative mb-2 list-item flex-nowrap gap-x-2 text-gray-600 last-of-type:mb-0 lg:flex-wrap ">Verify with neighbors or front desk staff if they accepted the package on your behalf.</li></span>
                <span className="flex flex-row"><Check/>&nbsp;&nbsp;<li className="relative mb-2 list-item flex-nowrap gap-x-2 text-gray-600 last-of-type:mb-0 lg:flex-wrap ">Reach out to the courier's local office and speak with the postmaster. They can provide GPS<br/> coordinates confirming the delivery location, time, and recipient.</li></span>
                <span className="flex flex-row"><Check/>&nbsp;&nbsp;<li className="relative mb-2 list-item flex-nowrap gap-x-2 text-gray-600 last-of-type:mb-0">If the postmaster verifies correct delivery, please allow up to 1 week for the package to arrive.</li></span>
                <span className="flex flex-row"><Check/>&nbsp;&nbsp;<li className="relative mb-2 list-item flex-nowrap gap-x-2 text-gray-600 last-of-type:mb-0 lg:flex-wrap ">If the package does not arrive after 1 week, contact us at help@powerpeptides.com for additional assistance.</li></span>
                </ul>
            </section>

            <section className="mb-6">
                <h2 className="my-4 text-2xl font-medium leading-[2rem] tracking-tight">9. Missing, Wrong, Damaged, or Defective Items</h2>
                <p className="text-base text-gray-600 peer-last:mb-0">In the event of receiving an order with missing, wrong, damaged, or defective items, please inform us within 7 days of the delivery date. To prevent fraudulent claims, all orders are documented and photographed prior to shipment.</p>
                <ul className="my-3 text-[#008080]">
                <span className="flex flex-row"><Check/>&nbsp;&nbsp;<li className="relative mb-2 list-item flex-nowrap gap-x-2 text-gray-600 last-of-type:mb-0 lg:flex-wrap ">Missing Items: Notify us immediately, and we will ship the missing item(s) once verified.</li></span>
                <span className="flex flex-row"><Check/>&nbsp;&nbsp;<li className="relative mb-2 list-item flex-nowrap gap-x-2 text-gray-600 last-of-type:mb-0 lg:flex-wrap ">Wrong Items: Inform us immediately,and we will ship the correct item(s) once verified. We will also provide prepaid return label for the incorrect item(s).</li></span>
                <span className="flex flex-row"><Check/>&nbsp;&nbsp;<li className="relative mb-2 list-item flex-nowrap gap-x-2 text-gray-600 last-of-type:mb-0 lg:flex-wrap ">Damaged Items: Contact us immediately with photographic evidence. Upon verification, we will ship a replacement.</li></span>
                <span className="flex flex-row"><Check/>&nbsp;&nbsp;&nbsp;<li className="relative mb-2 list-item flex-nowrap gap-x-2 text-gray-600 last-of-type:mb-0 lg:flex-wrap ">Defective Items: We take claims of defect (incorrect weight or quality) seriously. For incorrect weight claims, please provide your scale's make and model.<br/> For incorrect concentration or quality claims, please be prepared to send a return sample for analysis.Once verified, we will ship a replacement.</li></span>
                </ul>
            </section>

            <section className="mb-6">
                <h2 className="my-4 text-2xl font-medium leading-[2rem] tracking-tight">10. Chargebacks & Payment Disputes</h2>
                <ul className="my-3 text-[#008080]">
                <span className="flex flex-row"><Check/>&nbsp;&nbsp;<li className="relative mb-2 list-item flex-nowrap gap-x-2 text-gray-600 last-of-type:mb-0 lg:flex-wrap ">Chargebacks: We take chargebacks by credit card issuers or bounced checks seriously. As a fraud protection measure, any chargeback will result in the client being temporarily placed on a no-sell list until we can contact you.</li></span>
                <span className="flex flex-row"><Check/>&nbsp;&nbsp;<li className="relative mb-2 list-item flex-nowrap gap-x-2 text-gray-600 last-of-type:mb-0 lg:flex-wrap ">Payment Disputes: If you have a payment dispute, please reach out to us first, as we can often resolve issues more efficiently than a bank or payment processor.</li></span>
                </ul>
            </section>

            <section className="mb-6">
                <h2 className="my-4 text-2xl font-medium leading-[2rem] tracking-tight">11. Our Commitment to You</h2>
                <p className="text-base text-gray-600 peer-last:mb-0">At Power Peptides, we are dedicated to providing exceptional quality and service. If you have any questions or concerns about our service, please don't hesitate to contact us at <span className="text-[#008080]">help@powerpeptides.com</span>. We value your feedback and respond to ALL inquiries.
                <br/>
                    Thank you for choosing Power Peptides!</p>
            </section>
        </div>
    );
};

export default ShippingAndReturns;
