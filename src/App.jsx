import { useState, useEffect } from 'react';

import { Board } from './Board';
import 'bootstrap/dist/css/bootstrap.min.css';

import './css/main.scss';

function App() {
  const [isDesktop, setDesktop] = useState(window.innerWidth > 576);
  const updateMedia = () => {
    setDesktop(window.innerWidth > 576);
  };

  useEffect(() => {
    window.addEventListener('resize', updateMedia);
    return () => window.removeEventListener('resize', updateMedia);
  });

  return isDesktop ? <Board /> : <p styles={{
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: `translate(-50%, -50%)`,
  }}>Please use a device with a larger screen.</p>
}

export default App;
