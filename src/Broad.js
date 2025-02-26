import "./Broad.css"



function Broad({value,setClick}){
    return(
        <>
        <button onClick={setClick}>{value}</button>
        </>
    )
}
export default Broad;