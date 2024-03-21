import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import APPbar from "./components/appbar";
import Wishlist from "./wishlist/Wishlist"
import Profile from "./profile/Profile";



export default function App() {
  return (
    <>
      <View style={styles.container}>

        {/* <Wishlist></Wishlist> */}

        <Profile></Profile>

        <APPbar></APPbar>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    justifyContent: "space-between",
  },
});
