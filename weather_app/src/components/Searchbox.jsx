const Searchbox = () => {
  return (
    <div className='app'>
      <form action='/search' method='get'>
        <div className='search'>
          <input
             name="city"
             placeholder="Please write your location"
             autoComplete="off"
          />
        </div>
        <div className='btn'>
          <button>Click</button>
        </div>
      </form>
    </div>
  );
};

export default Searchbox;
