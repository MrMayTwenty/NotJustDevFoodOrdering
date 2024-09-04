import { StyleSheet, Image, Text, View, FlatList } from 'react-native';

import Colors from '@/constants/Colors';
import products from '@/assets/data/products';
import ProductListItem from '@/components/ProductListItem';
const product = products[0];

export default function TabOneScreen() {
  return (
    <View>
      <FlatList 
        data={products} 
        numColumns={2}
        columnWrapperStyle={{ gap: 10 }}
        contentContainerStyle={{ padding: 10, gap: 10 }}
        renderItem={({ item }) => 
          <ProductListItem product={item} />
        } />
    </View>
  );
}

const styles = StyleSheet.create({
 

});
