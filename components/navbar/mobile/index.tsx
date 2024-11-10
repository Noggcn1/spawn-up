'use client';

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from '@/components/ui/menubar';
import { Menu } from 'lucide-react';

export const MenuMobile = () => {
  const menu = [
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
    <div className="block md:hidden">
      <Menubar className="border-none md:hidden">
        <MenubarMenu>
          <MenubarTrigger className="border-none bg-background active:bg-background focus:bg-background">
            <Menu color="#f3eded" />
          </MenubarTrigger>
          <MenubarContent align="end" className="md:hidden bg-background">
            {menu.map((e, i) => (
              <div key={e.label + i}>
                <MenubarItem className="hover:bg-gray">
                  <p
                    key={e.numero + i}
                    className="flex justify-center items-end text-1.0 text-secondary font-normal gap-[0.4rem] hover:text-primary hover:cursor-pointer"
                  >
                    <span className="text-0.6 text-primary">{e.numero}.</span>
                    {e.label}
                  </p>
                </MenubarItem>
                {!(menu.length - 1 === i) && <MenubarSeparator />}
              </div>
            ))}
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </div>
  );
};
