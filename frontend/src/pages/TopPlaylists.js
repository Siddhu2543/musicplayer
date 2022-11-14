const TopPlaylists = () => {
  return (
    <div className="home">
      <div className="main">
        <h3 className="heading">Top Playlists</h3>
        <div className="container-fluid container-scroll">
          <div className="row columns-16">
            <div className="col p-0">
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
      </div>
    </div>
  );
};

export default TopPlaylists;
