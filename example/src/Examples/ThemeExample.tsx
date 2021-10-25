import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Paragraph } from 'react-native-kyba';
import { Provider as KyybaProvider } from 'react-native-kyba';
import ScreenWrapper from '../ScreenWrapper';

const Content = () => {
  return (
    <ScreenWrapper contentContainerStyle={styles.container}>
      <Paragraph style={styles.paragraph}>
        React Native Kyyba automatically adapts theme based on system
        preferences
      </Paragraph>
      <Paragraph style={styles.paragraph}>
        Please change system theme to dark/light to see the effect
      </Paragraph>
    </ScreenWrapper>
  );
};

const ThemeExample = () => {
  return (
    <KyybaProvider>
      <Content />
    </KyybaProvider>
  );
};
ThemeExample.title = 'Theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  paragraph: {
    textAlign: 'center',
    marginHorizontal: 16,
    marginVertical: 16,
  },
});
export default ThemeExample;
