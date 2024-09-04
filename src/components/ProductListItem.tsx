import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { Product } from '../types'
import Colors from '@/constants/Colors'
type ProductListItemProps = {
    product: Product,
}

const ProductListItem = ({product} : ProductListItemProps) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: product.image || '' }} style={styles.image} resizeMode='contain' />
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.price}>{product.price.toFixed(2)}</Text>
    </View>
  )
}

export default ProductListItem

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 20,
        overflow: 'hidden',
        marginVertical: 10,
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

})