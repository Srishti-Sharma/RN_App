import React, {useState, useEffect} from 'react';
import {StyleSheet, View, FlatList, ActivityIndicator} from 'react-native';
import {useDispatch} from 'react-redux';
import {AddPosts} from '../store/action';
import {TouchableOpacity} from 'react-native-gesture-handler';
import CustomText from '../components/CustomText';

const Item = ({data, navigation}) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Details', {data: data})}>
      <View style={styles.item}>
        <View style={styles.header}>
          <CustomText style={styles.number} title={data.id} />
          <CustomText style={styles.title} title={`Title: ${data.title}`} />
        </View>
        <CustomText style={styles.body} title={data.body} />
      </View>
    </TouchableOpacity>
  );
};

const renderFooter = isLoading => {
  if (!isLoading) return;

  return (
    <View style={{padding: 10, marginTop: 30}}>
      <ActivityIndicator style={{padding: 20}} animating size="large" />
    </View>
  );
};

const List = ({navigation}) => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [start, setStart] = useState(0);
  const limit = 5;
  const dispatch = useDispatch();

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = () => {
    setLoading(true);
    fetch(
      `https://jsonplaceholder.typicode.com/posts?_start=${start}&_limit=${limit}`,
    )
      .then(response => response.json())
      .then(json => {
        let new_posts = [...posts, ...json];
        setPosts(new_posts);
        setStart(start + limit);
        dispatch(AddPosts(json));
        setLoading(false);
      });
  };

  return (
    <FlatList
      style={styles.flatlist}
      data={posts}
      ListEmptyComponent={
        <CustomText
          style={styles.loadingText}
          title={'Loading Please Wait....'}>
          {' '}
        </CustomText>
      }
      ListFooterComponent={renderFooter(isLoading)}
      onEndReached={() => getPosts()}
      onEndReachedThreshold={0}
      renderItem={({item}) => {
        return <Item data={item} navigation={navigation} />;
      }}
      keyExtractor={(_, index) => index.toString()}
    />
  );
};

export default List;

const styles = StyleSheet.create({
  item: {
    borderColor: 'indianred',
    borderBottomWidth: 2,
    justifyContent: 'center',
    paddingBottom: 15,
    paddingTop: 20,
    paddingLeft: 10,
    paddingRight: 10,
  },
  number: {
    fontSize: 20,
    marginRight: 2,
  },
  title: {
    paddingRight: 10,
    fontSize: 20,
    flexWrap: 'wrap',
    flex: 1,
  },
  body: {
    fontSize: 15,
    height: 100,
    color: 'grey',
    padding: 10,
    paddingLeft: 10,
  },
  header: {
    flexDirection: 'row',
  },
  flatlist: {
    padding: 10,
    paddingBottom: 50,
    marginBottom: 20,
  },
  loadingText: {
    paddingTop: 10,
    fontSize: 20,
  },
});
