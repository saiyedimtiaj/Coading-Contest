const AddContest = () => {
  const handleAddCourse =  event => {
    event.preventDefault();
    console.log(event.target.time.value);
  };

  return (
    <div>
      <h1 className="text-3xl font-semibold text-center my-8">Add A Contest</h1>
      <form onSubmit={handleAddCourse}>
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
        <div className="flex gap-3 flex-col md:flex-row">
          <div className="w-full">
            <label htmlFor="name" className="font-bold text-sm">
              Prize Money
            </label>
            <br />
            <input
              className="border-2 w-full border-black px-3 py-2"
              placeholder="Prize Money"
            />
          </div>
          <div className="w-full">
            <label htmlFor="name" className="font-bold text-sm">
              image
            </label>
            <input
              className="border-2 w-full border-black px-3 py-2"
              placeholder="Contest Price"
              type="file"
            />
          </div>
        </div>
        <div className="flex gap-3 flex-col md:flex-row">
          <div className="w-full">
            <label htmlFor="name" className="font-bold text-sm">
              Select Category
            </label>
            <br />
            <select
              defaultValue={"Who shot first?"}
              className="select  w-full border-2 border-black"
            >
              <option disabled>Who shot first?</option>
              <option>Han Solo</option>
              <option>Greedo</option>
            </select>
          </div>
          <div className="w-full">
            <label htmlFor="name" className="font-bold text-sm">
              Set Dedline
            </label>
            <input
              name="time"
              className="border-2 w-full border-black px-3 py-2"
              placeholder="Contest Price"
              type="date"
            />
          </div>
        </div>
        <div className="flex gap-3 flex-col md:flex-row">
          <div className="w-full">
            <label htmlFor="name" className="font-bold text-sm">
              Description
            </label>
            <textarea
              name=""
              id=""
              rows="5"
              className="border-2 w-full border-black px-3 py-2"
            ></textarea>
          </div>
        </div>
        <input
          className="mt-1 px-5 py-3 bg-black text-white font-medium cursor-pointer"
          type="submit"
          value="Add Contest"
        />
      </form>
    </div>
  );
};

export default AddContest;
