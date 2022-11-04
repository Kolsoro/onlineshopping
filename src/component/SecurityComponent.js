import React from "react";
import purify from 'dompurify'
function SecurityComponent() {

    const msg = "<b>Hello</b>"

    function Hello(){
        return{
            __html:'<b>Welcome to React</b>'
        }
    }
    return (
        <div>
            <h2>Security Test</h2>
            <div>
                {msg}
            </div>
            <div dangerouslySetInnerHTML={Hello()}>

            </div>
        </div>
    )
}

export default SecurityComponent;