import React from 'react';
import { CodeBlock } from './CodeBlock';
import { ProblemAccordion } from './ProblemAccordion';

export const PatternContent = ({ pattern }) => {
  return (
    <div className="content-section">
      <h2 className="text-4xl font-bold text-white mb-6">{pattern.title}</h2>
      
      <div className="prose prose-invert max-w-none">
        <h3 className="text-xl mb-2 text-white">The Core Idea</h3>
        <p className="text-gray-400 leading-relaxed mb-8">{pattern.coreIdea}</p>
        
        <h3 className="text-xl mb-2 text-white mt-8">When to Use This Pattern: Key Signals</h3>
        <ul className="list-disc list-inside text-gray-400 space-y-2 mb-8">
          {pattern.whenToUse.map((signal, index) => (
            <li key={index}>{signal}</li>
          ))}
        </ul>

        {pattern.template && (
          <>
            <h3 className="text-xl mb-2 text-white mt-8">The General Template</h3>
            <CodeBlock code={pattern.template} />
          </>
        )}

        <h3 className="text-2xl font-bold border-b border-gray-700 pb-2 mb-6 mt-12 text-white">
          Problems in Action
        </h3>
        
        <div className="space-y-4">
          {pattern.problems.map((problem) => (
            <ProblemAccordion key={problem.id} problem={problem} />
          ))}
        </div>
      </div>
    </div>
  );
};