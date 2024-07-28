const Label = ({ children, htmlFor, className }: any) => {
  return (
    <label htmlFor={htmlFor} className="block mb-2">
      <span
        className={className}
      >
        {children}
      </span>
    </label>
  );
};

export default Label;
