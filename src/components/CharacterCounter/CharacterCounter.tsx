// Parent Component
import TextInput from "../TextInput/TextInput" // child component
import StatsDisplay  from "../StatsDisplay/StatsDisplay" // child component
import type { CharacterCounterProps } from '../../types'; // interface
import { useState } from 'react'; // Import useState from React

// CharacterCounter component
function CharacterCounter( props: CharacterCounterProps) {
    // const [textChange, setTextChange] = useState();

    const [stats, setStats] = useState({characterCount: 0, wordCount: 0, readingTime: 0});


    
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

        const statObject = {
            characterCount: text.length,
            wordCount: newArr.length,
            readingTime: Math.floor(time) // Math.floor

        } 
        
        console.dir(statObject)
        // text -> statObject -> stats
        setStats(statObject)
        
        //setTextChange(text)
    }



    return (
        <div>
          <TextInput
          onTextChange={onChange}
          />
          <StatsDisplay
          stats={stats}
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
