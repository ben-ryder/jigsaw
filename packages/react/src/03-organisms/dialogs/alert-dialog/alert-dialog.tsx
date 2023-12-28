import * as AlertDialog from '@radix-ui/react-alert-dialog';
import React from "react";

import { JIcon } from "@ben-ryder/jigsaw-react";
import { X as CloseIcon } from "lucide-react";

import "../dialog.scss"
import * as Dialog from "@radix-ui/react-dialog";
import { JDialogProps } from "../dialog/dialog.js";

// Alert dialog will never close due to outside interaction, so omit that prop
export interface JAlertDialogProps extends Omit<JDialogProps, "disableOutsideClose"> {
  showCloseButton?: boolean
}

export function JAlertDialog(props: JAlertDialogProps) {
  return (
    <AlertDialog.Root
      // @ts-ignore
      className="j-dialog"
      open={props.open}
      onOpenChange={props.setOpen}
    >
      <AlertDialog.Trigger className="j-dialog__trigger">{props.triggerContent}</AlertDialog.Trigger>
      <AlertDialog.Portal>
        <AlertDialog.Content
          className="j-dialog__popup"
        >

          <div className="j-dialog__inner">
            <div className="j-dialog__content">
              {props.content}
            </div>

            <div className="j-dialog__header">
              <AlertDialog.Title className="j-dialog__title">{props.heading}</AlertDialog.Title>
              <AlertDialog.Description className="j-hidden j-dialog__description">
                {props.description}
              </AlertDialog.Description>
              {props.showCloseButton &&
                <button onClick={() => {props.setOpen(false)}} className="j-dialog__close">
                  <JIcon size="md"><CloseIcon /></JIcon>
                </button>
              }
            </div>
          </div>

        </AlertDialog.Content>

        <AlertDialog.Overlay className="j-dialog__overlay" />
      </AlertDialog.Portal>
    </AlertDialog.Root>
  );
}
