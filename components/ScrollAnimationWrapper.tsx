import { ReactNode, HTMLAttributes } from "react";

interface ScrollAnimationWrapperProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}

export default function ScrollAnimationWrapper({
  children,
  className,
  ...props
}: ScrollAnimationWrapperProps) {
  return (
    <div className={className} {...props}>
      {children}
    </div>
  );
}
