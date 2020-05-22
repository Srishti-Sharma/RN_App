import React, {useEffect, createRef} from 'react';
import {View, StyleSheet, Dimensions, FlatList, Animated} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import CustomText from '../components/CustomText';

const {width, heigth} = Dimensions.get('window');
const imageMargin = 30;
const imageWidth = width - 2 * imageMargin;
let interval;

let flatList = createRef();
let currentIndex = createRef();

function infiniteScroll(data) {
  const numberOfData = data.length;
  let scrollValue = 0,
    scrolled = 0;
  if (currentIndex != scrollValue) {
    scrolled = currentIndex;
    scrollValue = currentIndex;
  }

  interval = setInterval(function() {
    scrolled++;
    if (scrolled < numberOfData) scrollValue = scrollValue + width;
    else {
      scrollValue = 0;
      scrolled = 0;
    }

    flatList.scrollToOffset({animated: true, offset: scrollValue});
  }, 3000);
}

function goToNext(data) {
  let numberOfData = data.length;
  let scrollValue = currentIndex;

  if (currentIndex < numberOfData - 1) {
    scrollValue = width * (currentIndex + 1);
  } else {
    scrollValue = 0;
  }
  flatList.scrollToOffset({animated: true, offset: scrollValue});
}

function goToPrevious(data) {
  let numberOfData = data.length;
  let scrollValue = currentIndex;

  if (currentIndex === 0) {
    scrollValue = width * (numberOfData - 1);
  } else if (currentIndex > 0 && currentIndex < numberOfData) {
    scrollValue = width * (currentIndex - 1);
  }
  flatList.scrollToOffset({animated: true, offset: scrollValue});
}

const Carousel = ({data}) => {
  const scrollX = new Animated.Value(0);

  let position = Animated.divide(scrollX, width);

  const imageTransformation = index => {
    return {
      scale: scrollX.interpolate({
        inputRange: [(index - 1) * width, index * width, (index + 1) * width],
        outputRange: [0.8, 1, 0.8],
      }),
    };
  };

  useEffect(() => {
    infiniteScroll(data);
    return () => clearInterval(interval);
  });

  const onViewableItemsChanged = ({viewableItems}) => {
    currentIndex = viewableItems[0].index;
  };

  if (data && data.length) {
    return (
      <View>
        <FlatList
          data={data}
          ref={flatlist => {
            flatList = flatlist;
          }}
          keyExtractor={(_, index) => 'key' + index}
          horizontal
          pagingEnabled
          scrollEnabled
          snapToAlignment="center"
          scrollEventThrottle={16}
          decelerationRate={'fast'}
          onViewableItemsChanged={onViewableItemsChanged}
          viewabilityConfig={{
            itemVisiblePercentThreshold: 50,
          }}
          showsHorizontalScrollIndicator={false}
          renderItem={({item, index}) => {
            return (
              <View style={styles.container}>
                <Animated.Image
                  style={[
                    styles.animImage,
                    {
                      transform: [imageTransformation(index)],
                    },
                  ]}
                  source={{
                    uri: item,
                  }}
                />
              </View>
            );
          }}
          onScroll={Animated.event([
            {nativeEvent: {contentOffset: {x: scrollX}}},
          ])}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          {data.map((_, i) => {
            let opacity = position.interpolate({
              inputRange: [i - 1, i, i + 1],
              outputRange: [0.3, 1, 0.3],
              extrapolate: 'clamp',
            });
            return (
              <Animated.View
                key={i}
                style={[{opacity: opacity}, styles.dots]}
              />
            );
          })}
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.pnButton}
            onPress={() => {
              goToPrevious(data);
            }}>
            <CustomText style={styles.pnText} title={'Previous'} />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.pnButton}
            onPress={() => {
              goToNext(data);
            }}>
            <CustomText style={styles.pnText} title={'Next'} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  return null;
};

const styles = StyleSheet.create({
  animImage: {
    width: imageWidth,
    margin: imageMargin,
    marginBottom: 5,
    height: 300,
    resizeMode: 'cover',
    borderRadius: imageWidth / 10,
  },
  buttonContainer: {
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
  },
  dotView: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  dots: {
    height: 10,
    width: 10,
    backgroundColor: 'indianred',
    margin: 10,
    borderRadius: 5,
  },
  pnButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    padding: 10,
    borderRadius: 15,
    backgroundColor: 'indianred',
  },
  pnText: {
    color: 'white',
    fontSize: 18,
  },
});

export default Carousel;
