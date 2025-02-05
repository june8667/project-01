// src/App.js
import React from 'react';
import NavigationBar from './components/NavigationBar.js';

const App = () => {
  return (
    <div>
      <NavigationBar />
      <div id="section1" style={{ height: '100vh', backgroundColor: '#f1f1f1', padding: '20px' }}>
        <h2>섹션 1</h2>
        <p>이곳은 섹션 1입니다.</p>
      </div>
      <div id="section2" style={{ height: '100vh', backgroundColor: '#e1e1e1', padding: '20px' }}>
        <h2>섹션 2</h2>
        <p>이곳은 섹션 2입니다.</p>
      </div>
      <div id="section3" style={{ height: '100vh', backgroundColor: '#d1d1d1', padding: '20px' }}>
        <h2>섹션 3</h2>
        <p>이곳은 섹션 3입니다.</p>
      </div>
      <div id="section4" style={{ height: '100vh', backgroundColor: '#c1c1c1', padding: '20px' }}>
        <h2>섹션 4</h2>
        <p>이곳은 섹션 4입니다.</p>
      </div>
    </div>
  );
};

export default App;