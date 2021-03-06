import React from 'react'
import { View, Text } from 'react-native'

import { Copyright } from '../Copyright'
import {Option} from '../Option'
import {FeedbackType} from '../Widget'

import { feedbackTypes } from '../../utils/feedbackTypes'
import { styles } from './styles';

interface Props {
    onFeedbackTypeChange: (feedbackType: FeedbackType) => void
}

export function Options({onFeedbackTypeChange} : Props) {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>
            Leave your feedback
        </Text>
        <View style={styles.options}>
            {
                Object
                .entries(feedbackTypes)
                .map(([key, value]) => (
                    <Option 
                    key={key}
                    title={value.title}
                    image={value.image}
                    onPress={() => onFeedbackTypeChange(key as FeedbackType)}
                    />
                ))
            }
        </View>
        <Copyright />
    </View>
  );
}