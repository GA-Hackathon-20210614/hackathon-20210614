import React from 'react';
import ClassFeed from '../../../components/ClassFeed/ClassFeed';
import "./Body.scss";

export default function Body({classes}) {
    return (
        <div>
            <ClassFeed classes={classes} />
        </div>
    )
};
