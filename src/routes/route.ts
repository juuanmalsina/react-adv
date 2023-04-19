import { lazy } from "react";
import { NoLazy } from "../01-Lazyload/Pages/NoLazy";

type JSXComponent = () => JSX.Element;

interface routesProps {
  to: string;
  path: string;
  Component: React.LazyExoticComponent<() => JSX.Element> | JSXComponent;
  name: string;
}

const LazyLayout = lazy(() => import(/* webpackChunkName: "LazyLayout" */"../01-Lazyload/Layout/LazyLayout"));

export const routes: routesProps[] = [
  {
    to: "/lazyload/",
    path: "/lazyload/*",
    Component: LazyLayout,
    name: "Lazy Layout",
  },
  {
    to: "/no-lazy",
    path: "/no-lazy",
    Component: NoLazy,
    name: "No Lazy",
  },
];
