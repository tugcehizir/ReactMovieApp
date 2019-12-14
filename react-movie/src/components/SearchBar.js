import React, { Fragment, useState } from 'react';

const SearchBar = () => {
    const [currentValue, setCurrentValue] = useState("");
    const _onClick = () => {
        console.log("currentValue:", currentValue);
    };
    const _onChange = (event) => {
        setCurrentValue(event.target.value);

    };
    return (
        <Fragment>
            <input onChange={_onChange}></input>
            <button onClick={_onClick}>Search!</button>

        </Fragment>
    )
}
//onClick fonksiyonunu çağırdığımız yerde {()=>_onClick} diyerek parametre gönderebiliriz.

//Class Component Mantığı ile 
// class SearchBarClass extends React.Component {
//     constructor(props){
//     super(props);
//     this.state = {
//         currentValue: ""
//     };
//     }
//     _onClick = () => {
//         const { currentValue } = this.state;
//         console.log("currentValueClass:", currentValue);
//     }
//     _onChange = (event) => {
//         this.setState({currentValue: event.target.value
//         });
//     }
//     render() {
//         return(
//         <Fragment>
//             <input onChange={this._onChange}></input>
//             <button onClick={this._onClick}>Search!</button>
//         </Fragment>
//         )
//     }
// }
//Buradan hangisinin adı verilirse o çalışır.
export default SearchBar;