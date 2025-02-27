import React from "react";

export default function Header() {
    return (
        <header className="bg-blue-300 text-white p-10">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
                <div className="text-center md:text-left mb-4 md:mb-0">
                    <h1 className="text-3xl font-bold">Bienvenidos a Nuestra Plataforma</h1>
                    <p className="text-indigo-700 mt-2">Innovación, calidad y confianza en cada paso</p>
                </div>
            </div>
        </header>
    )
}