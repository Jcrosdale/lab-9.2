// Parent Component
import React from 'react';
import TextInput from "../TextInput/TextInput" // child component
import StatsDisplay  from "../StatsDisplay/StatsDisplay" // child component
import type { CharacterCounterProps } from '../../types'; // interface

// CharacterCounter component
function CharacterCounter() {

    return (
        <div>
            <TextInput></TextInput>
            <StatsDisplay></StatsDisplay>

        
        </div>
    )
}


// Create a CharacterCounter component that combines the above components and manages the state.

export interface CharacterCounterProps {
    minWords?: number;
    maxWords?: number;
    targetReadingTime?: number; // in minutes
}
