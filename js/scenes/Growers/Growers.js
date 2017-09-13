import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView, View, Text, Image, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import LineSeparator from '../../components/LineSeparator/';
import { colors } from '../../config/styles';

const Growers = ({ growersList, growerLink }) => (
    <ScrollView>
        <View style={styles.container}>
        {
            growersList.map((grower) => (
                <View key={grower.id} style={styles.mainContainer}>
                    <View style={styles.growerContainer}>
                        <TouchableOpacity onPress={() => growerLink(grower.websiteLink)}>
                            <Image source={{uri: grower.logoLink}} style={styles.logo}/>
                        </TouchableOpacity>
                        <Text style={styles.name}>{grower.name}</Text>
                        <Text style={styles.description}>{grower.description}</Text>
                    </View>
                    <LineSeparator 
                        additionalStyles={{height: 1, width: '100%', backgroundColor: colors.lightGreen}} 
                    />
                </View>
            ))
        }
        </View>
    </ScrollView>
)

Growers.propTypes = {
    growersList: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            name: PropTypes.string,
            description: PropTypes.string,
            logoLink: PropTypes.string,
            websiteLink: PropTypes.string
        })
    ),
    growerLink: PropTypes.func.isRequired
}

export default Growers