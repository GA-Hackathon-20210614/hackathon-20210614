import React from 'react';
import ClassFeed from '../../../components/ClassFeed/ClassFeed';
import "./Body.scss";



export default function Body({classes, addClass}) {
    
    return (
        <div>
            <ClassFeed classes={classes} handleClick={addClass} />
        </div>
    )
};
