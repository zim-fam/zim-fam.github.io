import * as React from 'react';
import { View, Text } from 'react-native';
import { Appbar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

export interface Header_Props {
    title: string;
    children?: JSX.Element[];
}

export function Header({ title, children }: Header_Props) {
    const navigation = useNavigation();
    const render_children = (children: JSX.Element[]) => {
        return (
            <View style={{ flex: 1, paddingHorizontal: 20 }}>
                {children}
            </View>
        );
    }
    
    return (
        <View>
            <Appbar>
                { navigation.canGoBack() ? <Appbar.BackAction onPress={() => navigation.goBack()}/> : null }
                <Appbar.Content title={title}/>
            </Appbar>
            { children === undefined ? null : render_children(children) }
        </View>
    );
}