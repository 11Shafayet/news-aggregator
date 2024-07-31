/* eslint-disable react/prop-types */
const Select = ({ data, placeholder, name, id, value, setValue }) => {
  return (
    <select
      name={name ? name : ''}
      id={id ? id : ''}
      className="border rounded p-2 focus:border-theme focus: outline-theme"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    >
      <option hidden defaultChecked>
        {placeholder ? placeholder : 'Choose your option'}
      </option>
      {data.map((item, i) => (
        <option value={item.value} key={i} className="capitalize">
          {item.label}
        </option>
      ))}
    </select>
  );
};

export default Select;
