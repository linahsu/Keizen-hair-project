import whatsappIcon from '../assets/64px-WhatsApp_icon.png';
import instragramIcon from '../assets/—Pngtree—instagram logo icon_3588821.png'
// import './Footer.css';

function Footer() {
  const whatsappLink = 'https://wa.me/5511978149428';
  const instagramLink = 'https://www.instagram.com/keizenhair?igsh=MzNsdDdmaTg5ZjEy';

  return (
    <footer className="mt-10">
      <div className='
        fixed flex 
        bottom-0 md:top-0 right-0
        justify-end 
        mr-[2%] md:mr-[13%]
        md: mt-[12%]
        mb-3
        '
      >
        <a className='mr-3' href={instagramLink} target="_blank">
          <img src={instragramIcon} alt='Instagram Icon' width="65"/>
        </a>
        <a href={whatsappLink} target="_blank">
          <img src={whatsappIcon} alt='Whatsapp Icon' />
        </a>
      </div>

      <div className='
        flex flex-col md:flex-row 
        md:justify-around 
        items-center 
        text-center
        text-[20px] md:text-[17px]
        text-black 
        bg-whitesmoke
        p-5 md:p-0.5
        '
      >
        <p>Rua Afonso Celso, 1679 - Vila Mariana</p>
        <p>Telefone: (11) 5572-4625</p>
        <p>Whatsapp: (11) 97814-9428</p>
      </div>

      <p className='flex justify-center mt-3 mb-24 md:mb-3 text-xs'>&copy; 2024 Lina Hsu. Todos os direitos reservados.</p>
    </footer>
  );
}

export default Footer;
