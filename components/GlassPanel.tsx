import type { PropsWithChildren } from 'react';

import { cn } from '@/lib/utils';

type GlassPanelVariant = 'light' | 'dark';

type GlassPanelProps = PropsWithChildren<{
  className?: string;
  variant?: GlassPanelVariant;
}>;

const VARIANT_STYLES: Record<GlassPanelVariant, React.CSSProperties> = {
  light: {
    background:
      'radial-gradient(92.09% 124.47% at 50% 99.24%, rgba(251, 247, 239, 0.90) 58.91%, rgba(235, 228, 215, 0.90) 100%)',
    backdropFilter: 'blur(20px) saturate(180%)',
    boxShadow:
      '0 8px 32px 0 rgba(17, 24, 39, 0.08), 0 2px 8px 0 rgba(17, 24, 39, 0.04), inset 0 0 0 1px rgba(255, 255, 255, 0.5)',
  },
  dark: {
    background:
      'radial-gradient(92.09% 124.47% at 50% 99.24%, rgba(0, 0, 0, 0.95) 58.91%, rgba(30, 30, 30, 0.95) 100%)',
    backdropFilter: 'blur(20px) saturate(180%)',
    boxShadow:
      '0 40px 70px -12px rgba(0, 0, 0, 0.8), 0 8px 32px 0 rgba(0, 0, 0, 0.3), inset 0 0 0 1px rgba(255, 255, 255, 0.25)',
  },
};

export default function GlassPanel({
  className,
  children,
  variant = 'light',
}: GlassPanelProps) {
  const isDark = variant === 'dark';

  return (
    <div
      className={cn('relative overflow-hidden', className)}
      style={VARIANT_STYLES[variant]}
    >
      {/* Top edge highlight */}
      <div
        className="pointer-events-none absolute top-[2px] left-[10%] right-[10%] h-[1px] z-[5]"
        style={{
          background: isDark
            ? 'linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.4) 50%, transparent 100%)'
            : 'linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.8) 50%, transparent 100%)',
        }}
      />

      {/* Main glass reflection */}
      <div
        className="pointer-events-none absolute inset-0 rounded-[inherit] z-[2]"
        style={{
          background: isDark
            ? 'linear-gradient(135deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0) 30%, rgba(255, 255, 255, 0) 70%, rgba(255, 255, 255, 0.2) 100%)'
            : 'linear-gradient(135deg, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0) 30%, rgba(255, 255, 255, 0) 70%, rgba(255, 255, 255, 0.4) 100%)',
          mixBlendMode: 'overlay',
        }}
      />

      {/* Secondary reflection layer */}
      <div
        className="pointer-events-none absolute inset-0 rounded-[inherit] z-[2]"
        style={{
          background: isDark
            ? 'radial-gradient(circle at 20% 20%, rgba(255, 255, 255, 0.2) 0%, transparent 50%)'
            : 'radial-gradient(circle at 20% 20%, rgba(255, 255, 255, 0.4) 0%, transparent 50%)',
          mixBlendMode: 'soft-light',
        }}
      />

      {/* Glass texture noise */}
      <div
        className={cn(
          'pointer-events-none absolute inset-0 rounded-[inherit] z-[2]',
          isDark ? 'opacity-20' : 'opacity-30'
        )}
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
          mixBlendMode: 'overlay',
        }}
      />

      {/* Frosted glass inset shadows */}
      <div
        className="pointer-events-none absolute inset-0 rounded-[inherit] z-[3]"
        style={{
          boxShadow: isDark
            ? 'inset 0 1px 0 0 rgba(255, 255, 255, 0.3), inset 0 -1px 0 0 rgba(255, 255, 255, 0.1), inset 1px 0 0 0 rgba(255, 255, 255, 0.15), inset -1px 0 0 0 rgba(255, 255, 255, 0.15)'
            : 'inset 0 1px 0 0 rgba(255, 255, 255, 0.6), inset 0 -1px 0 0 rgba(255, 255, 255, 0.2), inset 1px 0 0 0 rgba(255, 255, 255, 0.3), inset -1px 0 0 0 rgba(255, 255, 255, 0.3)',
        }}
      />

      <div className="relative z-10">{children}</div>
    </div>
  );
}
