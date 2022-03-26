import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

const Code = ({ children, lang }) => {
    return (
        <div className='border-4 mt-4'>
            <SyntaxHighlighter language={lang} style={docco}>
                {children}
            </SyntaxHighlighter>
        </div>
    )
}

const InlineCode = ({ children }) => {
    return (
        <code className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2'>
            {children}
        </code>
    )
}

export default Code
export { InlineCode }