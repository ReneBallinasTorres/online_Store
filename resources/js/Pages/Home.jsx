import { useState } from 'react';
import { Head, Link, usePage } from '@inertiajs/react';
import Header from '@/Layouts/Header';

export default function Home() {
    const { auth } = usePage().props; // Obtener la información del usuario autenticado
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            <Head title="Home" />
            <Header />
            <nav className="bg-blue-300 text-black p-2">
                <div className="container mx-auto flex justify-between items-center">
                    {/* Logo */}
                    <img src="/img/LOGO-P.png" alt="Logo" width="70" />

                    {/* Menú de Navegación - Visible en Pantallas Grandes */}
                    <div className="flex justify-center space-x-6">
                        <Link href="/" className="hover:text-gray-700">Inicio</Link>
                        <Link href="/contacto" className="hover:text-gray-700">Contacto</Link>
                    </div>

                    {/* Área de usuario autenticado */}
                    {auth.user ? (
                        <div className="hidden md:flex items-center relative">
                            <button 
                                onClick={() => setIsMenuOpen(!isMenuOpen)} 
                                className="flex items-center focus:outline-none"
                            >
                                <img 
                                    src={auth.user.avatar_url || '/img/iconoUser.png'} 
                                    alt="User Avatar" 
                                    className="w-10 h-10 rounded-full"
                                />
                                <i className="bi bi-chevron-down ml-2 text-white"></i>
                            </button>

                            {isMenuOpen && (
                                <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded shadow-lg">
                                    <div className="flex flex-wrap items-center justify-between bg-white p-4 rounded-lg shadow-lg">
                                        {/* Información del Usuario */}
                                        <div className="flex items-center space-x-2">
                                            <span className="text-blue-500">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A5 5 0 0112 14a5 5 0 016.879 3.804M15 10a3 3 0 11-6 0 3 3 0 016 0zM12 14v6m0 0H6m6 0h6" />
                                                </svg>
                                            </span>
                                            <div className="text-gray-800">
                                                <p className="font-semibold text-sm leading-tight">{auth.user.name}</p>
                                            </div>
                                        </div>

                                        {/* Botón de Cerrar Sesión */}
                                        <form method="POST" action={route('logout')} className="mt-2 sm:mt-0 sm:ml-4">
                                            <input type="hidden" name="_token" value={auth.csrf_token} />
                                            <button 
                                                type="submit" 
                                                className="px-3 py-1 bg-red-500 text-white text-sm font-medium rounded-lg shadow hover:bg-red-600 transition w-full sm:w-auto"
                                            >
                                                Cerrar Sesión
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            )}
                        </div>
                    ) : (
                        // Botones de Inicio de Sesión y Registro para usuarios no autenticados
                        <div className="hidden md:flex space-x-4">
                            <Link href="/login" className="bg-transparent border border-white py-1 px-4 rounded hover:bg-blue-300">
                                Iniciar Sesión
                            </Link>
                            <Link href="/signup" className="bg-blue-600 py-1 px-4 rounded hover:bg-blue-700">
                                Registrarse
                            </Link>
                        </div>
                    )}
                </div>
            </nav>
        </>
    );
}
