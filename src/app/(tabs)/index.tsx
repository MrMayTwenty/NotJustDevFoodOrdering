import { StyleSheet, Image, Text, View } from 'react-native';

import Colors from '@/constants/Colors';
import products from '@/assets/data/products';
import ProductListItem from '@/components/ProductListItem';
const product = products[0];

export default function TabOneScreen() {
  return (
    <View>
      <ProductListItem product={product} />
      <ProductListItem product={product} />
      <ProductListItem product={product} />
    </View>
  );
}

const styles = StyleSheet.create({
 

});
