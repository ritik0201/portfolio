import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandWhatsapp,
  IconBrandX,
  IconFileDownload,
  IconHome,
  IconPhoneCall,
} from "@tabler/icons-react";

const Navbar = () => {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "LinkedIn",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.linkedin.com/in/ritik-kumar-058694318/",
    },
    {
      title: "Github",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/ritik0201",
    },
    
    {
      title: "X (Twitter)",
      icon: (
        <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://x.com/RitikKumar40926",
    },
    {
      title: "WhatsApp ",
      icon: (
        <IconBrandWhatsapp className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://wa.me/919555503658",
    },
    {
      title: "Call Me",
      icon: (
        <IconPhoneCall className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "tel:+919555503658",
    },
    {
      title: "Resume",
      icon: (
        <IconFileDownload className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "image/Ritik_Kumar_CV.pdf",
    },
  ];
  return (
    <div className="fixed bottom-0 left-0 w-full h-[100px] z-20 flex items-center justify-center">
  <FloatingDock
    mobileClassName="translate-y-20" // only for demo, remove for production
    items={links}
  />
</div>

  );
}

export default Navbar;
