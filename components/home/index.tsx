import PngPessoas from '@/assets/img/Pessoas.png';
import { SvgMonstro } from '@/assets/svgC/monstro';
import Image from 'next/image';
import {
  TransactionBottom,
  TransactionLeft,
  TransactionRight,
} from '../transactions/up';

export const Home = () => {
  return (
    <div className="mt-[3.7rem] mb-[4.5rem] md:mt-[7.4rem] md:mb-[7.7rem] relative flex flex-col items-center">
      <div className="flex gap-[5rem] items-center ">
        <div>
          <div className="flex flex-col gap-[2.2rem]  md:w-[40.5rem] mb-[2.2rem] md:mb-[2.95rem]">
            <TransactionRight>
              <h2 className="text-1.6 md:text-3.4 text-secondary font-orbitronFamily font-normal">
                O céu nunca será o nosso maior objetivo
              </h2>
            </TransactionRight>

            <TransactionRight>
              <p className="font-interFamily text-gray text-1 leading-[1.6rem] md:text-[1.25rem] md:leading-[2rem]">
                Transformamos ideias em realidade digital, impulsionando o
                futuro com criatividade e paixão. Junte-se a nós, onde o
                impossível se torna possível.
              </p>
            </TransactionRight>

            <TransactionRight>
              <div className="flex items-center gap-[0.6rem]">
                <div>
                  <Image
                    className="w-[4rem] md:w-[8.3rem] h-4  md:h-[2.2rem]"
                    src={PngPessoas}
                    alt=""
                  />
                </div>

                <p className="font-interFamily text-[0.75rem] md:text-[1.25rem] text-secondary">
                  Mais de 100 clientes atendidos
                </p>
              </div>
            </TransactionRight>
          </div>
          <TransactionRight>
            <button className="bg-primary text-buttonForeground font-interFamily text-1.1 md:text-1.2 p-[0.58rem] w-full md:w-[15.6rem] h-[3.75rem] rounded-[0.3rem] shadow-green">
              Descobrir
            </button>
          </TransactionRight>
        </div>

        <div className="hidden xl:block right-6 z-[-1] opacity-50 xl:opacity-100">
          <TransactionBottom rotate={{ x: 10, y: 150, z: 0 }}>
            <SvgMonstro />
          </TransactionBottom>
        </div>
      </div>
    </div>
  );
};
