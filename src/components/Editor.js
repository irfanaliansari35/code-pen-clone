import React, {useState} from 'react'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/css/css'
import 'codemirror/mode/javascript/javascript'
import { Controlled as ControlledEditor } from 'react-codemirror2'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCompressAlt, faExpandAlt } from '@fortawesome/free-solid-svg-icons'

export default function Editor(props) {
    const {language,displayName,value,onChange} = props;
    const [prevOpen, setprevOpen] = useState('true')
    function handleChange(editor,data,value)
    {
        onChange(value);
    }
    return (
        <div className={`editor-container ${prevOpen? '': 'collapsed' }` }>
            <div className='editor-title'>
                {displayName}
                <button 
                    type='button'
                    className='expand-collapse-btn'
                    onClick={()=>{
                        setprevOpen(!prevOpen)
                    }}
                >
                <FontAwesomeIcon icon={prevOpen? faCompressAlt : faExpandAlt} />
                </button>
            </div>
            <ControlledEditor
                onBeforeChange={handleChange}
                value = {value}
                className='code-mirror-wrapper'
                options={{
                    lineWrappin:true,
                    lint : true,
                    mode : language,
                    theme: 'material', 
                    lineNumbers:true
                }}
            />
        </div>
    )
}
