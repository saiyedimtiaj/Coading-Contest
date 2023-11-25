const AddContest = () => {
  return (
    <div>
      <div className="flex gap-3 flex-col md:flex-row">
        <div className="w-full">
          <label htmlFor="name" className="font-bold text-sm">
            Course name
          </label>
          <br />
          <input
            className="border-2 w-full border-black px-3 py-2"
            placeholder="Course name"
          />
        </div>
        <div className="w-full">
          <label htmlFor="name" className="font-bold text-sm">
          Contest Price
          </label>
          <br />
          <input
            className="border-2 w-full border-black px-3 py-2"
            placeholder="Contest Price"
          />
        </div>
      </div>
    </div>
  );
};

export default AddContest;
