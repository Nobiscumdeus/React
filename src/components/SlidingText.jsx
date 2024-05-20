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

    
      <div className="wrapper flex items-center">
        <div className="static-txt text-fuchsia-800 text-2xl sm:text-2xl md:text-2xl font-medium">I'M</div>
        <div className="ml-4 overflow-hidden">
          <ul className="dynamic-txts">
            <li className="text-white text-2xl sm:text-2xl md:text-2xl font-medium capital tracking-wider">

              {displayedText}
              {showCursor && <span className="cursor animate-blink">|</span>}
            </li>
          </ul>
        </div>
      </div>

  );
};

export default SlidingText;
