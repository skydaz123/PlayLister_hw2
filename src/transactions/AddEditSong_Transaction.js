import jsTPS_Transaction from "../common/jsTPS.js"

export default class EditSong_Transaction extends jsTPS_Transaction {
    constructor(initApp, initSongIndex, initOriginalSong, initTitle, initArtist, initYouTubeId) {
        super();
        this.app = initApp;
        this.songIndex = initSongIndex;
        this.originalSong = initOriginalSong;
        this.title = initTitle;
        this.artist = initArtist;
        this.youTubeId = initYouTubeId;
    }

    doTransaction() {
        this.app.editSong(this.title, this.artist, this.youTubeId, this.songIndex);
    }
    
    undoTransaction() {
        this.app.insertSong(this.songIndex, this.originalSong);
    }
}