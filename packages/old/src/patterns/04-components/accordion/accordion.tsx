import {AccordionItem, AccordionItemProps} from "./accordion-item";


export interface AccordionProps {
  items: AccordionItemProps[]
}

export function Accordion(props: AccordionProps) {
  return (
    <ul className="border-b border-br-blueGrey-600">
      {props.items.map(item => (
        <AccordionItem key={item.title} {...item} />
      ))}
    </ul>
  )
}