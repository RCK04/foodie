import { Text ,TouchableOpacity } from "react-native";
import { styles } from "../simplebtn/simplebtn.style.js";

function Simplebtn(props){
    return <TouchableOpacity style={styles.btn}>
        <Text style={styles.footerText}>{props.text}</Text>
    </TouchableOpacity>

}

export default Simplebtn;