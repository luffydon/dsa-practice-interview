import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { CodeBlock } from './CodeBlock';

export const ProblemAccordion = ({ problem }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-gray-800/50 rounded-lg border border-gray-700">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left p-4 hover:bg-gray-800/70 transition-colors duration-200"
      >
        <span className="font-semibold text-lg text-white">{problem.title}</span>
        <ChevronRight 
          className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
            isOpen ? 'rotate-90' : ''
          }`}
        />
      </button>
      
      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
        isOpen ? 'max-h-[5000px]' : 'max-h-0'
      }`}>
        <div className="p-4 border-t border-gray-700">
          <h4 className="font-semibold text-white mb-2">Problem Deconstruction</h4>
          <p className="text-gray-400 mb-4 leading-relaxed">{problem.description}</p>
          
          <h4 className="font-semibold text-white mb-2">Solution Walkthrough</h4>
          <p className="text-gray-400 mb-4 leading-relaxed">{problem.solution}</p>
          
          <CodeBlock code={problem.code} />
          
          <p className="mt-4 text-gray-300">
            <strong>Time Complexity:</strong> {problem.timeComplexity} | {' '}
            <strong>Space Complexity:</strong> {problem.spaceComplexity}
          </p>
        </div>
      </div>
    </div>
  );
};