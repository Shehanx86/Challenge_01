
import Button from './components/Button';
import Label from './components/Label';

export const getElement = (type) => {
    console.log(type === 'button')
        switch(type) {
            case 'button':
                return <Button />
            case 'label': 
                return <Label />
            default: 
                return "Invalid type!"
        }
    }
