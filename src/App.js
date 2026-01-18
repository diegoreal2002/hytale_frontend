import './App.css';
import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <img src="./section-separator.webp" alt="Logo" />
      <main className='bg-black pt-10'>
        <div class="mx-auto max-w-prose text-center">
          <h2 class="text-4xl font-bold text-white sm:text-5xl">
          Nuestro
          <strong class="text-indigo-600"> servidor </strong>
          </h2>
        </div>
        <div class="mx-auto max-w-7xl px-4 py-14 pb-20 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 gap-12 md:grid-cols-2">
            <div class="flex items-start gap-4 rounded-lg border border-gray-200 p-6 dark:border-gray-700">
              <div class="inline-flex rounded-lg text-3xl bg-gray-100 p-3 text-gray-700 dark:bg-gray-800 dark:text-gray-200">
                ⚔️
              </div>

              <div>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Modalidades competitivas</h3>

                <p class="mt-2 text-pretty text-gray-700 dark:text-gray-200">
                  Modalidades diseñadas para partidas rápidas, intensas y balanceadas, con reglas claras y sin ventajas injustas.
                </p>
              </div>
            </div>

            <div class="flex items-start gap-4 rounded-lg border border-gray-200 p-6 dark:border-gray-700">
              <div class="inline-flex text-3xl rounded-lg bg-gray-100 p-3 text-gray-700 dark:bg-gray-800 dark:text-gray-200">
               🏆
              </div>

              <div>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Torneos organizados</h3>

                <p class="mt-2 text-pretty text-gray-700 dark:text-gray-200">
                  Eventos competitivos periódicos con premios en efectivo, beneficios dentro del servidor y reconocimiento.
                </p>
              </div>
            </div>

            <div class="flex items-start gap-4 rounded-lg border border-gray-200 p-6 dark:border-gray-700">
              <div class="inline-flex text-3xl rounded-lg bg-gray-100 p-3 text-gray-700 dark:bg-gray-800 dark:text-gray-200">
                📊
              </div>

              <div>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Rankings y clasificación</h3>

                <p class="mt-2 text-pretty text-gray-700 dark:text-gray-200">
                  Sistema de ranking basado en rendimiento real. Cada partida cuenta.
                </p>
              </div>
            </div>

            <div class="flex items-start gap-4 rounded-lg border border-gray-200 p-6 dark:border-gray-700">
              <div class="inline-flex text-3xl rounded-lg bg-gray-100 p-3 text-gray-700 dark:bg-gray-800 dark:text-gray-200">
                🛡️
              </div>

              <div>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Juego justo</h3>

                <p class="mt-2 text-pretty text-gray-700 dark:text-gray-200">
                  Moderación constante y reglas estrictas para garantizar competencia limpia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer/>
    </div>
  );
}

export default App;
