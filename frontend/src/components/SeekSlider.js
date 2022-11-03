const SeekSlider = (props) => {
  return (
    <>
      <input
        id="slider"
        type="range"
        min="0"
        max={props.duration}
        value={props.elapsed}
        className="form-range align-self-center"
        step="1"
        onChange={props.onSeekTime}
      />
    </>
  );
};

export default SeekSlider;
