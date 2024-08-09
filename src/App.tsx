import React from 'react';

import Theme from './components/Theme';
import WordlePlay from './pages/WordlePlay';
import ResetStyle from './themes/reset';

function App() {
  return (
    <div className="App">
      <ResetStyle />
      <Theme>
        <WordlePlay />
      </Theme>
    </div>
  );
}

export default App;
