import {JArrowLink} from "./arrow-link";
import {LinkHelper} from "../link-handler";

export default {
    title: "Atoms/Links/Arrow Link",
};

export function RightArrow() {
    return <JArrowLink href="/">Read More</JArrowLink>
}

export function LeftArrow() {
    return <JArrowLink href="/" direction="left">Back</JArrowLink>
}

export function AsProp() {
    return <JArrowLink href="/" as={LinkHelper}>This is a link</JArrowLink>
}
