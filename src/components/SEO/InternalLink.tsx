import Link from "next/link";
import { ReactNode } from "react";

interface InternalLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  title?: string;
  rel?: string;
  target?: "_blank" | "_self";
  onClick?: () => void;
  "aria-label"?: string;
}

export default function InternalLink({
  href,
  children,
  className = "",
  title,
  rel,
  target = "_self",
  onClick,
  "aria-label": ariaLabel
}: InternalLinkProps) {
  const isExternal = href.startsWith("http") || href.startsWith("//");
  const finalRel = rel || (isExternal ? "noopener noreferrer" : undefined);
  const finalTarget = isExternal ? "_blank" : target;

  return (
    <Link
      href={href}
      className={`transition-colors duration-200 hover:text-primary ${className}`}
      title={title}
      rel={finalRel}
      target={finalTarget}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {children}
    </Link>
  );
}

// SEO-optimized internal link with anchor text optimization
export function SEOLink({
  href,
  children,
  anchorText,
  title,
  ...props
}: InternalLinkProps & {
  anchorText?: string;
}) {
  const displayText = anchorText || children;
  const linkTitle = title || `Learn more about ${displayText}`;

  return (
    <InternalLink
      href={href}
      title={linkTitle}
      {...props}
    >
      {displayText}
    </InternalLink>
  );
}

// Related content links for better internal linking
export function RelatedContentLink({
  href,
  title,
  description,
  type = "article",
  className = ""
}: {
  href: string;
  title: string;
  description: string;
  type?: "article" | "guide" | "tool" | "job";
  className?: string;
}) {
  const typeIcons = {
    article: "📝",
    guide: "📚",
    tool: "🛠️",
    job: "💼"
  };

  return (
    <div className={`p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-primary transition-colors ${className}`}>
      <InternalLink href={href} className="block group">
        <div className="flex items-start space-x-3">
          <span className="text-2xl">{typeIcons[type]}</span>
          <div>
            <h3 className="font-semibold text-black dark:text-white group-hover:text-primary transition-colors">
              {title}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              {description}
            </p>
          </div>
        </div>
      </InternalLink>
    </div>
  );
}
