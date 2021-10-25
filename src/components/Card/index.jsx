const Card = ({ title, children }) => (
  <div className="my-1 px-1 card text-center shadow-xl bg-neutral ">
    <figure class="px-10 pt-10">
      <img src="https://picsum.photos/id/1005/400/250" class="rounded-xl" />
    </figure>
    <div class="card-body">
      <h2 class="card-title">{title}</h2>
      <p>{children}</p>
      <div class="justify-center card-actions">
        <button class="btn btn-outline btn-accent">More info</button>
      </div>
    </div>
  </div>
);
export default Card;
