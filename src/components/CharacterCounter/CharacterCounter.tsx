// Parent Component
import TextInput from "../TextInput/TextInput" // child component
import StatsDisplay  from "../StatsDisplay/StatsDisplay" // child component
//import type { CharacterCounterProps } from '../../types'; // interface
import { useState } from 'react'; // Import useState from React

// CharacterCounter component
function CharacterCounter({ onChange, stats }) {
    const [textChange, setTextChange] = useState(TextInput.onTextChange.initialValue);

    return (
        <div>
          <TextInput
          onTextChange={onChange}
          />
          <StatsDisplay
          stats={StatsDisplay.stats}
          />  

        
        </div>
    )
}

export default CharacterCounter;

// Create a CharacterCounter component that combines the above components and manages the state.

//export interface CharacterCounterProps {
    //minWords?: number;
    //maxWords?: number;
    //targetReadingTime?: number; // in minutes
//}
