import React from "react";
import { FlatList, View, Text, StyleSheet, Image } from "react-native";
import { Button } from "react-native-web";

const data = [
  { id: "1", product_name: "Ca nấu lẩu, nấu mì mini...", supplier: "ShopDevang", uri: require('./assets/ca_nau_lau.png') },
  { id: "2", product_name: "1KG KHÔ GÀ BƠ TỎI", supplier: "Shop LTD Food", uri: require('./assets/ga_bo_toi.png') },
  { id: "3", product_name: "Xe cần cẩu đa năng", supplier: "Shop thế giới đồ chơi", uri: require('./assets/xa_can_cau.png') },
  { id: "4", product_name: "Đồ chơi dạng mô hình", supplier: "Shop Thế giới đồ chơi", uri: require('./assets/do_choi_dang_mo_hinh.png') },
  { id: "5", product_name: "Lãnh đạo giảng đơn", supplier: "Shop Minh Long Book", uri: require('./assets/lanh_dao_gian_don.png') },
  { id: "6", product_name: "Hiểu lòng trẻ con", supplier: "Shop Minh Long Book", uri: require('./assets/hieu_long_con_tre.png') }
];

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>Bạn có thắc mắc với sản phẩm vừa xem. Đừng ngại chat với shop!</Text>
      </View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Image source={item.uri} style={styles.image} />
            <View style={styles.textContainer}>
              <Text style={styles.productName}>{item.product_name}</Text>
              <Text style={styles.supplier}>{item.supplier}</Text>
            </View>
            <View style={styles.buttonContainer}>
              <Button title="Chat" />
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    width: "100%",
    alignItems: "center",
    marginBottom: 20,
  },
  itemContainer: {
    flexDirection: "row",
    width: "100%",
    padding: 10,
    marginBottom: 5,
    alignItems: "center", 
    borderBottomWidth: 1,
    borderBottomColor:"#C4C4C4",
  },
  image: {
    width: 50, 
    height: 50, 
    marginRight: 10, 
  },
  textContainer: {
    flex: 1, 
    justifyContent: "center",
  },
  productName: {
    fontSize: 14,
    fontWeight: "bold",
  },
  supplier: {
    fontSize: 12,
    color: "red",
  },
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
  },
});

export default App;
