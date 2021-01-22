import React from 'react';

const AudioControls = (props) => {
    return(
        <>
            <audio controls>
                <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mpeg" />
            </audio>
        </>
    )
};

export default AudioControls;