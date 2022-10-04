import React from 'react'

export default function alert(props) {
  return ( props.alert && <div className={`fixed-top  col-4 shadow ms-auto mt-5 me-3 alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
  <strong>Alert</strong>! {props.alert.msg}
 
</div>
  )
}
