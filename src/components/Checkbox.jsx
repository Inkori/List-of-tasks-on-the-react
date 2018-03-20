import React from 'react'

// const Checkbox = React.createClass({
//     propTypes: {
//         initiallyChecked: React.PropTypes.bool.isRequired
//     },

//     getDefualtProps() {
//         return {
//             initiallyChecked: false
//         }
//     }

//     getInitialState() {
//         return {
//             checked: this.props.initiallyChecked
//         };
//     },
//     handleClick(event) {
//         this.setState({
//             checked: !this.state.checked
//         });
        
//     },
//     render() {
//         return (
//                             //second metod// onClick={() => this.handleClick()}
//                             //first metod// onClick={this.handleClick.bind(this)}
//                             //third metod// this.handleClick = this.handleClick.bind(this) @good@ 
//                 <button className="checkbox icon" onClick={this.handleClick}> 
//                     <i className="material-icons">{this.state.checked ? 'check_box' : 'check_box_outline_blank'}</i>
//                 </button>   
//             );
//     }
// }) //Метот не через class


function Checkbox(props) {

   
        return (
                                                    //second metod// onClick={() => this.handleClick()}
                                                    //first metod// onClick={this.handleClick.bind(this)}
                                                    //third metod// this.handleClick = this.handleClick.bind(this) @good@ 
                                                    //onClick={this.handleClick}
                <button className="checkbox icon" onClick={props.onChange}> 
                    <i className="material-icons">{props.checked ? 'check_box' : 'check_box_outline_blank'}</i>
                </button>   
            );

}

Checkbox.propTypes ={
    //если есть класс: initiallyChecked: React.PropTypes.bool.isRequired
    checked: React.PropTypes.bool.isRequired,
    onChange: React.PropTypes.func.isRequired
}


export default Checkbox;