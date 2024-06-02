import {React, useContext} from 'react'
import MyContext from "./context";
import ButtonRender from './ButtonRender';

export default function CountRender() {
    const {Count} = useContext(MyContext);
    return (
        <div>
            <div>Count:- {Count}</div>
            <ButtonRender/>
        </div>
    )
}
