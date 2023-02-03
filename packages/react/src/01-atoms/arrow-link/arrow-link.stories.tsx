import {JArrowLink} from "./arrow-link";

export default {
    title: "Atoms/Arrow Link",
};

export function RightArrow() {
    return <JArrowLink link="#">Read More</JArrowLink>
}

export function LeftArrow() {
    return <JArrowLink link="#" direction="left">Back</JArrowLink>
}
