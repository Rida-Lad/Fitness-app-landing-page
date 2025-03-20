import { Dumbbell, Heart, Users, Clock, Star, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./ProgramSection.css"

const ProgramsSection = () => {
    const programs = [
        {
            icon: <Dumbbell size={24} className="text-[#FFE4C4]" />,
            title: "Strength Training",
            description:
                "Build muscle, increase strength, and improve your metabolism with our comprehensive strength training program.",
        },
        {
            icon: <Heart size={24} className="text-[#FFE4C4]" />,
            title: "Cardio & HIIT",
            description:
                "Improve cardiovascular health, burn calories, and boost your endurance with high-intensity interval training.",
        },
        {
            icon: <Users size={24} className="text-[#FFE4C4]" />,
            title: "Group Classes",
            description:
                "Stay motivated and accountable with our energetic group classes, designed for all fitness levels.",
        },
        {
            icon: <Clock size={24} className="text-[#FFE4C4]" />,
            title: "Flexible Schedule",
            description:
                "Our on-demand workouts fit into your busy lifestyle. Train when and where it works for you.",
        },
        {
            icon: <Star size={24} className="text-[#FFE4C4]" />,
            title: "Premium Coaching",
            description:
                "Get personalized guidance, feedback, and support from our expert coaches to accelerate your progress.",
        },
        {
            icon: <Heart size={24} className="text-[#FFE4C4]" />,
            title: "Nutrition Planning",
            description:
                "Optimize your results with custom nutrition plans designed to complement your fitness routine.",
        },
    ];

    return (
        <section id="programs" className="min-h-screen flex items-center bg-[#FFE4C4] text-[#8B4513] relative overflow-hidden">
            {/* Particle Animation */}
            <div className="absolute inset-0 z-0">
                {[...Array(100)].map((_, i) => (
                    <div
                        key={i}
                        className="particle"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            width: `${Math.random() * 5 + 3}px`,
                            height: `${Math.random() * 5 + 3}px`,
                            animationDelay: `${Math.random() * 5}s`,
                            animationDuration: `${Math.random() * 3 + 2}s`,
                        }}
                    />
                ))}
            </div>

            <div className="container mx-auto px-4 py-16 relative z-10">
                <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">Our Programs</h2>

                {/* Swiper Carousel */}
                <Swiper
                    spaceBetween={30}
                    slidesPerView={1}
                    loop={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                        el: ".swiper-pagination",
                        bulletClass: "swiper-pagination-bullet",
                        bulletActiveClass: "swiper-pagination-bullet-active",
                    }}
                    modules={[Autoplay, Pagination]}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                    }}
                    className="w-full"
                >
                    {programs.map((program, index) => (
                        <SwiperSlide key={index}>
                            <div className="bg-white rounded-xl shadow-md overflow-hidden h-full flex flex-col">
                                <div className="p-6 flex flex-col h-full">
                                    <div className="w-12 h-12 bg-[#8B4513] rounded-full flex items-center justify-center mb-4">
                                        {program.icon}
                                    </div>
                                    <h3 className="text-xl font-semibold mb-4">{program.title}</h3>
                                    {/* Fixed height for description */}
                                    <div className="h-[3rem] overflow-hidden mb-4">
                                        <p className="text-[#8B4513]">{program.description}</p>
                                    </div>
                                    <button className="text-[#8B4513] border-b-2 border-[#8B4513] pb-1 inline-flex items-center mt-auto">
                                        Learn More <ChevronRight size={16} className="ml-1" />
                                    </button>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Custom Pagination Container */}
                <div className="swiper-pagination !relative !mt-8"></div>
            </div>
        </section>
    );
};

export default ProgramsSection;