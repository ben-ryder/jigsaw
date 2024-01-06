import * as Dialog from '@radix-ui/react-dialog';
import React, { CSSProperties, ReactNode } from "react";

import { X as CloseIcon } from "lucide-react";

import { JIcon } from "../../../01-atoms/icons/icon.js";

export interface JDialogProps {
  open: boolean
  setOpen: (open: boolean) => void
  triggerContent: ReactNode
  heading: string
  description: string
  content: ReactNode
  /** Stop outside pointer clicks/interactions closing the dialog, ESC will still work.  **/
  disableOutsideClose?: boolean
  // Allow custom styles to be supplied, useful for things like settings specific or maximum dimensions.
  // todo: allow for specific dimension props instead of exposing style?
  style?: CSSProperties
}

export function JDialog(props: JDialogProps) {
  function handleOutsideCloseBehaviour(e: Event) {
    if (props.disableOutsideClose) {
      e.preventDefault()
    }
  }

  return (
    <Dialog.Root
      // @ts-ignore
      className="j-dialog"
      open={props.open}
      onOpenChange={props.setOpen}
    >
      <Dialog.Trigger className="j-dialog__trigger" asChild>{props.triggerContent}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Content
          className="j-dialog__popup"
          onPointerDownOutside={handleOutsideCloseBehaviour}
          onInteractOutside={handleOutsideCloseBehaviour}
          style={props.style}
        >

          <div className="j-dialog__inner">
            <div className="j-dialog__content">
              {props.content}
            </div>

            <div className="j-dialog__header">
              <Dialog.Title className="j-dialog__title">{props.heading}</Dialog.Title>
              <Dialog.Description className="j-hidden j-dialog__description">
                {props.description}
              </Dialog.Description>
              <Dialog.Close className="j-dialog__close">
                <JIcon size="md"><CloseIcon /></JIcon>
              </Dialog.Close>
            </div>
          </div>

        </Dialog.Content>

        <Dialog.Overlay className="j-dialog__overlay" />
      </Dialog.Portal>
    </Dialog.Root>
  );
}
