import React, { Component } from 'react';

export default class DeleteSongModal extends Component {

    render() {
        const { currentList, songIndex, hideDeleteSongModalCallback, deleteSongCallback } = this.props;
        if (currentList === null){
            return (
                <div id="delete-song-modal"></div>
            )
        }
        else{
            let songToDelete = {
                title: "",
                artist: "",
                youTubeId: ""
            }
            console.log(songIndex + " hello ");
            if (songIndex !== null){
            let songList = currentList.songs;
            let song = songList[songIndex];
            console.log(songList, song);
            songToDelete = {
            title: song.title,
            artist: song.artist,
            youTubeId: song.youTubeId,
            };
        }
            return (
                <div 
                    className="modal" 
                    id="delete-song-modal" 
                    data-animation="slideInOutLeft">
                        <div className="modal-root" id='verify-delete-song-root'>
                            <div className="modal-north">
                                Delete Song?
                            </div>
                            <div className="modal-center">
                                <div className="modal-center-content">
                                    Are you sure you wish to permanently delete {songToDelete.title}?
                                </div>
                            </div>
                            <div className="modal-south">
                                <input type="button" 
                                    id="delete-song-confirm-button" 
                                    className="modal-button" 
                                    onClick={() => deleteSongCallback(songIndex, songToDelete)}
                                    value='Confirm' />
                                <input type="button" 
                                    id="delete-song-cancel-button" 
                                    className="modal-button" 
                                    onClick={hideDeleteSongModalCallback}
                                    value='Cancel' />
                            </div>
                        </div>
                </div>
            )
        }
    }
};