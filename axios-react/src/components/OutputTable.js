import React from 'react'

const OutputTable = (props) => {
return(
    (props.repositories)?
        <div>
        <p>No. of Repositories: {props.repositories} </p>
        <p>Blog: {props.blog}</p>
        <p>Repositories URL: {props.repurl}</p> 
        </div> 
        : 
        <div><p> No repositpory exists with this name {props.resetState}</p></div>
    );
}
export default OutputTable;