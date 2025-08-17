'use client';

import { useId, useState } from 'react';

import { Section } from '@/lib/models';

function getTabItemId(id: string, value: string) {
  return id + '-tab-' + value;
}

function getTabPanelId(id: string, value: string) {
  return id + '-tabpanel-' + value;
}

export default function Tabs({ sections }: { sections: Array<Section> }) {
  const tabId = useId();
  const [value, setValue] = useState(sections[0].value);

  function focusOnSection(index: number) {
    const newValue = sections[index].value;
    document.getElementById(getTabItemId(tabId, newValue))?.focus();
    setValue(newValue);
  }

  return (
    <div
      role="tablist"
      onKeyDown={({ code }) => {
        const length = sections.length;
        // Use modulo arithmetic to elegantly handle the "wrap around".
        const currentIndex = sections.findIndex(
          ({ value: itemValue }) => itemValue === value
        );

        switch (code) {
          case 'ArrowLeft':
            focusOnSection((currentIndex - 1 + length) % length);
            break;
          case 'ArrowRight':
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
      <div className="flex gap-2 mb-4">
        {sections.map(({ value: itemValue, title }) => {
          const isActive = itemValue === value;

          return (
            <button
              role="tab"
              key={itemValue}
              id={getTabItemId(tabId, itemValue)}
              aria-controls={getTabPanelId(tabId, itemValue)}
              aria-selected={isActive}
              className={`${
                isActive ? 'bg-purple-600 text-white' : ''
              } border-1 border-purple-700 rounded-md px-3 py-2 hover:cursor-pointer`}
              onClick={() => setValue(itemValue)}
            >
              {title}
            </button>
          );
        })}
      </div>
      <div>
        {sections.map(({ value: itemValue, content }) => (
          <div
            role="tabpanel"
            key={itemValue}
            id={getTabPanelId(tabId, itemValue)}
            aria-labelledby={getTabItemId(tabId, itemValue)}
            hidden={itemValue !== value}
          >
            <div>{content}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
