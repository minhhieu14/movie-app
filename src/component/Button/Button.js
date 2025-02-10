const Button = (props) => {
  const { className, children } = props;
  return (
    <button
      className={className}
      onClick={props.onClick ? () => props.onClick() : null}
    >
      {children}
    </button>
  );
};
export const OutlineButton = (props) => {
  const { className, children } = props;
  return (
    <button
      className={className}
      onClick={props.onClick ? () => props.onClick() : null}
    >
      {children}
    </button>
  );
};
export default Button;
