import React from 'react';
import cllass from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';






const Dialogs = (props) => {
    
    let DialogComponent = (props) => {
        let path = "/dialogs/" + props.id;
        return (
            <div className={cllass._dialog}>
                <NavLink to={path}>{props.name}</NavLink>
            </div>
        )
    }
    
    let MessageComponent = (props) => {
        return (
            <div className={cllass._message}>
                <div className={cllass._message_item}>
                    {props.message}
                </div>
            </div>
        )
    };


    let DialogComponentMap = props.DialogsData.map((d) => <DialogComponent name={d.name} id={d.id} /> );

    let MessageComponentMap = props.MessageData.map((m) => <MessageComponent message={m.message} id={m.id} />);

    return (
        <div className={cllass._dialogs}>
            <div className={cllass._dialogs_items}>
                {DialogComponentMap}
            </div>
            <div className={cllass._messages}>
                {MessageComponentMap}
            </div>
        </div>
    );
}

export default Dialogs;