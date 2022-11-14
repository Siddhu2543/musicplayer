const SearchResults = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row row-cols-6">
          <div className="col p-0 mb-3">
            <div className="card">
              <div className="card-body">
                <img
                  src="covers/hot-hits.jpg"
                  className="card-cover mb-2"
                  alt="..."
                />
                <h5 className="card-title">Card title 1</h5>
                <p className="card-text">
                  card description
                  <br />
                  card description
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchResults;
