import React from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, StatusBar, View, ScrollView } from "react-native";
import { Button, Card } from 'react-native-paper';
import { useQuery } from '@tanstack/react-query'



import { default as data } from "../../api/data.json";
import { useStarships } from "../hooks/useStarships";


const Item = ({ name, model, crew, hyperdrive_rating, cost_in_credits }: ItemProps) => (
    <Card style={styles.card}>
        <Card.Title title={name} />
        <Card.Content>
            <Text>Modèle : {model}</Text>
            <Text >Crew : {crew}</Text>
            <Text>Hyperdrive Rating : {hyperdrive_rating}</Text>
            <Text>cost_in_credits : {cost_in_credits}</Text>
            <Button style={styles.buttonBuy}>Buy this ship 🚀</Button>
        </Card.Content>
    </Card>
);


interface ItemProps {
    name: string
    model: string
    crew: string
    hyperdrive_rating: string
    cost_in_credits: string
}


export const StarshipFeedScreen = () => {
  const {data, isError, isLoading } = useStarships();

  if (isError) {
    return <Text>Loading...</Text>
  }

  if (isLoading) {
    return <Text>Error !</Text>
  }
  return (  
        <FlatList
            data={data.results}
            renderItem={({ item }) => 
            <Item name={item.name} model={item.model} crew={item.crew} hyperdrive_rating={item.hyperdrive_rating} cost_in_credits={item.cost_in_credits} />}
            keyExtractor={item => item.name}
        />       
  );
};

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  container: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  card: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    },
  buttonBuy: {
    marginTop: 20,
    backgroundColor: 'purple',
  }
});