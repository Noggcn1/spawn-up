import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  TransactionBottom,
  TransactionLeft,
  TransactionRight,
} from '../transactions/up';

export const Contact = () => {
  return (
    <div className="flex flex-col md:flex-row gap-[4rem] mt-[6rem] md:mt-[12.5rem]">
      <div className="flex  flex-col gap-[1.25rem]">
        <TransactionBottom>
          <h1 className="text-secondary text-1.6 md:text-2.5 tracking-[0.25rem] font-orbitronFamily">
            Vamos começar um projeto juntos?
          </h1>
          <p className="text-gray text-1.0 md:text-1.3 font-interFamily leading-8">
            Deseja dar o próximo passo em direção ao sucesso da sua companhia ou
            projeto pessoal!? Nosso time está preparado para atender todas as
            suas necessidades.
          </p>
        </TransactionBottom>
        <Accordion type="single" collapsible>
          <TransactionRight>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                <span className="text-1.0 md:text-[1.25rem] font-interFamily text-[#F3FFFC] text-left">
                  Atualmente vocês estão com vagas abertas?
                </span>
              </AccordionTrigger>
              <AccordionContent className="text-[1rem] font-interFamily text-gray text-left">
                Atualmente
              </AccordionContent>
            </AccordionItem>
          </TransactionRight>

          <TransactionLeft>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                <span className="text-1.0 md:text-[1.25rem] font-interFamily text-[#F3FFFC] text-left">
                  Você têm alguma comunidade ou participam de alguma?
                </span>
              </AccordionTrigger>
              <AccordionContent className="text-[1rem] font-interFamily text-gray text-left">
                Atualmente
              </AccordionContent>
            </AccordionItem>
          </TransactionLeft>

          <TransactionRight>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                <span className="text-1.0 md:text-[1.25rem] font-interFamily text-[#F3FFFC] text-left">
                  Estão fechando novos contratos e parcerias?
                </span>
              </AccordionTrigger>
              <AccordionContent className="text-[1rem] font-interFamily text-gray text-left">
                Atualmente
              </AccordionContent>
            </AccordionItem>
          </TransactionRight>
        </Accordion>
      </div>
      <div className="max-w-[40rem] p-[3.12rem] bg-[#17171B] flex flex-col gap-[2rem] text-left">
        <TransactionBottom>
          <h2 className="text-secondary text-1.0 md:text-[1.75rem] font-interFamily font-medium">
            Embarque conosco
          </h2>
          <p className="text-gray text-0.9 md:text-[1.25rem] leading-[2rem] text-left">
            Estamos iniciando uma nova jornada no meio tecnológico, faça seu
            cadastro para ficar por dentro de todos os nossos novos projetos e
            planos.
          </p>
        </TransactionBottom>

        <div className="flex flex-col gap-[1.3rem]">
          <TransactionBottom>
            <div className="flex flex-col gap-[0.75rem]">
              <Input
                placeholder="Nome"
                className="border-background text-secondary h-[2.5rem] md:h-[5rem] pl-[1.25rem] text-[0.6rem] md:text-[1.25rem]"
              />
              <Input
                placeholder="E-mail"
                className="border-background text-secondary h-[2.5rem] md:h-[5rem] pl-[1.25rem] text-[0.6rem] md:text-[1.25rem]"
              />
            </div>
          </TransactionBottom>

          <TransactionBottom>
            <Button className="h-[2.5rem] md:h-[5rem] hover:text-black text-[0.75rem] md:text-1.3 font-interFamily text-black">
              Cadastrar-me
            </Button>
          </TransactionBottom>
        </div>
      </div>
    </div>
  );
};
