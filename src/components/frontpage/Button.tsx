import Link from "next/link";
import clsx from "clsx";

const baseStyles = {
  solid:
    "inline-flex justify-center rounded-lg py-2 px-3 text-sm font-semibold outline-2 outline-offset-2 transition-colors",
  outline:
    "inline-flex justify-center rounded-lg border py-[calc(theme(spacing.2)-1px)] px-[calc(theme(spacing.3)-1px)] text-sm outline-2 outline-offset-2 transition-colors",
};

const variantStyles = {
  solid: {
    blue: "relative overflow-hidden bg-blue-600 text-white before:absolute before:inset-0 active:before:bg-transparent hover:before:bg-white/10 active:bg-blue-600 active:text-white/80 before:transition-colors",
    white:
      "bg-white text-blue-900 hover:bg-white/90 active:bg-white/90 active:text-blue-900/70",
    gray: "bg-neutral-800 text-white hover:bg-neutral-900 active:bg-neutral-800 active:text-white/80",
  },
  outline: {
    gray: "border-neutral-300 text-neutral-700 hover:border-neutral-400 active:bg-neutral-100 active:text-neutral-700/80",
  },
};

type VariantKey = keyof typeof variantStyles;
type ColorKey<Variant extends VariantKey> =
  keyof (typeof variantStyles)[Variant];

type ButtonProps<
  Variant extends VariantKey,
  Color extends ColorKey<Variant>,
> = {
  variant?: Variant;
  color?: Color;
} & (
  | Omit<React.ComponentPropsWithoutRef<typeof Link>, "color">
  | (Omit<React.ComponentPropsWithoutRef<"button">, "color"> & {
      href?: undefined;
    })
);

export function Button<
  Color extends ColorKey<Variant>,
  Variant extends VariantKey = "solid",
>({ variant, color, className, ...props }: ButtonProps<Variant, Color>) {
  variant = variant ?? ("solid" as Variant);
  color = color ?? ("gray" as Color);

  className = clsx(
    baseStyles[variant],
    variantStyles[variant][color] as string,
    className,
  );

  return typeof props.href === "undefined" ? (
    <button className={className} {...props} />
  ) : (
    <Link className={className} {...props} />
  );
}
