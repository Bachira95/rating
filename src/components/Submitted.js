import "./SubmittedStyles.css";

const Submitted = ({ selectedRating }) => {
  return (
    <div className="subCont">
      <img src="illustration-thank-you.svg" alt="thanks" className="imgSub" />
      <p className="paragraph">You selected {selectedRating} out of 5</p>
      <p className="thanks">Thank you!</p>
      <p className="appreciate">
        We appreciate you taking the time to give a rating.{<br />}If you ever
        need more support, don't hesitate to get in touch!
      </p>
    </div>
  );
};

export default Submitted;
