import Image, { StaticImageData } from 'next/image';

interface ICaseModel {
  client: string;
  tag: {
    color: string;
    name: string;
  };
  desafio: string;
  nomeClient: string;
  funcao: string;
  image: StaticImageData;
  descricao: string;
}

export const CaseModel = (props: ICaseModel) => {
  const colors: { [key: string]: { [key: string]: string } } = {
    red: {
      primary: 'text-redPrimary',
      secondary: 'bg-redSecondary',
    },

    green: {
      primary: 'text-greenPrimary',
      secondary: 'bg-greenSecondary',
    },
    orange: {
      primary: 'text-orangePrimary',
      secondary: 'bg-orangeSecondary',
    },
  };

  return (
    <div className="flex flex-col gap-[3rem] md:gap-0 md:flex-row justify-between pb-[3.1rem] border-b-[1px] border-border2 mb-[2rem]">
      <div className="md:max-w-[20rem]  lg:max-w-[28rem] ">
        <div
          className={`h-[1.56rem] p-[0.6rem] rounded-[0.3rem]
           ${colors[props.tag.color].primary} 
           ${colors[props.tag.color].secondary} 
           flex justify-center items-center w-fit`}
        >
          <p className={`font-interFamily text-0.9`}>{props.tag.name}</p>
        </div>
        <div className="flex items-center gap-2 mt-[1.25rem]">
          <p className="text-secondary font-interFamily text-1.0 md:text-1.2">
            Cliente:
          </p>
          <span className="text-primary font-interFamily text-1.0 md:text-1.2">
            {props.client}
          </span>
        </div>
        <div className="mt-[1.25rem]">
          <p className="text-gray font-interFamily text-1.0 md:text-1.2 leading-[1.6rem] md:leading-[2rem]">
            <span className="text-secondary font-interFami">Desafio:</span>{' '}
            {props.desafio}
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-[1.25rem] md:max-w-[20rem] lg:max-w-[28rem]">
        <div className="flex gap-[1.56rem] items-center">
          <Image className="w-[4rem] h-[4rem]" src={props.image} alt="" />
          <div className="flex flex-col gap-[0.6rem]">
            <h4 className="font-interFamily text-[1.25rem] text-secondary">
              {props.nomeClient}
            </h4>
            <p className="text-gray font-interFamily text-1.0">
              {props.funcao}
            </p>
          </div>
        </div>
        <p className="font-interFamily text-gray text-1.0 md:text-[1.25rem] leading-[1.6rem] md:leading-[2rem]">
          {props.descricao}
        </p>
      </div>

      <div>
        <button
          type="button"
          className="w-[6rem] h-[6rem] rounded-[8.25rem] bg-primary text-background flex justify-center items-center text-1.0 font-interFamily"
        >
          Ver
        </button>
      </div>
    </div>
  );
};
