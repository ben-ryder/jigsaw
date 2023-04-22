import {JArrowLink} from "./arrow-link";

export default {
    title: "Atoms/Links/Arrow Link",
};

export function RightArrow() {
    return <JArrowLink href="#">Read More</JArrowLink>
}

export function LeftArrow() {
    return <JArrowLink href="#" direction="left">Back</JArrowLink>
}
