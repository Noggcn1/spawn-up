import { TransactionBottom } from '../transactions/up';

export const About = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row pt-5 lg:pt-0 items-start gap-[1.8rem] md:gap-0 border-t-none lg:border-t-2 border-border2">
        <div className="flex flex-col md:flex-row w-full items-start pt-6 gap-[1.8rem] md:gap-[7.3rem] md:w-1/2 md:justify-start lg:h-[8.75rem]">
          <TransactionBottom>
            <div className="md:w-[14rem] flex flex-col gap-[0.5rem]">
              <h3 className="text-secondary text-1.1 font-medium font-interFamily">
                Divulgamos seu produto de graça
              </h3>
              <p className="text-gray text-0.9 font-interFamily font-normal">
                Alcance milhões de pessoas no Brasil inteiro (Ou no mundo!)
              </p>
            </div>
          </TransactionBottom>

          <TransactionBottom>
            <div className="md:w-[16rem] flex flex-col gap-[0.5rem]">
              <h3 className="text-secondary text-1.1 font-medium font-interFamily">
                Atendimento personalizado
              </h3>
              <p className="text-gray text-0.9 font-interFamily font-normal">
                Entre em contato com a gente sempre que precisar!
              </p>
            </div>
          </TransactionBottom>
        </div>

        <div className="flex flex-col md:flex-row w-full items-start pt-6 gap-[1.8rem] md:gap-[7.3rem] md:w-1/2 md:justify-end lg:h-[8.75rem] border-l-0 lg:border-l-2 border-border2">
          <TransactionBottom>
            <div className="md:w-[15.5rem] md:pl-6 lg:pl-0 flex flex-col gap-[0.5rem]">
              <h3 className="text-secondary text-1.1 font-medium font-interFamily">
                Te ajudamos a ser o top 01
              </h3>
              <p className="text-gray text-0.9 font-interFamily font-normal">
                Se destaque entre seus concorrentes!
              </p>
            </div>
          </TransactionBottom>

          <TransactionBottom>
            <div className="md:w-[12rem] flex flex-col gap-[0.5rem]">
              <h3 className="text-secondary text-1.1 font-medium font-interFamily">
                Discord
              </h3>
              <p className="text-gray text-0.9 font-interFamily font-normal">
                So chamar que vamos te ajudar!
              </p>
            </div>
          </TransactionBottom>
        </div>
      </div>
    </div>
  );
};
