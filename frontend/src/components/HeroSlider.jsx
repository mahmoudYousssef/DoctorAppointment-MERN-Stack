import Slider from "react-slick";
import carsousel1 from "../assets/images/hero-carousel-1.jpg";
import carsousel2 from "../assets/images/hero-carousel-2.jpg";
import carsousel3 from "../assets/images/hero-carousel-3.jpg";

const HeroSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    arrows: false,
  };

  const slides = [
    {
      image: carsousel1,
      title: "Your Health, Our Priority",
      text: "We provide advanced medical care with experienced doctors",
    },
    {
      image: carsousel2,
      title: "Specialized Medical Services",
      text: "From cardiology to pediatrics, Our expert teams are here for you",
    },
    {
      image: carsousel3,
      title: "Easy online Appointments",
      text: "Book your appointment Quickly and conveniently with our online system",
    },
  ];

  return (
    <section className="relative w-full h-[80vh] overflow-hidden"> 
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="w-full h-[80vh] relative">
            <img
              src={slide.image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center text-center text-white px-4">
              <h2 className="text-4xl text-[#46daea] font-bold mb-4">{slide.title}</h2>
              <p className="max-w-x1 text-xl">{slide.text}</p>
              <button className="mt-6 py-3 inline-block rounded ">Read More </button>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default HeroSlider;
