import React, { useState, useEffect } from 'react'
import CodeMirror from '@uiw/react-codemirror';
import 'codemirror/keymap/sublime';
import 'codemirror/theme/monokai.css';

const code = 'const a = 0;';



const Create = () => {
    return (
        <div className="product">
            <CodeMirror
            value={'CodeMirror'}
            options={{
                theme: 'monokai',
                keyMap: 'sublime',
                mode: 'jsx',
            }}
            />
        </div>
    )
}

export default Create