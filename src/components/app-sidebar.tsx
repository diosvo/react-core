'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { ChevronDown, Palette, Shapes, Webhook } from 'lucide-react';

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import {
  Sidebar,
  SidebarContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from '@/components/ui/sidebar';

const sidebarData = [
  {
    title: 'Learn',
    icon: Shapes,
    items: [],
  },
  {
    title: 'Hooks',
    icon: Webhook,
    items: [
      'useBoolean',
      'useClickAnywhere',
      'useCounter',
      'useCycle',
      'useDefault',
      'useEffectOnce',
      'useFocus',
      'useHover',
      'usePrevious',
      'useQuery',
      'useStateWithReset',
      'useToggle',
    ],
  },
  {
    title: 'UI',
    icon: Palette,
    items: ['Accordion', 'ContactForm', 'Tabs', 'Table'],
  },
] as const;

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarMenu>
          {sidebarData.map(({ title, items, icon: Icon }) => (
            <Collapsible
              key={title}
              defaultOpen={title === 'UI'}
              className="group/collapsible"
              disabled={!items.length}
            >
              <SidebarMenuItem>
                <CollapsibleTrigger asChild>
                  <SidebarMenuButton>
                    <Icon />
                    <span>{title}</span>
                    <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
                  </SidebarMenuButton>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <SidebarMenuSub>
                    {items.map((subItem) => {
                      const subItemPath = `/${title.toLowerCase()}/${subItem
                        .replace(/([a-z])([A-Z])/g, '$1-$2')
                        .toLowerCase()}`;
                      const isSubItemActive = pathname === subItemPath;

                      return (
                        <SidebarMenuSubItem key={subItem}>
                          <SidebarMenuSubButton
                            asChild
                            isActive={isSubItemActive}
                          >
                            <Link href={subItemPath}>
                              <span>{subItem}</span>
                            </Link>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      );
                    })}
                  </SidebarMenuSub>
                </CollapsibleContent>
              </SidebarMenuItem>
            </Collapsible>
          ))}
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  );
}
