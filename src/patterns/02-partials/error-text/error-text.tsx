import { StrictReactNode } from '../../../extras/strict-react-children';

export interface ErrorTextProps {
  children: StrictReactNode,
}

export function ErrorText(props: ErrorTextProps) {
  return <p className="mt-1 text-sm text-br-red-500">{ props.children }</p>
}
