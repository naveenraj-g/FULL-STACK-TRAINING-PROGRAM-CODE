function Button({ label }) {
  console.log(label);

  return <button className="p-2 bg-white text-black rounded">{label}</button>;
}

export default Button;
