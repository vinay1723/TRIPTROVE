import styles from "./review.module.css";

function Reviews() {
  return (
    <div className={`${styles.reviews}`}>
      <div className={styles.reviewp1}>
        <img
          src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixqx=oilqXxSqey&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt="user img"
          className="w-[3rem] h-[3rem] rounded-full mx-3"
        />
        <div>
          <h3>Mark Edwards</h3>
          <span>⭐⭐⭐⭐⭐</span>
        </div>
      </div>
      <p className="text-base">
        I love how versatile this bag is. It can hold anything ranging from
        cookies that come in trays to cookies that come in tins.
      </p>
    </div>
  );
}

export default Reviews;
