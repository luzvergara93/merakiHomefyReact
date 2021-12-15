
import "./ItemCount.css";
const ItemCount = ({ restar, sumar, contador }) => {
  return (
    <div className="Contador">
      <button onClick={restar}> - </button>
      <p> {contador}</p>
      <button onClick={sumar}> +</button>
    </div>
  );
};
export default ItemCount;