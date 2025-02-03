import React from "react";
import { Check } from "lucide-react"

const AboutUs = () => {
    return (
        <div className="content-container mb-24 px-3">
            <h1 className="mb-6 mt-8 text-4xl font-medium capitalize tracking-tight">About Us</h1>

            <h2 className="my-4 text-2xl font-medium leading-[2rem] tracking-tight">Driving Scientific Breakthroughs with Unparalleled Quality</h2>
            <p className="text-base text-gray-600 peer-last:mb-0">
                At PowerPeptides, we are more than just a trusted U.S. supplier of research peptides. We are a catalyst for scientific advancement,
                dedicated to providing the highest quality peptides that empower researchers to push the boundaries of their fields. Our proprietary
                process sets the standard for purity and consistency, giving our clients the confidence to achieve groundbreaking results.
            </p>

            <h3 className="my-4 text-2xl font-medium leading-[2rem] tracking-tight">The Power Peptides Difference</h3>
            <ul className="my-3 text-[#008080]">
               <span className="flex flex-row"><Check/>&nbsp;&nbsp;<li className="text-gray-600">Uncompromising Quality: Our peptides are meticulously crafted to meet the most stringent requirements, ensuring superior quality for every research project.</li></span>
               <span className="flex flex-row"><Check/>&nbsp;&nbsp;<li className="text-gray-600">Innovative Approach: We combine scientific integrity with an innovative spirit, recognizing that progress and credibility go hand in hand.</li></span>
               <span className="flex flex-row"><Check/>&nbsp;&nbsp;<li className="text-gray-600">Customer-Centric Solutions: We don’t just sell products; we provide tailored solutions that elevate your research journey to new heights.</li></span>
               <span className="flex flex-row"><Check/>&nbsp;&nbsp;<li className="text-gray-600">Value and Affordability: Through collaborations with globally recognized research chemical manufacturers, we offer premium quality without the premium price tag.</li></span>
            </ul>

            <h3 className="my-4 text-2xl font-medium leading-[2rem] tracking-tight">Unwavering Commitment to Excellence</h3>
            <p className="text-base text-gray-600 peer-last:mb-0">
                Our management team's steadfast dedication to quality forms the bedrock of Power Peptides' ethos. We are constantly refining our
                practices and processes to exceed client expectations and set new industry benchmarks.
            </p>

            <h3 className="my-4 text-2xl font-medium leading-[2rem] tracking-tight">The Quality Assurance Promise</h3>
            <ul className="my-3 text-[#008080]">
            <span className="flex flex-row"><Check/>&nbsp;&nbsp;<li className="text-gray-600">Rigorous Material Selection: We source only the finest materials, holding our manufacturers to the same uncompromising standards we set for ourselves.</li></span>
            <span className="flex flex-row"><Check/>&nbsp;&nbsp;<li className="text-gray-600">Thorough Product Testing: Every peptide undergoes extensive in-house evaluation and third-party laboratory analysis to ensure the highest levels of purity and consistency.</li></span>
            <span className="flex flex-row"><Check/>&nbsp;&nbsp;<li className="text-gray-600">Exceptional Customer Support: Our in-house customer support team is dedicated to providing the best quality service, putting your needs and satisfaction at the forefront of every interaction.</li></span>
            <span className="flex flex-row"><Check/>&nbsp;&nbsp;<li className="text-gray-600">Continuous Improvement: We foster a culture of continuous growth and refinement, ensuring that our products and services remain at the cutting edge of the industry.</li></span>
            </ul>
        </div>
    );
};

export default AboutUs;