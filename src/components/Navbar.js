//import '../index.css';

export default function Navbar() {
  return (
    <div class="flex flex-col items-center text-center py-20 md:py-32 bg-[url('https://cdn.hytale.com/5e7ba4c63c9a2a00106793cc_128___simple_camp.jpg')] bg-cover bg-center bg-no-repeat backdrop-blur-xs">
        <h1 class="text-5xl md:text-6xl font-bold text-white my-8">🐉- Dragons</h1>
        <p class="text-sm md:text-base text-white max-w-xl mb-6">
            Comunidad Oficial | Explora, juega y comparte🤝 Ambiente respetuoso y amigable🎲 Participa y Gana premios en eventos
        </p>
        <a class="group inline-block rounded-full bg-linear-to-r from-pink-500 via-red-500 to-yellow-500 p-0.5 transition hover:scale-110 hover:shadow-xl" href="#">
            <span class="block rounded-full bg-white px-8 py-3 text-sm font-medium ">
                Empieza a jugar
            </span>
        </a>
    </div>
  );
}