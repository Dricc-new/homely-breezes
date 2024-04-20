import { useLoaderData } from "react-router-dom";
import { AppLayout } from "../../layouts/AppLayout";
import { FeatureRooms } from "../../components/feactured-rooms";
import { Offers } from "../../components/offers";
import { LoaderType } from "./loader";

export function RoomsView() {

    const { rooms, offers } = useLoaderData() as LoaderType
    return <AppLayout>
        <Offers offers={offers} />
        <FeatureRooms rooms={rooms} />
    </AppLayout>
}