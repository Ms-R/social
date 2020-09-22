import React from 'react';
import cllass from './MyPost.module.css';
import Post from './Post/Post';

//Map


const MyPost = (props) => {
    let PostDataMap = props.PostData.map((pst_data) => <Post messages = {pst_data.message} id = {pst_data.id}/>)


    //Это textarea
    let NewPostElement = React.createRef();

    let AddPost = () => {
        let value = NewPostElement.current.value;
        props.AddPostState(value);
        props.UpdateNewPost('');
    }

    let onPostChange = () => {
        let value = NewPostElement.current.value;
        props.UpdateNewPost(value);
    }
  

    return (
        <div className={cllass.my_post}>
            My Post
            <div>
                <textarea onChange={onPostChange} value={props.NewPostText} ref={NewPostElement}></textarea>
                <div>
                    <button onClick={AddPost}>Добавить</button>
                </div>
            </div>
                {PostDataMap}
        </div>
    )
}


export default MyPost;