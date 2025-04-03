import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, Image, TouchableOpacity, Modal, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const jacketsData = [
  { id: '1', image: 'https://example.com/jacket1.jpg', price: 56.97 },
  { id: '2', image: 'https://example.com/jacket2.jpg', price: 150.97 },
  { id: '3', image: 'https://example.com/jacket3.jpg', price: 280.97 },
  { id: '4', image: 'https://example.com/jacket4.jpg', price: 128.97 },
];

const JacketScreen = () => {
  const [search, setSearch] = useState('');
  const [sortModalVisible, setSortModalVisible] = useState(false);
  const [priceModalVisible, setPriceModalVisible] = useState(false);
  const [filterModalVisible, setFilterModalVisible] = useState(false);
  const [genderModalVisible, setGenderModalVisible] = useState(false);
  const [brandModalVisible, setBrandModalVisible] = useState(false);
  const [selectedSort, setSelectedSort] = useState('Recommended');
  const [selectedPrice, setSelectedPrice] = useState('Lowest-Highest');
  const [selectedGender, setSelectedGender] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('');

  const sortedJackets = [...jacketsData].sort((a, b) => {
    if (selectedPrice === 'Lowest-Highest') return a.price - b.price;
    if (selectedPrice === 'Highest-Lowest') return b.price - a.price;
    return 0;
  });

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.price}>₹{item.price.toFixed(2)}</Text>
      <TouchableOpacity style={styles.favoriteButton}>
        <Text>❤</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Jacket"
        value={search}
        onChangeText={setSearch}
      />
      <View style={styles.filterContainer}>
        <TouchableOpacity style={styles.filterButton} onPress={() => setSortModalVisible(true)}>
          <Text style={styles.filterText}>Sort by ▼</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterButton} onPress={() => setPriceModalVisible(true)}>
          <Text style={styles.filterText}>Price ▼</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterButton} onPress={() => setFilterModalVisible(true)}>
          <Text style={styles.filterText}>Filter▼ </Text>
        </TouchableOpacity>
      </View>
      <FlatList data={sortedJackets} keyExtractor={(item) => item.id} numColumns={2} renderItem={renderItem} />
      
      <Modal animationType="slide" transparent visible={sortModalVisible}>
        <View style={styles.overlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Sort by</Text>
            {['Recommended', 'Newest', 'Discounts'].map((sortOption) => (
              <TouchableOpacity key={sortOption} style={styles.option} onPress={() => { setSelectedSort(sortOption); setSortModalVisible(false); }}>
                <Text style={styles.optionText}>{sortOption}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </Modal>

      <Modal animationType="slide" transparent visible={priceModalVisible}>
        <View style={styles.overlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Price</Text>
            {['Lowest-Highest', 'Highest-Lowest'].map((priceOption) => (
              <TouchableOpacity key={priceOption} style={styles.option} onPress={() => { setSelectedPrice(priceOption); setPriceModalVisible(false); }}>
                <Text style={styles.optionText}>{priceOption}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </Modal>
      
      <Modal animationType="slide" transparent visible={filterModalVisible}>
        <View style={styles.overlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Filter</Text>
            <TouchableOpacity style={styles.option} onPress={() => { setGenderModalVisible(true); setFilterModalVisible(false); }}>
              <Text style={styles.optionText}>Gender</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option} onPress={() => { setBrandModalVisible(true); setFilterModalVisible(false); }}>
              <Text style={styles.optionText}>Brand</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      
      <Modal animationType="slide" transparent visible={genderModalVisible}>
        <View style={styles.overlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Gender</Text>
            {['Male', 'Female'].map((gender) => (
              <TouchableOpacity key={gender} style={styles.option} onPress={() => { setSelectedGender(gender); setGenderModalVisible(false); }}>
                <Text style={styles.optionText}>{gender}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </Modal>

      <Modal animationType="slide" transparent visible={brandModalVisible}>
        <View style={styles.overlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Brand</Text>
            {['Puma', 'Adidas', 'Nike'].map((brand) => (
              <TouchableOpacity key={brand} style={styles.option} onPress={() => { setSelectedBrand(brand); setBrandModalVisible(false); }}>
                <Text style={styles.optionText}>{brand}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 10, 
    backgroundColor: '#fff' },

  searchBar: { 
    height: 40, 
    borderColor: '#ccc', 
    borderWidth: 1, 
    borderRadius: 10, 
    paddingHorizontal: 10, 
    marginBottom: 10, 
    marginTop:35,
  },

  filterContainer: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    marginBottom: 10 },

  filterButton: { 
    backgroundColor: '#ff4d6d', 
    padding: 10, 
    borderRadius: 5 },

  filterText: { 
    color: 'white', 
    fontWeight: 'bold' },

  card: { 
    flex: 1, 
    margin: 5, 
    backgroundColor: '#f9f9f9', 
    borderRadius: 10, 
    padding: 10, 
    alignItems: 'center' },
    
  image: { 
    width: 150, 
    height: 275, 
    borderRadius: 10 },

  price: { 
    marginTop: 5, 
    fontWeight: 'bold' },

  favoriteButton: { 
    position: 'absolute', 
    top: 10, 
    right: 10 },

  overlay: { 
    flex: 1, 
    backgroundColor: 'rgba(0,0,0,0.5)', 
    justifyContent: 'flex-end' },

  modalContainer: { 
    backgroundColor: '#fff', 
    borderTopLeftRadius: 20, 
    borderTopRightRadius: 20, 
    padding: 16 },

  modalTitle: { 
    fontSize: 18, 
    fontWeight: 'bold', 
    marginBottom: 10 },

  option: { 
    padding: 14, 
    borderRadius: 10,
    backgroundColor: '#f1f1f1', 
    marginBottom: 10 },

  optionText: { 
    fontSize: 16, 
    color: 'black' },
});

export default JacketScreen;
