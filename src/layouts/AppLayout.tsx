import { Footer } from "./partial/footer";
import { Header } from "./partial/header";
import { TypeChild } from "../types";

export function AppLayout(props: { children?: TypeChild }) {
    return <>
        <Header />
        {props.children}
        <Footer />
    </>
}