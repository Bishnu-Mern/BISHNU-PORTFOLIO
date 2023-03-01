import HonorCard from "./HonorCard.js"

import hr from "../assets/curve-hr.svg"

export default function Honors(){
    return (
        <div id="project" className="mt-4 text-white">
            <h1 className="text-2xl font-bold">Projects</h1>
            <p className="font-light text-gray-400">Here are some of projects that I worked on</p>

            <div className="flex flex-col md:flex-row mt-4 gap-5">
                <HonorCard name="PMM(Blueyonder)" desc="React" />
                <HonorCard name="EXL-AI BIAS"  desc="React" />
                <HonorCard name="SYNOPSYS" desc="Angular" />
            </div>
            <img src={hr} className="w-full mt-8 md:h-2" alt="hr" />
        </div>
    )
}
