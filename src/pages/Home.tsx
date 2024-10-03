import video from '../assets/video-corte-2.mp4';
import mapa from '../assets/mapa.jpg';
import Footer from '../components/Footer';
import Carroulsel from '../components/Carroulsel';
// import './Home.css';

function Home() {
  return (
    <>
      <div className="w-80/100 m-0 mx-auto">
      
        <div
          className="
            m-0 mx-auto mt-10 mb-176
            rounded-3xl 
            relative 
            flex
            "
        >
          <div
            className="
              ml-10 mt-10
              absolute z-20
              w-45/100
              font-caveat
              "
            >
            <h1 className="font-extrabold text-5xl text-aquamarine" >Bem-vindo ao Studio Keizen!</h1>
            <h2 className="mt-3 text-3xl" >
              Cuidamos de você em um ambiente acolhedor, onde sua 
              <span className="text-4xl text-aquamarine font-bold"> #beleza natural</span> é realçada com 
              técnicas que facilitam o seu dia a dia.
            </h2>
          </div>
          <video
            className="
              w-full 
              h-auto
              absolute
              rounded-xl 
              opacity-40
            "
            width="600"
            autoPlay loop muted
          >
            <source src={video} type="video/mp4"/>
          </video>
        </div>

        <div className="flex items-center">
          <Carroulsel />
          <div className="flex items-center">
            <a
              className="mx-5"
              href="https://www.google.com/maps/place/KEIZEN+by+KEITH+MIAMURA/@-23.6071083,-46.6369541,17z/data=!4m6!3m5!1s0x94ce5a4a3c24cddb:0x8fb38c98f97a70a7!8m2!3d-23.6064437!4d-46.63498!16s%2Fg%2F11c43mvfhr?entry=ttu&g_ep=EgoyMDI0MDkxOC4xIKXMDSoASAFQAw%3D%3D"
              target='_blank'
              rel='noreferrer noopener'
            >
              <img className="rounded-lg w-128"  src={mapa} alt='Mapa' />
            </a>
            <div className='w-144'>
              <h2 className="mb-2 text-lg font-bold text-[#ff6347] underline">Aonde estamos?</h2>
              <p>
                Estamos na rua Afonso Celso, 1679, Vila Mariana. 
                A 700m do <span className='font-bold text-[#ff6347]'>metro Praça da Árvore</span>, 
                leva cerca de 10 minutinhos a pé. Caso esteja de carro, a rua é tranquila 
                e é fácil achar uma vaga.
              </p>
            </div>
          </div>
        </div>
      
      </div>
        <Footer />
    </>
  )
}

export default Home;