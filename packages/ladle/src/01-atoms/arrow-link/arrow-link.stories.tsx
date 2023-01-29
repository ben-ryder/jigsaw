import {ArrowLink} from "./arrow-link";

export default {
    title: "Components/Arrow Link",
};

export function RightArrow() {
    return <ArrowLink link="#">Read More</ArrowLink>
}

export function LeftArrow() {
    return <ArrowLink link="#" direction="left">Back</ArrowLink>
}
