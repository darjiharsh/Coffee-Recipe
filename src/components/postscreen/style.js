import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    marginLeft:10,
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  cardContent: {
    flexDirection: "row",
  },
  cardImage: {
    height: 200, 
    resizeMode: "cover",
    width: "100%",
  },
  leftContent: {
    flex: 1,
  },
  commonStyle:{
    marginLeft:10
  },
  rightContent: {
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    marginBottom: 16,
  },
  likeIcon: {
    marginRight: 8,
  },
  costRatingContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 8,
  },
  leftContent: {
    flexDirection: "column", // Change to column layout
    alignItems: "flex-start", // Align items to the start
  },
  commonStyle: {
    marginBottom: 4, // Add margin to separate cost and rating
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  ratingText: {
    marginRight: 4,
  },
  rightContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  likeIcon: {
    marginLeft: 8,
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
  hidden: {
    display: 'none',
  },
});

export default styles;



