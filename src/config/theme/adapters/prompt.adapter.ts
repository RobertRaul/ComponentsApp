import prompt from 'react-native-prompt-android';

interface Opciones {
    title: string;
    subTitle: string;
    buttons: PromptButtons[];
    promptType?: 'default' | 'plain-text' | 'secure-text';
    defaultValue?: string;
    placeHolder?: string;
}

interface PromptButtons {
    text: string;
    onPress: () => void;
    style?: "cancel" | "default" | "destructive"

}


export const myShowPrompt = ({ title, subTitle, buttons, promptType = 'plain-text', defaultValue, placeHolder }: Opciones) => {
    prompt(
        title,
        subTitle,
        buttons
        ,
        {
            type: promptType,
            cancelable: false,
            defaultValue: defaultValue,
            placeholder: placeHolder
        }
    );
}