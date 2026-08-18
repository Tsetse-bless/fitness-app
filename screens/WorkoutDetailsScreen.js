import React, { useState } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function WorkoutDetailsScreen({ route, navigation }) {
  const { workout } = route.params || {};
  const [isCompleted, setIsCompleted] = useState(false);
  const [isFav, setIsFav] = useState(false);
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaView style={styles.container} edges={['left', 'right', 'bottom']}>
      <StatusBar barStyle="light-content" />
      
      <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
        <View style={styles.imageBox}>
          <Image source={{ uri: workout?.image }} style={styles.image} />
          
          <View style={[styles.navHeader, { top: Math.max(insets.top + 6, 12) }]}>
            <TouchableOpacity style={styles.iconBtn} onPress={() => navigation.goBack()}>
              <Ionicons name="chevron-back" size={20} color="#1A1A24" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.iconBtn} onPress={() => setIsFav(!isFav)}>
              <Ionicons 
                name={isFav ? "heart" : "heart-outline"} 
                size={20} 
                color={isFav ? "#FF4D6D" : "#1A1A24"} 
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.body}>
          {workout?.category && (
            <View style={styles.catBadge}>
              <Text style={styles.catText}>{workout.category}</Text>
            </View>
          )}

          <Text style={styles.title}>{workout?.title}</Text>

          <View style={styles.stats}>
            <View style={styles.statBox}>
              <Ionicons name="time-outline" size={16} color="#FF4D6D" />
              <Text style={styles.statLabel}>Duration</Text>
              <Text style={styles.statValue}>{workout?.duration}</Text>
            </View>

            <View style={styles.divider} />

            <View style={styles.statBox}>
              <Ionicons name="flame-outline" size={16} color="#FF4D6D" />
              <Text style={styles.statLabel}>Calories</Text>
              <Text style={styles.statValue}>{workout?.calories}</Text>
            </View>

            <View style={styles.divider} />

            <View style={styles.statBox}>
              <Ionicons name="fitness-outline" size={16} color="#FF4D6D" />
              <Text style={styles.statLabel}>Exercises</Text>
              <Text style={styles.statValue}>
                {workout?.exercises ? workout.exercises.length : 0}
              </Text>
            </View>
          </View>

          <Text style={styles.heading}>Description</Text>
          <Text style={styles.text}>{workout?.description}</Text>

          {workout?.exercises && (
            <View style={styles.exerciseSection}>
              <Text style={styles.heading}>Exercises</Text>
              {workout.exercises.map((item, index) => (
                <View key={index} style={styles.exerciseRow}>
                  <View style={styles.numBadge}>
                    <Text style={styles.numText}>{index + 1}</Text>
                  </View>
                  <Text style={styles.exerciseText}>{item}</Text>
                </View>
              ))}
            </View>
          )}
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity
          style={[styles.btn, isCompleted && styles.btnCompleted]}
          onPress={() => setIsCompleted(!isCompleted)}
          activeOpacity={0.85}
        >
          <Ionicons 
            name={isCompleted ? "checkmark-circle" : "play"} 
            size={18} 
            color="#FFFFFF" 
            style={{ marginRight: 6 }}
          />
          <Text style={styles.btnText}>
            {isCompleted ? "Completed" : "Start Workout"}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scroll: {
    paddingBottom: 80,
  },
  imageBox: {
    position: 'relative',
    height: 250,
    width: '100%',
    backgroundColor: '#1A1A24',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  navHeader: {
    position: 'absolute',
    left: 16,
    right: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconBtn: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  body: {
    marginTop: -20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: '#FFFFFF',
    padding: 16,
  },
  catBadge: {
    alignSelf: 'flex-start',
    backgroundColor: '#FFF0F3',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 8,
    marginBottom: 6,
  },
  catText: {
    color: '#FF4D6D',
    fontSize: 10,
    fontWeight: '700',
  },
  title: {
    fontSize: 22,
    fontWeight: '800',
    color: '#1A1A24',
    marginBottom: 14,
  },
  stats: {
    flexDirection: 'row',
    backgroundColor: '#FFF0F3',
    borderRadius: 14,
    paddingVertical: 12,
    paddingHorizontal: 8,
    alignItems: 'center',
    justifyContent: 'space-around',
    marginBottom: 18,
  },
  statBox: {
    alignItems: 'center',
    flex: 1,
  },
  statLabel: {
    fontSize: 10,
    color: '#8A8A9E',
    marginTop: 2,
  },
  statValue: {
    fontSize: 12,
    fontWeight: '700',
    color: '#1A1A24',
    marginTop: 2,
  },
  divider: {
    width: 1,
    height: 24,
    backgroundColor: '#FFEBF0',
  },
  heading: {
    fontSize: 15,
    fontWeight: '700',
    color: '#1A1A24',
    marginBottom: 6,
    marginTop: 4,
  },
  text: {
    fontSize: 13,
    color: '#555566',
    lineHeight: 18,
    marginBottom: 16,
  },
  exerciseSection: {
    marginTop: 2,
  },
  exerciseRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FBFBFD',
    borderWidth: 1,
    borderColor: '#F0F0F5',
    padding: 10,
    borderRadius: 12,
    marginBottom: 8,
  },
  numBadge: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#FFF0F3',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  numText: {
    fontSize: 11,
    fontWeight: '700',
    color: '#FF4D6D',
  },
  exerciseText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#1A1A24',
    flex: 1,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: '#F0F0F5',
  },
  btn: {
    flexDirection: 'row',
    height: 46,
    backgroundColor: '#FF4D6D',
    borderRadius: 23,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnCompleted: {
    backgroundColor: '#06D6A0',
  },
  btnText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '700',
  },
});
