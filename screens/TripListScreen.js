import { FlatList } from "react-native";
import { mockTrips } from "../data/mockTrips";
import TripCard from "../components/TripCard";

export default function TripListScreen() {
    return (
        <FlatList
            data={mockTrips}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <TripCard trip={item} />}
            contentContainerStyle={{ padding: 16, gap: 12 }}
        />
    );
}