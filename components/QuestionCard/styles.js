import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  card: {
    width: "90%",
    height: "15%",
    margin: 5,
    borderRadius: 5,
    overflow: "hidden",
  },
  cardHeader: {
    backgroundColor: "#185422",
    width: "100%",
    height: "40%",
    alignItems: "left",
    paddingHorizontal: 5,
    justifyContent: "center",
  },
  cardHeaderLabel: {
    color: "#fff",
  },
  cardBody: {
    backgroundColor: "#29903B",
    height: "60%",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cardBodyText: {
    color: "#fff",
    width: "75%",
    lineHeight: 20,
    paddingHorizontal: 5,
  },
  buttonRow: {
    flexDirection: "row",
    width: "25%",
    height: "100%",
  },
  cardButton: {
    height: "100%",
    width: "50%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1f6f2d",
    borderLeftWidth: 1,
    borderLeftColor: "#29903B",
  },
});

export default styles;
