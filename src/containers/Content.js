import story from "../story.json";
import Button from "../components/Button";
import Carousel from "../components/Carousel";

export default function Content({ nextPage, pageId }) {
  const quotes = [
    {
      id: 1,
      quote:
        "A dream doesn't become reality through magic; it takes sweat, determination and hard work",
      author: "Colin Powell",
    },
    {
      id: 3,
      quote:
        "Financial freedom is available to those who learn about it and work for it",
      author: "Robert Kiyosaki",
    },
    {
      id: 4,
      quote:
        "Without leaps of imagination or dreaming, we lose the excitement of possibilities...",
      author: "Gloria Steinem",
    },
    {
      id: 5,
      quote:
        "If you want to be financially free, you need to become a different person than you...",
      author: "Jim kwik",
    },
  ];
  return (
    <>
      <div className="row mt-5 ">
        {pageId === 0 && (
          <div className="container-fluid mt-5">
            <h2 className="">Fino Lingo</h2>
            <div
              id="carouselExampleControls"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                {quotes.map((quote, index) => (
                  <Carousel key={index} quote={quote} />
                ))}
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        )}
        <h2>{story[pageId].title}</h2>
        <p>{story[pageId].description}</p>
        <Button onClick={() => nextPage()} text={"Next"} />
      </div>
    </>
  );
}
