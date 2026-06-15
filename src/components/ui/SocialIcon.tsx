import { Github, Linkedin, type LucideProps } from "lucide-react";
import type { SocialLink } from "../../data/profile";

const map: Record<SocialLink["icon"], React.ComponentType<LucideProps>> = {
  github: Github,
  linkedin: Linkedin,
};

export function SocialIcon({
  icon,
  ...props
}: { icon: SocialLink["icon"] } & LucideProps) {
  const Icon = map[icon];
  return <Icon {...props} />;
}
