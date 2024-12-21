import { Link } from 'lucide-react';
import React from 'react'

export default function AmbassadorSection() {
    const steps = [
        {
            title: "Commit ",
            description: "to be a CHF Ambassador for one calendar year",
            image: "/assets/images/ambassador/ambStep1.svg",
        },
        {
            title: "Choose",
            description: "a program that appeals to your heart.",
            image: "/assets/images/ambassador/ambStep2.svg",
        },
        {
            title: "Create ",
            description:
                "a marketing plan (e.g., music party, dinner/dance,Christmas/ Diwali get together, etc.)",
            image: "/assets/images/ambassador/ambStep3.svg",
        },
        {
            title: "Raise ",
            description: "funds in one year toward your project !",
            image: "/assets/images/ambassador/ambStep4.svg",
        },
    ];

    return (
        <div className="bg-white">
            <div className="max-w-7xl mx-auto px-4 pt-10 pb-20">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-[#1a3c77] mb-4">
                        CHF Ambassador
                    </h2>
                    <p className="text-gray-600 max-w-5xl mx-auto text-lg leading-relaxed">
                        Be a catalyst—become a CHF Ambassador—and help to spread CHF's
                        mission and vision. Inspire your friends, family members, colleagues
                        and neighbors to support the effort in your neighborhood, at your
                        convenience.{" "}
                        <Link to="/join" className="text-blue-500 hover:underline">
                            Join Now
                        </Link>
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {steps.map((step, index) => (
                        <div key={index} className="flex flex-col items-center text-center">
                            <div className="mb-6">
                                <img src={step.image} alt="" className="object-contain" />
                            </div>
                            <div>
                                <p className="text-gray-600 text-lg max-w-52 text-left leading-6">
                                    <span className="text-[#1a3c77] text-lg font-semibold mb-1">
                                        {step.title}{" "}
                                    </span>
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
