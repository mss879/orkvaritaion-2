import { ReactNode } from "react";

interface ScrollAnimationWrapperProps {
  children: ReactNode;
  className?: string;
}

export default function ScrollAnimationWrapper({
  children,
  className,
}: ScrollAnimationWrapperProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}
