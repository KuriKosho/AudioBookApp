import React, { useState, useEffect } from 'react';
import { Button, View } from 'react-native';
import { Audio,AVPlaybackStatus } from 'expo-av';
import { ProgressBar } from 'react-native-paper';

export default function SoundScreen() {
  const [sound, setSound] = useState<Audio.Sound | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  const loadAudio = async () => {
    const { sound } = await Audio.Sound.createAsync(
      { uri: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3' },
      { shouldPlay: true }
    );
    sound.setOnPlaybackStatusUpdate(onPlaybackStatusUpdate);
    setSound(sound);
  };

  const onPlaybackStatusUpdate = (status: AVPlaybackStatus) => {
    if (status.isLoaded) {
      setProgress(status.positionMillis / (status.durationMillis ?? 1));
      if (status.didJustFinish) {
        setIsPlaying(false);
        setProgress(0);
      }
    }
  };

  const playAudio = async () => {
    if (!sound) {
      console.log('loading audio');
      await loadAudio();
      setIsPlaying(true);
    } else {
      console.log('playing audio');
      await sound.playAsync();
      setIsPlaying(true);
    }
  };

  const pauseAudio = async () => {
    if (sound) {
      await sound.pauseAsync();
      setIsPlaying(false);
    }
  };

  const resumeAudio = async () => {
    if (sound) {
      await sound.playAsync();
      setIsPlaying(true);
    } else {
      await playAudio();
    }
  };

  const stopAudio = async () => {
    if (sound) {
      await sound.stopAsync();
      setIsPlaying(false);
      setProgress(0);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Play" onPress={playAudio} disabled={isPlaying} />
      <Button title="Pause" onPress={pauseAudio} disabled={!isPlaying} />
      <Button title="Resume" onPress={resumeAudio} disabled={isPlaying} />
      <Button title="Stop" onPress={stopAudio} disabled={!isPlaying} />
      <ProgressBar progress={progress} color="blue" style={{ width: 300, marginTop: 20 }} />
    </View>
  );
}
