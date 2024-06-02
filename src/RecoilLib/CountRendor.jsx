import React from 'react'
import { useRecoilValue } from 'recoil'
import ButtonRender from './ButtonRendor';
import CountState from "./atoms/countvar"

export default function CountRender() {
    const Count = useRecoilValue(CountState); // here we only our atoms value so we use useRecoilValue
    return (
        <div>
            <div>Count:- {Count}</div>
            <ButtonRender/>
        </div>
    )
}
