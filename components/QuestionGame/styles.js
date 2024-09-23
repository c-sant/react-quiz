import { StyleSheet } from "react-native";
import commonStyles from "../../styles";

const componentStyles = StyleSheet.create({
    content: {
        width: '100%', 
        height: '100%', 
        backgroundColor: "#1B2136"
    },
    titleQuestion: {
        margin: 20, 
        fontSize: 18, 
        color: '#fff'
    },
    optionContainer: { 
        width: '100%', 
        justifyContent: 'center'
    },
    optionFont:{ 
        color: '#fff' 
    }
});

const styles = StyleSheet.flatten([commonStyles, componentStyles]);

export default styles;
