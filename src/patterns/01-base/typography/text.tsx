import { StrictReactNode } from '../../../extras/strict-react-children';
import { ComponentProps } from 'react';

// Paragraph
export interface PProps extends ComponentProps<'p'> {
  children: string | StrictReactNode,
}
export function P(props: PProps) {
  return <p {...props}/>
}

// Bold (b)
export interface BProps extends ComponentProps<'b'> {
  children: StrictReactNode,
}
export function B(props: BProps) {
  return <b {...props}/>
}

// Strong
export interface StrongProps extends ComponentProps<'strong'> {
  children: StrictReactNode,
}
export function Strong(props: StrongProps) {
  return <strong {...props}/>
}

// Italic (i)
export interface IProps extends ComponentProps<'i'> {
  children: StrictReactNode,
}
export function I(props: IProps) {
  return <i {...props}/>
}

// Emphasis (em)
export interface EmProps extends ComponentProps<'em'> {
  children: StrictReactNode,
}
export function Em(props: EmProps) {
  return <em {...props}/>
}

