// Parent Component
import TextInput from "../TextInput/TextInput" // child component
import StatsDisplay  from "../StatsDisplay/StatsDisplay" // child component
import type { CharacterCounterProps } from '../../types'; // interface
import { useState } from 'react'; // Import useState from React

// CharacterCounter component
// Receives a props object from CharacterCounterProps
function CharacterCounter( props: CharacterCounterProps) {
    // const [textChange, setTextChange] = useState();

    // state holding the stats object
    // [currentValue, setterFunction]
    // starting value is 0 for each property
    const [stats, setStats] = useState({characterCount: 0, wordCount: 0, readingTime: 0});


    // function is the callback that's handed to TextInput
    // TextInput calls it with the typed text.
    function onChange(text) {
        //console.log('Hello from character counter')
        //console.log(text.length)

        // words
        const newArr = text.split(' ') // splits the text into an array at each space
        //console.log(newArr.length)
        // results in an array

        // Reading time
        let time = newArr.length/3 // 3 words per minute
        console.log(time.toFixed(0)) // Returns a string, not a number

        // Create a new object matching TextStats shape
        const statObject = {
            characterCount: text.length, // count characters
            wordCount: newArr.length, // word count set after text.split
            readingTime: Math.floor(time) // Rounds down, anything under 1 min shows 0

        } 
        
        //console.dir(statObject)

        // Overall flow
        // Stores the new stats, which triggers a re-render to StatsDisplay
        // text -> statObject -> stats
        setStats(statObject)
        
        //setTextChange(text)
    }

    return (
        <div>
          {/* Renders the input 
          Passing onChange as the onTextChange prop is the callback
          Parent is providing the function, the child is calling it
          */}
          <TextInput
          onTextChange={onChange}
          />
          {/* Renders the display 
          Passes the state down as stats prop
          */}
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
