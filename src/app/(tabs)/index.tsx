import { StyleSheet, Image, Text, View } from 'react-native';

import Colors from '@/src/constants/Colors';
import products from '@/assets/data/products';
const product = products[0];

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.image} resizeMode='contain' />
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.price}>{product.price.toFixed(2)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    overflow: 'hidden',
  },

  image: {
    width: '100%',
    aspectRatio: '1',
    alignSelf: 'center',
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },

  price: {
    color: Colors.light.tint,
    fontWeight: 'bold',
    marginTop: 'auto',
  }

});
