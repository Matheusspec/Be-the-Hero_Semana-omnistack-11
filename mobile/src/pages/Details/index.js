import React from 'react';
import { View, Image, Text, TouchableOpacity, Linking } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import LogoImg from '../../assets/logo.png';
import styles from './styles';
import * as MailComposer from 'expo-mail-composer';                                           


export default function Detail() {
    const navigation = useNavigation();
    const route = useRoute();
    const incident = route.params.incident;
    
    function sendMail (){
        MailComposer.composeAsync({
            subject: `Herói do caso: ${incident.title}`,
            recipients: [incident.email],
            body: message,
        })
    }
        const message = `Olá ${incident.name}, estou entrando em contato, pois gostaria de ajudar no caso "${ incident.title }" com 
        ${Intl.NumberFormat('pt-br',{ style: 'currency',
        currency: 'BRL'}).format(incident.value)}`;
        
        function sendWhatsapp (){
            Linking.openURL(`whatsapp://send?phone=${incident.whatsapp}&text=${message}`);
        }
        
        function navigateBack() {
            navigation.goBack()
        }
        
        return(
            <View style={styles.container}>
            <View style={styles.header} >
                <Image source={ LogoImg }/>
                
                <TouchableOpacity onPress={ navigateBack }>
                    <Feather name='arrow-left' size={28} color='#E82041' />
                </TouchableOpacity>
            </View>

            <View style={ styles.incident }>
                <Text style={[ styles.incidentProp, { marginTop: 0 }] }>ONG:</Text>
                <Text style={ styles.incidentValue}>{ incident.name } de { incident.city }/{incident.uf}</Text>

                <Text style={styles.incidentProp}>Caso:</Text>
                <Text style={ styles.incidentValue}>{ incident.title }</Text>

                <Text style={styles.incidentProp}>Valor:</Text>
                <Text style={ styles.incidentValue}>{ Intl.NumberFormat('pt-br',
                { style: 'currency',
                currency: 'BRL'}).format(incident.value)}</Text>
            
            </View>

            <View style={styles.contactBox}>
                <Text style={ styles.heroTitle}>Salve o dia!</Text>
                <Text style={ styles.heroTitle}>Seja o herói desse caso.</Text>

                <Text style={ styles.heroDescription}>Entre em contato:</Text>

                <View style={ styles.actions}>
                    <TouchableOpacity onPress={ sendWhatsapp } style={ styles.action }>
                        <Text style={ styles.actionText}>Whatsapp</Text>
                    </TouchableOpacity>  

                    <TouchableOpacity onPress={ sendMail } style={ styles.action }>
                        <Text style={ styles.actionText}>Email</Text>
                    </TouchableOpacity>    
                </View> 

            </View>
        </View>
    );
}