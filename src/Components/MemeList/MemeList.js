import React from 'react';
import Meme from '../Meme/Meme'
class MemeList extends React.Component {
   
    render() {


        return (

            <>
                {this.props.memes.map(meme => {
                    return <Meme memeObj={meme} onClick={this.props.onClick} />;
                })};

            </>
        );
    }
}

export default MemeList;
