import React from 'react';
class Meme extends React.Component{
    constructor(props){
        super(props);
        this.handleMemeChange=this.handleMemeChange.bind(this);

    }
    handleMemeChange(){
        this.props.onClick(1,this.props.memeObj);
        
    }
    render(){
        return(
            <img key={this.props.memeObj.id} src={this.props.memeObj.url} alt="" className="meme-display" onClick={this.handleMemeChange}/>
        );
    }
}

export default Meme;
