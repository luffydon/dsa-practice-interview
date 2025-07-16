import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { PatternContent } from './components/PatternContent';
import { patterns } from './data';

function App() {
  const [activePattern, setActivePattern] = useState('arrays-hashing');

  const currentPattern = patterns.find(p => p.id === activePattern) || patterns[0];

  return (
    <div className="min-h-screen bg-gray-900 text-gray-300 font-sans">
      <div className="flex flex-col md:flex-row min-h-screen">
        <Sidebar 
          activePattern={activePattern} 
          onPatternChange={setActivePattern} 
        />
        
        <main className="flex-1 p-6 md:p-10 overflow-y-auto">
          <PatternContent pattern={currentPattern} />
        </main>
      </div>
    </div>
  );
}

export default App;