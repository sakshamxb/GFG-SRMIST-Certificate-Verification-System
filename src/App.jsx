import React, { useState } from 'react';
import './App.css';

const dataValues = [
  {
    name: "Saksham Bhardwaj",
    code: "RA2211026030122"
  },
  {
    name: "Trial",
    code: "123"
  }
];

function verifyStudent(value, setResult) {
  let found = false;
  for (let i = 0; i < dataValues.length; i++) {
    if (dataValues[i].code === value) {
      setResult(`Certificate Verified for ${dataValues[i].name}`);
      found = true;
      break;
    }
  }
  
  if (!found) {
    setResult('Certificate Unauthorised!');
  }
}

function App() {
  const [verificationResult, setVerificationResult] = useState('');

  function extractCode() {
    const code = document.getElementById("code");
    const value = code.value;
    verifyStudent(value, setVerificationResult);
  }

  return (
    <>
      <div>
        <h1 id="h">Verify Certificates</h1>
        <input type="text" placeholder="Verification Code" id="code" />
        <p></p>
        <button id="verify" onClick={extractCode}>Verify</button>
      </div>
        <p id="result">{verificationResult}</p>
    </>
  );
}

export default App;
