import styles from "./review.module.css";
function ReviewL({ review }) {
  return (
    <div className={`${styles.reviews} shadow-lg bg-yellow-100 text-lg`}>
      <div className={`flex flex-col h-[300px]`}>
        <p className="text-base">{review.review}</p>
        <div className="flex gap-4 mt-16">
          <img
            src={`./../img/users/${review.user.photo}`}
            alt="user img"
            className="w-[3rem] h-[3rem] rounded-full mx-3"
          />
          <div>
            <h3>{review.user.name}</h3>
            <span>⭐⭐⭐⭐⭐</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReviewL;
