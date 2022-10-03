function RatingSelect({ selected, select }) {
  const handleChange = (e) => {
    //with + change the string type into number
    select(+e.target.value);
  };

  // radio box component with iteration
  return (
    <ul className='rating'>
      {Array.from({ length: 10 }, (_, i) => (
        <li key={i}>
          <input
            type='radio'
            name='rating'
            id={`num${i + 1}`}
            value={i + 1}
            checked={selected === i + 1}
            onChange={handleChange}
          />
          <label htmlFor={`num${i + 1}`}>{i + 1}</label>
        </li>
      ))}
    </ul>
  );
}

export default RatingSelect;
