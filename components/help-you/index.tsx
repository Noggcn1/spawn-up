import { SvgCloud } from '@/assets/svgC/cloud';
import { SvgCursor } from '@/assets/svgC/cursor';
import { SvgDatabase } from '@/assets/svgC/database';
import { SvgPincel } from '@/assets/svgC/pincel';
import { SvgServices } from '@/assets/svgC/services';
import { SvgWifi } from '@/assets/svgC/wifi';
import { TransactionBottom } from '../transactions/up';

export const HelpYou = () => {
  const listTasks = [
    {
      title: 'Design de Interfaces Digitais',
      description:
        'Criamos des da branding da sua marca até seu site prossional.',
      tags: ['UX', 'UI'],
      icon: <SvgPincel />,
    },
    {
      title: 'Desenvolvimento de Aplicações',
      description: 'Worem ipsum dolor sit amet, consectetur adipiscing elit.',
      tags: ['Front-end', 'UI/UX Design', 'Back-end', 'Microsserviços'],
      icon: <SvgCursor />,
    },
    {
      title: 'Cloud & DevOps',
      description: 'Worem ipsum dolor sit amet, consectetur adipiscing elit.',
      tags: ['AWS', 'Azure', 'Versionamento', 'Automação', 'Cultura'],
      icon: <SvgCloud />,
    },
    {
      title: 'Data Science & Data Engineering',
      description: 'Worem ipsum dolor sit amet, consectetur adipiscing elit.',
      tags: [
        'Estatística',
        'Programação',
        'Big Data',
        'IA',
        'Segurança',
        'Data Visualization',
        'ETL',
        'ELT',
        'Data Lake',
        'Data Warehouse',
      ],
      icon: <SvgDatabase />,
    },
    {
      title: 'Serviços Completos End-to-End',
      description: 'Worem ipsum dolor sit amet, consectetur adipiscing elit.',
      tags: [
        'Front-end',
        'Back-end',
        'Data',
        'Cloud',
        'Automação',
        'Versionamento',
        'Segurança',
      ],
      icon: <SvgServices />,
    },
    {
      title: 'Serviços Completos End-to-End',
      description: 'Worem ipsum dolor sit amet, consectetur adipiscing elit.',
      tags: [
        'Conectividade',
        'Raspberry',
        'Dispositivos',
        'Hardware',
        'Aplicações Industriais',
        'Arquitetura',
      ],
      icon: <SvgWifi />,
    },
  ];

  return (
    <div className="mt-[6.25rem] md:mt-[12.5rem] w-full">
      <TransactionBottom>
        <div className="flex flex-col gap-[1.6rem] text-center lg:text-left">
          <h3 className="font-orbitronFamily text-1.6 md:text-2.5 text-secondary tracking-[0.1625rem] md:tracking-[0.25rem]">
            Nos podemos te ajudar com...
          </h3>
          <p className="text-gray font-interFamily text-4 md:text-1.2">
            Saiba como podemos auxiliar no seu crescimento.
          </p>
        </div>
      </TransactionBottom>

      <div className="mt-[3.1rem] md:mt-[3.2rem] flex gap-x-[1.5rem] gap-y-[6rem] flex-wrap justify-center lg:justify-start">
        {listTasks.map((task, ind) => (
          <>
            <TransactionBottom>
              <div
                key={task.title + ind}
                className="w-full md:w-[28rem] flex flex-col gap-[1.25rem] border-b-[1px] pb-[3rem] md:pb-0 border-border2 md:border-b-0"
              >
                <div className="flex gap-[0.8rem] items-center">
                  {task.icon}
                  <h2 className="text-secondary text-[1.2rem] md:text-1.3 font-interFamily">
                    {task.title}
                  </h2>
                </div>
                <p className="text-gray text-0.8 md:text-0.9 font-interFamily">
                  {task.description}
                </p>
                <div className="flex gap-[0.6rem] flex-wrap">
                  {task.tags.map((tag, idx) => (
                    <div
                      key={tag + idx}
                      className="h-[1.6rem] pl-[0.6rem] pr-[0.6rem] bg-bgGreen flex justify-center items-center"
                    >
                      <p className="text-[0.875rem] font-interFamily text-primary">
                        {tag}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </TransactionBottom>
          </>
        ))}
      </div>
    </div>
  );
};
