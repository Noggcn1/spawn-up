'use client';
import PngLogo from '@/assets/img/logo.png';
import Image from 'next/image';
import { MenuMobile } from './mobile';

export const NavBar = () => {
  const menuLeft = [
    {
      numero: '01',
      label: 'Home',
    },
    {
      numero: '02',
      label: 'Quem somos',
    },
    {
      numero: '03',
      label: 'Serviços',
    },
  ];

  const menuRight = [
    {
      numero: '04',
      label: 'Cases de sucesso',
    },
    {
      numero: '05',
      label: 'Equipe',
    },
    {
      numero: '06',
      label: 'Contato',
    },
  ];

  return (
    <nav className="w-full font-interFamily flex justify-between items-end pt-[1.2rem] md:pt-0 md:p-[1.2rem] md:pb-[1.8rem] border-b-[0px] md:border-b-[1px] border-border2">
      <ul className="hidden items-center gap-[1.6rem]  md:flex">
        {menuLeft.map((elem, i) => (
          <li
            key={elem.numero + i}
            className="flex justify-center items-end text-1.0 text-secondary font-normal gap-[0.4rem] hover:text-primary hover:cursor-pointer"
          >
            <span className="text-0.6 text-primary">{elem.numero}.</span>
            {elem.label}
          </li>
        ))}
      </ul>

      <div>
        <Image
          className="w-[4rem] h-[3rem] md:w-[7.8rem] md:h-[5.75rem]"
          src={PngLogo}
          alt=""
        />
      </div>

      <ul className="hidden md:flex items-center gap-[1.6rem]">
        {menuRight.map((elem, i) => (
          <li
            key={elem.numero + i}
            className="flex justify-center items-end text-1.0 text-secondary font-normal gap-[0.4rem] hover:text-primary hover:cursor-pointer"
          >
            <span className="text-0.6 text-primary">{elem.numero}.</span>
            {elem.label}
          </li>
        ))}
      </ul>

      <MenuMobile />
    </nav>
  );
};
