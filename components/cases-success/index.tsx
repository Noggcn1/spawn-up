import { CaseModel } from './case';
import ImageP3 from '@/assets/img/p3.png';
import ImageP2 from '@/assets/img/p2.png';
import ImageP1 from '@/assets/img/p1.png';
import { TransactionBottom } from '../transactions/up';

export const CasesSuccess = () => {
  const mocks = [
    {
      tag: {
        color: 'orange',
        name: 'Website',
      },
      image: ImageP3,
      client: 'Microsoft',
      desafio:
        'Criar a branding de um software e construir o site com um design inovador.',
      nomeClient: 'Ananda Ferreira',
      funcao: 'CEO & Fundadora da Microsoft',
      descricao:
        'A Spawn Up é simplesmente a MELHOR empresa do mercado atual! Ela conseguiu desenvolver a branding e o site de um produto em pouco tempo, entregando qualidade e performance.',
    },
    {
      tag: {
        color: 'red',
        name: 'App',
      },
      image: ImageP1,
      client: 'Google',
      desafio:
        'Desenvolver um app de um banco, criando deis da interface até o servidor.',
      nomeClient: 'Mary Smith',
      funcao: 'Desenvolvedora Senior',
      descricao: 'Empresa fora da curva, sou muito grata a eles!',
    },
    {
      tag: {
        color: 'green',
        name: 'Design',
      },
      image: ImageP2,
      client: 'Amazon',
      desafio:
        'Construir um design de uma nova ferramenta da AWS em apenas 2 semanas.',
      nomeClient: 'Alex Downey',
      funcao: 'Designer Senior',
      descricao:
        'Pensa em uma empresa top, essa é a Spawn Up! Com apenas 2 semanas de prazo, eles entregaram tudo em apenas UMA!',
    },
  ];

  return (
    <div className="mt-[6.25rem] md:mt-[12.5rem] pl-2 pr-2">
      <TransactionBottom>
        <h3 className="font-orbitronFamily text-center md:text-left text-[1.625rem] md:text-2.5 text-secondary tracking-[0.1625rem] md:tracking-[0.25rem]">
          Nossos cases de sucesso
        </h3>
        <p className="text-gray font-interFamily text-center md:text-left text-1.0 md:text-1.2">
          Veja nossas soluções que estão revolucionando o mercado.
        </p>
      </TransactionBottom>

      <div className="mt-[3.3rem]">
        {mocks.map((e, i) => (
          <>
            <TransactionBottom>
              <CaseModel
                key={e.client + i}
                client={e.client}
                desafio={e.desafio}
                descricao={e.descricao}
                nomeClient={e.nomeClient}
                funcao={e.funcao}
                image={e.image}
                tag={e.tag}
              />
            </TransactionBottom>
          </>
        ))}
      </div>
    </div>
  );
};
