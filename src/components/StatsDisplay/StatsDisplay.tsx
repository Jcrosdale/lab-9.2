import type { StatsDisplayProps } from '../../types'; // import interfaces

export const StatsDisplay = ({ stats, showReadingTime = true }: StatsDisplayProps ) => {
    
    return (
        <div className="stats-display">
            {/* Render properties inside interface */}

            {/* character count */}
            <h3>Characters</h3>
            <p> {stats.characterCount} </p> 

            {/* word count */}
            <h3>Words</h3>
            <p> {stats.wordCount}</p> 
            
            {/* reading time */}

            {/* Only shows if showReadingTime is true */}
            {showReadingTime && (
                <>
                    <h3>Reading Time</h3>
                    <p> {stats.readingTime} </p>
                </>
            )}
        </div>
    )

} 

export default StatsDisplay;
