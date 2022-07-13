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
        "The secret of getting ahead is getting started. The secret to getting started is breaking your complex overwhelming tasks into small manageable tasks and then starting on the first one",
      author: "Mark Twain",
    },
    {
      id: 4,
      quote:
        "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do.”",
      author: "Steve Jobs",
    },
    {
      id: 5,
      quote:
        "Knowledge is power: you hear it all the time but knowledge is not power. It’s only potential power. It only becomes power when we apply it and use it. Somebody who reads a book and doesn’t apply it, they’re at no advantage over someone who’s illiterate. None of it works unless you work. We have to do our part. If knowing is half the battle, action is the second half of the battle",
      author: "Jim kwik",
    },
  ];
  console.log(
    quotes.map((quote, index) => <Carousel key={index} quote={quote} />)
  );
  return (
    <>
      {/* <h1>Fino Lingo</h1> */}
      <div className="container">
        <div
          id="carouselExampleControls"
          className="carousel slide row"
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
      <h2>{story[pageId].title}</h2>
      <p>{story[pageId].description}</p>
      <Button onClick={() => nextPage()} text={"Next"} />
    </>
  );
}
