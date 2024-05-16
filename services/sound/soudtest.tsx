import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Audio } from 'expo-av';

const SoundTest = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const soundObject = useRef<Audio.Sound | null>(null);

    const playAudio = async () => {
        try {
            const { sound } = await Audio.Sound.createAsync(
                { uri: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3' },
                { shouldPlay: true }
            );
            soundObject.current = sound;
            setIsPlaying(true);
        } catch (error) {
            console.log('Error playing audio:', error);
        }
    };

    const stopAudio = async () => {
        if (soundObject.current) {
            await soundObject.current.stopAsync();
            setIsPlaying(false);
        }
    };

    const resumeAudio = async () => {
        if (soundObject.current) {
            await soundObject.current.playAsync();
            setIsPlaying(true);
        }
    };

    const handleSeekBarPress = (position: number) => {
        // Logic to handle seeking to a specific position in the audio
    };

    const handleNextAudio = () => {
        // Logic to play the next audio
    };

    const handlePreviousAudio = () => {
        // Logic to play the previous audio
    };

    return (
        <View>
            <Text>Audio Player</Text>
            <TouchableOpacity onPress={isPlaying ? stopAudio : playAudio}>
                <Text>{isPlaying ? 'Stop' : 'Play'}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={resumeAudio}>
                <Text>Resume</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleNextAudio}>
                <Text>Next</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handlePreviousAudio}>
                <Text>Previous</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleSeekBarPress(100)}>
                <Text>Move to 100s</Text>
            </TouchableOpacity>
        </View>
    );
};

export default SoundTest;