import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function WorkoutCard({ image, title, duration, calories, category, onPress }) {
  const [favorite, setFavorite] = useState(false);

  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.8}>
      <View style={styles.imageBox}>
        <Image source={{ uri: image }} style={styles.image} />
        {category && (
          <View style={styles.categoryBadge}>
            <Text style={styles.categoryText}>{category}</Text>
          </View>
        )}
      </View>

      <View style={styles.infoBox}>
        <View style={styles.headerRow}>
          <Text style={styles.title} numberOfLines={2}>{title}</Text>
          <TouchableOpacity 
            style={styles.favButton} 
            onPress={() => setFavorite(!favorite)}
          >
            <Ionicons 
              name={favorite ? "heart" : "heart-outline"} 
              size={18} 
              color={favorite ? "#FF4D6D" : "#8A8A9E"} 
            />
          </TouchableOpacity>
        </View>

        <View style={styles.metaRow}>
          <View style={styles.pill}>
            <Ionicons name="time-outline" size={12} color="#FF4D6D" />
            <Text style={styles.pillText}>{duration}</Text>
          </View>

          <View style={styles.pill}>
            <Ionicons name="flame-outline" size={12} color="#FF4D6D" />
            <Text style={styles.pillText}>{calories}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 10,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#FFEBF0',
    alignItems: 'center',
  },
  imageBox: {
    position: 'relative',
    width: 105,
    height: 95,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: '#FFF0F3',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  categoryBadge: {
    position: 'absolute',
    bottom: 6,
    left: 6,
    backgroundColor: '#FF4D6D',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 6,
  },
  categoryText: {
    color: '#FFFFFF',
    fontSize: 9,
    fontWeight: '700',
  },
  infoBox: {
    flex: 1,
    marginLeft: 12,
    justifyContent: 'space-between',
    height: 90,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  title: {
    flex: 1,
    fontSize: 15,
    fontWeight: '700',
    color: '#1A1A24',
  },
  favButton: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#FFF0F3',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 6,
  },
  metaRow: {
    flexDirection: 'row',
    gap: 8,
  },
  pill: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF0F3',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 8,
    gap: 4,
  },
  pillText: {
    fontSize: 11,
    fontWeight: '600',
    color: '#FF4D6D',
  },
});
