import LogoPNG from '@/assets/img/logo.png';
import { SVGInsta } from '@/assets/svgC/insta';
import { SVGLink } from '@/assets/svgC/linkedin';
import { SVGYtb } from '@/assets/svgC/ytb';
import Image from 'next/image';

export const Footer = () => {
  return (
    <div className="mt-[4.5rem] md:mt-[12.5rem] bg-[#17171B] md:h-[27rem] flex items-start md:items-end justify-center pt-[1.5rem] md:pt-0 pb-[2.6rem] md:pb-[3.1rem] pl-[2.4rem] md:pl-0">
      <div className="max-w-[88.5rem] w-full flex flex-col">
        <div className="hidden md:flex justify-between items-center pl-4 pr-4">
          <div>
            <Image src={LogoPNG} alt="logo" className="w-[16rem]" />
          </div>
          <div className="flex flex-col gap-[1.6rem]">
            <p className="text-secondary font-interFamily text-1.1 lg:text-1.3 leading-8 max-w-[33.8rem]  lg:max-w-[43.8rem]">
              Deseja dar o próximo passo em direção ao sucesso da sua companhia
              ou projeto pessoal? Nosso time está preparado para atender suas
              necessidades.
            </p>
            <button className="w-[14rem] h-[3.4rem] flex justify-center items-center bg-[#28F5BE] text-background font-interFamily text-1.1 shadow-green rounded-[0.3rem]">
              Contate-nos
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-[4.3rem] md:gap-0 md:flex-row justify-between md:items-center md:pt-[2.3rem] md:border-t-[1px] md:border-border2 md:mt-[4.6rem] pl-4 pr-4">
          <div className="flex flex-col md:flex-row gap-[1rem] ">
            <p className="text-secondary font-interFamily text-1.0 md:text-1.1 inline-block pr-2 md:border-r-[1px] md:border-secondary">
              Junte-se a nós
            </p>
            <div className="flex flex-col md:flex-row gap-[0.8rem]">
              <div className="text-0.8 lg:text-1.0 text-[#7B7B7B] hover:text-[#28F5BE] stroke-[#7B7B7B] hover:stroke-[#28F5BE] hover:cursor-pointer flex gap-2 items-center">
                <SVGInsta className="w-[1.5rem] h-[1.5rem]" />
                <p>Instagram</p>
              </div>
              <div className="text-0.8 lg:text-1.0 text-[#7B7B7B] hover:text-[#28F5BE] stroke-[#7B7B7B] hover:stroke-[#28F5BE] hover:cursor-pointer flex gap-2 items-center">
                <SVGLink className="w-[1.5rem] h-[1.5rem]" />
                <p>Linkedin</p>
              </div>
              <div className="text-0.8 lg:text-1.0 text-[#7B7B7B] hover:text-[#28F5BE] stroke-[#7B7B7B] hover:stroke-[#28F5BE] hover:cursor-pointer flex gap-2 items-center">
                <SVGYtb className="w-[1.5rem] h-[1.5rem]" />
                <p>Youtube</p>
              </div>
            </div>
          </div>
          <div>
            <p className="text-gray font-interFamily text-1.0 lg:text-1.1">
              @ 2023 Spawn Up - Todos os direitos reservados
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
