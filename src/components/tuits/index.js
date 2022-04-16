import React from "react";
import './tuits.css';
import Tuit from "./tuit";
import * as likesService from "../../services/likes-service";
import * as service from "../../services/tuits-service";
import * as bookmarksService from "../../services/bookmarks-service";

const Tuits = ({tuits = [], refreshTuits}) => {
    const likeTuit = (tuit) =>
        likesService.userLikesTuit("me", tuit._id)
            .then(refreshTuits)
            .catch(e => alert(e))

    const dislikeTuit = (tuit) =>
        likesService.userDislikesTuit("me", tuit._id)
            .then(refreshTuits)
            .catch(e => alert(e))
            
    const deleteTuit = (tid) =>
        service.deleteTuit(tid)
            .then(refreshTuits);

    const bookmarkTuit = (tuit) =>
            bookmarksService.userBookmarksTuit("me", tuit._id)
                .then(refreshTuits)
                .catch(e => alert(e))
    
    const unbookmarkTuit = (tuit) =>
            bookmarksService.userUnbookmarksTuit("me", tuit._id)
                .then(refreshTuits)
                .catch(e => alert(e))

    return (
        <div>
          <ul className="ttr-tuits list-group">
            {
              tuits.map && tuits.map(tuit =>
                  <Tuit key={tuit._id}
                        deleteTuit={deleteTuit}
                        likeTuit={likeTuit}
                        dislikeTuit={dislikeTuit}
                        bookmarkTuit={bookmarkTuit}
                        unbookmarkTuit={unbookmarkTuit}
                        tuit={tuit}/>)
            }
          </ul>
        </div>
      );
}

export default Tuits;