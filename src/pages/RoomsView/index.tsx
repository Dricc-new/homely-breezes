import { AppLayout } from "../../layouts/AppLayout";
import { FeatureRooms } from "../HomeView/feature-rooms";
import { Offers } from "../HomeView/offers";

export function RoomsView() {
    return <AppLayout>
        <Offers />
        <FeatureRooms />
    </AppLayout>
}