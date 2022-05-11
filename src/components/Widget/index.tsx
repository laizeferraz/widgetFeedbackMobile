import React, {useRef, useState} from 'react';
import {TouchableOpacity, KeyboardAvoidingView, Platform, View} from 'react-native'
import {ChatTeardropDots} from 'phosphor-react-native'
import BottomSheet from '@gorhom/bottom-sheet';
import {gestureHandlerRootHOC} from 'react-native-gesture-handler'


import { styles } from './styles';
import { theme } from '../../theme';
import { Options } from '../Options';
import { Form } from '../Form';
import { Success } from '../Success';
import { feedbackTypes } from '../../utils/feedbackTypes'

export type FeedbackType = keyof typeof feedbackTypes

function Widget() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)
  const [feedbackSent, setFeedbackSent] = useState(false)
  const bottomSheetRef = useRef<BottomSheet>(null)

  function handleOpen() {
      bottomSheetRef.current?.expand()
  }

  function handlePressBack () {
      setFeedbackType(null)
      setFeedbackSent(false)
  }

  function handleFeedBackSent () {
    setFeedbackSent(true)
}

  return (
    <>
        <KeyboardAvoidingView behavior={ Platform.OS ==='ios' ? 'padding' : 'height'} style={{flex:1}}>
        <View style={{flex:1}}>
        <TouchableOpacity 
            style={styles.button}
            onPress={handleOpen}
        >
            <ChatTeardropDots 
                size={24} 
                color={theme.colors.text_on_brand_color}  
                weight='bold'
            />
        </TouchableOpacity>
        <BottomSheet
            ref={bottomSheetRef}
            snapPoints={[1, 280]}
            backgroundStyle={styles.modal}
            handleIndicatorStyle={styles.indicator}
        >
            {
                feedbackSent 
                ?
                <Success
                    onSendAnotherFeedback={handlePressBack}
                />
                :
                <> 
                    {
                    feedbackType 
                    ?
                    <Form
                        feedbackType={feedbackType}
                        onPressBack={handlePressBack}
                        onFeedbackSent={handleFeedBackSent}

                    />
                    :
                    <Options
                        onFeedbackTypeChange={setFeedbackType}
                    />
                    }
                </>
            }
        </BottomSheet>
        </View>
        </KeyboardAvoidingView>
    </>
  );
}

export default gestureHandlerRootHOC(Widget) as any