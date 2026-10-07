import { View, Text, StyleSheet, Pressable } from "react-native";

export default function TripCard({ trip }) {
return (
        <Pressable
      onPress={() => console.log("Trajet sélectionné : " + trip.departure + " → " + trip.arrival)}>
<View style={styles.card}>
<View style={styles.row}>
<Text style={styles.route}>
{trip.departure} → {trip.arrival}
</Text>
<Text style={styles.price}>{trip.price} €</Text>
</View>
<Text>{trip.date} - {trip.time}</Text>
<Text>Nombre de places : {trip.seatsAvailable}</Text>
<Text>Nom du conducteur : {trip.driver.name}</Text>
</View>
</Pressable>
);
}
const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: 12,
    padding: 16,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,

    elevation: 3,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  route: {
    fontSize: 18,
    fontWeight: "600",
    color: "#161B33",
    marginTop: 8,
  },

  price: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#3ED9C4",
  },
});
