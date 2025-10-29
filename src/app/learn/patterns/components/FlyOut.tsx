'use client';

import {
  DetailedHTMLProps,
  Dispatch,
  InputHTMLAttributes,
  PropsWithChildren,
  SetStateAction,
  useCallback,
  useState,
} from 'react';

import { createContext } from '@/components/create-context';

interface FlyoutProps {
  open: boolean;
  value: string;
  toggle: () => void;
  setValue: Dispatch<SetStateAction<string>>;
}

const [useContext, Provider] = createContext<FlyoutProps>();

export function FlyOut(props: PropsWithChildren) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');

  const toggle = useCallback(() => setOpen((state) => !state), []);

  return (
    <Provider value={{ open, value, setValue, toggle }}>
      <div className="relative w-full max-w-xl">{props.children}</div>
    </Provider>
  );
}

function Input(
  props: DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >
) {
  const { value, toggle, setValue } = useContext();

  return (
    <input
      type="text"
      value={value}
      placeholder="Enter and address, city or ZIP code"
      onFocus={toggle}
      onBlur={toggle}
      onChange={(e) => setValue(e.target.value)}
      className="bg-gray-700 px-3 py-2 m-4 rounded border-none text-white w-full"
      {...props}
    />
  );
}

function List(props: PropsWithChildren) {
  const { open } = useContext();

  return (
    open && (
      <div className="bg-gray-100 absolute z-[999] left-4 right-4 w-full max-w-xl">
        <ul className="m-0 list-none p-0">{props.children}</ul>
      </div>
    )
  );
}

function Item(props: PropsWithChildren & { value: string }) {
  const { setValue } = useContext();

  return (
    <li
      className="p-3 text-gray-600 text-sm border-b border-gray-300/26 cursor-pointer hover:bg-gray-300"
      onMouseDown={() => setValue(props.value)}
    >
      {props.children}
    </li>
  );
}

FlyOut.Input = Input;
FlyOut.List = List;
FlyOut.Item = Item;
