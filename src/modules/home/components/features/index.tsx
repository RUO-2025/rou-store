import React from 'react';

const FeaturesSection = () => {
  return (
    <section className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-24 lg:px-8">
      <div aria-hidden="true" className="absolute inset-x-0 top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:top-0">
        <div 
          className="relative left-[calc(60%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#00BFFF] to-[#1E90FF] opacity-30 sm:left-[calc(40%-20rem)] sm:w-[55rem]" 
          style={{
            clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
          }}
        />
      </div>
      
      <div className="relative">
        <h2 className="mb-8 text-center text-4xl font-semibold">
          Your Reliable Source for High-Quality Research Peptides
        </h2>
        <p className="mx-auto mb-12 max-w-3xl text-center text-lg text-gray-600">
          Power Peptides™ is more than just a trusted U.S. supplier of research peptides. We are a catalyst for scientific advancement, dedicated to providing the highest quality peptides that empower our clients to push the boundaries.
        </p>
        
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="flex flex-col relative overflow-hidden h-auto text-foreground box-border outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 rounded-large transition-transform-background motion-reduce:transition-none bg-white/90 shadow-[0_4px_12px_rgba(0,0,0,0.1)] backdrop-blur-sm transition-shadow duration-300 hover:shadow-[0_4px_16px_rgba(0,0,0,0.15)]" tabIndex="-1">
            <div className="relative flex w-full flex-auto flex-col place-content-inherit align-items-inherit h-auto break-words text-left overflow-y-auto subpixel-antialiased p-6">
              <div className="mb-4 w-fit rounded-xl bg-blue-50 p-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M5 19a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1c0-.21-.07-.41-.18-.57L13 8.35V4h-2v4.35L5.18 18.43c-.11.16-.18.36-.18.57m1 3a3 3 0 0 1-3-3c0-.6.18-1.16.5-1.63L9 7.81V6a1 1 0 0 1-1-1V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1v1.81l5.5 9.56c.32.47.5 1.03.5 1.63a3 3 0 0 1-3 3zm7-6l1.34-1.34L16.27 18H7.73l2.66-4.61zm-.5-4a.5.5 0 0 1 .5.5a.5.5 0 0 1-.5.5a.5.5 0 0 1-.5-.5a.5.5 0 0 1 .5-.5"></path>
                </svg>
              </div>
              <h3 className="mb-4 text-2xl font-medium">Unparalleled Quality</h3>
              <p className="text-gray-600">Our proprietary processes and meticulous sourcing of premium materials ensure that every peptide we offer meets the most stringent standards.</p>
            </div>
          </div>

          <div className="flex flex-col relative overflow-hidden h-auto text-foreground box-border outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 rounded-large transition-transform-background motion-reduce:transition-none bg-white/90 shadow-[0_4px_12px_rgba(0,0,0,0.1)] backdrop-blur-sm transition-shadow duration-300 hover:shadow-[0_4px_16px_rgba(0,0,0,0.15)]" tabIndex="-1">
            <div className="relative flex w-full flex-auto flex-col place-content-inherit align-items-inherit h-auto break-words text-left overflow-y-auto subpixel-antialiased p-6">
              <div className="mb-4 w-fit rounded-xl bg-blue-50 p-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path fill="currentColor" d="m8.6 22.5l-1.9-3.2l-3.6-.8l.35-3.7L1 12l2.45-2.8l-.35-3.7l3.6-.8l1.9-3.2L12 2.95l3.4-1.45l1.9 3.2l3.6.8l-.35 3.7L23 12l-2.45 2.8l.35 3.7l-3.6.8l-1.9 3.2l-3.4-1.45zm.85-2.55l2.55-1.1l2.6 1.1l1.4-2.4l2.75-.65l-.25-2.8l1.85-2.1l-1.85-2.15l.25-2.8l-2.75-.6l-1.45-2.4L12 5.15l-2.6-1.1L8 6.45l-2.75.6l.25 2.8L3.65 12l1.85 2.1l-.25 2.85l2.75.6zm1.5-4.4L16.6 9.9l-1.4-1.45l-4.25 4.25l-2.15-2.1L7.4 12z"></path>
                </svg>
              </div>
              <h3 className="mb-4 text-2xl font-medium">Independently Verified</h3>
              <p className="text-gray-600">Every product undergoes extensive testing, both in-house and through independent, third-party laboratories.</p>
            </div>
          </div>

          <div className="flex flex-col relative overflow-hidden h-auto text-foreground box-border outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 rounded-large transition-transform-background motion-reduce:transition-none bg-white/90 shadow-[0_4px_12px_rgba(0,0,0,0.1)] backdrop-blur-sm transition-shadow duration-300 hover:shadow-[0_4px_16px_rgba(0,0,0,0.15)]" tabIndex="-1">
            <div className="relative flex w-full flex-auto flex-col place-content-inherit align-items-inherit h-auto break-words text-left overflow-y-auto subpixel-antialiased p-6">
              <div className="mb-4 w-fit rounded-xl bg-blue-50 p-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32" className="min-w-[24px]">
                  <path fill="currentColor" d="M4 16h12v2H4zm-2-5h10v2H2z"></path>
                  <path fill="currentColor" d="m29.919 16.606l-3-7A1 1 0 0 0 26 9h-3V7a1 1 0 0 0-1-1H6v2h15v12.556A4 4 0 0 0 19.142 23h-6.284a4 4 0 1 0 0 2h6.284a3.98 3.98 0 0 0 7.716 0H29a1 1 0 0 0 1-1v-7a1 1 0 0 0-.081-.394M9 26a2 2 0 1 1 2-2a2 2 0 0 1-2 2m14-15h2.34l2.144 5H23Zm0 15a2 2 0 1 1 2-2a2 2 0 0 1-2 2m5-3h-1.142A3.995 3.995 0 0 0 23 20v-2h5Z"></path>
                </svg>
              </div>
              <h3 className="mb-4 text-2xl font-medium">Fast Shipping & Support</h3>
              <p className="text-gray-600">We provide fast and reliable shipping, using the best couriers and high-quality packaging materials to ensure that your peptides arrive promptly and in optimal condition.</p>
            </div>
          </div>
        </div>
      </div>

      <div aria-hidden="true" className="absolute inset-x-0 top-[calc(100%-25rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-28rem)]">
        <div 
          className="relative left-[calc(40%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#00BFFF] to-[#1E90FF] opacity-30 sm:left-[calc(50%+20rem)] sm:w-[45rem]" 
          style={{
            clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
          }}
        />
      </div>
    </section>
  );
};

export default FeaturesSection;