import React from 'react';
import cllass from './Post.module.css';


const Post = (props) => {
    return (
        <div className={cllass._post}>
            <img src="https://cdn.dribbble.com/users/1063215/screenshots/5102634/ave_2x.png" alt=""/>
            {props.messages}
        </div>
    )
}

export default Post;