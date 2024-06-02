// creating count atom state

import { atom } from "recoil";

const CountState = atom({
    key:"Count",
    default:0
});

export default CountState;
