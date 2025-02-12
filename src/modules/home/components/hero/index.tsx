import React from 'react';
import Image from 'next/image';
import { CheckCircle, Archive, FlaskConical } from 'lucide-react';

const Hero = () => {
  return (
    <>
      <section 
        className="relative mx-auto max-w-[1920px] lg:px-10" 
        style={{background: 'linear-gradient(102.84deg, #E1EFFF 26.12%, #B5D7F8 66.91%, #D3EAFF 93.51%)'}}
      >
        <div className="content-container grid min-h-[600px] grid-cols-2 py-4">
          <div className="z-20 col-span-full flex items-center lg:col-span-1">
            <div>
              <p className="font-semibold text-[#697294]">Buy Online</p>
              <h1 className="hero-title py-3 text-4xl font-semibold tracking-tight md:text-4xl lg:text-6xl bg-gradient-to-r from-[#1e2c60] to-[#3c53a8] bg-clip-text text-transparent">
                High-Purity Peptides
              </h1>
              <p className="mt-4 text-base leading-7 text-[#11181C] md:text-lg md:leading-8">
                Explore our wide <span className="font-[600]">selection of 99% + purified peptides</span>, 
                such as Semaglutide, Tirzepatide, GHK-CU, TB-500, Ipamorelin and more.
              </p>
              
              <ul className="mt-6 hidden flex-col items-center gap-4 lg:flex lg:flex-row">
                <li className="flex w-full items-center gap-2 rounded-[12px] bg-white px-4 py-4 lg:w-1/3">
                  <div className="text-default-700">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 22 22" fill="none" fontSize="24">
                      <path fill="#0FA3A3" d="M7.054 9.171 5.706 10.52l4.331 4.331 9.626-9.625-1.348-1.347-8.278 8.277-2.983-2.984ZM18.7 11c0 4.235-3.465 7.7-7.7 7.7S3.3 15.235 3.3 11 6.765 3.3 11 3.3c.77 0 1.444.096 2.117.289l1.54-1.54c-1.155-.385-2.406-.674-3.657-.674-5.294 0-9.625 4.331-9.625 9.625S5.706 20.625 11 20.625s9.625-4.331 9.625-9.625H18.7Z"></path>
                    </svg>
                  </div>
                  <p className="ignore-br text-sm font-medium leading-tight text-[#293B45] lg:whitespace-nowrap lg:text-base">
                    Third Party<br/>Tested for Quality
                  </p>
                </li>
                <li className="flex w-full items-center gap-2 rounded-[12px] bg-white px-4 py-4 lg:w-1/3">
                  <div className="text-default-700">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 22 22" fill="none" fontSize="24">
                      <path stroke="#1777AE" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.375" d="m18.563 7.563-.653 8.067c-.08.504-.515.875-1.025.875H5.115c-.51 0-.944-.371-1.024-.875l-.654-8.068"></path>
                      <path stroke="#1777AE" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.375" d="M19.033 4.813H2.967c-.5 0-.905.428-.905.957 0 .529.406 1.685.905 1.685H7.43c.567 0 1.026.486 1.026 1.085 0 .6.459 1.085 1.025 1.085h3.038c.566 0 1.025-.486 1.025-1.085 0-.6.46-1.085 1.026-1.085h4.463c.5 0 .904-1.156.904-1.685 0-.529-.405-.957-.904-.957Z"></path>
                    </svg>
                  </div>
                  <p className="ignore-br text-sm font-medium leading-tight text-[#293B45] lg:whitespace-nowrap lg:text-base">
                    Vacuum-Sealed<br/>for Optimal Storage
                  </p>
                </li>
                <li className="flex w-full items-center gap-2 rounded-[12px] bg-white px-4 py-4 lg:w-1/3">
                  <div className="text-default-700">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 22 22" fill="none" fontSize="24">
                      <path fill="#3A60F3" d="m17.952 15.438-4.325-7.264V5.531a.667.667 0 0 0 .056-.01c.837-.186 1.444-1.007 1.444-1.954 0-1.1-.808-1.995-1.8-1.995H8.31c-.992 0-1.8.895-1.8 1.995 0 .947.607 1.768 1.444 1.954a.627.627 0 0 0 .056.01v2.643l-4.325 7.264c-.624 1.048-.71 2.078-.244 2.9.472.83 1.463 1.305 2.72 1.305h9.316c1.256 0 2.247-.476 2.718-1.305.468-.822.381-1.852-.243-2.9ZM7.933 3.567c0-.337.199-.572.377-.572h5.017c.178 0 .377.235.377.572 0 .276-.135.482-.28.548h-.509a.712.712 0 0 0-.711.711V8.37c0 .128.034.254.1.364l2.69 4.518H6.643l.754-1.266.836-1.404.688-1.155h.93a.712.712 0 0 0 0-1.423h-.418V6.848h.418a.712.712 0 0 0 0-1.423h-.418v-.599a.712.712 0 0 0-.711-.711h-.51c-.144-.066-.279-.272-.279-.548Zm9.025 14.067c-.211.373-.751.586-1.481.586H6.16c-.73 0-1.27-.213-1.481-.585-.2-.353-.117-.888.229-1.469l.887-1.49h10.046l.888 1.49c.346.581.43 1.116.23 1.468Z"></path>
                    </svg>
                  </div>
                  <p className="ignore-br text-sm font-medium leading-tight text-[#293B45] lg:whitespace-nowrap lg:text-base">
                    Verified Purity<br/>and Concentration
                  </p>
                </li>
              </ul>
              
              {/* Mobile Image */}
              <div className="relative z-10 mt-8 block aspect-[337/286] w-full lg:hidden">
                <img 
                  alt="Product Mobile View"
                  decoding="async"
                  data-nimg="fill"
                  className="object-contain"
                  style={{position: 'absolute', height: '100%', width: '100%', left: 0, top: 0, right: 0, bottom: 0, color: 'transparent'}}
                  sizes="100vw"
                  src="/pics.png"
                />
              </div>
              
              <div className="mt-8 md:mt-10">
                <a 
                  className="block w-full rounded-[16px] bg-[#008080] py-4 text-center font-medium text-white transition-colors duration-200 hover:bg-[#028186] lg:max-w-[290px]" 
                  href="/store"
                >
                  Buy Peptides
                </a>
              </div>
            </div>
          </div>
          
          {/* Desktop Image */}
          <div className="z-10 hidden w-full items-center justify-center lg:flex">
            <div className="relative aspect-[587/500] w-full">
              <img 
                alt="Product Desktop View"
                decoding="async"
                data-nimg="fill"
                className="object-contain xl:p-16"
                style={{position: 'absolute', height: '100%', width: '100%', left: 0, top: 0, right: 0, bottom: 0, color: 'transparent'}}
                sizes="100vw"
                src="/pic.avif"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;