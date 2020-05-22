import React from 'react';
import {View, StyleSheet, Dimensions, Image} from 'react-native';
import {useSelector} from 'react-redux';
import CustomText from '../components/CustomText';

const {width, height} = Dimensions.get('window');

export default function ProfileScreen() {
  const {
    userName,
    userEmail,
    userPhone,
    userAddress,
    userCompany,
  } = useSelector(state => state);

  const profilePic =
    'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500';
  return (
    <View style={styles.main}>
      <View style={styles.header}>
        <CustomText style={styles.headerText} title={'My Profile'} />
        <Image source={{uri: profilePic}} style={styles.profile} />
      </View>
      <View style={styles.container}>
        <View style={styles.contactBox}>
          <CustomText style={styles.value} title={'Name'} />
          <CustomText style={styles.contactValue} title={userName} />
        </View>
        <View style={styles.contactBox}>
          <CustomText style={styles.value} title={'Contact Here'} />
          <CustomText style={styles.contactValue} title={userEmail} />
          <CustomText style={styles.contactValue} title={userPhone} />
          <CustomText style={styles.contactValue} title={userAddress} />
        </View>
        <View style={styles.contactBox}>
          <CustomText style={styles.value} title={'Company'} />

          <CustomText style={styles.contactValue} title={userCompany.name} />
          <CustomText
            style={styles.contactValue}
            title={userCompany.catchPhrase}
          />
          <CustomText style={styles.contactValue} title={userCompany.bs} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    marginTop: 0,
    height: 280,
    justifyContent: 'space-between',
    paddingTop: 50,
    alignItems: 'center',
    width: width,
    marginBottom: 30,
    paddingBottom: 20,
    backgroundColor: 'indianred',
    borderBottomStartRadius: 50,
    borderBottomEndRadius: 50,
    shadowRadius: 5,
    shadowOpacity: 0.5,
    shadowColor: '#000',
    shadowOffset: {height: 3, width: 0},
    elevation: 2,
  },
  headerText: {
    paddingTop: 10,
    fontSize: 25,
    color: 'white',
    fontWeight: '600',
  },
  container: {
    width: width - 30,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderBottomLeftRadius: width / 4,
    borderColor: 'indianred',
    borderRadius: width / 4,
    paddingVertical: 10,
    paddingBottom: 20,
  },
  main: {
    flex: 1,
    backgroundColor: 'rgb(255,230,230)',
    alignItems: 'center',
  },
  contactBox: {
    alignItems: 'center',
    margin: 5,
  },
  fieldBox: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
  },
  value: {
    fontSize: 20,
    padding: 5,
    color: 'maroon',
    fontWeight: '300',
  },
  contactValue: {
    color: 'indianred',
    fontSize: 20,
    fontWeight: '100',
    fontStyle: 'italic',
    paddingVertical: 10,
  },
  profile: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
});
