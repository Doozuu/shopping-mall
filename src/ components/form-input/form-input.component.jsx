import "./form-input.styles.scss";

const FormInput = ({ label, ...otherProps }) => {
  return (
    // 글을 입력하면 label이 작아지고 아니면 그대로 있도록 style 하기 위해 삼항연산자를 이용해 className을 다르게 나타냈다.
    <div className="group">
      <input className="form-input" {...otherProps} />
      {label && (
        <label
          className={`${
            otherProps.value.length ? "shrink" : ""
          } form-input-label`}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default FormInput;
