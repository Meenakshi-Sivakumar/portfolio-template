import React from 'react';

const EditExpensePage = (props) =>{
    console.log(props)
    return(
    <div>
    Editing the data with id {props.match.param}
    </div>
);
};

export default EditExpensePage;