const Loading = () => {
  return (
    <div className="d-flex justify-content-center Loading--Container">
      <div className="spinner-border LoadingContent" style={{width:"3rem", height:"3rem"}} role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Loading;
