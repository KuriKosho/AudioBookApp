// import DetailsScreen from "pages/MainPage/HomePage/DetailsScreen";
// import HomeScreen from "pages/MainPage/HomePage/HomeScreen";
// import ReadBookScreen from "pages/MainPage/HomePage/ReadBookScreen";
// import SeeMoreScreen from "pages/MainPage/HomePage/SeeMoreScreen";
// import LibraryScreen from "pages/MainPage/LibraryPage/LibraryScreen";
// import SearchScreen from "pages/MainPage/SearchPage/SearchScreen";

// export {DetailsScreen,HomeScreen,LibraryScreen,SearchScreen, SeeMoreScreen}

// export interface TabInfo {
//     tabName: string;
//     name: string;
//     component: React.ComponentType<any>; // Component type
//     childComponent?: ChildInfo[]; // Optional array of child components
//     icon: {
//       library: string;
//       name: string;
//       size: number;
//       color: string;
//     };
//   }
// export interface ChildInfo {
//     childName: string;
//     childComponent: React.ComponentType<any>; // Component type
// }
  
// export const TabScreenData : TabInfo[] =[
//     {
//         tabName:"Home",
//         name:"HomeScreen",
//         component: HomeScreen,
//         childComponent:[
//             {
//                 childName:"SeeMoreScreen",
//                 childComponent:SeeMoreScreen,
//             },
//             {
//                 childName:"DetailsScreen",
//                 childComponent:DetailsScreen
//             },
//             {
//                 childName:"ReadBookScreen",
//                 childComponent:ReadBookScreen
//             }
//         ],
//         icon:{
//             library:"AntDesign",
//             name:"home",
//             size:24,
//             color:"#6A6A8B"
//         }
//     },
//     {
//         tabName:"Search",
//         name:"SearchScreen",
//         component: SearchScreen,
//         childComponent:[],
//         icon:{
//             library:"AntDesign",
//             name:"search1",
//             size:24,
//             color:"#6A6A8B"
//         }
//     },
//     {
//         tabName:"Library",
//         name:"LibraryScreen",
//         component: LibraryScreen,
//         childComponent:[],
//         icon:{
//             library:"AntDesign",
//             name:"book",
//             size:24,
//             color:"#6A6A8B"
//         }
//     },
// ]