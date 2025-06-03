import { useState, useEffect } from 'react';
import Landing from './components/landing';

function App() {

  // UseState(false) returns an array with two items
  // This is matched by our const declaration
  const [isDark, setIsDark] = useState(false);

  // Load from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('darkMode');

    let initialDarkMode;

    // If darkmode is active from localStorage
    if (saved) {
      
      // Convert true string to boolean val
      initialDarkMode = JSON.parse(saved);
    } else {

      // Else start with lightmode
      initialDarkMode = false;
    }

    // Updates the isDark value
    setIsDark(initialDarkMode);
    
    // Apply the class immediately
    if (initialDarkMode) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {

    // Get the opposite value of isDark
    const newDarkMode = !isDark;
    
    // Updates the value to opposite
    setIsDark(newDarkMode);

    // Updates local storage, change boolean to string
    localStorage.setItem('darkMode', JSON.stringify(newDarkMode));

    // Simple toggle
    document.documentElement.classList.toggle('dark');
  };

  return (
    
    // Toggle class
    // We then pass the values and function deeper down, since our darkmode toggle button
    // is in navbar.tsx
    <div className={isDark ? 'dark' : ''}> 
      <Landing toggleDarkMode={toggleDarkMode} isDark={isDark} />
    </div>
  );
}

export default App;