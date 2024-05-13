import { Text as RNText, View, type ViewStyle } from 'react-native';
import React from 'react';
import { SimboColor } from 'simboStyle';

// styling take a look? https://dev.to/vpicone/how-to-ship-static-assets-with-your-react-native-library-22pf

type SimboTextProps = {
  content: string;
  textAlign?: 'left' | 'center' | 'right';
  textDecoration?: 'underline' | 'line-through';
  viewStyle?: ViewStyle;
};

export default class SimboText extends React.Component<SimboTextProps> {
  render() {
    const { content, textAlign, textDecoration, viewStyle } = this.props;

    return (
      <View style={viewStyle}>
        <RNText
          style={{
            textAlign: textAlign,
            textDecorationLine: textDecoration,
            color: SimboColor.ACCENT,
          }}
        >
          {content}
        </RNText>
      </View>
    );
  }
}
