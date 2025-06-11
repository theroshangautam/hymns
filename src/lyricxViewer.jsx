import React, { useEffect, useRef } from 'react';

const LyricxViewer = ({ title }) => {
  const headingRef = useRef(null);

  // Automatically focus on hymn title heading
  useEffect(() => {
    if (headingRef.current) {
      headingRef.current.focus();
    }
  }, []);

  return (
    <div className="space-y-6">
      <h2
        ref={headingRef}
        tabIndex={-1}
        className="text-2xl font-bold"
        >
        {title.title}
      </h2>

      {title.chunks.map((chunk, index) => (
        <section key={index}>
          <h3 className="text-lg font-semibold uppercase text-gray-600">
            {chunk.type}
          </h3>
          <div className="ml-4 space-y-1 mt-1">
            {chunk.lines.map((line, lineIndex) => (
              <p key={lineIndex} className="text-gray-800">
                {line}
              </p>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default LyricxViewer;
