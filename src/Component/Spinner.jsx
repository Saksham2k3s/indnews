import React from 'react'
import { ColorRing } from "react-loader-spinner";
function Spinner(props) {
  return (
   <>
    <div className="container-fluid loading">
           <ColorRing
         visible={true}
         height="80"
         width="80"
         ariaLabel="blocks-loading"
         wrapperStyle={{}}
         wrapperClass="blocks-wrapper"
         colors={['black']}
       />
      
        </div>
        <h1 className={`h1 text-center text-${props.mode === 'light' ? 'black' : 'white'} mt-5`}>Hold on its loading.....</h1>
   </>
  )
}

export default Spinner