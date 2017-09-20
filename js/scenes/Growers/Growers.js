import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView, View, Text } from 'react-native';

import { styles } from './styles';
import GrowerItem from '../../components/GrowerItem/';

const Growers = ({ growersList, growerLink, error }) => (
    <ScrollView>
        <View style={styles.container}>
            {
                error ?
                    <Text>{error}</Text>
                    :
                    growersList.map((grower) => (
                        <GrowerItem
                            key={grower.id}
                            grower={grower}
                            growerLink={growerLink}
                        />
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
    growerLink: PropTypes.func.isRequired,
    error: PropTypes.oneOf([
        PropTypes.object
    ])
}

export default Growers;
