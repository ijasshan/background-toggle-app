import React, { useState } from 'react';

const BackgroundColorToggle = () => {
  const [isBackgroundDark, setIsBackgroundDark] = useState(false);

  const handleToggle = () => {
    setIsBackgroundDark((prevValue) => !prevValue);
  };

  const backgroundColor = isBackgroundDark ? '#333' : '#fff';
  const textColor = isBackgroundDark ? '#fff' : '#333';

  return (
    <div
      style={{
        backgroundColor,
        color: textColor,
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '2rem',
        textAlign: 'center',
        cursor: 'pointer',
      }}
      onClick={handleToggle}
    >
      <button>Toggle Background</button>
    </div>
  );
};

export default BackgroundColorToggle;
