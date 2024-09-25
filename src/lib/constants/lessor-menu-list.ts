import {
    Users,
    Settings,
    LayoutGrid,
    LucideIcon,
    Home,
    List,
} from "lucide-react";

type Submenu = {
    href: string;
    label: string;
    active: boolean;
};

type Menu = {
    href: string;
    label: string;
    active: boolean;
    icon: LucideIcon;
    submenus: Submenu[];
};

type Group = {
    groupLabel: string;
    menus: Menu[];
};

export function getMenuList(pathname: string): Group[] {
    return [
        {
            groupLabel: "",
            menus: [
                {
                    href: "/",
                    label: "Branches",
                    active: pathname.includes("/branch"),
                    icon: Home,
                    submenus: [
                        {
                            href: "/branch",
                            label: "Brranch 1",
                            active: pathname === "/branch",
                        },
                    ],
                },
                {
                    href: "/",
                    label: "All listings",
                    active: pathname.includes("/all-listings"),
                    icon: List,
                    submenus: [],
                },
            ],
        },
        {
            groupLabel: "Settings",
            menus: [

                {
                    href: "/account",
                    label: "Account",
                    active: pathname.includes("/account"),
                    icon: Settings,
                    submenus: [],
                },
            ],
        },
    ];
}
