import {JTextLink, JTextLinkProps} from "./text-link";
import {LinkHelper} from "../link-handler";

export default {
    title: "Atoms/Links/Text Link",
};

export function Default() {
    return <JTextLink href="/">Read More</JTextLink>
}



export function AsProp() {
    return <JTextLink href="/" as={LinkHelper}>Read More</JTextLink>
}