import { StyleSheet } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function NewTabScreen() {
  return (
    <ThemedView style={styles.newTabContainer}>
      <ThemedText style={styles.textTitle} type="title">Esto es una nueva tab</ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  newTabContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'linear-gradient(180deg, #ff7e5f 0%, #feb47b 100%)',
    paddingHorizontal: 20,
  },
  textTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#ffffff',
    textShadowColor: '#000000',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
    marginBottom: 30,
    textAlign: 'center',
  },
  waveIcon: {
    marginTop: 40,
    transform: [{ scale: 1.2 }],
  },
});
