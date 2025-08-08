import UiLayout from '@/components/ui-layout';
import Accordion from '.';

export default function AccordionPage() {
  // improve the user experience of the application
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
          </li>
          <li>
            · State: <code>data-accordion-value</code>
          </li>
          <li>· Listen for Keyboard Events</li>
        </ul>
      }
    >
      <Accordion
        sections={[
          {
            value: 'htmtl',
            title: 'HTML',
            content:
              'The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser.',
          },
          {
            value: 'css',
            title: 'CSS',
            content:
              'Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML.',
          },
          {
            value: 'javascript',
            title: 'JavaScript',
            content:
              'JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS',
          },
        ]}
      />
    </UiLayout>
  );
}
