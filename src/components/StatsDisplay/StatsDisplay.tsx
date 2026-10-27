import type { StatsDisplayProps } from '../../types'; // import interfaces

export const StatsDisplay = ({ stats, showReadingTime = true }: StatsDisplayProps) => {

    const totalSeconds = Math.round(stats.readingTime * 60);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = ('0' + (totalSeconds % 60)).slice(-2);

    return (
        <div className="stats-display grid grid-cols-1 text-center" aria-live="polite">
            <div className="p-3 rounded-lg bg-gray-100">
                {/* Render properties inside interface */}

                {/* character count */}
                <h3 className="text-sm text-gray-500">Characters</h3>
                <p> {stats.characterCount} </p>

            </div>

            <div className="p-3 rounded-lg bg-gray-100">
                {/* word count */}
                <h3 className="text-sm text-gray-500">Words</h3>
                <p> {stats.wordCount}</p>
            </div>

            {/* reading time */}

            {/* Only shows if showReadingTime is true */}
            {showReadingTime && (
                <div className="p-3 rounded-lg bg-gray-100">
                    <h3 className="text-sm text-gray-500">Reading Time</h3>
                    <p> {minutes}:{seconds} </p>
                </div>
            )}
        </div>
    )

}

export default StatsDisplay;
