import * as React from 'react';
import { ActivityIndicator, Platform, View } from 'react-native';
import { Paragraph, Colors, Portal, Dialog } from 'k-rapid';

const isIOS = Platform.OS === 'ios';

const DialogWithLoadingIndicator = ({
  visible,
  close,
}: {
  visible: boolean;
  close: () => void;
}) => (
  <Portal>
    <Dialog onDismiss={close} visible={visible}>
      <Dialog.Title>Progress Dialog</Dialog.Title>
      <Dialog.Content>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <ActivityIndicator
            color={Colors.indigo500}
            size={isIOS ? 'large' : 48}
            style={{ marginRight: 16 }}
          />
          <Paragraph>Loading.....</Paragraph>
        </View>
      </Dialog.Content>
    </Dialog>
  </Portal>
);

export default DialogWithLoadingIndicator;
