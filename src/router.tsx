import { createBrowserRouter } from "react-router-dom";
import { HomeView } from "./pages/HomeView";
import { RoomsView } from "./pages/RoomsView";
import { RoomView } from "./pages/RoomView";
import { OfferView } from "./pages/OfferView";
import { AboutView } from "./pages/AboutView";
import { GastronomyView } from "./pages/GastronomyView";
import { getAboutUs } from "./services/services";
import { loaderHome } from "./pages/HomeView/loader";
import { loaderRooms } from "./pages/RoomsView/loader";

export const router = createBrowserRouter([
    {
        children: [
            { path: "/", element: <HomeView />, loader: loaderHome },
            { path: "/rooms", element: <RoomsView />, loader: loaderRooms },
            { path: "/rooms/:id", element: <RoomView /> },
            { path: "/offer/:id", element: <OfferView /> },
            { path: "/gastronomy", element: <GastronomyView /> },
            { path: "/about", element: <AboutView />, loader: getAboutUs }
        ]
    },
]);