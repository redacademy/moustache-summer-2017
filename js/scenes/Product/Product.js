import React from 'react'
import PropTypes from 'prop-types'
import { View, ScrollView } from 'react-native';
import ProductCard from '../../components/ProductCard/';
import AddFavButton from '../../components/AddFavButton/';
import ThreeIconTabs from '../../components/ThreeIconTabs/';
import { styles } from './styles'

const Product = () => (
    <ScrollView style={styles.container}>
        <ProductCard arrowStyle={styles.arrowstyle} heartStyle={styles.heartstyle}/>
        <AddFavButton />
        <ThreeIconTabs />
    </ScrollView>
)

Product.propTypes = {}

export default Product