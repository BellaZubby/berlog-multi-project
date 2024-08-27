import { ChevronDown, ChevronUp, LucideIcon } from "lucide-react";

export type menuTypes = {
    title: string;
    href: string;
    dropDown: LucideIcon;
    closeDropDown: LucideIcon
}


export const MenuLinks:menuTypes[] = [
    {
        title:"home",
        href: "/",
        dropDown: ChevronDown,
        closeDropDown: ChevronUp
    },
    {
        title:"features",
        href: "/features",
        dropDown: ChevronDown,
        closeDropDown: ChevronUp
       

    },

    {
        title:"projects",
        href: "/projects",
        dropDown: ChevronDown,
        closeDropDown: ChevronUp

    },

    {
        title:"services",
        href: "/services",
        dropDown: ChevronDown,
        closeDropDown: ChevronUp
      

    },

    {
        title:"blog",
        href: "/blog",
        dropDown: ChevronDown,
        closeDropDown: ChevronUp
    },
    {
        title:"contact",
        href: "/contact",
        dropDown: ChevronDown,
        closeDropDown: ChevronUp
    },




]