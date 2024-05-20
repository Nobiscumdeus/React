import React, { useEffect, useState } from 'react';

const SlidingText = () => {
  const [dynamicTexts, setDynamicTexts] = useState(["A Budding Physician", "A Software Developer", "CEO Chasfat Project$"]);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const typingInterval = setInterval(() => {
      setShowCursor(false);
      setDisplayedText(dynamicTexts[currentTextIndex].substring(0, displayedText.length + 1));
    }, 200); // Change typing speed here (milliseconds)

    return () => clearInterval(typingInterval);
  }, [currentTextIndex, displayedText, dynamicTexts]);

  useEffect(() => {
    if (!showCursor && displayedText === dynamicTexts[currentTextIndex]) {
      setTimeout(() => {
        setShowCursor(true);
        setTimeout(() => {
          if (currentTextIndex === dynamicTexts.length - 1) {
            setCurrentTextIndex(0);
          } else {
            setCurrentTextIndex(currentTextIndex + 1);
          }
          setDisplayedText('');
        }, 1000); // Change delay between words here (milliseconds)
      }, 1000); // Change delay before cursor blinking here (milliseconds)
    }
  }, [currentTextIndex, displayedText, dynamicTexts, showCursor]);

  return (
<<<<<<< HEAD
    
      <div className="wrapper flex items-center">
        <div className="static-txt text-fuchsia-800 text-2xl sm:text-2xl md:text-2xl font-medium">I'M</div>
        <div className="ml-4 overflow-hidden">
          <ul className="dynamic-txts">
            <li className="text-white text-2xl sm:text-2xl md:text-2xl font-medium capital tracking-wider">
=======
    <div className="header-text relative w-full md:w-100 sm:w-70 sm:p-4 shadow-md rounded-lg p-4 ml-0 md:ml-0 md:mr-auto" style={{ background: '#4b5563' }}>
      <div className="wrapper flex items-center">
        <div className="static-txt text-slate-800 text-3xl sm:text-2xl md:text-3xl font-medium">I'M</div>
        <div className="ml-4 overflow-hidden">
          <ul className="dynamic-txts">
            <li className="text-white text-3xl sm:text-2xl md:text-3xl font-medium uppercase tracking-wider">
>>>>>>> 999ffc3977d08274745bb358d80bc40fd6667582
              {displayedText}
              {showCursor && <span className="cursor animate-blink">|</span>}
            </li>
          </ul>
        </div>
      </div>
<<<<<<< HEAD
    
=======
    </div>
>>>>>>> 999ffc3977d08274745bb358d80bc40fd6667582
  );
};

export default SlidingText;
