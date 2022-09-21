import jsTPS_Transaction from "../common/jsTPS.js"

export default class DeleteSong_Transaction extends jsTPS_Transaction {
    constructor(initApp, initSongIndex, initOriginalSong) {
        super();
        this.app = initApp;
        this.songIndex = initSongIndex;
        this.originalSong = initOriginalSong;
    }

    doTransaction() {
        this.app.executeDeleteSong(this.songIndex);
    }
    
    undoTransaction() {
        this.app.insertSong(this.songIndex, this.originalSong);
    }
}