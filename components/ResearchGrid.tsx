import React from 'react';
import { PublicationItem } from '../types';

interface ResearchGridProps {
    items: PublicationItem[];
}

const ResearchGrid: React.FC<ResearchGridProps> = ({ items }) => {
    return (
        <div className="grid gap-6">
            {items.map((pub) => (
                <div
                    key={pub.id}
                    className="bg-white p-6 rounded-xl border border-[#edefec] shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row gap-4 justify-between items-start md:items-center"
                >
                    <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                            <span className="bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded">
                                {pub.type}
                            </span>
                            <span className="text-sm text-text-muted font-medium">
                                {pub.date}
                            </span>
                        </div>
                        <h3 className="text-lg font-bold text-text-dark leading-tight mb-2">
                            {pub.title}
                        </h3>
                        {pub.conference && (
                            <p className="text-sm text-text-muted italic">
                                {pub.conference}
                            </p>
                        )}
                        {!pub.conference && pub.journal && (
                            <p className="text-sm text-text-muted italic">
                                {pub.journal}
                            </p>
                        )}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto mt-2 md:mt-0">
                        {pub.downloadUrl ? (
                            <a
                                href={pub.downloadUrl}
                                download
                                className="flex items-center justify-center gap-2 bg-text-dark text-white text-xs font-bold px-4 py-2 rounded-lg hover:bg-black transition-colors"
                            >
                                <span className="material-symbols-outlined text-sm">download</span>
                                PDF
                            </a>
                        ) : (
                            <button disabled className="flex items-center justify-center gap-2 bg-gray-100 text-gray-400 text-xs font-bold px-4 py-2 rounded-lg cursor-not-allowed">
                                <span className="material-symbols-outlined text-sm">download</span>
                                PDF
                            </button>
                        )}

                        <a
                            href={pub.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 border border-primary text-primary text-xs font-bold px-4 py-2 rounded-lg hover:bg-primary hover:text-white transition-colors"
                        >
                            <span>{pub.doi ? 'Ver DOI / ResearchGate' : 'ResearchGate'}</span>
                            <span className="material-symbols-outlined text-sm">open_in_new</span>
                        </a>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ResearchGrid;
