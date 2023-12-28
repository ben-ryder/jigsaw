import * as Dialog from '@radix-ui/react-dialog';
import React, { ReactNode } from "react";

import { JIcon } from "@ben-ryder/jigsaw-react";
import { X as CloseIcon } from "lucide-react";

import "../dialog.scss"

export interface JDialogProps {
  open: boolean
  setOpen: (open: boolean) => void
  triggerContent: ReactNode
  heading: string
  description: string
  content: ReactNode
  /** Stop outside pointer clicks/interactions closing the dialog, ESC will still work.  **/
  disableOutsideClose?: boolean
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
      <Dialog.Trigger className="j-dialog__trigger">{props.triggerContent}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Content
          className="j-dialog__popup"
          onPointerDownOutside={handleOutsideCloseBehaviour}
          onInteractOutside={handleOutsideCloseBehaviour}
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
