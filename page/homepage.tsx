import * as React from 'react';
import { View } from 'react-native';
import { Header } from '../src/header';
import { useNavigation } from '@react-navigation/native';
import { Menu, Paragraph, Title } from 'react-native-paper';

export function Homepage() {

    const navigation = useNavigation();

    return (
        <Header
            title='Home'
        >
            <Title>
                Available Tools
            </Title>

            <Paragraph>
                Here is a list of developed tools for the Zimmer family.
            </Paragraph>

            <Paragraph>
                By Matthew Zimmer
            </Paragraph>

            <View style={{ marginTop: 20 }}>
                <Menu.Item icon="map" onPress={() => navigation.navigate('SitePlanner')} title="Site Planner" />
                <Menu.Item icon="file" onPress={() => navigation.navigate('Poem')} title="Poems" />
            </View>
        </Header>
    );
}