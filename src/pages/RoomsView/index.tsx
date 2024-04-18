import { AppLayout } from "../../layouts/AppLayout";
import { FeatureRooms } from "../HomeView/featured-rooms";
import { Offers } from "../HomeView/offers";

export function RoomsView() {
    return <AppLayout>
        <Offers />
        <FeatureRooms />
    </AppLayout>
}