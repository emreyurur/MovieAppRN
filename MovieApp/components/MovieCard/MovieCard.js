import React from 'react';
import {SafeAreaView, View, Text, Image} from 'react-native';
import styles from './MovieCard.style';

const MovieCard = props => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: props.movie.imageUrl}} />
      <View style={styles.inner_container}>
        <Text style={styles.title}>{props.movie.title}</Text>
        <View style={styles.content_container}>
          <View style={styles.info_container}>
            <Text style={styles.director}>{props.movie.director}</Text>
            <Text style={styles.year}>{props.movie.year}</Text>
          </View>
          {props.movie.isMovieOut && (
            <View style={styles.soldout_container}>
              <Text style={styles.soldout_title}>TÜKENDİ</Text>
            </View>
          )}
        </View>
      </View>
    </View>
  );
};

export default MovieCard;
