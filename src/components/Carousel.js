export default function Carousel({ quote }) {
  return (
    <div className={`carousel-item ${quote.id === 1 ? "active" : ""}`}>
      <div class="col-sm-10 mx-auto col-lg-12 mb-4">
        <div class="card bg-transparent text-center p-3">
          <figure class="mb-0">
            <blockquote class="blockquote">
              <p>{quote.quote}</p>
            </blockquote>
            <figcaption class="blockquote-footer mb-0">
              <cite title="Source Title">{quote.author}</cite>
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
  );
}
