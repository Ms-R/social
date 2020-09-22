import React from 'react';
import cllass from './Content.module.css';
import MyPost from './My_Posts/MyPost';



const Content = (props) => {
    

    return (
        <div className={cllass.content}>
            <img src="https://i.playground.ru/p/dcynOoDLMz7h8xGhxRMeiA.jpeg" alt=""/>
            <div>
                ava_description
            </div>
            <div>
               <MyPost 
               PostData = {props.PostData} 
               AddPostState={props.AddPostState} 
               NewPostText={props.NewPostText}
               UpdateNewPost={props.UpdateNewPost}
               />
            </div>
            
        </div>
    )
}

export default Content;