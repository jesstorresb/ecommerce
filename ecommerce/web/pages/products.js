import * as React from 'react';
import { Avatar, Title, Paragraph } from 'react-native-paper';
import { View, ScrollView, StyleSheet, Image } from 'react-native';
import { Text, Card, Button, Icon } from '@rneui/themed';
import { PricingCard, lightColors } from '@rneui/themed';
import { AirbnbRating } from '@rneui/themed';

import Constants from 'expo-constants';
import Batom from '../assets/batom.webp';
import Desodorante from '../assets/desodorante.webp';
import Sabonete from '../assets/sabonete.webp';
import Shampoo from '../assets/shampoo.webp';
import { useFonts, Saira_700Bold } from '@expo-google-fonts/saira';
import {Exo_400Regular} from '@expo-google-fonts/exo';

export default function Products() {
let [fontsloaded] = useFonts({
  Saira_700Bold,
});


  return (
    <ScrollView>
      <Card>
        <Card.Title>Batom MAC - power kiss</Card.Title>
        <Card.Divider />
        <Card.Image style={{ height: 240 }} source={Batom} />
        <AirbnbRating defaultRating={4.5} count={5} isDisabled={true} size={30}/>

         <Text style={{ display: "flex", justifyContent: "center", fontSize:26, fontFamily: "Saira_700Bold" }}>R$ 139,00
        </Text>
        
        <Text style={{ marginBottom: 20,marginTop: 20, fontFamily: "{Exo_400Regular"}}>
          Batom MAC - cor POWDER KISS - Um batom leve e matte hidratante que oferece um desfoque nas linhas dos lábios e cores suaves.
        </Text>

        <Button
          icon={
            <Icon name="cart" type="ionicon" color="#ffffff" iconStyle={{ marginRight: 10 }} />
          }
          buttonStyle={{
            borderRadius: 0,
            marginLeft: 0,
            marginRight: 0,
            marginBottom: 0,
          }}
          title="Comprar"
          color={"#ff1493"}
        />
      </Card>
            <Card>
        <Card.Title>Giovanna Baby Classic - Desodorante Roll-On 50ml</Card.Title>
        <Card.Divider />
        <Card.Image style={{ height: 300}} source={Desodorante} />
        <AirbnbRating defaultRating={4.5} count={5} isDisabled={true} size={30}/>
        
         <Text style={{ display: "flex", justifyContent: "center", fontSize:26, fontFamily: "Saira_700Bold" }}>R$ 8,50
        </Text>
        
        <Text style={{ marginBottom: 20,marginTop: 20,fontFamily: "{Exo_400Regular"}}>
          Desodorante Giovanna Baby Classic - não irrita a pele, neutraliza odores e possui perfume delicado que garante sensação de proteção e conforto o dia todo. Com ele, você controla o mau cheiro do suor por até 48 horas. 
        </Text>
        <Button
          icon={
            <Icon name="cart" type="ionicon" color="#ffffff" iconStyle={{ marginRight: 10 }} />
          }
          buttonStyle={{
            borderRadius: 0,
            marginLeft: 0,
            marginRight: 0,
            marginBottom: 0,
          }}
          title="Comprar"
          color={"#ff1493"}
        />
      </Card>
            <Card>
        <Card.Title>Sabonete Dove 90g</Card.Title>
        <Card.Divider />
        <Card.Image style={{ height: 300}} source={Sabonete} />
        <AirbnbRating defaultRating={4.5} count={5} isDisabled={true} size={30}/>
        
         <Text style={{ display: "flex", justifyContent: "center", fontSize:26, fontFamily: "Saira_700Bold" }}>R$ 5,80
        </Text>
        
        <Text style={{ marginBottom: 20,marginTop: 20, fontFamily: "{Exo_400Regular" }}>
          Dove Original é o sabonete de beleza que ajuda a proteger a hidratação natural da sua pele. Com pH neutro e ¼ de creme hidratante na sua composição, mantém a maciez e a suavidade que a sua pele merece. Não resseca como os sabonetes comuns, e deixa a sua pele bem cuidada e com aspecto saudável. Use-o diariamente e revele uma pele viva, macia e poderosa.
        </Text>
        <Button
          icon={
            <Icon name="cart" type="ionicon" color="#ffffff" iconStyle={{ marginRight: 10 }} />
          }
          buttonStyle={{
            borderRadius: 0,
            marginLeft: 0,
            marginRight: 0,
            marginBottom: 0,
          }}
          title="Comprar"
          color={"#ff1493"}
        />
      </Card>
            <Card>
        <Card.Title>Shampoo Johnson's Baby 750ml</Card.Title>
        <Card.Divider />
        <Card.Image style={{ height: 300}} source={Shampoo} />
        <AirbnbRating defaultRating={4.5} count={5} isDisabled={true} size={30}/>
        
         <Text style={{ display: "flex", justifyContent: "center", fontSize:26, fontFamily: "Saira_700Bold" }}>R$ 40,00
        </Text>
        
        <Text style={{ marginBottom: 20,marginTop: 20, fontFamily: "{Exo_400Regular"}}>
          Com fórmula ainda mais suave para dar o cuidado que o cabelo do seu bebê precisa, o Shampoo Johnson's Baby Regular limpa suavemente e protege os cabelos e o couro cabeludo do bebê. É desenvolvido com glicerina vegetal, tem ph fisiológico, é hipoalergênico e livre de corantes, parabenos, sulfatos e ftalatos. Deve ser aplicado por um adulto ou sob sua supervisão, massageando os cabelos molhados do bebê. Não usar se o couro cabeludo estiver ferido ou irritado. É dermatologicamente testado e hipoalergênico, além de deixar os cabelos mais macios e cheirosos desde o primeiro uso.
        </Text>
        <Button
          icon={
            <Icon name="cart" type="ionicon" color="#ffffff" iconStyle={{ marginRight: 10 }} />
          }
          buttonStyle={{
            borderRadius: 0,
            marginLeft: 0,
            marginRight: 0,
            marginBottom: 0,
          }}
          title="Comprar"
          color={"#ff1493"}
        />
      </Card>

    </ScrollView>
  );
}

