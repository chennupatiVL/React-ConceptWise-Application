import React from 'react'
import ReactDom,{ createPortal } from 'react-dom'

const PortalTask = ({func}) => {
    
  console.log(func);
    
    return createPortal (<>
        <div id="container">
            <div id="child">
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui except
                uri at repudiandae autem adipisci harum quasi ex explicabo, nihil v
                oluptas aliquam nisi porro, cum dolore accusamus expedita architect
                o nesciunt cumque, ad eaque. Accusantium nihil perferendis doloreml
                abore. Eligendi, dlor numquam. A molestiae ut beatae velit quidem,p
                laceat corrupti laborum quaerat?<br /><br />
                <button onClick={func}>Go Back</button>        
            </div>
        </div>
        </>,document.getElementById("portalTask"))
}

export default PortalTask