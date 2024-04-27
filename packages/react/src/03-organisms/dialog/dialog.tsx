import { Dialog } from '@headlessui/react'
import {CSSProperties, ReactNode, useCallback} from "react";

import { X as CloseIcon } from "lucide-react";

import { JIcon } from "../../01-atoms/icons/icon.js";

export type JDialogRole = 'dialog' | 'alertdialog'

export interface JDialogProps {
  role?: JDialogRole
  isOpen: boolean
  setIsOpen: (open: boolean) => void
  title: string
  description: string
  content: ReactNode
  /** Stop outside pointer clicks/interactions closing the dialog, ESC will still work.  **/
  disableOutsideClose?: boolean
  // Allow custom styles to be supplied, useful for things like settings specific or maximum dimensions.
  // todo: allow for specific dimension props instead of exposing style?
  style?: CSSProperties
}

export function JDialog({
  role,
  isOpen,
  setIsOpen,
  title,
  description,
  content,
  disableOutsideClose,
  style,
}: JDialogProps) {

  const onClose = useCallback(() => {
    if (!disableOutsideClose) {
      setIsOpen(false)
    }
  }, [setIsOpen, disableOutsideClose])

  return (
    <Dialog
      className="j-dialog"
      open={isOpen}
      onClose={onClose}
      role={role}
    >
      <Dialog.Panel
        className="j-dialog__popup"
        style={style}
      >
        <div className="j-dialog__inner">
          <div className="j-dialog__content">{content}</div>

          <div className="j-dialog__header">
            <Dialog.Title className="j-dialog__title">{title}</Dialog.Title>
            <Dialog.Description className="j-hidden j-dialog__description">
              {description}
            </Dialog.Description>

            {role !== 'alertdialog' && (
              <button
                className="j-dialog__close"
                onClick={() => {
                  setIsOpen(false)
                }}
              >
                <JIcon size="md"><CloseIcon/></JIcon>
              </button>
            )}
          </div>
        </div>
      </Dialog.Panel>

      <div className='j-dialog__overlay'/>
    </Dialog>
  )
}
