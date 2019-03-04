import React from 'react';
import { connect } from 'react-redux';
import { v4 } from 'uuid'; 

function AddSong(props){
    let _title = null;
    let _artist = null;
    let _songArray = null;

    function handleNewSongFormSubmission(event){
        const {dispatch} = props;
        event.preventDefault();
        const action = {
            type: 'ADD_SONG',
            id: v4(),
            title: _title.value,
            artist: _artist.value,
            songId: v4(),
            songArray: _songArray.value,
            arrayPosition:0
        };
        dispatch(action);

        _artist.value ='';
        _title.value='';
        _songArray.value='';
    }

    return (
        <div>
            <form onSubmit={handleNewSongFormSubmission}>
                <p>Enter Title: </p>
                <input type='text' id='title' ref={(input) => {_title=input;}} placeholder ='enter title' /> 
                <br />
                <p>Enter Artist: </p>
                <input type='text' id='artist' ref={(input) => {_artist=input;}} placeholder ='enter artist' /> 
                <br />
                <p>Enter Lyrics: </p>
                <textarea type='text' id='songArray' ref={(input) => {_songArray=input;}} placeholder ='enter songLyrics' /> 
                <br />
                <button type='submit'>Add! </button>
            </form>
        </div>
    )
}

export default connect()(AddSong);