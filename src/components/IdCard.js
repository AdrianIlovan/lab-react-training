import React from "react";


const IdCard = (props) => {
    return(
        <div className="container">
            <div>Last Name:{props.lastname}</div>
            <div>First Name:{props.firstname}</div>
            <div>Gender:{props.gender}</div>
            <div>Height:{props.height}</div>
            <div>DOB:{props.birth.toString()}</div>
            <img src={props.picture} alt="Profile Picture" />
        </div>
    )
}
export default IdCard;