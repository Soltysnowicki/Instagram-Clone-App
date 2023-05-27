import React from "react";
import { View, TouchableOpacity, Image, ScrollView } from "react-native";
import styles from "./ImageList.style";

const ImageList = () => {
  const searchData = [
    {
      id: 0,
      images: [
        require("../../../../../assets/images/0.jpg"),
        require("../../../../../assets/images/1.jpg"),
        require("../../../../../assets/images/2.jpg"),
        require("../../../../../assets/images/3.jpg"),
        require("../../../../../assets/images/4.jpg"),
        require("../../../../../assets/images/5.jpg"),
      ],
    },
    {
      id: 1,
      images: [
        require("../../../../../assets/images/6.jpg"),
        require("../../../../../assets/images/7.jpg"),
        require("../../../../../assets/images/8.jpg"),
        require("../../../../../assets/images/9.jpg"),
        require("../../../../../assets/images/10.jpg"),
        require("../../../../../assets/images/11.jpg"),
      ],
    },
    {
      id: 2,
      images: [
        require("../../../../../assets/images/12.jpg"),
        require("../../../../../assets/images/13.jpg"),
        require("../../../../../assets/images/14.jpg"),
      ],
    },
  ];

  return (
    <ScrollView>
      {searchData.map((data, index) => {
        return (
          <View key={index}>
            {data.id === 0 ? (
              <View style={styles.mainListContainer}>
                {data.images.map((imageData, imgIndex) => {
                  return (
                    <TouchableOpacity
                      key={imgIndex}
                      style={styles.firstImgListContainer}
                    >
                      <Image source={imageData} style={styles.basicImg} />
                    </TouchableOpacity>
                  );
                })}
              </View>
            ) : null}
            {data.id === 1 ? (
              <View style={styles.secondListContainer}>
                <View style={styles.secondImgListContainer}>
                  {data.images.slice(0, 4).map((imageData, imgIndex) => {
                    return (
                      <TouchableOpacity
                        key={imgIndex}
                        style={styles.secondImgContainer}
                      >
                        <Image source={imageData} style={styles.secondImg} />
                      </TouchableOpacity>
                    );
                  })}
                </View>
                <TouchableOpacity style={styles.narrowImg}>
                  <Image source={data.images[5]} style={styles.wideImg} />
                </TouchableOpacity>
              </View>
            ) : null}
            {data.id === 2 ? (
              <View style={styles.thirdListContainer}>
                <TouchableOpacity style={styles.thirdImgContainer}>
                  <Image source={data.images[2]} style={styles.bigImg} />
                </TouchableOpacity>
                <View style={styles.fourthListContainer}>
                  {data.images.slice(0, 2).map((imageData, imgIndex) => {
                    return (
                      <TouchableOpacity
                        key={imgIndex}
                        style={styles.fourthImgContainer}
                      >
                        <Image source={imageData} style={styles.secondImg} />
                      </TouchableOpacity>
                    );
                  })}
                </View>
              </View>
            ) : null}
          </View>
        );
      })}
    </ScrollView>
  );
};

export default ImageList;
