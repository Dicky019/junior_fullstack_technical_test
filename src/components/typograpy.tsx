import { cn } from "@/lib/utils";

export interface HProps extends React.ButtonHTMLAttributes<HTMLElement> {}

export function H1({ className, ...props }: HProps) {
  return (
    <h1
      className={cn(
        className,
        "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl max-[500px]:text-3xl"
      )}
      {...props}
    />
  );
}

export function H2({ className, ...props }: HProps) {
  // scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0
  return (
    <h2
      className={cn(
        "scroll-m-20 text-3xl font-semibold tracking-tight transition-colors first:mt-0 max-[500px]:text-2xl",
        className
      )}
      {...props}
    />
  );
}

export function H3({ className, ...props }: HProps) {
  return (
    <h3
      className={cn(
        "scroll-m-20 text-2xl font-semibold tracking-tight",
        className
      )}
      {...props}
    />
  );
}

export function H4({ className, ...props }: HProps) {
  return (
    <h4
      className={cn(
        "scroll-m-20 text-xl font-semibold tracking-tight",
        className
      )}
      {...props}
    />
  );
}

export function P({ className, ...props }: HProps) {
  return (
    <p
      className={cn("leading-7 [&:not(:first-child)]:mt-6", className)}
      {...props}
    />
  );
}

export function Blockquote({ className, ...props }: HProps) {
  return (
    <blockquote
      className={cn("mt-6 border-l-2 pl-6 italic", className)}
      {...props}
    />
  );
}

export function List({ className, ...props }: HProps) {
  return (
    <ul
      className={cn("my-6 ml-6 list-disc [&>li]:mt-2", className)}
      {...props}
    />
  );
}

export function InlineCode({ className, ...props }: HProps) {
  return (
    <ul
      className={cn(
        "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold",
        className
      )}
      {...props}
    />
  );
}

export function Lead({ className, ...props }: HProps) {
  return (
    <p className={cn("text-xl text-muted-foreground", className)} {...props} />
  );
}

export function Large({ className, ...props }: HProps) {
  return <div className={cn("text-lg font-semibold", className)} {...props} />;
}

export function Small({ className, ...props }: HProps) {
  return (
    <small
      className={cn("text-sm font-medium leading-none", className)}
      {...props}
    />
  );
}

export function Muted({ className, ...props }: HProps) {
  return (
    <small
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  );
}
