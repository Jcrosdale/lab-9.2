// Parent Component
import TextInput from "../TextInput/TextInput" // child component
import StatsDisplay  from "../StatsDisplay/StatsDisplay" // child component
import type { CharacterCounterProps } from '../../types'; // interface
import { useState } from 'react'; // Import useState from React

// CharacterCounter component
function CharacterCounter( props: CharacterCounterProps) {
    const [textChange, setTextChange] = useState();

    const [stats, setStats] = useState({});
    
    function onChange(text) {
        console.log('Hello from character counter')
        console.log(text.length)
        // words
        const newArr = text.split(' ')
        console.log(newArr.length)
        // results in an array

        // Reading time
        let time = newArr.length/3
        console.log(time.toFixed(0))

        
        
        
        setTextChange(text)
    }



    return (
        <div>
          <TextInput
          onTextChange={onChange}
          />
          {/* <StatsDisplay
          stats={StatsDisplay.stats}
          />   */}
          <p> {textChange} </p>
        
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
