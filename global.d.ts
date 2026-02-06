type Nullable<T> = T | null;
type Nullish<T> = Nullable<T> | undefined;

interface CardItem {
  title: string;
  description: string;
}

/* ✨ Practical types by using generics with React components from FEM ✨ */

/**
 * @description Adds a required `children` prop to a component's props type.
 * Unlike React built-in `PropsWithChildren`, this version makes `children` required.
 *
 * @template P - The original props type.
 * @example
 * ```
 * type ButtonProps = PropsWithRequiredChildren<{
 *    variant: 'primary' | 'secondary';
 * }>;
 * ```
 */
type PropsWithRequiredChildren<P> = P & { children: React.ReactNode };

/**
 * @description Extracts the props type from React component.
 * Works with both functional and class components.
 *
 * @template T - The React component type.
 * @example
 * ```
 * type Button = ({ variant }: { variant: 'primary' | 'secondary' }) => null;
 * type ButtonProps = ComponentProps<Button>;
 * ```
 */
type ComponentProps<T> = T extends React.ComponentType<infer P> ? P : never;

/**
 * @description Type for input change event handlers
 *
 * @example
 * ```
 * const handleChange: InputChangeHandler = (e) => {
 *   e.preventDefault();
 *   // Form submission
 * };
 * ```
 */
type InputChangeHandler = React.ChangeEventHandler<HTMLInputElement>;

/**
 * @description Type for React's state setter function returned by `useState`.
 * Accepts either a new value or an updater function.
 *
 * @example
 * ```
 * const setCount: SetState<number> = useState(0)[1];
 * setCount(5);
 * setCount((prev) => prev + 1);
 * ```
 */
type SetState<T> = React.Dispatch<React.SetStateAction<T>>;
