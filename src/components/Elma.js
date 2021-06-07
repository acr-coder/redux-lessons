import React from 'react'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
    return{
        elma: state.elma
    }
}

function Elma(props) {
    console.log(props)
    return (
        <div>
            <h1>Elma sayısı : {props.elma}</h1>
            <br />
            <button onClick={()=>props.dispatch({type:"EKLE"})}>Ekle</button>
            <button onClick={()=>props.dispatch({type:"CIKART"})}>Çıkart</button>
            

        </div>
    )
}

export default connect(mapStateToProps,null)(Elma)
