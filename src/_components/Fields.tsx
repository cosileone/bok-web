import clsx from "clsx";
import { type ComponentPropsWithoutRef, type ReactNode, useId } from "react";

const formClasses =
  "block w-full appearance-none rounded-lg border border-gray-200 bg-white py-[calc(theme(spacing.2)-1px)] px-[calc(theme(spacing.3)-1px)] text-gray-900 placeholder:text-gray-400 focus:border-blue-600 focus:outline-none focus:ring-blue-600 sm:text-sm";

function Label({ id, children }: { id: string; children: ReactNode }) {
  return (
    <label
      htmlFor={id}
      className="mb-2 block text-sm font-semibold text-gray-900"
    >
      {children}
    </label>
  );
}

export function TextField({
  label,
  type = "text",
  className,
  ...props
}: Omit<ComponentPropsWithoutRef<"input">, "id"> & { label?: string }) {
  const id = useId();

  return (
    <div className={className}>
      {label && <Label id={id}>{label}</Label>}
      <input id={id} type={type} {...props} className={formClasses} />
    </div>
  );
}

export function SelectField({
  label,
  className,
  ...props
}: Omit<ComponentPropsWithoutRef<"select">, "id"> & { label?: string }) {
  const id = useId();

  return (
    <div className={className}>
      {label && <Label id={id}>{label}</Label>}
      <select id={id} {...props} className={clsx(formClasses, "pr-8")} />
    </div>
  );
}
