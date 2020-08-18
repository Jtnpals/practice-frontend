import React, {useState} from 'react';

function InputSample(){
    const [text, setText] = useState('');
    const onReset = () => {
        setText('');
    }
    const onChange = (e) => {
        setText(e.target.value);
    }
    return(
        <div>
            <input onChange={onChange} value={text}/>
            <button onClick={onReset}>초기화</button>
                <div>
                    <b>값: </b>
                    {text}
                </div>
        </div>
    )
}

export default InputSample;