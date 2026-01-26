import React from 'react';
import { TimelineItem } from '../../types';

interface TimelineProps {
    items: TimelineItem[];
}

const Timeline: React.FC<TimelineProps> = ({ items }) => {
    return (
        <div className="relative border-l-2 border-primary/20 ml-4 md:ml-6 pl-8 space-y-12">
            {items.map((item, index) => (
                <div key={index} className="relative group">
                    {/* Dot */}
                    <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-white border-4 border-primary transition-transform group-hover:scale-125"></div>

                    <div>
                        <span className="text-sm font-bold text-primary bg-primary/10 px-3 py-1 rounded-full mb-3 inline-block">
                            {item.year}
                        </span>
                        <h3 className="text-xl font-bold text-text-dark mb-1">
                            {item.title}
                        </h3>
                        {item.institution && (
                            <h4 className="text-lg text-accent-blue font-semibold mb-3">
                                {item.institution}
                            </h4>
                        )}
                        {item.description && (
                            <div className="bg-white p-6 rounded-2xl border border-[#edefec] shadow-sm hover:shadow-md transition-all">
                                <p className="text-text-muted leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Timeline;
