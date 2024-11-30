import "./styles.css";

export default function Modal({ id, header, body, footer, setShow }) {
  return (
    <div id={id || "Modal"} className="modal">
      <div className="modal-content">
        <div className="header">
          <span className="close" onClick={() => setShow(false)}>
            X
          </span>
          <h2>{header}</h2>
        </div>
        <div className="body">
          <p>{body}</p>
        </div>
        <div className="footer">
          <h2>{footer}</h2>
        </div>
      </div>
      ;
    </div>
  );
}
