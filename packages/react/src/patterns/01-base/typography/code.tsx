import { StrictReactNode } from '../../../extras/strict-react-children';
import { ComponentProps } from 'react';

// Pre
export interface PreProps extends ComponentProps<'pre'> {
  children: StrictReactNode,
}
export function Pre(props: PreProps) {
  return <pre {...props}/>
}


// Code
export interface CodeProps extends ComponentProps<'code'> {
  children: StrictReactNode,
}
export function Code(props: CodeProps) {
  return <code {...props}/>
}
