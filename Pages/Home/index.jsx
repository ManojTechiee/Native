import React, { useState, useEffect } from 'react';
import { Text, View, ActivityIndicator, TouchableOpacity } from 'react-native';
import Input from '../../assets/Input';
import { style } from './style';
import { dummyData } from '../../data';

const Home = (props) => {
  const [searchInput, setSearchInput] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const noData = "No Result Found";

  useEffect(() => {
  
    setIsLoading(true);
    setTimeout(() => {
      const filtered = dummyData.filter((item) =>
        item.trackingId.includes(searchInput)
      );
      setFilteredData(filtered);
      setIsLoading(false);
    }, 1000); 
  }, [searchInput]);

  return (
    <View style={style.home}>
      <View style={style.wrap}>
        <View style={style.searchwrap}>
          <View style={{ width: "100%" }}>
            <Input
              placeholder="Search Your Track ID "
              onChangeText={(text) => setSearchInput(text)}
            />
          </View>
        </View>
        {isLoading ? (
          <ActivityIndicator size="large" color="rgb(235, 119, 63)" />
        ) : (   
          <View style={style.cardwrap}>
            {filteredData.length === 0 && searchInput && !isLoading ? (
             <View style={style.noData}>
               <Text style={style.text}>{noData}</Text>
              </View>
            ) : (
              filteredData.map((card) => (
                <TouchableOpacity
                  key={card.id}
                  style={style.card}
                  onPress={() =>
                    props.navigation.navigate('Info', {
                      events: card.events,
                      trackingId: card.trackingId,
                    })
                  }
                >
                  <Text style={style.label}>Tracking ID:</Text>
                  <Text style={style.trackingId}>{card.trackingId}</Text>
                  <Text style={style.label}>Status:</Text>
                  <Text style={style.status}>{card.status}</Text>
                </TouchableOpacity>
              ))
            )}
          </View>
        )}
      </View>
    </View>
  );
};

export default Home;
