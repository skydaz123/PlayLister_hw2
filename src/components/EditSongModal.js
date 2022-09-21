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
            let songToEdit = {
                title: "",
                artist: "",
                youTubeId: ""
            }
            console.log(songIndex + " hello ");
            if (songIndex !== null) {
                let songList = currentList.songs;
                let song = songList[songIndex];
                console.log(songList, song);
                songToEdit = {
                    title: song.title,
                    artist: song.artist,
                    youTubeId: song.youTubeId,
                };
            }

            return (
                <div className="modal" id="edit-song-modal" data-animation="slideInOutLeft">
                    <div className="modal-root" id='verify-edit-list-root'>
                        <div className="modal-north">
                            Edit Song
                        </div>
                        <div className="modal-center" style={{ display: "flex", flexDirection: "column" }}>
                            <div class="modal-title-content" style={{ fontSize: "30px", display: "flex", flexDirection: "row" }}>
                                <div style={{padding: "20px"}}>Title:</div>
                                <input type="text" id="edit-song-title" style={{ width: "300px", height: "40px", fontSize: "30px" }} value={songToEdit.title} onChange={this.handleTitleChange} />
                            </div>
                            <div className="modal-artist-content" style={{ fontSize: "30px", display: "flex", flexDirection: "row" }}>
                                <div style={{padding: "20px"}}>Artist:</div>
                                <input type="text" id="edit-song-artist" style={{ width: "300px", height: "40px", fontSize: "30px" }} value={songToEdit.artist} onChange={this.handleArtistChange} />
                            </div>
                            <div className="modal-youtubeid-content" style={{ fontSize: "30px", display: "flex", flexDirection: "row" }}>
                                <div style={{padding: "20px"}}>YouTube Id:</div>
                                <input type="text" id="edit-song-youtube" style={{ width: "300px", height: "40px", fontSize: "30px" }} value={songToEdit.youTubeId} onChange={this.handleYouTubeIdChange} />
                            </div>
                        </div>
                        <div className="modal-south">
                            <input type="button" id="edit-song-confirm-button" className="modal-button" value='Confirm' onClick={() => editSongCallback(songIndex, this.state.title, this.state.artist, this.state.youTubeId, songToEdit)} />
                            <input type="button" id="edit-song-cancel-button" className="modal-button" value='Cancel' onClick={hideEditSongCallback} />
                        </div>
                    </div>
                </div>
            )
        }
    }
};