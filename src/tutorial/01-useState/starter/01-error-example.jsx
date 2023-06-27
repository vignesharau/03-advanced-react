const ErrorExample = () => {
  let count=0;
  const handleButtonClick=()=>{
    count=count+1;
    console.log(count);
  }

  return (
    <div>
      <h2>useState error example</h2>
      <h3>{count}</h3>
      <button type="button" onClick={handleButtonClick} className="btn">
        Click me
      </button>
    </div>
  );
};

export default ErrorExample;
