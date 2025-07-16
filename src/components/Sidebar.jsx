import React from 'react';
import { patterns } from '../data';

export const Sidebar = ({ activePattern, onPatternChange }) => {
  return (
    <aside className="w-full md:w-64 bg-gray-900 border-b md:border-b-0 md:border-r border-gray-700 flex-shrink-0">
      <div className="p-5 border-b border-gray-700">
        <h1 className="text-xl font-bold text-white">JS Patterns Playbook</h1>
      </div>
      
      {/* Desktop Navigation */}
      <nav className="p-2 hidden md:block">
        {patterns.map((pattern) => (
          <button
            key={pattern.id}
            onClick={() => onPatternChange(pattern.id)}
            className={`nav-link block font-semibold px-4 py-2 rounded-md hover:bg-gray-700 w-full text-left transition-colors duration-200 ${
              activePattern === pattern.id ? 'bg-gray-700 text-white' : 'text-gray-300'
            }`}
          >
            {pattern.title}
          </button>
        ))}
      </nav>
      
      {/* Mobile Navigation */}
      <div className="p-4 md:hidden">
        <select
          value={activePattern}
          onChange={(e) => onPatternChange(e.target.value)}
          className="w-full bg-gray-800 border border-gray-600 rounded-md py-2 px-3 text-white"
        >
          {patterns.map((pattern) => (
            <option key={pattern.id} value={pattern.id}>
              {pattern.title}
            </option>
          ))}
        </select>
      </div>
    </aside>
  );
};