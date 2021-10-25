const Card = ({ title, children }) => (
  <div className="my-1 px-1 card text-center shadow-xl bg-neutral ">
    <figure className="px-10 pt-10">
      <img src="https://picsum.photos/id/1005/400/250" alt={`${title}`} className="rounded-xl" />
    </figure>
    <div className="card-body">
      <h2 className="card-title">{title}</h2>
      <p>{children}</p>
      <div className="justify-center card-actions">
        <button className="btn btn-outline btn-accent">More info</button>
      </div>
    </div>
  </div>
);
export default Card;
