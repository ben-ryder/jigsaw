# Links
Jigsaw provides a number of link components such as `JTextLink`, `JButtonLink` and `JArrowLink` which all wrap the standard `a` tag.  
When using routing libraries and frameworks it's common to use special link components which integrate with that library or framework, so how can you achieve that behaviour while using the components Jigsaw provides?  

All link components in Jigsaw accept an `as` prop which can be used to add custom functionality when required.  
For example, for `react-router-dom` the `Link` component should be used for internal links to prevent the browser requesting the
new page and breaking the single-page app experience.  
A link helper could be created which renders `Link` for internal links and a regular `a` tag for other links like so:

```tsx
import {JTextLinkProps, JTextLink, JArrowLinkProps, JArrowLink, JButtonLinkProps} from "@ben-ryder/jigsaw-react";
import {Link} from "react-router-dom";

export function LinkHelper(props: JTextLinkProps | JArrowLinkProps | JButtonLinkProps) {
	if (props.href?.startsWith("/")) {
		const {href, ...htmlProps} = props;
		return (
			<Link to={href} {...htmlProps} />
		)
	}

	return (
		<a {...props} />
	)
}

export function Example() {
	return (
		<>
			{/** This link will render using the react-router-dom Link component **/}
			<JTextLink href="/page" as={LinkHelper}>This is an internal link</JTextLink>

			{/** This link will render using the standard anchor tag **/}
			<JArrowLink href="https://jigsaw.benryder.dev" as={LinkHelper}>This is an external link</JArrowLink>
		</>
	)
}
```