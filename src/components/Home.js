import React from "react";
import image from "../IMG_1256.JPEG";

export default function Home() {
    return <main>
        <img src={image} alt="Devil's Lookout" className="absolute object-cover w-full h-full"/>
        <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
            <h1 className="text-6xl text-green-100 font bold cursive leading-none lg:leading-snug home-name">Hello. I'm Kenneth Scribner.</h1>
        </section>
    </main>
}