import React, {useState} from 'react';
import Myform from './components/form';
import HelloApiButton from './components/jsoncall';
import ResumeForm from './components/resumeForm';
import ResponseBox from './components/responseBox';

function App() {

  const [responseData, setResponseData] = useState(null);
  return (
    <>
 <ResumeForm onResult={setResponseData} />
 <ResponseBox data ={responseData}/>

 </>

  
  );
}

export default App;
