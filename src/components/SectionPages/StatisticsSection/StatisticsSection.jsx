import React, { useState } from "react";
import { Plus, ArrowUpRight } from "lucide-react";

const faqs = [
    {
        question: "Do I need a doctor's referral to book a session?",
        answer:
            "No referral needed. You can book directly with a PhysioCentric therapist, and we'll loop in your doctor with a progress note if it's useful for your case.",
    },
    {
        question: "What should I bring to my first appointment?",
        answer:
            "Wear or bring comfortable clothing that lets us assess the area involved, along with any prior scans, X-rays, or reports. We'll handle the paperwork on-site.",
    },
    {
        question: "How many sessions will I actually need?",
        answer:
            "It depends on the condition, but most plans run 4 to 8 sessions. After your first assessment, we'll give you a realistic timeline instead of an open-ended commitment.",
    },
    {
        question: "Can you help with recovery after surgery?",
        answer:
            "Yes, post-surgical rehab is one of our core programs. We coordinate with your surgeon's protocol and build a phased plan to rebuild strength and range of motion safely.",
    },
    {
        question: "Is physiotherapy covered by insurance?",
        answer:
            "Most major insurers cover physiotherapy in full or in part. Share your policy details when you book and our front desk will confirm your coverage before your first visit.",
    },
    {
        question: "What if I don't feel better after a few sessions?",
        answer:
            "We reassess every few sessions by design. If progress stalls, we adjust the plan, bring in a senior therapist, or refer you onward, rather than repeating what isn't working.",
    },
];

const FaqSection = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const toggle = (index) => {
        setOpenIndex((prev) => (prev === index ? -1 : index));
    };

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
                                PhysioCentric FAQ
                            </span>
                        </div>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl text-black leading-[1.1] font-light tracking-tight">
                            Questions Before
                            <br />
                            <span className="font-bold">You Recover</span>
                        </h2>
                    </div>
                    <p className="text-black/50 max-w-md text-sm leading-relaxed lg:text-right">
                        Recover, Restore, Rebuild — everything you need to know before
                        your first session at PhysioCentric. Can't find your answer?
                        Reach out and we'll walk you through it.
                    </p>
                </div>

                {/* FAQ list */}
                <div className="rounded-2xl overflow-hidden border border-black/10 bg-black/10 gap-px grid">
                    {faqs.map((faq, index) => (
                        <FaqItem
                            key={index}
                            index={index}
                            question={faq.question}
                            answer={faq.answer}
                            isOpen={openIndex === index}
                            onToggle={() => toggle(index)}
                        />
                    ))}
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

const FaqItem = ({ index, question, answer, isOpen, onToggle }) => {
    return (
        <div className="group bg-white transition-colors duration-300 hover:bg-black/5 relative">
            <button
                onClick={onToggle}
                aria-expanded={isOpen}
                className="w-full text-left p-8 flex items-start justify-between gap-6 focus:outline-none focus-visible:ring-2 focus-visible:ring-black/40 rounded-lg"
            >
                <div className="flex items-start gap-4">
                    <span className="text-black/30 text-xs font-medium mt-1.5 tabular-nums">
                        {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-lg md:text-xl font-semibold text-black tracking-tight">
                        {question}
                    </h3>
                </div>
                <Plus
                    size={22}
                    strokeWidth={1.5}
                    className={`shrink-0 text-black/50 group-hover:text-black transition-transform duration-300 ${
                        isOpen ? "rotate-45" : "rotate-0"
                    }`}
                />
            </button>

            <div
                className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
            >
                <div className="overflow-hidden">
                    <p className="text-black/50 text-sm leading-relaxed pl-12 pr-14 pb-8">
                        {answer}
                    </p>
                </div>
            </div>

            {/* Hover accent line */}
            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-500 group-hover:w-full"></div>
        </div>
    );
};

export default FaqSection;