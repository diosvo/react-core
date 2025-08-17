import UiLayout from '@/components/ui-layout';
import { SECTIONS } from '@/lib/data';
import Tabs from '.';

export default function TabsPage() {
  return (
    <UiLayout
      title={
        <a
          href="https://www.w3.org/WAI/ARIA/apg/patterns/tabs/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Tabs
        </a>
      }
      definition={
        <ul>
          <li>· A set of layered sections of content, known as tab panels</li>
          <li>· Display one panel of content at a time</li>
        </ul>
      }
      description={
        <ul>
          <li>1. Accessibility: ARIA roles, states, and properties</li>
          <li>2. Keyboard Interactions</li>
        </ul>
      }
      implementation={
        <ul>
          <li>
            · ARIA roles: <code>aria-controls</code>, <code>aria-selected</code>
            , <code>aria-labelledby</code>
          </li>
        </ul>
      }
    >
      <Tabs sections={SECTIONS} />
    </UiLayout>
  );
}
