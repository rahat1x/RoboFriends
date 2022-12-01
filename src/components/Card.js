import React from "react";

const Card = ({id , name , email}) => {
    return (
        <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 tc">


            <img height={200} width={200} src={`https://robohash.org/${id}?200x200`} alt="Robots"/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;
