import {
  IconBrandGithub,
  IconMail,
  IconPhone,
  IconCirclesRelation,
} from "@tabler/icons-react";

export type IconType = "github" | "email" | "phone" | "link";
export const Icon = ({ type, color }: { color?: string; type: IconType }) => {
  switch (type) {
    case "github":
      return <IconBrandGithub size={18} color={color} />;
    case "email":
      return <IconMail size={18} color={color} />;
    case "phone":
      return <IconPhone size={18} color={color} />;
    case "link":
      return <IconCirclesRelation size={18} color={color} />;
  }
};
