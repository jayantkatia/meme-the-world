import React from 'react';
import { FaHome,FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
    constructor(props){
        super(props);
        this.handleClickMemes=this.handleClickMemes.bind(this);

    }
    handleClickMemes(){
        this.props.onClick(0,null);
    }
    render() {
        return (
            <nav className="nav">
                <Link to="/home" >
                    <FaHome />
                </Link>
                
                <Link to="/search">
                   <div onClick={this.handleClickMemes}>
                    <FaSearch/>
                    </div>
               </Link>
            </nav>
        );
    }
}
export default Navbar;