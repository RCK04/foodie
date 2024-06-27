import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./login.style.js";
import Header from "../../components/header/header.jsx";
import TextBox from "../../components/textbox/textbox.jsx";
import Button from "../../components/button/button.jsx";
import Simplebtn from "../../components/simplebtn/simplebtn.jsx";


function Login() {
    return <View style={styles.container}>
        <Header texto="Acesse sua conta." />

        <View style={styles.formGroup}>
            <View style={styles.form}>
                <TextBox label="E-mail" />
            </View>

            <View style={styles.form}>
                <TextBox label="Senha" isPassword={true} />
            </View>

            <View style={styles.form}>
                <Button texto="Acessar" />
            </View>
        </View>

        <View style={styles.footer}>
            <Simplebtn text="Criar minha conta"></Simplebtn>
        </View>
    </View>
}

export default Login;