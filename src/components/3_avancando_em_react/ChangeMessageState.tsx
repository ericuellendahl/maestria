
const ChangeMessageState = ({handleMessage}) => {

    const messagens = ["Oi", "Olá", "Eae", "Tudo bem?"]

  return (
    <div>
        <button onClick={()=> handleMessage(messagens[0])}>1</button>
        <button onClick={()=> handleMessage(messagens[1])}>2</button>
        <button onClick={()=> handleMessage(messagens[2])}>3</button>
        <button onClick={()=> handleMessage(messagens[3])}>4</button>
    </div>
  )
}

export default ChangeMessageState