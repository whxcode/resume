import {
  IconBrandGithub,
  IconMail,
  IconPhone,
  IconCirclesRelation,
  IconMan,
  IconCandle,
  IconBrandRedux,
  IconTool,
  IconBriefcase2,
  IconNotes,
} from "@tabler/icons-react";

export type IconType =
  | "github"
  | "email"
  | "phone"
  | "link"
  | "man"
  | "birthday"
  | "status"
  | "skill"
  | "work"
  | "note";

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
    case "man":
      return <IconMan size={18} color={color}></IconMan>;
    case "birthday":
      return <IconCandle size={18} color={color}></IconCandle>;
    case "status":
      return <IconBrandRedux size={18} color={color} />;
    case "skill":
      return <IconTool size={18} color={color} />;
    case "work":
      return <IconBriefcase2 size={18} color={color} />;
    case "note":
      return <IconNotes size={18} color={color} />;
  }
};
