import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface CTAButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  arrow?: boolean;
  className?: string;
}

export default function CTAButton({
  href,
  children,
  variant = "primary",
  size = "md",
  arrow = false,
  className = "",
}: CTAButtonProps) {
  const sizeClasses = {
    sm: "px-5 py-2.5 text-sm",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  const variantClasses = {
    primary:
      "text-white shadow-lg hover:shadow-xl hover:-translate-y-0.5",
    secondary:
      "bg-white text-[#071428] shadow-lg hover:shadow-xl hover:-translate-y-0.5",
    outline:
      "border-2 border-white text-white hover:bg-white hover:text-[#071428]",
  };

  const primaryStyle =
    variant === "primary"
      ? { background: "linear-gradient(135deg, #f5a800, #d4900a)" }
      : {};

  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-2 rounded-xl font-semibold transition-all duration-200 ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      style={primaryStyle}
    >
      {children}
      {arrow && <ArrowRight className="w-4 h-4" />}
    </Link>
  );
}
