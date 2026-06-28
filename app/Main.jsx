"use client"
import Image from "next/image";
import Hero from "./components/Hero";
import "./globals.css";
import { store } from "./store/store";
import { Provider } from "react-redux";
export default function Main() {
  return (
    <>
    <Provider store={store}>
     <Hero></Hero>

    </Provider>
    </>
  );
}
