import React from 'react';
import './App.css';
import Copyclip from './copyClip_RP';
import Post_RP from './post_RP';


function App_RP() {
  return (
    <div>
     <Copyclip render={copyToClipboard => <Post_RP copyToClipboard={copyToClipboard} />} />
        </div>
    );
}

export default App_RP;