import type { HTMLAttributeReferrerPolicy } from 'react';

type ResponsiveIframeProps = {
  src: string;
  title: string;
  /** "16/9" | "4/3" | "1/1" | custom CSS percentage like '56.25%' */
  ratio?: '16/9' | '4/3' | '1/1' | string;
  allowFullScreen?: boolean;
  loading?: 'lazy' | 'eager';
  referrerPolicy?: HTMLAttributeReferrerPolicy; // 👈 correct React type
  className?: string;
};

export default function ResponsiveIframe({
  src,
  title,
  ratio = '16/9',
  allowFullScreen = true,
  loading = 'lazy',
  referrerPolicy = 'no-referrer-when-downgrade', // 👈 default as a literal in the union
  className = '',
}: ResponsiveIframeProps) {
  // Map common ratios to padding-top (height/width * 100)
  const pad =
    ratio === '4/3'
      ? 'pt-[75%]'
      : ratio === '1/1'
      ? 'pt-[100%]'
      : typeof ratio === 'string' && ratio.includes('%')
      ? `pt-[${ratio}]`
      : 'pt-[56.25%]'; // default 16/9 → 9/16 = 56.25%

  return (
    <div className={`relative w-full overflow-hidden rounded-xl ${pad} ${className}`}>
      <iframe
        className="absolute inset-0 h-full w-full"
        src={src}
        title={title}
        loading={loading}
        referrerPolicy={referrerPolicy}
        allowFullScreen={allowFullScreen}
      />
    </div>
  );
}
