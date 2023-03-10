import { Component } from "react";
import './search-box.styles.css'

class SearchBox extends Component{
    render(){
        return(
        <div>
        {/* Filter Search Bar */}
        <input
        className={`search-box ${this.props.className}`}
        type={this.props.type}
        placeholder={this.props.placeholder}
        onChange={this.props.onChangeHandler}
      />
       </div> )
        
    }
}
export default SearchBox;