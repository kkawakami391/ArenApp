import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-cream px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text Content - Left */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight">
            Cuida de tu bebe con{" "}
            <span className="bg-gradient-to-r from-brown via-orange-400 to-green bg-clip-text text-transparent">
              ArenApp
            </span>
          </h1>
          <p className="mt-6 text-xl text-gray-700 max-w-2xl">
            Registra el peso, las comidas, el sueño y el desarrollo de tu
            pequeño en un solo lugar. Todo lo que necesitas para seguir el
            crecimiento de tu bebé.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center md:justify-start gap-4">
            <button className="px-8 py-4 bg-brown text-white font-medium rounded-lg hover:bg-opacity-90 transition duration-300 shadow-lg">
              Registrar
            </button>
            <button className="px-8 py-4 bg-light-green text-gray-900 font-medium rounded-lg hover:bg-green transition duration-300 shadow-sm border border-gray-blue">
              Ver Demo
            </button>
          </div>
        </div>

        {/* Image - Right */}
        <div className="relative">
          <div className="relative w-full h-96 md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl border-8 border-gray-blue">
            <Image
              src="/baby_lp.jpg"
              alt="App Dashboard Preview"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          {/* Decorative elements using your palette */}
          <div className="absolute -top-6 -right-6 w-32 h-32 bg-green rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-custom rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        </div>
      </div>
    </div>
  );
}
