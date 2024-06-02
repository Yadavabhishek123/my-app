// creating count atom state

import { atom, selector } from "recoil";

export const CountState = atom({
    key:"Count",
    default:0
});

// Making a selector that is derived form CountState

export const IsEven = selector({ //  we can use this derived state as a real state by all the other methods
    key:"IsEven",
    get:({get})=>{
        const count = get(CountState);
        return count%2;
    }
});
