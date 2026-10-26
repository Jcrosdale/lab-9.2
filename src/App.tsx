import './App.css';
import { TextInput } from './components/TextInput/TextInput';

function displayApp() {

  // Render
  return (
    <div className="">
      <TextInput 
      onTextChange={}
      
      >

      </TextInput>

      <StatsDisplay
       stats={}
       showReadingTime={}
       >

      </StatsDisplay>
    </div>
  );
}

export default displayApp

