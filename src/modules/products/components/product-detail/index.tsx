"use client"
import React from 'react';
import { Check } from 'lucide-react';
import { Dialog, DialogContent, DialogTrigger } from '../../../components/ui/dialog';

const ProductDetails = ({ product }) => {
  const data = product?.metadata?.table ? 
    (typeof product.metadata.table === 'string' ? 
      JSON.parse(product.metadata.table) : 
      product.metadata.table
    ) : {};

  const hasContent = {
    characteristics: data?.characteristics?.length > 0,
    workingMechanism: !!data?.workingMechanism,
    benefits: data?.benefits?.length > 0,
    sideEffects: data?.sideEffects?.length > 0,
    summary: !!data?.summary,
    certificates: data?.certificates?.length > 0,
    references: data?.references?.length > 0
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Sections in the desired order
  const sections = [
    { id: 'characteristics', label: 'Characteristics', visible: hasContent.characteristics },
    { id: 'mechanism', label: `How does ${product.title} work?`, visible: hasContent.workingMechanism },
    { id: 'benefits', label: 'Benefits', visible: hasContent.benefits },
    { id: 'side-effects', label: 'Side Effects', visible: hasContent.sideEffects },
    { id: 'summary', label: 'Summary', visible: hasContent.summary },
    { id: 'coa', label: 'Certificate of Analysis (COA)', visible: hasContent.certificates },
    { id: 'references', label: 'References', visible: hasContent.references }
  ].filter(section => section.visible);

  if (!data || Object.keys(data).length === 0) {
    return null;
  }

  return (
    <div className="content-container my-16">
      {/* Mobile Menu */}
      <div className="lg:hidden mb-16">
        <h1 className="text-[48px] leading-[1.15] font-bold mb-16">Table of Contents</h1>
        <ol className="space-y-8 mb-24">
          {sections.map(({ id, label }, index) => (
            <li key={id} className="flex gap-2">
              <span className="text-[32px] leading-[1.2] text-gray-900">{index + 1}. </span>
              <button
                onClick={() => scrollToSection(id)}
                className="text-[32px] leading-[1.2] text-[#2F8B99] hover:text-[#236b76] text-left"
              >
                {label}
              </button>
            </li>
          ))}
        </ol>
      </div>

      {/* Desktop Navigation */}
      {sections.length > 0 && (
        <nav className="hidden lg:block border-b mb-8">
          <ul className="flex gap-8 text-sm text-gray-600">
            {sections.map(({ id, label }) => (
              <li key={id}>
                <button 
                  onClick={() => scrollToSection(id)} 
                  className="py-2 hover:text-gray-900 transition-colors"
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      )}

      {/* Characteristics */}
      {hasContent.characteristics && (
        <section id="characteristics" className="mb-16">
          <h2 className="text-[48px] leading-[1.15] mb-12">Characteristics</h2>
          <div className="space-y-4">
            {data.characteristics.map((char: { label: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined; value: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined; }, index: number) => (
              <div key={index} className={`flex flex-col ${index % 2 === 1 ? 'bg-gray-50' : ''}`}>
                <div className="p-4">
                  <div className="text-[24px] leading-[1.2] text-gray-600">{char.label}</div>
                  <div className="text-[24px] leading-[1.2] mt-2">{char.value}</div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Working Mechanism */}
      {hasContent.workingMechanism && (
        <section id="mechanism" className="mb-16">
          <h2 className="text-[48px] leading-[1.15] mb-12">How does {product.title} work?</h2>
          <p className="text-[24px] leading-[1.5] text-gray-600">{data.workingMechanism}</p>
        </section>
      )}

      {/* Benefits */}
      {hasContent.benefits && (
        <section id="benefits" className="mb-16">
          <h2 className="text-[48px] leading-[1.15] mb-12">Benefits</h2>
          <ul className="space-y-4">
            {data.benefits.map((benefit: { description: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined; }, index: React.Key | null | undefined) => (
              <li key={index} className="flex gap-3">
                <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-2" />
                <span className="text-[24px] leading-[1.5] text-gray-600">
                  {benefit.description}
                </span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Side Effects */}
      {hasContent.sideEffects && (
        <section id="side-effects" className="mb-16">
          <h2 className="text-[48px] leading-[1.15] mb-12">Side Effects</h2>
          <ul className="space-y-4">
            {data.sideEffects.map((effect: { description: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined; }, index: React.Key | null | undefined) => (
              <li key={index} className="text-[24px] leading-[1.5] text-gray-600">
                {effect.description}
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Summary */}
      {hasContent.summary && (
        <section id="summary" className="mb-16">
          <h2 className="text-[48px] leading-[1.15] mb-12">Summary</h2>
          <p className="text-[24px] leading-[1.5] text-gray-600">{data.summary}</p>
        </section>
      )}

      {/* Certificate of Analysis */}
      {hasContent.certificates && (
        <section id="coa" className="mb-16">
          <h2 className="text-[48px] leading-[1.15] mb-12">Certificate of Analysis (COA)</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.certificates.map((cert: { url: string | undefined; title: string | undefined; uploadDate: string | number | Date; }, index: React.Key | null | undefined) => (
              <Dialog key={index}>
                <DialogTrigger>
                  <div className="cursor-pointer hover:opacity-90 transition-colors">
                    <img
                      src={cert.url}
                      alt={cert.title}
                      className="w-full h-64 object-cover rounded-lg"
                    />
                    <p className="text-[16px] text-gray-600 mt-2">
                      Uploaded on: {new Date(cert.uploadDate).toLocaleDateString()}
                    </p>
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-4xl">
                  <img
                    src={cert.url}
                    alt={cert.title}
                    className="w-full h-auto"
                  />
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </section>
      )}

      {/* References */}
      {hasContent.references && (
        <section id="references">
          <h2 className="text-[48px] leading-[1.15] mb-12">References</h2>
          <ol className="space-y-6">
            {data.references.map((ref: { link: string | undefined; text: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined; }, index: React.Key | null | undefined) => (
              <li key={index} className="flex gap-2">
                <span className="font-medium text-[24px]">{index + 1}.</span>
                <div>
                  <a
                    href={ref.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[24px] text-[#2F8B99] hover:text-[#236b76] mb-1 block"
                  >
                    {ref.text}
                  </a>
                </div>
              </li>
            ))}
          </ol>
        </section>
      )}
    </div>
  );
};

export default ProductDetails;