import { FlatList, Image, View, TouchableOpacity } from "react-native";

import styles from "./ImageList.style";

const ImageListComponent = ({ url }) => (
  <View style={styles.listItemContainer}>
    <TouchableOpacity>
      <Image style={styles.mainPic} source={{ uri: url }} />
    </TouchableOpacity>
  </View>
);

const ImageList = ({ data = [] }) => {
  return (
    <FlatList
      data={data}
      numColumns={3}
      renderItem={({ item }) => {
        return <ImageListComponent url={item.url} />;
      }}
    />
  );
};

export default ImageList;
