'use client';

import { useId, useState } from 'react';

import { ChevronDown, ChevronUp } from 'lucide-react';

function getAccordionHeaderId(id: string, value: string) {
  return id + '-header-' + value;
}

function getAccordionPanelId(id: string, value: string) {
  return id + '-panel-' + value;
}

export default function Accordion({
  sections,
}: {
  sections: Array<{ value: string; title: string; content: string }>;
}) {
  const accordionId = useId();

  // Set to keep track of the sections which are expanded
  const [openSections, setOpenSection] = useState(new Set());

  function focusOnSection(index: number) {
    document
      .getElementById(getAccordionHeaderId(accordionId, sections[index].value))
      ?.focus();
  }

  return (
    <div
      onKeyDown={({ code }) => {
        const activeItemValue = document.activeElement?.getAttribute(
          'data-accordion-value'
        );

        // Only respond to these interaction if an accordion title is in focus.
        if (!activeItemValue) return;

        // Use modulo arithmetic to elegantly handle the "wrap around".
        const currentIndex = sections.findIndex(
          ({ value }) => value === activeItemValue
        );
        const length = sections.length;

        switch (code) {
          case 'ArrowUp':
            focusOnSection((currentIndex - 1 + length) % length);
            break;
          case 'ArrowDown':
            focusOnSection((currentIndex + 1 + length) % length);
            break;
          case 'Home':
            focusOnSection(0);
            break;
          case 'End':
            focusOnSection(length - 1);
            break;

          default:
            break;
        }
      }}
    >
      {sections.map(({ value, title, content }) => {
        const isExpanded = openSections.has(value);
        const headerId = getAccordionHeaderId(accordionId, value);
        const panelId = getAccordionPanelId(accordionId, value);

        return (
          <div
            key={value}
            className="flex flex-col not-first:mt-1 not-last:border-b border-border border-dashed"
          >
            <button
              id={headerId}
              aria-controls={panelId}
              aria-expanded={isExpanded}
              data-accordion-value={value}
              className="flex items-center justify-between mb-1  hover:bg-accent p-1 cursor-pointer"
              onClick={() => {
                // Do not mutate the state directly
                const newOpenSections = new Set(openSections);
                if (newOpenSections.has(value)) {
                  newOpenSections.delete(value);
                } else {
                  newOpenSections.add(value);
                }
                setOpenSection(newOpenSections);
              }}
            >
              {title}
              <span aria-hidden={true} className="transition-transform">
                {isExpanded ? (
                  <ChevronUp size={16} />
                ) : (
                  <ChevronDown size={16} />
                )}
              </span>
            </button>
            {/* Still present in DOM */}
            <div
              role="region"
              id={panelId}
              aria-labelledby={headerId}
              hidden={!isExpanded}
              className="p-1"
            >
              {content}
            </div>
          </div>
        );
      })}
    </div>
  );
}
