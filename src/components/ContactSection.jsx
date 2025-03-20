import { useState } from "react";
import CustomSelect from "./CustomSelect"; // Adjust the import path as needed
import './ContactSection.css'

const ContactSection = () => {
    const [selectedGoal, setSelectedGoal] = useState("");

    const goalOptions = [
        { value: "weight-loss", label: "Weight Loss" },
        { value: "muscle-gain", label: "Muscle Gain" },
        { value: "overall-fitness", label: "Overall Fitness" },
        { value: "endurance", label: "Improve Endurance" },
    ];

    return (
        <section id="contact" className="min-h-screen flex items-center bg-[#FFE4C4] text-[#8B4513] relative overflow-hidden">
            <div className="container mx-auto px-4 py-16 relative z-10">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Start Your Fitness Journey?</h2>
                    <p className="text-xl mb-8">
                        Join thousands of members who have transformed their lives with our personalized fitness programs.
                    </p>

                    <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
                        <h3 className="text-2xl font-semibold mb-6">Get Started Today</h3>
                        <form className="space-y-4">
                            <div>
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:border-[#8B4513]"
                                />
                            </div>
                            <div>
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:border-[#8B4513]"
                                />
                            </div>
                            <div>
                                <CustomSelect
                                    options={goalOptions}
                                    placeholder="Select Your Goal"
                                    onChange={(value) => setSelectedGoal(value)}
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-[#8B4513] text-[#FFE4C4] py-3 rounded-md hover:bg-opacity-90 transition-all font-semibold"
                            >
                                Start Your Free Trial
                            </button>
                        </form>
                        <p className="mt-4 text-sm text-gray-600">
                            By signing up, you agree to our Terms of Service and Privacy Policy.
                        </p>
                    </div>

                    <p className="text-lg">
                        Have questions? Contact us at <span className="font-semibold">info@fitjourney.com</span>
                    </p>
                </div>
            </div>

            {/* Floating Fitness Icons */}
            <div className="absolute inset-0 z-0">
                <div className="fitness-icons-container">
                    {[...Array(30)].map((_, i) => (
                        <div
                            key={i}
                            className="fitness-icon"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                animationDelay: `${Math.random() * 5}s`,
                                animationDuration: `${Math.random() * 3 + 2}s`,
                                width: `${Math.random() * 20 + 10}px`,
                                height: `${Math.random() * 20 + 10}px`
                            }}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ContactSection;