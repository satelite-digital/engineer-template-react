const Page = () => {
  const cards = [0, 1, 2, 3, 4, 5, 6];
  return (
    <div className="grid gap-4 grid-cols-3">
      {cards.map((card) => (
        <div key={card} className="my-1 px-1 card text-center shadow-xl bg-neutral ">
          <figure class="px-10 pt-10">
            <img
              src="https://picsum.photos/id/1005/400/250"
              class="rounded-xl"
            />
          </figure>
          <div class="card-body">
            <h2 class="card-title">shadow, center, padding</h2>
            <p>
              Rerum reiciendis beatae tenetur excepturi aut pariatur est eos.
              Sit sit necessitatibus veritatis sed molestiae voluptates incidunt
              iure sapiente.
            </p>
            <div class="justify-center card-actions">
              <button class="btn btn-outline btn-accent">More info</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Page;
