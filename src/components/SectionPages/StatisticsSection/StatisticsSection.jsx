import React from "react";
import { UserPlus, ThumbsUp, Users, Award, ArrowUpRight } from "lucide-react";

const StatisticsSection = () => {
    return (
        <section className="w-full bg-white py-16 px-4 md:px-8 lg:px-12 relative overflow-hidden">
            {/* Subtle background pattern */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-96 h-96 bg-black/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-black/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Top section: heading + description */}
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
                    <div className="max-w-2xl">
                        <div className="flex items-center gap-3 mb-5">
                            <div className="w-10 h-0.5 bg-black"></div>
                            <span className="uppercase text-black/60 text-xs tracking-[0.2em] font-medium">
                                Our Impact
                            </span>
                        </div>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl text-black leading-[1.1] font-light tracking-tight">
                            Know More About
                            <br />
                            <span className="font-bold">Our Success</span>
                        </h2>
                    </div>
                    <p className="text-black/50 max-w-md text-sm leading-relaxed lg:text-right">
                        Bring to the table win-win survival strategies to ensure
                        proactive domination. At the end of the day, going forward,
                        a new normal.
                    </p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-black/10 rounded-2xl overflow-hidden border border-black/5">

                    <StatItem
                        icon={<UserPlus size={28} strokeWidth={1.5} />}
                        value="2,879"
                        label="Patients Recovered"
                        trend="+12%"
                    />

                    <StatItem
                        icon={<ThumbsUp size={28} strokeWidth={1.5} />}
                        value="100%"
                        label="Satisfaction Rate"
                        trend="Excellent"
                    />

                    <StatItem
                        icon={<Users size={28} strokeWidth={1.5} />}
                        value="27+"
                        label="Therapists & Staff"
                        trend="Growing"
                    />

                    <StatItem
                        icon={<Award size={28} strokeWidth={1.5} />}
                        value="17"
                        label="Industry Awards"
                        trend="Recognized"
                    />

                </div>

                {/* Bottom decorative line */}
                <div className="mt-12 flex items-center gap-6">
                    <div className="flex-1 h-px bg-black/10"></div>
                    <span className="text-black/20 text-xs tracking-[0.3em] uppercase font-medium">
                        Trusted Worldwide
                    </span>
                    <div className="flex-1 h-px bg-black/10"></div>
                </div>
            </div>
        </section>
    );
};

const StatItem = ({ icon, value, label, trend }) => {
    return (
        <div className="group bg-white p-8 transition-all duration-300 hover:bg-black/5 relative">
            <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                    <div className="text-black/70 group-hover:text-black transition-colors duration-300">
                        {icon}
                    </div>
                    <div>
                        <h3 className="text-3xl md:text-4xl font-bold text-black tracking-tight">
                            {value}
                        </h3>
                        <p className="text-black/40 text-xs uppercase tracking-wider mt-0.5 font-medium">
                            {label}
                        </p>
                    </div>
                </div>
                <span className="text-black/30 text-xs font-medium bg-black/5 px-2.5 py-1 rounded-full whitespace-nowrap group-hover:bg-black/10 transition-colors">
                    {trend}
                </span>
            </div>

            {/* Hover accent line */}
            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-500 group-hover:w-full"></div>
        </div>
    );
};

export default StatisticsSection;