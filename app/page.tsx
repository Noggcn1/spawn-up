import { About } from '@/components/about';
import { CasesSuccess } from '@/components/cases-success';
import { Contact } from '@/components/concat';

import { HelpYou } from '@/components/help-you';
import { History } from '@/components/history';
import { Home } from '@/components/home';
import { Members } from '@/components/members';

export default function Page() {
  return (
    <div>
      <Home />
      <About />
      <HelpYou />
      <CasesSuccess />
      <History />
      <Members />
      <Contact />
    </div>
  );
}
