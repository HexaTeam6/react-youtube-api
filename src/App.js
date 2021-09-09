import React from 'react';
import { Grid } from '@material-ui/core';
import youtube from './api/youtube';

import { SearchBar, VideoDetail } from './components';

class App extends React.Component {
    state = {
        videos: [],
        selectedVideo: null,
    }

    handleSubmit = async (searchTerm) => {
        const response = await youtube.get('search', {
            params: {
                part: 'snippet',
                maxResults: 5,
                key: 'AIzaSyAK-R94k759fpLV__WQ1VweeJuCDz8sRiM',
                q: searchTerm,
            }
        });

        this.setState({
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        });
    }

    render() {
        const { selectedVideo } = this.state;

        return(
            <Grid justifyContent="center" container spacing={10}>
                <Grid item xs={12}>
                    <Grid container spacing={10}>
                        <Grid item xs={12}>
                            <SearchBar onFormSubmit={this.handleSubmit}/>
                        </Grid>
                        <Grid item xs={8}>
                            <VideoDetail video={selectedVideo}/>
                        </Grid>
                        <Grid item xs={4}>
                            { /* Video list */ }
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

export default App;