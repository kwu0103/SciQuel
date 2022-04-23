import defStyles from "./defBox.module.css";

function DefBox({ term, definition, inContext }) {
  return (
    <div className={defStyles.defBox}>
      <p className={defStyles.title}>Term</p>
      <p>
        <strong>{term}</strong>
      </p>
      <hr style={{ width: "100%", marginTop: "25px" }} />
      <p className={defStyles.title}>Definition</p>
      {/* <button>hi</button> */}
      {/* <button ref = {cancelBtn} className = {defStyles.cancel} 
                ></button> */}

      <p>{definition}</p>
      <hr style={{ width: "100%", marginTop: "50px" }} />
      <p className={defStyles.title}>In Context</p>
      <p>
        <i>&quot;{inContext}&quot;</i>
      </p>
    </div>
  );
}

export default DefBox;
