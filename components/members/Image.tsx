import Image, { StaticImageData } from 'next/image';
import { SVGModalImage } from '@/assets/svgC/modalImagem';
import { SVGInsta } from '@/assets/svgC/insta';
import { SVGLink } from '@/assets/svgC/linkedin';
import { SVGGithub } from '@/assets/svgC/github';

interface IPropsImageCP {
  image: StaticImageData;
  nome: string;
  prof: string;
  id: number;
}

export const ImageComponent = (props: IPropsImageCP) => {
  return (
    <div className="w-[20rem] md:w-[23rem] h-[24rem] md:h-[28rem] relative">
      <SVGModalImage className="absolute top-0 z-[2] w-[19rem] md:w-[22rem] h-[24rem] md:h-[28rem] p-2" />
      <Image
        className="block absolute top-[0.5px] left-[0.5px] p-3 z-[-1] w-[19rem] md:w-[22rem] h-[24rem] md:h-[28rem] bg-background"
        src={props.image}
        alt="Danilo Donato"
        title="Danilo Donato"
      />

      <div className="absolute z-10 top-[7rem] md:top-[8.6rem] left-[1.65rem] w-[2rem] md:w-[2.5rem] h-[7.8rem] md:h-[9rem] bg-[#17171B] rounded-[0.3rem] flex flex-col items-center justify-center gap-[0.5rem] md:gap-[1.06rem]">
        <SVGInsta className="w-[1.3rem] h-[ 1.3rem] md:w-[1.5rem] md:h-[ 1.5rem] stroke-[#7B7B7B] hover:stroke-[#28F5BE] hover:cursor-pointer" />
        <SVGLink className="w-[1.3rem] h-[ 1.3rem] md:w-[1.5rem] md:h-[ 1.5rem] stroke-[#7B7B7B] hover:stroke-[#28F5BE] hover:cursor-pointer" />
        <SVGGithub className="w-[1.3rem] h-[ 1.3rem] md:w-[1.5rem] md:h-[ 1.5rem] stroke-[#7B7B7B] hover:stroke-[#28F5BE] hover:cursor-pointer" />
      </div>

      <div className="text-left absolute bottom-[4.5rem] z-[2] left-[1.65rem] flex flex-col gap-1 md:gap-[0.3rem]">
        <h1 className="font-interFamily text-secondary text-1.6  font-bold">
          {props.nome}
        </h1>
        <p className="text-[0.7rem] md:text-[0.9rem]">{props.prof}</p>
      </div>

      <div className="absolute h-[1.6rem] w-[5.3rem] flex items-center justify-center bg-bgRed z-[2] bottom-[1.3rem] left-[1.6rem]">
        <span className="font-interFamily text-0.7 md:text-0.9 text-[#F5335B]">
          ID: #{props.id.toString().padStart(4, '0')}
        </span>
      </div>
    </div>
  );
};
