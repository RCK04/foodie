import { View, Text, TouchableOpacity, TouchableWithoutFeedback, Keyboard, ScrollView } from "react-native";
import { styles } from "./registro.style.js";
import Header from "../../components/header/header.jsx";
import TextBox from "../../components/textbox/textbox.jsx";
import Button from "../../components/button/button.jsx";
import Simplebtn from "../../components/simplebtn/simplebtn.jsx";


function Registro() {
    const dismissKeyboard = () => {
        Keyboard.dismiss();
    }


    return <TouchableWithoutFeedback onPress={dismissKeyboard}>
        <ScrollView>
            <View style={styles.container}>
                <Header texto="Criar sua conta." />

                <View style={styles.formGroup}>
                    <View style={styles.form}>
                        <TextBox label="Nome Completo" />
                    </View>

                    <View style={styles.form}>
                        <TextBox label="E-mail" />
                    </View>

                    <View style={styles.form}>
                        <TextBox label="Escolha uma senha" isPassword={true} />
                    </View>

                    <View style={styles.form}>
                        <TextBox label="Confirme a senha" isPassword={true} />
                    </View>

                    <View style={styles.formBtn}>
                        <Button texto="Próximo passo" />
                    </View>
                </View>

                <View style={styles.footer}>
                    <Simplebtn text="Acessar minha conta"></Simplebtn>
                </View>
            </View>
        </ScrollView>
    </TouchableWithoutFeedback>
}

export default Registro;