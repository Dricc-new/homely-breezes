import { createBrowserRouter } from "react-router-dom";
import { HomeView } from "./pages/HomeView";
import { RoomsView } from "./pages/RoomsView";

export const router = createBrowserRouter([
    {
        children: [
            {
                path: "/",
                element: <HomeView />,
            }, {
                path: "/rooms",
                element: <RoomsView />,
            },
        ]
    },
]);