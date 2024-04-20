import { Footer } from "./partial/footer";
import { Header } from "./partial/header";
import { TypeChild } from "../types";
import { ScrollRestoration } from "react-router-dom";

export function AppLayout(props: { children?: TypeChild }) {
    return <>
        <Header />
        {props.children}
        <Footer />
        <ScrollRestoration getKey={(location) => {
            return location.pathname;
        }} />
    </>
}