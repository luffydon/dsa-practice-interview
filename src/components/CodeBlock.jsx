import React from 'react';

export const CodeBlock = ({ code, className = '' }) => {
  return (
    <div className={`bg-gray-800 rounded-lg p-4 mt-4 ${className}`}>
      <pre className="overflow-x-auto">
        <code className="language-js text-sm leading-relaxed text-gray-100">
          {code}
        </code>
      </pre>
    </div>
  );
};