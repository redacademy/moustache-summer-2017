import React from 'react';
import { View, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import ProductCard from '../../components/ProductCard/';
import ActionButton from '../../components/ActionButton/';
import ThreeIconTabs from '../../components/ThreeIconTabs/';
import { styles } from './styles';

const SingleEvent = ({ eventData, openLink }) => (
    <ScrollView>
        <View style={styles.container}>
            <ProductCard eventData={eventData} />
            <ActionButton
                url={eventData.eventLink}
                action={openLink}
                text={'Purchase Ticket'}
            />
            <ThreeIconTabs data={eventData} />
        </View>
    </ScrollView>
)

SingleEvent.propTypes = {
    eventData: PropTypes.shape({
        __typename: PropTypes.string,
        name: PropTypes.string,
        date: PropTypes.string,
        timeStart: PropTypes.string,
        timeEnd: PropTypes.string,
        location: PropTypes.string,
        imageLink: PropTypes.string,
        eventLink: PropTypes.string,
        details: PropTypes.string
    }),
    openLink: PropTypes.func,
}

export default SingleEvent;
