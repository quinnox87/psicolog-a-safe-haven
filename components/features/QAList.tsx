import React from 'react';
import { QAItem } from '../../types';

interface QAListProps {
  items: QAItem[];
}

const QAList: React.FC<QAListProps> = ({ items }) => {
  return (
    <div className="qa-list grid md:grid-cols-3 gap-6">
      {items.map((qa) => (
        <div
          key={qa.id}
          className="qa-card bg-background-light p-8 rounded-xl border border-transparent hover:border-primary/20 transition-all"
        >
          <div className="qa-card__category inline-block px-3 py-1 rounded-full bg-accent-blue/10 text-accent-blue text-[10px] font-bold uppercase tracking-wider mb-6">
            {qa.category}
          </div>
          <h4 className="qa-card__question text-lg font-bold mb-4 text-text-dark">
            {`"${qa.question}"`}
          </h4>
          <p className="qa-card__answer text-sm text-text-muted leading-relaxed italic border-l-2 border-primary/30 pl-4">
            {qa.answer}
          </p>
        </div>
      ))}
    </div>
  );
};

export default QAList;
