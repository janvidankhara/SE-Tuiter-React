import React from "react";

const TuitStats = ({tuit, dislikeTuit, likeTuit = () => {}}) => {
  const [isLikedByMe, setLikeTuit] = useState(false);
  const [isDislikedByMe, setDislikeTuit] = useState(false);
  const isTuitLikedByMe = () =>
      service.tuitLikedByMe('me', tuit._id)
          .then((like) => {
              if (like) {
                  setLikeTuit(true);
              } else {
                  setLikeTuit(false);
              }
          })

  const isTuitDislikedByMe = () =>
      service.tuitDislikedByMe('me', tuit._id)
          .then((dislike) => {
              if (dislike) {
                  setDislikeTuit(true);
              } else {
                  setDislikeTuit(false);
              }
          })

  useEffect(isTuitLikedByMe);
  useEffect(isTuitDislikedByMe);
    return (
      <div className="row mt-2">
        <div className="col">
          <i className="far fa-message me-1"></i>
          {tuit.stats && tuit.stats.replies}
        </div>
        <div className="col">
          <i className="far fa-retweet me-1"></i>
          {tuit.stats && tuit.stats.retuits}
        </div>
        <div className="col">
          <span onClick={() => likeTuit(tuit)}>
              {
                isLikedByMe &&
                  <i className="fas fa-thumbs-up me-1" style={{color: 'red'}}></i>
              }
              {
                !isLikedByMe &&
                  <i className="far fa-thumbs-up me-1"></i>
              }
            {tuit.stats && tuit.stats.likes}
          </span>
        </div>
        <div className="col">
          <span onClick={() => dislikeTuit(tuit)}>
                {
                     isDislikedByMe &&
                    <i className="fas fa-thumbs-down me-1" style={{color: 'blue'}}></i>
                }
                {
                     !isDislikedByMe &&
                    <i className="far fa-thumbs-down me-1"></i>
                }
            {tuit.stats && tuit.stats.dislikes}
          </span>
        </div>
        <div className="col">
          <i className="far fa-inbox-out"></i>
        </div>
      </div>
    );
}
export default TuitStats;