import Image from 'next/image';
import LolImg from '@/assets/img/lol.png';
import TeamImg from '@/assets/img/time.png';
import DdImg from '@/assets/img/dd.png';
import { SvgCode } from '@/assets/svgC/code';
import { LineSVG } from '@/assets/svgC/line';
import { LineSVG2 } from '@/assets/svgC/line2';
import { SVGCodeMobile } from '@/assets/svgC/codeMobile';
import { SvgCircle } from '@/assets/svgC/circle';
import {
  TransactionLeft,
  TransactionRight,
  TransactionTop,
} from '../transactions/up';

export const History = () => {
  return (
    <div className="relative mt-[12.5rem] overflow-hidden lg:overflow-visible">
      <div className="absolute top-0 lg:h-full left-[24.5px] lg:left-[50%] z-[-1]">
        <LineSVG className="h-full lg:h-[calc(100%+200px)]" />
      </div>

      <TransactionTop>
        <div className="flex lg:flex-row-reverse lg:w-full items-center">
          <div className="flex items-center lg:w-1/2">
            <div className="hidden lg:block">
              <LineSVG2 className="w-[17rem]" />
            </div>

            <div className="p-[1rem] lg:p-[2rem] relative min-w-[3.5rem] max-w-[3.5rem] bg-background max-h-[3.5rem] flex items-center justify-center rounded-[8rem] lg:max-w-[16.2rem] lg:max-h-[15rem]">
              <SvgCircle className="absolute z-20 max-w-[3.5rem] lg:max-w-[20rem] " />
              <Image
                className="min-w-[1.4rem] max-w-[1.4rem] lg:min-w-[9rem]"
                src={LolImg}
                alt="Lol image"
              />
            </div>
          </div>

          <div className="flex flex-col gap-[0.8rem] lg:w-1/2 pl-8 lg:pl-0">
            <TransactionRight>
              <h3 className="font-orbitronFamily text-1.9 lg:text-2.5 text-secondary lg:max-w-[35.9rem] tracking-[0.13rem] lg:tracking-[0.25rem] lg:pl-4 lg:pr-[3rem] ">
                Tudo começou com um simples jogo
              </h3>
              <p className="font-interFamily text-1.0 lg:text-1.2 text-gray pr-4 lg:max-w-[35.9rem] lg:pl-4 lg:pr-[7rem]">
                Num mundo digital e caótico, onde a vida real e a virtual se
                entrelaçam, surgiu uma história mágica e inspiradora. Era o ano
                de 2012 quando, por um acaso cósmico, um grupo de jovens
                encontrou-se nas intricadas batalhas do League of Legends, um
                universo de estratégia e amizade. No início, eram apenas
                avatares e nomes de tela, mas à medida que os campos de batalha
                virtuais testavam suas habilidades, algo mais profundo começou a
                crescer entre eles.
              </p>
            </TransactionRight>
          </div>
        </div>
      </TransactionTop>

      <TransactionTop>
        <div className="flex flex-row w-full items-center mt-[2rem] md:mt-[5rem]">
          <div className="flex lg:flex-row-reverse justify-start items-center lg:w-1/2">
            <div className="hidden lg:block">
              <LineSVG2 className="w-[17rem]" />
            </div>
            <div className="ml-2 lg:mr-[3rem] relative min-w-[3.5srem] max-w-[3.5rem] lg:p-[0rem] lg:w-1/2 bg-background flex items-center justify-center rounded-[8rem] lg:max-w-[7rem] lg:max-h-[14rem]">
              <SvgCircle className="absolute z-[-1] max-h-[3.5rem] max-w-[3.5rem] lg:max-w-[20rem] lg:max-h-[20rem] bg-background" />
              <Image
                className="min-w-[2.5srem] max-w-[2.5rem] lg:min-w-[9rem]"
                src={DdImg}
                alt="Lol image"
              />
            </div>
          </div>

          <div className="flex lg:w-1/2 flex-col gap-[0.8rem] pl-8 lg:pl-0">
            <TransactionLeft>
              <p className="font-interFamily text-1.0 lg:text-1.2 text-gray pr-4 lg:max-w-[35.9rem] lg:pl-[7rem] lg:pr-4">
                Com o passar do tempo, aquela ligação virtual transformou-se em
                laços reais, tecendo uma tapeçaria de amizade que desafiava as
                fronteiras do digital. Cada vitória celebrada, cada derrota
                enfrentada juntos, criava uma memória que transcendia pixels e
                códigos. Em 2015, um visionário dentro deste grupo criou um
                refúgio digital, um servidor no Discord, onde as vozes dos
                amigos ecoavam, marcando para sempre suas histórias, suas
                aventuras nas jogatinas e os momentos que só verdadeiros amigos
                compartilham.
              </p>
            </TransactionLeft>
          </div>
        </div>
      </TransactionTop>

      <TransactionTop>
        <div className="flex lg:flex-row-reverse lg:w-full lg:justify-between items-center mt-[2rem] md:mt-[5rem]">
          <div className="flex justify-start items-center lg:w-1/2">
            <div className="hidden lg:block">
              <LineSVG2 className="w-[17rem]" />
            </div>

            <div className="hidden lg:block">
              <SvgCode />
            </div>

            <div className="block lg:hidden">
              <SVGCodeMobile className="max-w-[3.6rem] min-w-[3.6rem] bg-background rounded-full" />
            </div>
          </div>

          <div className="flex flex-col gap-[0.8rem] lg:w-1/2 pl-8 lg:pl-0">
            <TransactionRight>
              <p className="font-interFamily text-1.0 lg:text-1.2 text-gray pr-4 lg:max-w-[35.9rem] lg:pl-4 lg:pr-[7rem]">
                E então, em 2019, um momento crucial aconteceu. Novos
                aventureiros, ávidos por desafios e sedentos por camaradagem,
                uniram-se ao grupo. Cada novo rosto trouxe consigo uma nova
                perspectiva, uma nova história, aumentando a riqueza da amizade
                que já florescia. Juntos, eles formaram um time formidável, onde
                a união de mentes e corações tornou-se o segredo de sua força.
                Mas o destino tinha mais surpresas reservadas para este grupo
                intrépido. Em 2020, a semente de uma ideia brilhou como uma
                estrela cadente. Por que não eternizar esse esquadrão
                extraordinário? Nasceu assim a visão de uma empresa, uma fusão
                de paixão e habilidade, centrada na Tecnologia e no Marketing
                Digital. Seus objetivos não eram apenas comerciais; eram
                profundamente pessoais. Eles aspiravam a algo maior: queriam
                melhorar as experiências de todos que encontrassem, queriam
                transformar o virtual em algo tangível, queriam compartilhar o
                calor da amizade que haviam encontrado uns nos outros.
              </p>
            </TransactionRight>
          </div>
        </div>
      </TransactionTop>

      <TransactionTop>
        <div className="flex flex-row w-full lg:justify-between items-center mt-[2rem] md:mt-[5rem]">
          <div className="lg:flex-row-reverse justify-start items-center lg:w-1/2 hidden lg:flex ">
            <div className="hidden lg:block">
              <LineSVG2 className="w-[10rem] xl:w-[16rem]" />
            </div>
            <Image
              className="max-w-[22.9rem] max-h-[19.9rem] triangulo"
              src={TeamImg}
              alt="Lol image"
            />
          </div>

          <div className="flex flex-col gap-[0.8rem] lg:w-1/2 pl-[5.5rem] lg:pl-0">
            <TransactionLeft>
              <p className="font-interFamily text-1.0 lg:text-1.2 text-gray pr-4 lg:max-w-[35.9rem] lg:pl-[7rem] lg:pr-4">
                E assim, com corações batendo em uníssono, esse grupo de amigos
                virtuais transformou-se em arquitetos de sonhos digitais. Cada
                linha de código que escreveram, cada estratégia de marketing que
                criaram, era tingida com o amor e a dedicação que só verdadeiros
                amigos podem compartilhar. E naquele universo de bits e bytes,
                eles encontraram um propósito maior: não apenas jogar o jogo da
                vida, mas também criar seu próprio caminho, deixando um rastro
                de amizade e inspiração para todos os que cruzassem seu caminho.
                E assim, a jornada emocionante deste esquadrão notável
                continuou, uma aventura onde o impossível era apenas uma
                palavra, não uma realidade. Eles eram mais do que apenas
                jogadores; eram uma família, uma força imparável, uma história
                que continuaria a inspirar gerações vindouras.
              </p>
            </TransactionLeft>
          </div>
        </div>
      </TransactionTop>
    </div>
  );
};
