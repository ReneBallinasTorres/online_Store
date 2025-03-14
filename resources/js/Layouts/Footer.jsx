import React from "react";

export default function Footer() {
    return (
        <footer className="bg-blue-300 text-black py-6" id="contacto">
            <div className="container mx-auto px-4">
                {/* Sección Principal del Footer */}
                <div className="text-center ">
                    {/* Logo y Descripción */}
                    <div className="mb-4 md:mb-0">
                        <h2 className="text-xl font-semibold text-white">MovilStore</h2>
                        <p className="text-sm mt-2">Una aplicación web innovadora para simplificar tu vida.</p>
                    </div>
                </div>

                    {/* Sección de Contacto */}
                    <div className="flex flex-col md:flex-row justify-between mb-4">
                        {/* Información de Contacto */}
                        <div className="mb-4 md:w-1/2">
                            <h3 className="text-lg font-semibold text-white">Contacto</h3>
                            <p><strong>Email:</strong> movilstore@gmail.com</p>
                            <p><strong>Teléfono:</strong> +52 993 194 3163</p>
                            <div className="flex space-x-4 mt-4">
                                {/* Íconos de redes sociales */}
                                <a href="https://facebook.com" target="_blank" className="text-blue-700 hover:text-blue-900">
                                    <i className="bi bi-facebook"></i>
                                </a>
                                <a href="https://twitter.com" target="_blank" className="text-blue-400 hover:text-blue-600">
                                    <i className="bi bi-twitter-x"></i>
                                </a>
                                <a href="https://whatsapp.com" target="_blank" className="text-green-500 hover:text-green-700">
                                    <i className="bi bi-whatsapp"></i>
                                </a>
                                <a href="https://instagram.com" target="_blank" className="text-pink-500 hover:text-pink-700">
                                    <i className="bi bi-instagram"></i>
                                </a>
                            </div>
                        </div>

                        {/* Mapa de Ubicación */}
                        <div className="mb-4 md:w-1/2">
                            <h3 className="text-lg font-semibold text-white">Ubicación</h3>
                            <div className="mt-2">
                                {/* API de Google Maps (Iframe) */}
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3803.1209973115083!2d-92.82912522578546!3d17.596988296735063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85edbefcbfffffff%3A0xb58684250317044!2sCentral%20De%20Tacotalpa!5e0!3m2!1ses-419!2smx!4v1732295580827!5m2!1ses-419!2smx"
                                    width="100%" height="200" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
                            </div>
                        </div>
                    </div>

                    {/* Sección del Equipo de Desarrollo */}
                    <div className="text-center">
                        <h3 className="text-lg font-semibold text-white mb-4">Equipo de Desarrollo</h3>
                        <div className="flex flex-wrap justify-center gap-6 items-center pb-4">
                            {/* Miembros del equipo */}
                            {["erika.jfif", "cindy.jpg", "abnier.jfif", "adrian.jfif"].map((img, index) => (
                                <div key={index} className="flex flex-col items-center text-center">
                                    <img src={`/img/${img}`} alt={`Desarrollador ${index + 1}`} className="w-16 h-16 rounded-full mb-2" />
                                    <span className="text-sm text-white">{`Desarrollador ${index + 1}`}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Sección de Derechos Reservados */}
                    <div className="mt-4 text-center text-sm border-t border-gray-700 pt-4">
                        <p>&copy; 2024 MovilStore. Todos los derechos reservados.</p>
                    </div>
            </div>
        </footer>
    )
}
