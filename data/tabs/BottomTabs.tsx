import { DetailsScreen, HomeScreen, LibraryScreen, ReadBookScreen, SearchScreen, SeeMoreScreen } from "data/pages/DashboardPage";
import {ProfileScreen, SettingScreen,SubcribeScreen} from "pages/SettingPage/SettingPageData";

export interface TabInfo {
    tabName: string;
    name: string;
    component: React.ComponentType<any>; // Component type
    childComponent?: ChildInfo[]; // Optional array of child components
    icon: {
      library: string;
      name: string;
      size: number;
      color: string;
    };
}

export interface FullTabInfo {
    tabs: TabInfo[];
    subScreen: ChildInfo[];
}

export interface ChildInfo {
    childName: string;
    childComponent: React.ComponentType<any>; // Component type
}

export const TabScreenData: FullTabInfo = {
    tabs: [
        {
            tabName: "Home",
            name: "HomeScreen",
            component: HomeScreen,
            childComponent: [],
            icon: {
                library: "AntDesign",
                name: "home",
                size: 24,
                color: "#6A6A8B"
            }
        },
        {
            tabName: "Search",
            name: "SearchScreen",
            component: SearchScreen,
            childComponent: [],
            icon: {
                library: "AntDesign",
                name: "search1",
                size: 24,
                color: "#6A6A8B"
            }
        },
        {
            tabName: "Library",
            name: "LibraryScreen",
            component: LibraryScreen,
            childComponent: [],
            icon: {
                library: "AntDesign",
                name: "book",
                size: 24,
                color: "#6A6A8B"
            }
        },
        {
            tabName: "Setting",
            name: "SettingScreen",
            component: SettingScreen,
            childComponent: [],
            icon: {
                library: "AntDesign",
                name: "setting",
                size: 24,
                color: "#6A6A8B"
            }
        }
    ],
    subScreen: [
        {
            childName: "SeeMoreScreen",
            childComponent: SeeMoreScreen
        },
        {
            childName: "DetailsScreen",
            childComponent: DetailsScreen
        },
        {
            childName: "ReadBookScreen",
            childComponent: ReadBookScreen
        },
        // {
        //     childName: "SettingScreen",
        //     childComponent: SettingScreen
        // },
        {
            childName: "ProfileScreen",
            childComponent: ProfileScreen
        },
        {
            childName: "SubcribeScreen",
            childComponent: SubcribeScreen
        }
    ]
};
