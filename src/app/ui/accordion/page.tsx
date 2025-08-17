import UiLayout from '@/components/ui-layout';
import { SECTIONS } from '@/lib/data';
import Accordion from '.';

export default function AccordionPage() {
  return (
    <UiLayout
      title={
        <a
          href="https://www.w3.org/WAI/ARIA/apg/patterns/accordion/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Accordion
        </a>
      }
      definition={
        <ul>
          <li>· A vertically stacked set of interactive headings.</li>
          <li>
            · Contain a tile + snippet + thumbnail representing a section of
            content.
          </li>
          <li>
            · Commonly used to reduce the need to scroll when presenting
            multiple sections of content on a single page.
          </li>
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
            · <code>Set</code> to track the sections which are expanded
          </li>
          <li>
            · ARIA roles: <code>aria-expanded</code>, <code>aria-controls</code>
            , <code>aria-labelledby</code>
          </li>
          <li>
            · State: <code>data-accordion-value</code>
          </li>
        </ul>
      }
    >
      <Accordion sections={SECTIONS} />
    </UiLayout>
  );
}
