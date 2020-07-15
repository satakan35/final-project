import React from 'react';

function SearchResultCard(props) {
        //JSX
        return (
            <div className="card">
                <h2>{props.jobtitle}</h2>
                <h3>{props.company}</h3>
                <h4>{props.formattedLocationFull}</h4>
                <p>{props.snipped}</p>
                <p>Posted: {props.date}</p>
                <a href={props.url}>Apply</a>
            </div>
        );
    }

export default SearchResultCard;