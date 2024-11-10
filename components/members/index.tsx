import React from 'react';
import DanImage from '@/assets/img/dann.png';
import CesImage from '@/assets/img/ces.png';
import ThiImage from '@/assets/img/thi.png';
import { ImageComponent } from './Image';
import { TransactionBottom } from '../transactions/up';

export const Members = () => {
  const listMembers = [DanImage, CesImage, ThiImage];
  const names = [
    {
      nome: 'Danilo Donato',
      id: 1,
      prof: 'Engenheiro de Dados',
    },
    {
      nome: 'Julio Cesar B.',
      id: 2,
      prof: 'Desenvolvedor Full-Stack',
    },
    {
      nome: 'Thiago March',
      id: 3,
      prof: 'UI Desginer',
    },
  ];

  return (
    <div className="mt-[6rem] text-center lg:text-left lg:mt-[25rem]">
      <TransactionBottom>
        <h2 className="text-secondary font-orbitronFamily text-1.6 md:text-2.5 font-normal leading-normal tracking-[0.25rem]">
          Conheça nosso time
        </h2>
        <p className="text-gray font-interFamily text-1.0 md:text-[1.25rem] font-normal leading-normal">
          Mais que um time, uma familia!
        </p>
      </TransactionBottom>
      <div className="flex relative min-h-[30rem] mt-4 ">
        <div className="flex justify-center lg:justify-between items-center w-full flex-wrap gap-[1rem]">
          {listMembers.map((image, idx) => {
            return (
              <>
                <TransactionBottom>
                  <ImageComponent
                    image={image}
                    key={idx}
                    id={names[idx].id}
                    nome={names[idx].nome}
                    prof={names[idx].prof}
                  />
                </TransactionBottom>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};
