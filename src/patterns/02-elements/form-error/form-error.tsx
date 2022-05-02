import { StrictReactNode } from '../../../extras/strict-react-children';

export interface FormErrorProps {
  children: StrictReactNode
}

export function FormError(props: FormErrorProps) {
  return <p className="mt-1 text-sm text-red-500">{ props.children }</p>
}
