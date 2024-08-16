import React, { useContext, useState } from 'react'

import { CustomView } from '../../components/ui/CustomView'
import { Switch, View } from 'react-native';
import { MyCard } from '../../components/ui/MyCard';
import { MySwitch } from '../../components/ui/MySwitch';
import { MySeparator } from '../../components/ui/MySeparator';
import { MyThemeContext } from '../../context/ThemeContext';


export const SwitchScreen = () => {

    
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);


    const [state, setState] = useState({
        isActive: true,
        isHungry: false,
        isHappy: true,
    })
    return (
        <CustomView style={{ marginTop: 100, paddingHorizontal: 10 }}>
            <MyCard>
                <MySwitch isOn={state.isActive} text='Esta Activo' onChange={(value) => setState({ ...state, isActive: value })} />
                <MySeparator />
                <MySwitch isOn={state.isHungry} text='Tiene Hambre' onChange={(value) => setState({ ...state, isHungry: value })} />
                <MySeparator />
                <MySwitch isOn={state.isHappy} text='Es Feliz' onChange={(value) => setState({ ...state, isHappy: value })} />
            </MyCard>
        </CustomView>
    );
}
