import React from "react";
import "./MovieModal.css";

function MovieModal({
  backdrop_path,
  title,
  overview,
  name,
  release_data,
  first_air_data,
  vote_average,
  setModalOpen,
}) {
  return (
    <div className="presentation" role="presentation">
      <div className="wrapper-modal">
        <div className="modal">
          <span onClick={() => setModalOpen(false)} className="modal-close">
            X
          </span>
          <img
            className="modal__poster-img"
            src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
            alt="modal__poster-img"
          />

          <div className="modal__content">
            <p className="modal__details">
              <span className="modal__user-perc">
                {vote_average * 10} % for you{" "}
              </span>{" "}
              {release_data ? release_data : first_air_data}
            </p>
            <h2 className="modal__title">{title ? title : name}</h2>
            <p className="modal__overview">평정 : {vote_average}</p>
            <p className="modal__overvire">{overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieModal;
