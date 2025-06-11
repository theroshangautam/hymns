import React, { useState, useEffect } from 'react';
import List from './list';
import LyricxViewer from './lyricxViewer';
import Hymns from './assets/Hymns';

const App = () => {
  const [selectedKey, setSelectedKey] = useState(null);
  const [selectedTitle, setSelectedTitle] = useState(null);

  // 🧠 Dynamically update the page title
  useEffect(() => {
    if (selectedTitle) {
      document.title = `${selectedTitle.title}`;
    } else if (selectedKey) {
      document.title = `${selectedKey}`;
    } else {
      document.title = 'Hymns';
    }
  }, [selectedKey, selectedTitle]);

  return (
    <main className="max-w-3xl mx-auto p-4 space-y-6" role="main">
      {/* Category selection */}
      {!selectedKey && (
        <section aria-label="Category selection">
          <h1 className="text-2xl font-bold mb-4">Select a Category</h1>
          <div className="space-y-2">
            {Object.keys(Hymns).map((key, index) => (
              <div key={index}>
                <button
                  onClick={() => setSelectedKey(key)}
                  className="w-full text-left bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                  {key}
                </button>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Title list */}
      {selectedKey && !selectedTitle && (
        <section aria-label="titles">
          <button
            onClick={() => {
              setSelectedKey(null);
              setSelectedTitle(null);
            }}
            className="text-sm text-blue-600 underline mb-4"
          >
            ← Back to categories
          </button>
          <List
            items={Hymns[selectedKey]}
            onSelect={(title) => setSelectedTitle(title)}
          />
        </section>
      )}

      {/* Lyrics view */}
      {selectedTitle && (
        <section aria-label="Lyrics view">
          <button
            onClick={() => setSelectedTitle(null)}
            className="text-sm text-blue-600 underline mb-4"
          >
            ← Back to titles
          </button>
          <LyricxViewer title={selectedTitle} />
        </section>
      )}
    </main>
  );
};

export default App;
