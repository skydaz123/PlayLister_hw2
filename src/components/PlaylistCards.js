import SongCard from './SongCard.js';
import React from "react";

export default class PlaylistCards extends React.Component {
    render() {
        const { currentList, 
                moveSongCallback, deleteSongCallback, keyNamePairs, markEditSongCallback } = this.props;
        if (currentList === null) {
            return (
                <div id="playlist-cards"></div>
            )
        }
        else {
            return (
                <div id="playlist-cards">
                    {
                        currentList.songs.map((song, index) => (
                            <SongCard
                                id={'playlist-song-' + (index+1)}
                                key={'playlist-song-' + (index+1)}
                                keyNamePairs={keyNamePairs}
                                song={song}
                                index={index}
                                moveCallback={moveSongCallback}
                                deleteSongCallback={deleteSongCallback}
                                markEditSongCallback={markEditSongCallback}
                            />
                        ))
                    }
                </div>
            )
        }
    }
}