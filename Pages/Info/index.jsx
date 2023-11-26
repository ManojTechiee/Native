import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { styles } from './styles';

const DeliveryTrackingPage = ({ route }) => {
  const { events, trackingId } = route.params;

  return (
    <ScrollView style={styles.main}>
      <View>
        <Text style={styles.status}>Track ID: {trackingId}</Text>
      </View>
      {events.map((data) => (
        <View style={styles.statuswrap} key={data.id}>
          <View style={styles.leftdata}>
            <Text style={styles.date}>{data.date}</Text>
            <Text style={styles.time}>{data.time}</Text>
          </View>
          <View>
            <View style={styles.line} />
            <View style={styles.dot} />
          </View>
          <View style={styles.rightdata}>
            <Text style={styles.status}>{data.status}</Text>
            <Text style={styles.location}>{data.location}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

export default DeliveryTrackingPage;
