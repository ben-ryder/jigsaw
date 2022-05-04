import { StrictReactNode } from '../../../extras/strict-react-children';
import { ComponentProps } from 'react';
import classNames from 'classnames';

// Heading 0
export interface H0Props extends ComponentProps<'h1'> {
  children: StrictReactNode,
}
export function H0(props: H0Props) {
  const { className, ...passThroughProps } = props;
  const processedClassName = classNames("text-7xl font-extrabold", className);

  return <h1 className={processedClassName} {...passThroughProps} />
}

// Heading 1
export interface H1Props extends ComponentProps<'h1'> {
  children: StrictReactNode,
}
export function H1(props: H1Props) {
  const { className, ...passThroughProps } = props;
  const processedClassName = classNames("text-5xl font-extrabold", className);

  return <h1 className={processedClassName} {...passThroughProps} />
}

// Heading 2
export interface H2Props extends ComponentProps<'h2'> {
  children: StrictReactNode,
}
export function H2(props: H2Props) {
  const { className, ...passThroughProps } = props;
  const processedClassName = classNames("text-4xl font-extrabold", className);

  return <h2 className={processedClassName} {...passThroughProps} />
}

// Heading 3
export interface H3Props extends ComponentProps<'h3'> {
  children: StrictReactNode,
}
export function H3(props: H3Props) {
  const { className, ...passThroughProps } = props;
  const processedClassName = classNames("text-3xl font-extrabold", className);

  return <h3 className={processedClassName} {...passThroughProps} />
}

// Heading 4
export interface H4Props extends ComponentProps<'h4'> {
  children: StrictReactNode,
}
export function H4(props: H4Props) {
  const { className, ...passThroughProps } = props;
  const processedClassName = classNames("text-2xl font-extrabold", className);

  return <h4 className={processedClassName} {...passThroughProps} />
}

// Heading 5
export interface H5Props extends ComponentProps<'h5'> {
  children: StrictReactNode,
}
export function H5(props: H5Props) {
  const { className, ...passThroughProps } = props;
  const processedClassName = classNames("text-xl font-extrabold", className);

  return <h5 className={processedClassName} {...passThroughProps} />
}

// Heading 6
export interface H6Props extends ComponentProps<'h6'> {
  children: StrictReactNode,
}
export function H6(props: H6Props) {
  const { className, ...passThroughProps } = props;
  const processedClassName = classNames("text-xl font-extrabold", className);

  return <h6 className={processedClassName} {...passThroughProps} />
}
