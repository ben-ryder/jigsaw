import { Disclosure } from "@headlessui/react";
import {StrictReactNode} from "../../../extras/strict-react-children";
import classNames from "classnames";
import {ChevronDown as ClosedIcon, ChevronUp as OpenedIcon} from "lucide-react";
import {iconSizes} from "../../01-base/icons/icon-defaults";
import React from "react";


export interface AccordionItemProps {
  title: string,
  content: StrictReactNode
}

export function AccordionItem(props: AccordionItemProps) {
  return (
    <Disclosure>
      {({ open }) => (
        <li>
          <Disclosure.Button
            className={classNames(
              "relative block w-full text-left p-2",
              "text-br-whiteGrey-100 border-t border-br-blueGrey-600 hover:bg-br-atom-500 focus:bg-br-atom-500 focus:ring-0 focus:outline-none",
              {
                "border-b": open
              }
            )}
          >
            <span>{props.title}</span>
            {open
              ? <OpenedIcon size={iconSizes.medium} strokeWidth={1} className="absolute top-0 right-0 mr-1 h-full"/>
              : <ClosedIcon size={iconSizes.medium} strokeWidth={1} className="absolute top-0 right-0 mr-1 h-full"/>
            }
          </Disclosure.Button>
          <Disclosure.Panel className="p-2">{props.content}</Disclosure.Panel>
        </li>
      )}
    </Disclosure>
  )
}