import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {AddPosts} from '../store/action';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Item = ({data, navigation}) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Details', {data: data})}>
      <View style={styles.item}>
        <View style={styles.header}>
          <Text style={styles.number}>{data.id}.</Text>
          <Text style={styles.title}>Title: {data.title}</Text>
        </View>
        <Text style={styles.body}>{data.body}</Text>
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
      ListEmptyComponent={<Text> No Posts </Text>}
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
  },
  number: {
    fontSize: 20,
    marginRight: 2,
  },
  title: {
    fontSize: 20,
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
});
