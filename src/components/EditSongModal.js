import React, { Component } from 'react';

export default class EditSongModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            artist: "",
            youTubeId: ""
        }
    }

    handleTitleChange = (event) => {
        this.setState(prevState => ({
            title: event.target.value,
            artist: prevState.artist,
            youTubeId: prevState.youTubeId
        })
        )
    }

    handleArtistChange = (event) => {
        this.setState(prevState => ({
            title: event.target.value,
            artist: event.target.value,
            youTubeId: prevState.youTubeId
        })
        )
    }

    handleYouTubeIdChange = (event) => {
        this.setState(prevState => ({
            title: event.target.value,
            artist: prevState.artist,
            youTubeId: event.target.value
        })
        )
    }


    render() {
        const { currentList, songIndex, hideEditSongCallback, editSongCallback } = this.props;
        if (currentList === null) {
            return (
                <div id="edit-song-modal"></div>
            )
        }
        else {
            let title = document.getElementById("edit-song-title");
            let artist = document.getElementById("edit-song-artist");
            let youTubeId = document.getElementById("edit-song-youtube");
            let songToEdit = {
                title: "",
                artist: "",
                youTubeId: ""
            }
            if (songIndex !== null) {
                let songList = currentList.songs;
                let song = songList[songIndex];
                songToEdit = {
                    title: song.title,
                    artist: song.artist,
                    youTubeId: song.youTubeId,
                };
                title.value = songToEdit.title;
                artist.value = songToEdit.artist;
                youTubeId.value = songToEdit.youTubeId;
            }
            
            
            return (
                
                <div className="modal" id="edit-song-modal" data-animation="slideInOutLeft">
                    <div className="modal-root" id='verify-edit-list-root'>
                        <div className="modal-north">
                            Edit Song
                        </div>
                        <div className="modal-center" style={{ display: "flex", flexDirection: "column" }}>
                            <div className="modal-title-content" style={{ fontSize: "30px", display: "flex", flexDirection: "row" }}>
                                <div style={{padding: "20px"}}>Title:</div>
                                <input type="text" id="edit-song-title" style={{ width: "300px", height: "40px", fontSize: "30px" }}  />
                            </div>
                            <div className="modal-artist-content" style={{ fontSize: "30px", display: "flex", flexDirection: "row" }}>
                                <div style={{padding: "20px"}}>Artist:</div>
                                <input type="text" id="edit-song-artist" style={{ width: "300px", height: "40px", fontSize: "30px" }} />
                            </div>
                            <div className="modal-youtubeid-content" style={{ fontSize: "30px", display: "flex", flexDirection: "row" }}>
                                <div style={{padding: "20px"}}>YouTube Id:</div>
                                <input type="text" id="edit-song-youtube" style={{ width: "300px", height: "40px", fontSize: "30px" }} />
                            </div>
                        </div>
                        <div className="modal-south">
                            <input type="button" id="edit-song-confirm-button" className="modal-button" value='Confirm' onClick={() => editSongCallback(songIndex, title.value, artist.value, youTubeId.value, songToEdit)} />
                            <input type="button" id="edit-song-cancel-button" className="modal-button" value='Cancel' onClick={hideEditSongCallback} />
                        </div>
                    </div>
                </div>
            )
        }
    }
};