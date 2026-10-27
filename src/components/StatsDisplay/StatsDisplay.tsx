import type { StatsDisplayProps } from '../../types'; // import interfaces

export const StatsDisplay = ({ stats, showReadingTime = true }: StatsDisplayProps ) => {
    
    const totalSeconds = Math.round(stats.readingTime * 60);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = ('0' + (totalSeconds % 60)).slice(-2);

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
                    <h3 className="text-sm text-gray-500">Reading Time</h3>
                    <p className="text-2xl font-bold">{minutes}:{seconds} </p>
                </>
            )}
        </div>
    )

} 

export default StatsDisplay;
